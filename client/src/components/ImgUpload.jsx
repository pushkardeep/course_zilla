import React from "react";

function ImgUpload({ click, src }) {
  return (
    <>
      <div className="img w-[160px] relative">
        <img
          className="profileImage p-Img aspect-square w-ful object-cover rounded-full"
          src={src}
          alt="profile pic"
        />
        <span
          onClick={click}
          className="material-symbols-outlined camera absolute top-[65%] left-[80%] cursor-pointer py-2 px-2 aspect-square w-fit bg-[#946BED] rounded-full text-white font-medium text-[18px]"
        >
          photo_camera
        </span>
      </div>
    </>
  );
}

export default ImgUpload;
