import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../services/auth";
import Spinner from "../components/Spinner";

function logIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [flash, setFlash] = useState(null);

  const isSpinner = useSelector((state) => state.ui.isSpinner);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signIn(formData, navigate, dispatch);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-3 overflow-hidden relative ">
      <div className="flex flex-col items-center justify-center px-2">
        <div className="text-white font-['gil_sem'] text-[1.8rem]">
          Sign In Now
        </div>
        <div className="text-[#B1B1B1] font-['gil_med'] text-[.8rem] -mt-2">
          Welcome back to Course Zilla
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="w-full min-[310px]:w-[300px] h-fit flex flex-col justify-center items-center gap-1.5 px-2"
      >
        <input
          onChange={onChange}
          className="bg-[#d9d9d927] w-full px-6 py-3 rounded-[8px] placeholder:font-['gil_sem'] placeholder:text-[#8B8B8B] text-[.9rem] text-white font-['gil_med'] focus:outline-none"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          onChange={onChange}
          className="bg-[#d9d9d927] w-full px-6 py-3 rounded-[8px] placeholder:font-['gil_sem'] placeholder:text-[#8B8B8B] text-[.9rem] text-white font-['gil_med'] focus:outline-none"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="bg-[#D9D9D9] rounded-[8px] px-6 py-1.5 font-['gil_sem'] text-[.9rem] mt-1"
        >
          Log In
        </button>
      </form>

      <div className="w-full flex justify-center items-center flex-wrap gap-2">
        <div className="text-white font-['gil_sem'] text-[.9rem]">
          Don't have any Account
        </div>
        <Link
          className="bg-[#D9D9D9] rounded-[8px] px-5 py-1.5 font-['gil_sem'] text-[.8rem]"
          to="/register"
        >
          Create
        </Link>
      </div>
      {isSpinner && <Spinner />}
    </div>
  );
}

export default logIn;
