import React from "react";
import { useSelector } from "react-redux";

function LinkInfo() {
  const uploadError = useSelector((state) => state.error.videoUploadError);
  const video_url = useSelector(
    (state) => state.createCourse.courseData.video_url
  );

  return (
    <div className="w-[45%] sm:w-full leading-[13px] flex flex-col justify-center items-end sm:items-start">
      <div className="font-['gil_med'] text-[.6rem] text-[#BDBDBD]">Link</div>
      {uploadError ? (
        <div className="w-fit text-red-600 flex items-center gap-[2.5px]">
          <span className="material-symbols-outlined text-[.8rem]">
            warning
          </span>
          <div className="text-[.65rem] font-['gil_med']">error</div>
        </div>
      ) : (
        <div className="w-full font-['gil_med'] text-[.65rem] text-white line-clamp-1">
          {video_url ? (
            <div className="w-full flex justify-center items-center gap-1">
              <a
                className="underline line-clamp-1"
                target={video_url}
                href={video_url}
              >
                {video_url}
              </a>
              <span className="material-symbols-outlined text-[1.1rem] text-[#c1c1c1] cursor-pointer">
                content_copy
              </span>
            </div>
          ) : (
            <div className="w-full flex items-center justify-end sm:justify-start gap-1">
              Generating
              <span className="animate-spin w-[11px] inline-block aspect-square rounded-full border-2 border-transparent border-t-white"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LinkInfo;
