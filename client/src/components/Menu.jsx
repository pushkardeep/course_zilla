import React from "react";
import { toggleMenu } from "../Redux/slices/uiSlice";
import { useDispatch } from "react-redux";

function Menu() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu(true));
  };
  return (
    <span
      onClick={handleClick}
      className="material-symbols-outlined hidden sm:inline-block text-[2rem] text-white px-1.5 py-1.5 rounded-full mt-2 cursor-pointer hover:bg-[#3c3c3ca0] transition-all"
    >
      menu
    </span>
  );
}

export default Menu;
