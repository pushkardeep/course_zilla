import React from "react";
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/feed" /> : children;
}

export default OpenRoute;
