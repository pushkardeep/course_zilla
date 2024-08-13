import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import Flash from "./Flash";

function Auth({ header, inputs, action, footer, processer }) {
  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useStates
  const [formData, setFormData] = useState({});
  const [flash, setFlash] = useState(null);

  // loader animation
  const isSpinner = useSelector((state) => state.ui.isSpinner);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await processer(formData, navigate, dispatch);
    if (!response.success) setFlash(response.message);
  };

  return (
    <>
      <div className="w-full min-[320px]:w-fit flex flex-col justify-center items-start gap-y-3 relative overflow-hidden px-6 py-1">
        {/* headings  */}
        <div className="w-fit h-fit leading-6 min-[320px]:leading-7">
          <div className="text-white font-['gil_med'] text-[2rem] min-[320px]:text-[2.5rem]">
            {header.heading}
          </div>
          <div className="text-[#999999] font-['gil_med'] text-[.8rem] ml-1">
            {header.slogan}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full min-[320px]:w-[300px] md:w-[350px] lg:w-[400px] h-fit flex flex-col justify-center items-start gap-y-1.5"
        >
          {inputs &&
            inputs.map((elem, i) => (
              <input
                className="w-full py-3 px-6 bg-[#ffffff2b] placeholder:text-[#949494] placeholder:font-['gil_sem'] text-white focus:outline-none rounded-[7px] text-[.8rem] "
                key={i}
                type={elem.type}
                name={elem.name}
                placeholder={elem.placeholder}
                required
              />
            ))}

          <button className="bg-[#CFCFCF] px-5 py-1.5 font-['gil_sem'] rounded-[7px] text-[.85rem] mt-2 ml-1 whitespace-nowrap">
            {action}
          </button>
        </form>
      </div>
    </>
  );
}

export default Auth;
