import React from "react";
import ThumbnailUploadPanel from "./ThumbnailUploadPanel ";
import VideoStatusCard from "./VideoStatusCard";

const CourseMediaStatus = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-1.5 md:gap-2 sm:h-[230px] md:h-[280px] lg:h-[335px]">
      <ThumbnailUploadPanel />
      <VideoStatusCard />
    </div>
  );
};

export default CourseMediaStatus;
