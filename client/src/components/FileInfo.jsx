import React from "react";

function FileInfo() {
  return (
    <>
      <div className="hidden md:inline-block w-[45%] sm:w-full leading-[13px]">
        <div className="font-['gil_med'] text-[.6rem] text-[#BDBDBD]">
          Format
        </div>
        <div className="w-full font-['gil_med'] text-[.65rem] text-white line-clamp-1">
          mp4
        </div>
      </div>
      <div className="w-[45%] sm:w-full leading-[13px]">
        <div className="font-['gil_med'] text-[.6rem] text-[#BDBDBD]">File</div>
        <div className="w-full font-['gil_med'] text-[.65rem] text-white line-clamp-1">
          big_buck_bunny_720p_10mb
        </div>
      </div>
    </>
  );
}

export default FileInfo;
