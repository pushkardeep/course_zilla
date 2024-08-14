importScripts("/uploadToCloud.js");

// Install service worker and activate immediately
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Listen for messages from clients and handle uploads accordingly
self.onmessage = async (e) => {
  console.log("sw main message aa gya hai video ka ");
  switch (e.data.type) {
    case "VIDEO_UPLOAD":
      await handleVideoUpload(e);
      break;
    case "IMAGE_UPLOAD":
      await handleImageUpload(e);
      break;
    case "CREATE_POST":
      createPost(e);
      break;
    default:
      console.log("Unknown error type");
      break;
  }
};

// Handle video upload process
const handleVideoUpload = async (e) => {
  try {
    const file = e.data.payload;
    const chunkSize = 5 * 1024 * 1024; // 5MB
    const uniqueName = `uuid-${Date.now()}`;
    const totalChunks = Math.ceil(file.size / chunkSize);
    const maxRetries = 1;

    for (let i = 0; i < totalChunks; i++) {
      let retries = 0;
      const start = i * chunkSize;
      const end = Math.min((i + 1) * chunkSize, file.size);
      const formData = new FormData();
      formData.append("file", file.slice(start, end));
      formData.append("upload_preset", "courses_videos_preset");
      const contentRange = `bytes ${start}-${end - 1}/${file.size}`;

      while (retries <= maxRetries) {
        const response = await self.uploadToCloud(
          formData,
          uniqueName,
          contentRange
        );

        const progress = Math.floor((response.bytes / file.size) * 100);

        if (response.success === false) {
          retries += 1;
          if (retries > maxRetries) {
            sendErrorMessageToClients(
              "VIDEO_UPLOAD_ERROR",
              "Video Upload failed, Please try again."
            );
            return;
          }
        } else {
          self.clients.matchAll().then((clients) => {
            clients.forEach((client) => {
              client.postMessage({
                type: "VIDEO_UPLOAD_PROGRESS",
                progress,
              });

              if (response.done) {
                client.postMessage({
                  success: true,
                  type: "VIDEO_UPLOADED",
                  secure_url: response.secure_url,
                });
              }
            });
          });
          break;
        }
      }
    }
  } catch (error) {
    sendErrorMessageToClients(
      "VIDEO_UPLOAD_ERROR",
      error.message || "Video Upload failed, Please try again."
    );
  }
};

// Handle image upload process
const handleImageUpload = async (e) => {
  try {
    const file = e.data.payload;
    const uniqueName = `uuid-${Date.now()}`;
    const maxRetries = 1;
    let retries = 0;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "courses_cover_image_preset");

    while (retries <= maxRetries) {
      const response = await self.uploadToCloud(formData, uniqueName);
      if (response.secure_url) {
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: "IMAGE_UPLOADED",
              image_url: response.secure_url,
            });
          });
        });
        break;
      }

      if (response.success === false) {
        retries += 1;
        if (retries > maxRetries) {
          sendErrorMessageToClients(
            "IMAGE_UPLOAD_ERROR",
            "Thumbnail Upload failed, Please try again."
          );
        }
      }
    }
  } catch (error) {
    sendErrorMessageToClients(
      "IMAGE_UPLOAD_ERROR",
      error.message || "Thumbnail Upload failed, Please try again."
    );
  }
};

const createPost = (e) => {
  try {
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({
          type: "CREATE_POST",
          textualData: e.data.payload,
        });
      });
    });
  } catch (error) {
    sendErrorMessageToClients(
      "course_creation_error",
      "Something went wrong in creating 'Course', please try again."
    );
  }
};

// Error handler
const sendErrorMessageToClients = (type, message) => {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type,
        error: message,
      });
    });
  });
};
