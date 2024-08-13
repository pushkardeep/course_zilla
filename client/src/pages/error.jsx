import React from "react";

function error() {
  return (
    <>
      <div className="page w-full h-screen relative overflow-hidden flex flex-col items-center justify-center gap-5">
        <h1 className="text-[#2e2e2e] font-medium text-[50px]">404</h1>
        <img
          className="object-cover w-[300px] aspect-square block mx-auto rounded-full animate-spin"
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Image"
        />

        <div className="w-full flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl font-medium text-[#1c1c1c]">
            Something Went Wrong
          </h1>
          <a
            className="px-4 py-1.5 rounded-full bg-[#875fde] text-white font-medium"
            href="/"
          >
            Go Back
          </a>
        </div>
      </div>
    </>
  );
}

export default error;
