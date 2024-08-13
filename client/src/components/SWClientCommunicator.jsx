import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSWMessages } from "../services/service-worker/swClientHandler";
import { create as createCourse } from "../services/operations/course";

function SWClientCommunicator() {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courseData = useSelector((state) => state.createCourse.courseData);
  const isLoading = useSelector((state) => state.createCourse.isLoading);
  const isPermissionToCreateCourse = useSelector(
    (state) => state.createCourse.isPermissionToCreate
  );

  useEffect(() => {
    const { title, description, category, video_url, thumbnail_url } =
      courseData;
    if (
      !isPermissionToCreateCourse ||
      !title ||
      !description ||
      !category ||
      !video_url ||
      !thumbnail_url
    ) {
      return;
    }

    if (!isLoading) {
      createCourse(courseData, dispatch, navigate, token);
    }
  }, [courseData, isPermissionToCreateCourse]);

  useEffect(() => {
    handleSWMessages(dispatch, navigate, courseData);
  }, []);
  return null;
}

export default SWClientCommunicator;
