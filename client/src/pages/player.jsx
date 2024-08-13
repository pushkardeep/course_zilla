import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Nav from "../components/Nav";
import MenuSlider from "../components/MenuSlider";
import Video from "../components/Video";
import Like from "../components/Like";
import Share from "../components/Share";
import Download from "../components/Download";
import Recomendations from "../components/Recomendations";
import Footer from "../components/Footer";

import { getCourses, video } from "../services/operations/course";
import { setCourse, setOwner } from "../Redux/slices/courseSlice";

const player = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const { isMenu } = useSelector((state) => state.ui);
  const { course, courseOwner } = useSelector((state) => state.courses);

  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  useEffect(() => {
    // dispatch(setCourse(null));
    // dispatch(setOwner(null));
    // video(id, dispatch, navigate, token);
    // getCourses(navigate, dispatch, token);
  }, [id]);

  return (
    <div className="w-full h-screen relative overflow-hidden overflow-y-auto">
      <Nav />
      <div className="w-full max-w-[1420px] mx-auto md:flex justify-center items-start gap-4 px-2.5">
        <div className="w-full md:w-[65%] xl:w-[75%] transition-all">
          <Video />
          <div className="w-full flex flex-col gap-2 py-1.5">
            {course && course.title ? (
              <h1 className="text-white font-['gil_sem'] text-[1rem] sm:text-[1.2rem] leading-[21px] px-2 line-clamp-2">
                {course.title}
              </h1>
            ) : (
              <div className="w-full">
                <div className="w-[85%] h-fit bg-[#252525] rounded-md px-5 py-2"></div>
                <div className="w-[75%] h-fit bg-[#252525] rounded-md px-5 py-2 mt-1"></div>
              </div>
            )}

            <div className="flex flex-col xl:flex-row justify-between gap-2 px-2">
              <div className="w-full xl:w-fit h-fit flex justify-between items-center sm:gap-3">
                {/* profile data  */}
                <div className="w-fit flex justify-center items-center gap-1.5">
                  {/* profle image  */}
                  <div className="w-[35px] aspect-square rounded-full bg-[#252525] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/static/images/defraults/dpDefault.jpg"
                      alt="cover"
                    />
                  </div>
                  {/* name and subs count  */}
                  <div className="w-fit h-fit leading-[14.5px]">
                    {courseOwner ? (
                      <>
                        <div className="text-white font-['gil_med'] text-[.75rem]">
                          {courseOwner.username}
                        </div>
                        <div className="text-[#a9a9a9] font-['gil_med'] text-[.62rem]">
                          {courseOwner.followers.length} subscribers
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-[140px] h-fit bg-[#252525] rounded-[4px] py-1.5"></div>
                        <div className="w-[100px] h-fit bg-[#252525] rounded-[4px] py-1.5 mt-1"></div>
                      </>
                    )}
                  </div>
                </div>
                {/* subscribe  */}
                {course ? (
                  <div className="bg-[#D9D9D9] rounded-full text-black font-['gil_med'] text-[.63rem] px-5 py-2">
                    subscribe
                  </div>
                ) : (
                  <div className="h-fit bg-[#252525] rounded-full px-10 py-4"></div>
                )}
              </div>
              <div className="no-scrollbar w-full xl:w-fit h-fit flex items-center overflow-hidden overflow-x-auto gap-1.5">
                {course ? (
                  <>
                    <Like />
                    <Share />
                    <Download />
                  </>
                ) : (
                  <>
                    <div className="h-fit bg-[#252525] rounded-full px-10 py-4"></div>
                    <div className="h-fit bg-[#252525] rounded-full px-10 py-4"></div>
                    <div className="h-fit bg-[#252525] rounded-full px-10 py-4"></div>
                  </>
                )}
              </div>
            </div>
            {course ? (
              <div className="w-full h-fit bg-[#252525] rounded-xl px-5 py-2.5">
                <div className="text-[.8rem] font-['gil_med'] text-[#a9a9a9]">
                  200k views
                </div>
                <p className="text-[.85rem] font-['gil_med'] text-[#e0e0e0] mt-1 line-clamp-2 leading-[16.5px]">
                  {course.description}
                </p>
              </div>
            ) : (
              <div className="w-full h-fit bg-[#252525] rounded-xl px-5 py-9"></div>
            )}
          </div>
        </div>
        <Recomendations />
      </div>
      <Footer />
      {isMenu && <MenuSlider />}
    </div>
  );
};

export default player;
