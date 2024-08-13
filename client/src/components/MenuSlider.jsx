import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Redux/slices/uiSlice";
import { Link } from "react-router-dom";
import gsap from "gsap";

function MenuSlider() {
  const elemRef = useRef();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.ui.isMenu);

  useGSAP(() => {
    gsap.from(elemRef.current, {
      x: "-100%",
      duration: 0.4,
    });
  }, []);

  const handleClose = () => {
    const animation = gsap.to(elemRef.current, {
      x: "-100%",
      duration: 0.4,
      onComplete: () => {
        dispatch(toggleMenu(false));
        animation.kill();
      },
    });
  };

  return (
    <div
      ref={elemRef}
      className="hidden sm:block w-[270px] h-full fixed top-0 left-0 bg-black/65 backdrop-blur-md px-4 py-5 z-40"
    >
      <div className="w-full h-fit flex justify-center items-center">
        <span
          onClick={handleClose}
          className="material-symbols-outlined hidden sm:inline-block text-[1.7rem] text-[#BFBFBF] px-1.5 py-1.5 mt-2 rounded-full cursor-pointer hover:bg-[#3c3c3ca0] transition-all"
        >
          menu
        </span>
        <img
          className="w-[200px]"
          src="/static/images/logo/logo.png"
          alt="logo"
        />
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-start text-white font-['gil_med'] text-[1.4rem] px-6 py-8">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <Link to={"/feed"} className="hover:underline">
          Feeds
        </Link>

        <div className="w-full my-4">
          <div className="hover:underline cursor-pointer text-[.8rem]">You</div>
          <hr />
        </div>

        <Link to={"/profile"} className="hover:underline">
          Profile
        </Link>
        <Link to={"/Profile"} className="hover:underline">
          Your Courses
        </Link>
        <Link to={"/create_post"} className="hover:underline">
          Create Courses
        </Link>
      </div>
    </div>
  );
}

export default MenuSlider;
