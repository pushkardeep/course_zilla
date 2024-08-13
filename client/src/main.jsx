import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { reduxStore } from "./Redux/stores/reduxStore.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/stores/persistStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
      <App />
    </PersistGate>
  </Provider>
);
