import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ id, title, description, image }) {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/player?id=${id}`);
  };
  return (
    <div
      onClick={onclick}
      className="w-full sm:w-[48%] md:w-[32%] h-fit px-1.5 py-1.5 md:hover:bg-[#222222] rounded-xl active:bg-[#212121] transition-all cursor-pointer"
    >
      <div className="w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image || "/static/images/defraults/postDefault.jpg"}
          alt="cover"
        />
      </div>
      <div className="w-full h-fit flex justify-between items-center gap-1.5 px-1 py-1">
        <div className="w-[33px] aspect-square bg-[#121212] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/static/images/defraults/dpDefault.jpg"
            alt="cover"
          />
        </div>
        <div className="flex-1 flex justify-between items-center">
          <div className="w-full h-fit leading-[15px]">
            <h1 className="w-[60%] text-white font-['gil_med'] text-[.75rem] line-clamp-1">
              {title}
            </h1>
            <p className="w-[70%] text-[#a9a9a9] font-['gil_med'] text-[.65rem] line-clamp-1">
              {description}
            </p>
          </div>
          <span className="material-symbols-outlined text-white text-[1.1rem]">
            more_vert
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
