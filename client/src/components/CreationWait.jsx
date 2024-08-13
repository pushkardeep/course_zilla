import React from "react";
import { Link } from "react-router-dom";

function CreationWait() {
  return (
    <div className="w-full h-full bg-black/30 backdrop-blur-[40px] absolute top-0 left-0 flex justify-center items-center px-3 py-3 z-50">
      <div className="w-full sm:w-[450px] h-fit bg-[#222222] flex flex-col justify-between items-center rounded-2xl px-3 py-3">
        <div className="w-full flex items-center justify-between">
          <Link
            to="/feed"
            className="text-white font-['gil_med'] text-[.8rem] rounded-[7px] bg-[#000000a7] px-7 py-2"
          >
            Feeds
          </Link>
          <Link to="/profile" className="w-[35px] aspect-square rounded-full bg-[#D9D9D9] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/static/images/defraults/dpDefault.jpg"
              alt="profile image"
            />
          </Link>
        </div>

        <div className="w-full flex flex-col justify-center items-center my-6">
          <h1 className="w-[200px] sm:w-[300px] text-white font-['gil_med'] text-[.65rem] sm:text-[.9rem] text-center">
            You will be Notified when your "Course" is "Created"
          </h1>
          <img
            className="w-[180px] aspect-square"
            src="/static/images/icons/wait.png"
            alt="wait..."
          />
          <div className="text-white font-['gil_sem'] text-[.9rem] flex justify-center items-center gap-1.5">
            Uploading{" "}
            <span className="w-[13px] aspect-square rounded-full border-[3px] border-transparent border-t-white animate-spin"></span>
          </div>
        </div>

        <h1 className="w-full text-[#C3C3C3] font-['gil_med'] text-[.7rem] text-center">
          You may leave this page if you want.
        </h1>
      </div>
    </div>
  );
}

export default CreationWait;
