import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../Redux/slices/uiSlice";
import gsap from "gsap";

function Nav() {
  const searchRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);

  const [isSearch, setIsSearch] = useState(false);

  const toggleIsSearch = () => {
    setIsSearch((state) => !state);
  };

  const handleClick = () => {
    dispatch(toggleMenu(true));
  };

  return (
    <div
      ref={searchRef}
      className="w-full h-fit sticky top-[-2px] rounded-b-lg backdrop-blur-md px-4 py-2 transition-all z-40"
    >
      <div className="w-full h-fit flex justify-between items-center">
        <div className="w-fit flex justify-center items-center">
          <span
            onClick={handleClick}
            className="material-symbols-outlined hidden sm:inline-block text-[1.8rem] text-white px-1.5 py-1.5 rounded-full mt-1.5 cursor-pointer transition-all hover:bg-[#3c3c3ca0]"
          >
            menu
          </span>
          <img
            className="w-[48vw] min-w-[160px] max-w-[200px] h-fit  object-cover"
            src="/static/images/logo/logo.png"
            alt="logo"
          />
        </div>

        <span
          onClick={toggleIsSearch}
          className="material-symbols-outlined sm:hidden bg-[#D9D9D9] text-[1.4rem] text-[#1e1e1e] px-1.5 py-1.5 rounded-md cursor-pointer active:bg-[#b5b5b5] transition-all"
        >
          menu
        </span>

        <div className="w-full h-fit hidden sm:flex sm:w-[330px] justify-center items-center gap-x-3">
          <form className="w-[90%] relative">
            <input
              className="w-full h-fit  bg-[#1b1b1b] focus:outline-none rounded-full text-white font-['gil_sem'] placeholder:text-[#8B8B8B] text-[.8rem] py-3 px-10 transition-all "
              type="text"
              name="search"
              placeholder="Search"
            />
            <span className="material-symbols-outlined text-[#8B8B8B] text-[1.1rem] absolute top-[13.8px] left-4 cursor-pointer">
              search
            </span>
          </form>
          <Link
            to="/profile"
            className="hidden sm:block bg-[#D9D9D9] w-[38px] min-w-[38px] aspect-square rounded-full overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={
                user.dp
                  ? `data:image/jpeg;base64,${user.dp}`
                  : "/static/images/defraults/dpDefault.jpg"
              }
              alt="profile"
            />
          </Link>
        </div>
      </div>

      {isSearch && (
        <div className="sm:hidden w-full  mt-2">
          <form className="w-full flex justify-center items-center gap-1 relative">
            <input
              className="w-full h-fit bg-[#1b1b1b] focus:outline-none rounded-lg text-white font-['gil_med'] placeholder:text-[#8B8B8B] text-[.8rem] py-2.5 px-5 transition-all "
              type="text"
              name="search"
              placeholder="Search"
            />
            <button type="submit">
              <span className="material-symbols-outlined bg-[#D9D9D9] font-medium text-[1.2rem] text-[#1e1e1e] px-[8px] py-[8px] rounded-lg cursor-pointer active:bg-[#b5b5b5] transition-all">
                search
              </span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Nav;
