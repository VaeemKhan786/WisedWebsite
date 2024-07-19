import React, { useState } from "react";
import WelcomeImg from "../assets/images/png/welcome.png";
import Logo from "../assets/images/png/Logo.png";
import SignInPopUp from "./SignInPopUp";
import SignUpPopUp from "../SignUp/SignUpPopUp";
import { Link } from "react-router-dom";
import VerifyPopUp from "./VerifyPopUp";

export default function Welcome() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
 const [verify, setVerify] = useState(false);
//  const [verifyIncorrect, setVerifyIncorrect] = useState(false);
  function hendlSignIn() {
    setSignIn(true);
  }
  function hendlVerify() {
    setSignUp(false);
    // setSignIn(false);
    setVerify(true);
  }
  function hendlSignUp() {
    setSignUp(true);
  }
  function closeSignInPopUp() {
    setSignIn(false);
    setSignUp(true);
  }
  function closeSignUpPopUp() {
    setSignIn(true);
    setSignUp(false);
  }
  function popuoClose() {
    setSignIn(false);
    setSignUp(false);
  }
  function popuoCloseScreen() {
    setSignIn(false);
    setSignUp(false);
  }
  return (
    <>
      {(signIn || signUp) && (
        <>
          <div
            onClick={popuoCloseScreen}
            className="backdrop-blur-[10px] fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] h-[100vh] w-full "
          ></div>
        </>
      )}
      <div className="">
        <div className="all_content">
          <div className="h-screen flex w-full justify-evenly gap-12 lg:gap-0 lg:justify-around items-center flex-col lg:flex-row px-3 py-8">
            <div className="mb-9 sm:hidden">
              <img
                className="w-[91px] relative max-sm:top-[30px]"
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className="w-full sm:w-[75%] lg:w-6/12 xl:w-5/12">
              <img
                className="max-sm:max-w-[270px] max-lg:max-w-[360px] max-lg:mx-auto max-sm:pb-14"
                src={WelcomeImg}
                alt="welcome_img"
              />
            </div>
            <div className="flex flex-col gap-6 items-center w-full lg:w-4/12 xl:w-3/12">
              <div className="mb-9 hidden sm:flex">
                <img className="w-[200px] xl:w-[330px]" src={Logo} alt="Logo" />
              </div>

              <button
                onClick={hendlSignIn}
                className="text-center font-normal text-sm bg-[#4D8AFF] sm:text-base text-white bg-primary px-5 py-4 rounded-[100px] w-[300px] xl:w-[330px]"
              >
                Sign In
              </button>
              {signIn && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                  <SignInPopUp
                    closeSignInPopUp={closeSignInPopUp}
                    popuoClose={popuoClose}
                  />
                </div>
              )}

              <button
                onClick={hendlSignUp}
                className="text-center font-normal text-sm bg-white sm:text-base  border border-[#BEC1C3] px-5 py-4 rounded-[100px] w-[300px] xl:w-[330px]"
              >
                Sign Up
              </button>
              {signUp && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                  <SignUpPopUp
                    closeSignUpPopUp={closeSignUpPopUp}
                    popuoClose={popuoClose}
                    hendlVerify={hendlVerify}
                    setSignUp={setSignUp}
                  />
                </div>
              )}
              {verify && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                  <VerifyPopUp />
                </div>
              )}
              {/* {verifyIncorrect && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                  <VerifyPopUp />
                </div>
              )} */}
              <Link>
                <button className="text-base cursor-pointer font-semibold leading-4 text-[#4D8AFF] pb-5">
                  Continue as guest
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
