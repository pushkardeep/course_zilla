import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slidebar from "../components/Slidebar";

function index() {
  const token = localStorage.getItem("token");
  const [sliderOpen, setSliderOpen] = useState(false);
  return (
    <div className="w=full min-h-screen relative overflow-hidden text-white px-8 py-5 sm:px-10 md:px-24">
      <nav className="w-full h-fit flex justify-between items-center ">
        <img
          className="w-[55vw] min-w-[160px] max-w-[230px] h-fit  object-cover"
          src="/static/images/logo/logo.png"
          alt="logo"
        />

        <span
          onClick={() => {
            setSliderOpen((state) => !state);
          }}
          className="material-symbols-outlined sm:hidden bg-[#d9d9d926] px-4 py-2 rounded-full text-[1.2rem] cursor-pointer"
        >
          menu
        </span>

        <div className=" hidden font-['gil_med'] text-[.9rem] sm:flex justify-center items-center gap-4">
          {token === null ? (
            <>
              <Link
                to="/register"
                className="bg-[#d9d9d926] px-6 py-2.5 rounded-full"
              >
                Sign Up
              </Link>
              <Link
                to="/sign_in"
                className="bg-[#d9d9d926] px-6 py-2.5 rounded-full"
              >
                Log In
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/feed"
                className="bg-[#d9d9d926] px-6 py-2.5 rounded-full"
              >
                Feed
              </Link>
              <Link
                to="/profile"
                className="bg-[#d9d9d926] px-6 py-2.5 rounded-full"
              >
                Profile
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className="w-fit h-fit relative mx-auto mt-[10vh]">
        <video
          className="w-full aspect-video min-[550px]:w-[500px] object-cover rounded-2xl relative z-10"
          muted
          autoPlay
          loop
          src="/static/videos/landVid.mp4"
        ></video>
        <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['gil_bol'] text-[5rem] min-[470px]:text-[7rem] whitespace-nowrap z-0">
          COURSE ZILLA
        </div>
        <div className="text-stroke absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['gil_bol'] text-[5rem] min-[470px]:text-[7rem] whitespace-nowrap z-20">
          COURSE ZILLA
        </div>
      </div>

      <div className="w-fit mx-auto mt-[5vh] font-['gil_reg'] text-[.8rem]">
        Course Zilla
      </div>
      {sliderOpen && <Slidebar isSlider={setSliderOpen} />}
    </div>
  );
}

export default index;
