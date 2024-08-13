import React, { useRef } from "react";
import { useSelector } from "react-redux";
import LinkInfo from "./LinkInfo";
import FileInfo from "./FileInfo";
import VideoInput from "./VideoInput";
import VideoUploadProgress from "./VideoUploadProgress";

function VideoStatusCard() {
  const inputRef = useRef(null);

  const { video_url } = useSelector((state) => state.createCourse.courseData);
  const uploadError = useSelector((state) => state.error.videoUploadError);

  return (
    <div className="w-full sm:w-[30%] lg:w-[28%] h-fit sm:h-full bg-[#D9D9D9]/10 flex sm:flex-col justify-between items-center sm:gap-1.5 px-2 sm:px-1.5 py-2 sm:py-1.5 rounded-[10px] overflow-hidden">
      <div className="w-[110px] sm:w-full h-[62px] sm:h-[55%] rounded-md bg-black flex justify-center items-center overflow-hidden">
        {uploadError ? (
          <div className="w-fit text-red-600 flex justify-center items-center gap-[2.5px]">
            <span className="material-symbols-outlined text-[.95rem]">
              warning
            </span>
            <div className="text-[.9rem] font-['gil_med']">error</div>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            src={video_url}
          ></video>
        )}
      </div>

      <div className="w-[calc(100%_-_110px)] sm:w-full h-[62px] sm:h-[45%] flex flex-col justify-between items-center pl-2 py-[3.5px] sm:py-0 sm:px-1.5">
        <div className="w-full h-fit flex sm:flex-col-reverse justify-between items-center sm:gap-1">
          <FileInfo />
          <LinkInfo />
        </div>

        {uploadError ? (
          <button
            onClick={() => {
              inputRef.current.click();
            }}
            className="w-full h-fit bg-[#D9D9D9] hover:bg-[#b2b2b2] active:bg-[#000000] active:text-white active:scale-95 transition-all px-4 py-[2.5px] sm:px-[3px] text-[.6rem] sm:text-[.7rem] font-['gil_sem'] rounded-md text-[#3b3b3b] flex justify-center items-center gap-0.5"
          >
            Upload again
            <span>
              <span className="material-symbols-outlined text-[.8rem] sm:text-[.9rem] mt-1">
                cloud_upload
              </span>
            </span>
          </button>
        ) : (
          <VideoUploadProgress />
        )}
      </div>
      <VideoInput type={"retry"} ref={inputRef} />
    </div>
  );
}

export default VideoStatusCard;
