import React from "react";
import { Link } from "react-router-dom";

function BackButton() {
  return (
      <Link
        to="/"
        className="w-fit h-fit flex flex-col justify-center items-center cursor-pointer"
      >
        <img
          className="w-[30px] aspect-square object-cover"
          src="/static/images/icons/exit.png"
          alt="exit"
        />
        <div className="text-white font-['gil_med'] text-[.8rem]">Back</div>
      </Link>

  );
}

export default BackButton;
