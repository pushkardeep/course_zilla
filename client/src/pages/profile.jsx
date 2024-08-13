import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { info, getProfile } from "../services/operations/user";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

function Profile() {
  const token = localStorage.getItem("token");

  const inputRef = useRef(null);
  const imgRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [flash, setFlash] = useState(null);

  const isSpinner = useSelector((state) => state.ui.isSpinner);
  const user = useSelector((state) => state.user.userData);

  const onChange = async (e) => {
    const response = await info(
      { profile_image: e.target.files[0] },
      navigate,
      dispatch,
      token
    );
    response.success
      ? setFlash(response.message)
      : setFlash("Something went wrong!");
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* banner and profile image*/}
      <div className="w-full h-[130px] bg-[#252525] relative">
        <img
          className="w-full h-full object-cover"
          src="/static/images/defraults/postDefault.jpg"
          alt="banner"
        />

        <div className="w-[35px] aspect-square rounded-md bg-[#000000]/50 flex justify-center items-center absolute right-1 top-[3%] -translate-y-[3%] cursor-pointer">
          <img
            className="w-[60%] aspect-square object-cover"
            src="/static/images/icons/account.png"
            alt="camera"
          />
        </div>
        <div className="w-[35px] aspect-square rounded-md bg-[#000000]/50 flex justify-center items-center absolute right-1 top-[97.5%] -translate-y-[97.5%] cursor-pointer">
          <img
            className="w-[60%] aspect-square object-cover"
            src="/static/images/icons/upload_2.png"
            alt="camera"
          />
        </div>
        {/* profile image  */}
        <div className="w-[180px] aspect-square rounded-full bg-[#252525] absolute top-10 left-1/2 -translate-x-1/2 sm:left-44 border-[12px] border-[#0d0d0d] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/static/images/defraults/dpDefault.jpg"
            alt="profile image"
          />
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-col-reverse justify-center gap-3 mt-24 sm:mt-5">
        {/* user data  */}
        <div className="w-[200px] mx-auto sm:mx-28 sm:mt-6 text-center sm:text-start leading-5 overflow-hidden">
          <div className="text-white font-['gil_med'] text-[1.1rem] sm:text-[1.25rem] line-clamp-1">
            Pushkardeep
          </div>
          <div className="text-[#b4b4b4] font-['gil_med'] text-[.7rem] line-clamp-1">
            khattriparas2@gmail.com
          </div>
        </div>
        {/* ffc  */}
        <div className="w-fit h-fit mx-auto flex justify-center items-center gap-5 sm:mx-[290px] ">
          <div className="w-fit text-center leading-5">
            <div className="text-white font-['gil_med'] text-[1.1rem] sm:text-[1.3rem]">
              Followers
            </div>
            <div className="text-[#b4b4b4] font-['gil_med'] text-[.7rem]">
              200k
            </div>
          </div>
          <div className="w-fit text-center leading-5">
            <div className="text-white font-['gil_med'] text-[1.1rem] sm:text-[1.3rem]">
              Followings
            </div>
            <div className="text-[#b4b4b4] font-['gil_med'] text-[.7rem]">
              40
            </div>
          </div>
          <div className="w-fit text-center leading-5">
            <div className="text-white font-['gil_med'] text-[1.1rem] sm:text-[1.3rem]">
              Courses
            </div>
            <div className="text-[#b4b4b4] font-['gil_med'] text-[.7rem]">
              10
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
