if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch((error) => console.log(error));
  });

  navigator.serviceWorker.ready.then(() => {
    console.log("sw is ready");
  });
}
