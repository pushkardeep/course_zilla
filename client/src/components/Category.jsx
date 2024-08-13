import React from "react";
import { useSelector } from "react-redux";

function Category({ bg, loadColor }) {
  const { courses } = useSelector((state) => state.courses);
  return (
    <div className="w-fit h-fit flex items-center gap-2">
      {courses ? (
        courses.length > 0 ? (
          ["All", "Web Dev", "Science", "History"].map((elem, i) => (
            <div
              key={i}
              style={{ backgroundColor: bg }}
              className=" text-white font-['gil_med'] text-[.8rem] rounded-lg px-4 py-1.5 whitespace-nowrap cursor-pointer active:scale-95 transition-all"
            >
              {elem}
            </div>
          ))
        ) : null
      ) : (
        <>
          <div
            style={{ backgroundColor: loadColor }}
            className=" text-white font-['gil_med'] text-[.8rem] rounded-lg px-6 py-4 whitespace-nowrap cursor-pointer active:scale-95 transition-all"
          ></div>
          <div
            style={{ backgroundColor: loadColor }}
            className=" text-white font-['gil_med'] text-[.8rem] rounded-lg px-8 py-4 whitespace-nowrap cursor-pointer active:scale-95 transition-all"
          ></div>
          <div
            style={{ backgroundColor: loadColor }}
            className=" text-white font-['gil_med'] text-[.8rem] rounded-lg px-8 py-4 whitespace-nowrap cursor-pointer active:scale-95 transition-all"
          ></div>
          <div
            style={{ backgroundColor: loadColor }}
            className=" text-white font-['gil_med'] text-[.8rem] rounded-lg px-8 py-4 whitespace-nowrap cursor-pointer active:scale-95 transition-all"
          ></div>
        </>
      )}
    </div>
  );
}

export default Category;
