import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Video() {
  const { course } = useSelector((state) => state.courses);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [course]);

  return (
    <div className="w-full aspect-video rounded-xl  overflow-hidden">
      <video
        autoPlay
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
      >
        <source src={course && course.video_url} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
