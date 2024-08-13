import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorToast } from "../utils/toasts";
import {
  setCourseData,
  setPermissionToCreate,
} from "../Redux/slices/createCourseSlice";

const CourseForm = () => {
  const dispatch = useDispatch();
  const categoryDropdownRef = useRef(null);

  const { courseData } = useSelector((state) => state.createCourse);
  const { isVideoFileSelected, isImageFileSelected } = useSelector(
    (state) => state.createCourse
  );

  const handleChange = (e) => {
    dispatch(setCourseData({ [e.target.name]: e.target.value }));
  };

  const handleCategorySelect = (e) => {
    dispatch(setCourseData({ category: e.target.textContent }));
    categoryDropdownRef.current.open = false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, category } = courseData;

    if (
      !title ||
      !description ||
      !category ||
      !isImageFileSelected ||
      !isVideoFileSelected
    ) {
      return errorToast("Please fill all the fields given below.");
    }

    dispatch(setPermissionToCreate(true));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-between items-center px-4 py-3 h-[150px]"
    >
      <div className="w-[50%] h-full">
        <input
          onChange={handleChange}
          className="w-full text-white bg-transparent placeholder:text-white font-['gil_med'] text-[1.2rem] outline-none"
          name="title"
          type="text"
          placeholder="Title"
          value={courseData.title || ""}
        />
        <textarea
          onChange={handleChange}
          className="w-full text-white bg-transparent placeholder:text-[#8C8C8C] font-['gil_med'] text-[.8rem] outline-none resize-none h-[100px]"
          name="description"
          placeholder="Description"
          value={courseData.description || ""}
        ></textarea>
      </div>

      <div className="w-[50%] h-full flex flex-col justify-between items-end">
        <details
          ref={categoryDropdownRef}
          className="bg-[#D9D9D9]/10 text-white font-['gil_med'] text-[.8rem] px-6 py-2 rounded-full relative"
        >
          <summary className="cursor-pointer">
            {courseData.category || "Category"}
          </summary>
          <div className="absolute top-10 left-0 bg-black/30 backdrop-blur-md px-1 py-1 rounded-md">
            {["Science", "Maths", "Web"].map((categoryOption) => (
              <div
                key={categoryOption}
                onClick={handleCategorySelect}
                className="font-['gil_med'] text-[.7rem] w-full text-center px-6 py-1 hover:text-black hover:bg-[#D9D9D9] rounded-md cursor-pointer"
              >
                {categoryOption}
              </div>
            ))}
          </div>
        </details>
        <button
          type="submit"
          className="bg-[#D9D9D9] text-[#2D2D2D] font-['gil_sem'] text-[.8rem] px-7 py-2 rounded-full"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
