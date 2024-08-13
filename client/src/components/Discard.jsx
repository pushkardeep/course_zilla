import React from "react";

function Discard() {
  return (
    <div className="w-fit h-fit flex justify-center items-center gap-.5 bg-[#0C0C0C] rounded-[7px] px-4 py-2.5 cursor-pointer">
      <img
        className="w-[20px] aspect-square object-cover"
        src="/static/images/icons/delete.png"
        alt="delete"
      />
      <div className="text-white font-['gil_med'] text-[.75rem]">Discard</div>
    </div>
  );
}

export default Discard;
