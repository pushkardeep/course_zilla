importScripts("/uploadToCloud.js");

let video_preset;
let image_preset;
let cloudName;

// Install service worker and activate immediately
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Listen for messages from clients and handle uploads accordingly
self.onmessage = async (e) => {
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
    case "SET_ENV":
      setEnv(e);
      break;
    default:
      console.log("Unknown error type");
      break;
  }
};

const setEnv = (e) => {
  if (e.data.payload.video_preset) {
    cloudName = e.data.payload.cloudName;
    video_preset = e.data.payload.video_preset;
  }

  if (e.data.payload.image_preset) {
    cloudName = e.data.payload.cloudName;
    image_preset = e.data.payload.image_preset;
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
      formData.append("upload_preset", video_preset);
      const contentRange = `bytes ${start}-${end - 1}/${file.size}`;

      while (retries <= maxRetries) {
        const response = await self.uploadToCloud(
          cloudName,
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
