import React from "react";

function FeedLoader({ bg, width }) {
  return (
    <div
      style={{ width: width }}
      className="w-full sm:w-[48%] md:w-[32%] h-fit px-1.5 py-1.5 rounded-xl transition-all"
    >
      {/* thumbnail */}
      <div
        style={{ backgroundColor: bg }}
        className="w-full aspect-video rounded-xl overflow-hidden"
      ></div>
      <div className="w-full h-fit flex justify-between items-center gap-1.5 px-1 py-1">
        {/* profile image  */}
        <div
          style={{ backgroundColor: bg }}
          className="w-[33px] aspect-square rounded-full overflow-hidden"
        ></div>
        <div className="flex-1 flex justify-between items-center">
          <div className="w-full h-fit leading-[15px]">
            <div
              style={{ backgroundColor: bg }}
              className="w-[85%] h-fit rounded-[4.5px] py-1.5"
            ></div>
            <div
              style={{ backgroundColor: bg }}
              className="w-[65%] h-fit rounded-[4.5px] mt-1 py-1.5"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedLoader;
