import React from "react";

function Spinner() {
  return (
    <>
      <div className="w-full min-h-screen fixed top-0 left-0 flex justify-center items-center z-50 bg-[#00000091] backdrop-blur-md">
        <div className="w-[30px] aspect-square rounded-full border-2 animate-ping"></div>
      </div>
    </>
  );
}

export default Spinner;
