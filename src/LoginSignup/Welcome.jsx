import React from "react";
import WelcomeImg from "../assets/images/png/welcome.png";
import Logo from "../assets/images/png/Logo.png"

export default function Welcome() {
  return (
    <>
      <div className="">
        <div className="all_content">
          <div className=" h-screen flex w-full justify-evenly gap-12 lg:gap-0 lg:justify-around items-center flex-col lg:flex-row px-3 py-8">
            <div className="mb-9 sm:hidden">
              <img
                className="w-[91px] relative max-sm:top-[30px]"
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className="w-full sm:w-[75%] lg:w-6/12 xl:w-5/12">
              <img
                className="max-sm:max-w-[300px] max-lg:max-w-[360px] max-lg:mx-auto max-sm:pb-14"
                src={WelcomeImg}
                alt="welcome_img"
              />
            </div>
            <div className="flex flex-col gap-6 items-center w-full lg:w-4/12 xl:w-3/12">
              <div className="mb-9 hidden sm:flex">
                <img className="w-[200px] xl:w-[330px]" src={Logo} alt="Logo" />
              </div>
              <button className=" text-center font-normal text-sm bg-[#4D8AFF] sm:text-base text-white bg-primary duration-500 h-[56px] px-5 max-w-[330px] w-full sm:px-36 rounded-[100px] text-nowrap">
                Sign In
              </button>
              <button className=" text-center font-normal text-sm sm:text-base text-black border border-[#BEC1C3] duration-500 h-[56px] px-5 max-w-[330px] w-full sm:px-36 rounded-[100px] text-nowrap">
                Sign Up
              </button>
              <a
                className="text-base font-semibold leading-4 text-primary pb-5"
                href="/home"
              >
                Continue as guest
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
