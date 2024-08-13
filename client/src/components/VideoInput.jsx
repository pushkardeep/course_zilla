import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { videoValidation } from "../utils/fileValidation";
import { setVideoUploadError } from "../Redux/slices/errorSlice";
import { sendMessage } from "../services/service-worker/swMessenger";
import { isVideoFileSelected } from "../Redux/slices/createCourseSlice";

const VideoInput = forwardRef((prop, ref) => {
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validation = videoValidation(file);

    if (!validation.isValid) {
      ref.current.value = "";
      return alert(validation.message);
    }

    const isSend = sendMessage(file, "VIDEO_UPLOAD");

    if (!isSend.success) {
      ref.current.value = "";
      return alert(isSend.message);
    }

    if (prop.type === "first") {
      prop.func();
    }

    if (prop.type === "retry") {
      dispatch(setVideoUploadError(false));
    }

    dispatch(isVideoFileSelected(true));
    ref.current.value = "";
  };
  return (
    <input
      hidden
      ref={ref}
      onChange={handleFileChange}
      type="file"
      accept="video/*"
    />
  );
});

export default VideoInput;
