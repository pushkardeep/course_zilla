import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { imageValidation } from "../utils/fileValidation";
import {
  isImageFileSelected,
  toggleThumbnailUploading,
} from "../Redux/slices/createCourseSlice";
import { imageUpload } from "../services/uploads/image";

const ImageInput = forwardRef(({ setIsImageLoaded }, ref) => {
  const dispatch = useDispatch();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validation = imageValidation(file);
    if (!validation.isValid) {
      ref.current.value = "";
      alert(validation.message);
      return;
    }
    imageUpload(file, dispatch, setIsImageLoaded);
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
