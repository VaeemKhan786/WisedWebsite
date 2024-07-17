import React, { useState } from "react";
import BackIcon from "../assets/images/svg/back arrow icon.svg";
import CloseIcon from "../assets/images/svg/close icon.svg";
import FbVector from "../assets/images/svg/fb vector.svg";
import AppleVector from "../assets/images/svg/apple vector.svg";
import GoogleVector from "../assets/images/svg/google vector.svg";
import Password from "../assets/images/svg/password.svg";

function SignInPopUp() {
  const [showPassword,setShowPassword] = useState(false)
  function handleShowPassword(){
    setShowPassword(true)
  setTimeout(() => {
    setShowPassword(false)
  }, 1000);
  }
  return (
    <>
    <div className="backdrop-blur-[10px] z-50 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100vh] w-full"></div>
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white w-full sm:h-[640px] sm:w-[540px] mx-auto sm:rounded-[40px] py-10 px-4 sm:shadow-[0_8px_20px_0_rgba(0,0,0,0.2)] z-50">
        <div className="flex items-center justify-between">
          <button>
            <img className="w-[16px]" src={BackIcon} />
          </button>
          <button className="hidden sm:block">
            <img className="w-[26px]" src={CloseIcon} />
          </button>
        </div>
        <div className="max-w-[328px] mx-auto h-[537px] mt-[63px] sm:mt-5">
          <h1 className="text-black ff_inter font-bold text-xl">
            Sign In
          </h1>
          <div className="flex items-center justify-between mt-5">
            <button className="py-4 px-[38px] rounded-2xl border-[1px] border-[#EEEFEF]">
              <img src={GoogleVector} />
            </button>
            <button className="py-4 px-[38px] rounded-2xl border-[1px] border-[#EEEFEF]">
              <img src={AppleVector} />
            </button>
            <button className="py-4 px-[38px] rounded-2xl border-[1px] border-[#EEEFEF]">
              <img src={FbVector} />
            </button>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="h-[1px] bg-[#EEEFEF] w-[30%]"></div>
            <p className="text-sm ff_inter font-normal text-[#303135]">
              Or continue with
            </p>
            <div className="h-[1px] bg-[#EEEFEF] w-[30%]"></div>
          </div>
          <input
            className="w-full outline-none border-[1px] bg-[#F8F8F8] border-[#BEC1C3] rounded-[100px] pt-[15px] pb-[17px] ps-[36px] pe-[28px] mt-5"
            placeholder="Enter your email"
            type="text"
          />
          <div className="mt-5 flex items-center justify-between border-[1px] bg-[#F8F8F8] border-[#BEC1C3] rounded-[100px]">
            <input
              className="w-[75%] outline-none pt-[15px] pb-[17px] ps-[36px] rounded-[100px] bg-[#F8F8F8]"
              placeholder="Enter your password"
              type={showPassword?"text":"password"}
            />
            <button onClick={handleShowPassword}>
              <img
                className="pt-[15px] pb-[17px] ps-[20px] pe-[28px]"
                src={Password}
              />
            </button>
          </div>
          <div className="mt-5 text-center">
            <button className="text-sm sm:text-base font-medium ff_inter text-[#303135]">
              Forgot Password?
            </button>
          </div>
          <div className="text-center mt-[21px]">
            <input type="checkbox" />
            <label className="font-medium text-sm sm:text-base ff_inter text-[#BEC1C3] ms-[11px]">
              Remember me
            </label>
          </div>
          <button
            className="text-white font-normal ff_inter text-base py-[19px] lg:py-4 w-full bg-[#4D8AFF] rounded-[100px] mt-5"
          >
            Sign In
          </button>
          <div className="mt-5 flex items-center justify-center">
            <button className="ff_inter font-semibold text-base text-[#000000]">Don’t have an account?</button>
            <button className="ff_inter font-semibold text-base text-[#4D8AFF] ms-2">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignInPopUp;
