import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Nav from "../components/Nav";
import Card from "../components/Cards";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import MenuSlider from "../components/MenuSlider";
import Category from "../components/Category";
import CardLoader from "../components/CardLoader";

import { getCourses } from "../services/operations/course";

function Feed() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSpinner, isMenu } = useSelector((state) => state.ui);
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchData = async () => {
      await getCourses(navigate, dispatch, token);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto h-screen relative overflow-hidden overflow-y-auto">
      <Nav />
      <div className="no-scrollbar w-full max-w-[1320px] mx-auto flex justify-start items-center overflow-x-auto px-5 py-2 overflow-hidden">
        <Category bg={"#252525"} loadColor={"#252525"} />
      </div>
      <div className="w-full max-w-[1320px] mx-auto flex flex-wrap justify-start gap-x-1 gap-y-[2px] px-4 py-1">
        {courses ? (
          courses.length > 0 ? (
            courses.map((course, index) => (
              <Card
                key={index}
                id={course._id}
                title={course.title}
                description={course.description}
                image={course.thumbnail_url}
              />
            ))
          ) : (
            <h1 className="w-full text-center text-[#7f7f7f] font-['gil_med'] mt-[30vh]">
              Don't have any courses.
            </h1>
          )
        ) : (
          <>
            <CardLoader bg={"#252525"} />
            <CardLoader bg={"#252525"} />
            <CardLoader bg={"#252525"} />
            <CardLoader bg={"#252525"} />
            <CardLoader bg={"#252525"} />
            <CardLoader bg={"#252525"} />
          </>
        )}
      </div>
      <Footer />
      {isSpinner && <Spinner />}
      {isMenu && <MenuSlider />}
    </div>
  );
}

export default Feed;
