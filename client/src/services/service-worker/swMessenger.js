// sends data to main root directory sw file
export const sendMessage = (data, type) => {
  try {
    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: type,
        payload: data,
      });
      return { success: true };
    } else {
      return {
        success: false,
        message:
          "Something went wrong, Please try again later or try with a different browser.",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong, Please try again or reload.",
    };
  }
};
