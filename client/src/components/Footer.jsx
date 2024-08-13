import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="sm:hidden w-fit bg-black/40 backdrop-blur-md fixed bottom-5 left-1/2 -translate-x-1/2 flex justify-between gap-9 items-center py-1.5 px-2.5 rounded-full z-40">
      <Link to="/feed">
        <img
          className="min-w-[15px] w-[15px] aspect-square object-cover ml-3"
          src="/static/images/icons/home.png"
          alt="home"
        />
      </Link>

      <Link to="/create_post">
        <img
          className="min-w-[32px] w-[32px] aspect-square object-cover"
          src="/static/images/icons/add.png"
          alt="home"
        />
      </Link>

      <Link
        to="/profile"
        className="min-w-[27px] w-[27px] aspect-square rounded-full overflow-hidden"
      >
        <img
          className="w-full h-full object-cover"
          src="/static/images/defraults/dpDefault.jpg"
          alt="home"
        />
      </Link>
    </div>
  );
}

export default Footer;
