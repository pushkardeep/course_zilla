import React, { useEffect } from "react";
import RecomendedCards from "./RecomendedCards";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../services/operations/course";
import { useNavigate } from "react-router-dom";
import CardLoader from "./CardLoader";

function Recomendations() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    // const fetchData = async () => {
    //   await getCourses(navigate, dispatch, token);
    // };
    // fetchData();
  }, []);
  return (
    <div className="w-full md:w-[35%] md:max-w-[320px] rounded-xl bg-[#252525] mt-0.5 mb-2 transition-all overflow-hidden">
      {courses ? (
        courses.length > 0 ? (
          <div className="w-full bg-[#414141] px-2.5 py-2.5 overflow-hidden">
            <h1 className="text-white font-['gil_med'] text-[1rem]">
              Recomendation on "web":
            </h1>
            <div className="w-full no-scrollbar overflow-hidden overflow-x-auto mt-1">
              <Category bg={"#0c0c0c"} loadColor={"#171717"} />
            </div>
          </div>
        ) : null
      ) : (
        <div className="w-full bg-[#414141] px-2.5 py-2.5 overflow-hidden">
          <div className="w-[85%] h-fit bg-[#171717] rounded-md py-2"></div>
          <div className="w-full no-scrollbar overflow-hidden overflow-x-auto mt-1">
            <Category bg={"#0c0c0c"} loadColor={"#171717"} />
          </div>
        </div>
      )}

      <div className="custom-scrollbar w-full h-[350px] md:h-[220px] lg:h-[250px] flex flex-col sm:flex-row sm:flex-wrap md:flex-col md:flex-nowrap overflow-hidden overflow-y-auto px-1.5 py-1.5">
        {courses ? (
          courses.length > 0 ? (
            courses.map((elem, i) => (
              <RecomendedCards
                key={i}
                id={elem._id}
                title={elem.title}
                description={elem.description}
                date={elem.date}
                image={elem.thumbnail_url}
              />
            ))
          ) : null
        ) : (
          <>
            <CardLoader bg={"#171717"} width={"100%"} />
            <CardLoader bg={"#171717"} width={"100%"} />
            <CardLoader bg={"#171717"} width={"100%"} />
            <CardLoader bg={"#171717"} width={"100%"} />
            <CardLoader bg={"#171717"} width={"100%"} />
            <CardLoader bg={"#171717"} width={"100%"} />
          </>
        )}
      </div>
    </div>
  );
}

export default Recomendations;
