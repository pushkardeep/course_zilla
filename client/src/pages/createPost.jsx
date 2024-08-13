import React, { useEffect } from "react";
import UploadVideo from "../components/UploadVideo";
import BackButton from "../components/BackButton";
import CreationWait from "../components/CreationWait";
import CourseForm from "../components/CourseForm";
import CourseMediaStatus from "../components/CourseMediaStatus";
import Discard from "../components/Discard";
import Menu from "../components/Menu";
import MenuSlider from "../components/MenuSlider";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Redux/slices/uiSlice";

const CreatePost = () => {
  const dispatch = useDispatch();
  const { isMenu } = useSelector((state) => state.ui);
  const { isPermissionToCreate, isVideoUploaderActive } = useSelector(
    (state) => state.createCourse
  );

  useEffect(() => {
    dispatch(toggleMenu(false));
  }, []);

  return (
    <div className="w-full min-h-screen py-2 relative">
      <div className="w-full flex flex-col min-[385px]:flex-row items-center justify-between gap-3  px-6 sm:px-5 lg:px-10 py-2 md:py-4">
        <div className="w-fit flex items-center justify-center gap-4">
          <Menu />
          <div className="text-white font-['Zen'] text-[1.5rem] sm:text-[1.8rem]">
            Course Zilla
          </div>
        </div>
        <div className="w-full min-[385px]:w-fit flex items-center justify-between min-[385px]:justify-center  gap-4">
          <Discard />
          <BackButton />
        </div>
      </div>

      <div className="w-full sm:w-[640px] md:w-[760px] lg:w-[900px] mx-auto px-2 py-2 mt-2">
        <CourseMediaStatus />
        <CourseForm />
      </div>

      {isVideoUploaderActive && <UploadVideo />}
      {isPermissionToCreate && <CreationWait />}
      {isMenu && <MenuSlider />}
    </div>
  );
};

export default CreatePost;
