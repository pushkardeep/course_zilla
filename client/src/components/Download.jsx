import React from "react";

function Download() {
  return (
    <div className="rounded-full flex justify-center items-center gap-1.5 bg-[#000000e3] text-white font-['gil_med'] text-[.75rem] text-center px-5 py-2 active:bg-[#373737] transition-all cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#e8eaed"
      >
        <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
      </svg>
      <div>download</div>
    </div>
  );
}

export default Download;
