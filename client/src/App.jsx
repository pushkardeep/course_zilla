import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages";
import Error from "./pages/error";
import Register from "./pages/register";
import LogIn from "./pages/logIn";
import Profile from "./pages/profile";
import Feed from "./pages/feed";
import CreatePost from "./pages/createPost";
import Player from "./pages/player";
import Protected from "./components/Protected";
import OpenRoute from "./components/OpenRoute";
import SWClientCommunicator from "./components/SWClientCommunicator";

function App() {
  return (
    <Router>
      <SWClientCommunicator />
      <Routes>
        <Route index element={<Index />} />
        <Route path="/error" element={<Error />} />
        <Route
          path="/register"
          element={
            <OpenRoute>
              <Register />
            </OpenRoute>
          }
        />
        <Route
          path="/sign_in"
          element={
            <OpenRoute>
              <LogIn />
            </OpenRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <Protected>
              <Feed />
            </Protected>
          }
        />
        <Route
          path="/create_post"
          element={
            <Protected>
              <CreatePost />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route
          path="/player"
          element={
            <Protected>
              <Player />
            </Protected>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
