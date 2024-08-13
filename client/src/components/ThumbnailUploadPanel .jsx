import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ImageInput from "./ImageInput";

function ThumbnailUploadPanel() {
  const inputRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const { isThumbnailUploading, courseData } = useSelector(
    (state) => state.createCourse
  );

  const handleClick = () => inputRef.current.click();
  const handleImageLoad = () => setIsImageLoaded(true);

  return (
    <div className="w-full sm:w-[70%] lg:w-[72%] bg-[#000000] aspect-video sm:aspect-auto sm:h-full rounded-[10px] overflow-hidden relative">
      {isThumbnailUploading ? (
        <div className="w-full h-full flex justify-center items-center gap-2">
          <div className="text-white font-['gil_med']">Uploading</div>
          <span className="w-[20px] aspect-square rounded-full border-[3px] border-transparent border-t-white animate-spin"></span>
        </div>
      ) : (
        <>
          {!isImageLoaded && (
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center text-white font-['gil_med'] z-10">
              Loading...
            </div>
          )}
          <img
            className="w-full h-full object-cover relative"
            src={
              courseData.thumbnail_url ||
              "/static/images/defraults/postDefault.jpg"
            }
            alt="Cover image"
            onLoad={handleImageLoad}
          />
          {isImageLoaded && (
            <div
              onClick={handleClick}
              className="w-[32px] aspect-square bg-[#222222a6] backdrop-blur-md rounded-md absolute top-1 left-1 flex justify-center items-center cursor-pointer"
            >
              <img
                className="w-[55%] aspect-square object-cover"
                src="/static/images/icons/upload_2.png"
                alt="upload"
              />
            </div>
          )}
        </>
      )}
      <ImageInput setIsImageLoaded={setIsImageLoaded} ref={inputRef} />
    </div>
  );
}

export default ThumbnailUploadPanel;
