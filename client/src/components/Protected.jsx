import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  return localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to={"/sign_in"} />
  );
}

export default Protected;
