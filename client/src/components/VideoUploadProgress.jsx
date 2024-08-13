import React from "react";
import { useSelector } from "react-redux";

function VideoUploadProgress() {
  const { videoUploadProgress } = useSelector((state) => state.createCourse);
  const progress = videoUploadProgress || "0";
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center px-0.5">
        <div className="text-[#9F9F9F] font-['gil_med'] text-[.6rem]">
          Progress
        </div>
        <div className="text-white font-['gil_med'] text-[.7rem] flex justify-center items-center gap-1">
          {progress === 100 ? "Upload Completed" : `${progress}%`}
        </div>
      </div>
      <div className="w-full h-[6px] sm:h-[6.5px] bg-[#757575] rounded-full">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-[#DBDBDB] rounded-full transition-all "
        ></div>
      </div>
    </div>
  );
}

export default VideoUploadProgress;
