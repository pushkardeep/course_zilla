import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { imageValidation } from "../utils/fileValidation";
import { sendMessage } from "../services/service-worker/swMessenger";
import { isImageFileSelected, toggleThumbnailUploading } from "../Redux/slices/createCourseSlice";

const ImageInput = forwardRef(({ setIsImageLoaded }, ref) => {
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validation = imageValidation(file);
    if (!validation.isValid) {
      ref.current.value = "";
      alert(validation.message);
      return;
    }

    const isSend = sendMessage(file, "IMAGE_UPLOAD");
    if (!isSend.success) {
      ref.current.value = "";
      alert(isSend.message);
      return;
    }

    setIsImageLoaded(false);
    dispatch(isImageFileSelected(true));
    dispatch(toggleThumbnailUploading(true));
    ref.current.value = "";
  };

  return (
    <input
      ref={ref}
      hidden
      onChange={handleFileChange}
      type="file"
      accept="image/*"
    />
  );
});

export default ImageInput;
