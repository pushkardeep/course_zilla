import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import VideoInput from "./VideoInput";
import { setVideoUploader } from "../Redux/slices/createCourseSlice";

const UploadVideo = () => {
  const pageRef = useRef(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const closePage = () => {
    gsap.to(pageRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        dispatch(setVideoUploader(false));
      },
    });
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div
      ref={pageRef}
      className="w-full h-full bg-black/30 backdrop-blur-[40px] absolute top-0 left-0 flex justify-center items-center px-4 py-4 z-50"
    >
      <div className="w-[400px] bg-[#3F3F3F] rounded-[25px] flex flex-col items-center gap-y-8 px-4 py-8">
        <div className="flex flex-col items-center gap-1.5">
          <div
            onClick={handleClick}
            className="w-[140px] aspect-square bg-[#1E1E1E] rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              className="w-[75%] aspect-square object-cover"
              src="/static/images/icons/upload.png"
              alt="upload"
            />
          </div>
          <h1 className="w-[210px] text-[.8rem] text-white text-center font-['gil_med'] leading-4">
            Please upload a video file of "Format mp4"
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <div
            onClick={handleClick}
            className="text-[.8rem] font-['gil_sem'] text-[#5D5D5D] bg-[#D9D9D9] hover:bg-[#c7c7c7] rounded-full px-7 py-2 cursor-pointer"
          >
            Select
          </div>
          <h1 className="text-[.8rem] text-[#d7d7d7] font-['gil_med']">
            File must be less than "200mb"
          </h1>
        </div>
      </div>
      <VideoInput func={closePage} type="first" ref={inputRef} />
    </div>
  );
};

export default UploadVideo;
