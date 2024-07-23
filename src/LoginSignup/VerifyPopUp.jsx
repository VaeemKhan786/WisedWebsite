import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackIcon from "../assets/images/svg/back arrow icon.svg";

export default function VerifyPopUp({ popuoCloseScreen, verifyIncorrect }) {
  function closPopUp() {
    popuoCloseScreen();
    console.log(verifyIncorrect);
  }
  return (
    <>
      <div className="">
        <div className="max-md:h-screen md:w-[540px] w-full bg-white popup_shadow md:rounded-[40px] py-5 sm:py-9 max-sm:px-[10px] fixed top-0 start-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 sm:shadow-[0_8px_20px_0_rgba(0,0,0,0.2)] z-50">
          <div className="flex items-center md:justify-between max-sm:px-4 px-5 pb-5 md:pb-0 max-md:fixed max-md:w-full max-md:left-0">
            <button onClick={closPopUp} className="cursor-pointer">
              <img src={BackIcon} alt="" />
              {/* <svg
                width="16"
                height="14"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.44585 14.08C7.64979 14.2662 7.96604 14.2518 8.15222 14.0478C8.3384 13.8439 8.32401 13.5276 8.12007 13.3415L1.95221 7.71074H15.783C16.0591 7.71074 16.283 7.48688 16.283 7.21074C16.283 6.9346 16.0591 6.71074 15.783 6.71074H1.9551L8.12007 1.08265C8.32401 0.896469 8.3384 0.580214 8.15222 0.376274C7.96604 0.172333 7.64979 0.157936 7.44585 0.344116L0.529497 6.65816C0.389548 6.78592 0.309719 6.95346 0.290008 7.1266C0.285373 7.15396 0.282959 7.18207 0.282959 7.21074C0.282959 7.23761 0.285079 7.26399 0.28916 7.28971C0.307334 7.46562 0.387447 7.63628 0.529497 7.76596L7.44585 14.08Z"
                  fill="#303135"
                />
              </svg> */}
            </button>
            <p className="font-semibold text-base ms-3 md:ms-0">
              Verify your mail
            </p>
            <button onClick={closPopUp}>
              <div className="cursor-pointer hidden md:block">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1733 8.53931C18.6035 8.96947 18.6035 9.6669 18.1733 10.0971L15.0578 13.2126L18.1733 16.3281C18.6035 16.7582 18.6035 17.4557 18.1733 17.8858C17.7432 18.316 17.0457 18.316 16.6156 17.8858L13.5001 14.7703L10.3846 17.8858C9.95439 18.316 9.25696 18.316 8.8268 17.8858C8.39664 17.4557 8.39664 16.7582 8.8268 16.3281L11.9423 13.2126L8.8268 10.0971C8.39664 9.6669 8.39664 8.96947 8.8268 8.53931C9.25696 8.10914 9.95439 8.10915 10.3846 8.53931L13.5001 11.6548L16.6156 8.53931C17.0457 8.10915 17.7432 8.10915 18.1733 8.53931ZM4.15354 3.86605C9.31548 -1.29589 17.6846 -1.29589 22.8466 3.86605C28.0085 9.02799 28.0085 17.3971 22.8466 22.5591C17.6846 27.721 9.31548 27.721 4.15354 22.5591C-1.00839 17.3971 -1.00839 9.02799 4.15354 3.86605ZM21.2888 5.4238C16.9872 1.12219 10.0129 1.12219 5.7113 5.4238C1.40968 9.72542 1.40968 16.6997 5.7113 21.0013C10.0129 25.3029 16.9872 25.3029 21.2888 21.0013C25.5904 16.6997 25.5904 9.72542 21.2888 5.4238Z"
                    fill="#BEC1C3"
                  />
                </svg>
              </div>
            </button>
          </div>
          <p className="text-center font-medium text-md max-md:text-xs mt-20 md:mt-4">
            {" "}
            "Please enter the 4 digit code sent on your mail."
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex justify-center mt-3 md:mt-6 space-x-4">
              <input
                type="text"
                maxlength="1"
                className="border-b-2 border-black w-12 h-12 text-center text-xl max-md:text-base outline-none"
              />
              <input
                type="text"
                maxlength="1"
                className="border-b-2 border-black w-12 h-12 text-center text-xl max-md:text-base outline-none"
              />
              <input
                type="text"
                maxlength="1"
                className="border-b-2 border-black w-12 h-12 text-center text-xl max-md:text-base outline-none"
              />
              <input
                type="text"
                maxlength="1"
                className="border-b-2 border-black w-12 h-12 text-center text-xl max-md:text-base outline-none"
              />
            </div>
            <p className="text-md max-md:text-xs font-medium text-center text-[#4D8AFF] mt-12 cursor-pointer">
              Resend code
            </p>

            <div className="text-center">
              <button className="md:mt-4 mt-[52px] px-1 md:px-0 w-full max-sm:text-xs">
                <button className="font-normal text-sm sm:text-base  text-white  bg-[#4D8AFF]  duration-500  h-[56px] px-5 max-w-[330px] w-full sm:px-36 rounded-[100px] text-nowrap ">
                  Verify
                </button>
              </button>
            </div>
          </form>
          <p className="font-normal text-[12px] text-[#BEC1C3] text-center mt-9 md:mt-5 mx-2">
            By continuing you’re indicating that you accept our{" "}
          </p>
          <p className="font-normal text-[12px] text-[#BEC1C3] text-center">
            {" "}
            <Link to="/terms">
              <button className="font-semibold text-[#4D8AFF] mx-2">
                Terms of use
              </button>
            </Link>
            and our
            <Link to="/privacy">
              <button className="font-semibold text-[#4D8AFF] mx-2">
                Privacy Policy
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
