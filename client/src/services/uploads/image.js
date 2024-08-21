import {
  setCourseData,
  toggleThumbnailUploading,
} from "../../Redux/slices/createCourseSlice";
import { upload } from "../../utils/fetch";
import { errorToast } from "../../utils/toasts";

export const imageUpload = async (file, dispatch, setIsImageLoaded) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_IMAGES_PRESET);

    dispatch(toggleThumbnailUploading(true));
    const response = await upload(formData, `uuid-${Date.now()}`);
    dispatch(toggleThumbnailUploading(false));

    if (!response.success) {
      return errorToast("Failed to upload thumbnail.");
    }
    setIsImageLoaded(false);
    dispatch(setCourseData({ thumbnail_url: response.data.url }));
  } catch (error) {}
};
