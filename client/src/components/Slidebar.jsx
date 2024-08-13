import React from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

function Slidebar({ isSlider }) {
  const token = localStorage.getItem("token");
  // onMount animation
  useGSAP(() => {
    gsap.from(".slider", {
      left: "100%",
      duration: 0.3,
      opacity: 0,
    });
  });

  // component unmount animation
  const onUnMount = () => {
    const animation = gsap.to(".slider", {
      left: "100%",
      duration: 0.3,
      opacity: 0,
      onComplete: () => {
        isSlider(false);
        animation.kill();
      },
    });
  };

  return (
    <div className="slider sm:hidden w-[250px] h-full absolute top-0 right-0 bg-black/25 backdrop-blur-lg z-50 px-6 py-4">
      <span
        onClick={onUnMount}
        className="material-symbols-outlined w-fit h-fit text-white text-[2rem]"
      >
        undo
      </span>

      <div className="text-white flex flex-col font-['gil_sem'] text-right text-[1.5rem] mt-5">
        {token === null ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/sign_in">Log In</Link>
          </>
        ) : (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/feed">Feed</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Slidebar;
