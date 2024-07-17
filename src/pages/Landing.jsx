import React, { useState } from "react";
import LandingMain from "../assets/images/png/landing2.png";
import { data } from "./Data";
import Peer from "../assets/images/svg/peer.svg";
import Personalised from "../assets/images/svg/personalised.svg";
import Environment from "../assets/images/svg/environment.svg";
import Learning from "../assets/images/png/learning.png";

function Landing() {
  const [question, setQuestion] = useState(null);
  const handleToggel = (value) => {
    if (question === value) {
      setQuestion(null);
    } else {
      setQuestion(value);
    }
  };
  return (
    <div className="bg-white">
      <div className="">
        <div className="lg:max-w-[1842px] mx-auto px-3 lg:h-[100vh]  2xl:h-[110vh] lg:grid relative overflow-hidden">
          <div className="w-full flex items-center lg:items-start lg:justify-center flex-col lg:w-6/12">
            <p className="text-[20px] sm:text-[26px] lg:text-[44px] text-{#BEC1C3} font-normal lg:font-normal ff_inter text-center lg:text-start leading-[24px] sm:leading-[40px] lg:leading-[80px] max-w-[300px] lg:max-w-[100%] mt-[31px] sm:mt-[25px] 2xl:text-[64px]">
              Empowering Educators,{" "}
              <span className="lg:block">Inspiring Learners</span>
            </p>
            <p
              className="ff_inter font-normal text-xs sm:text-base lg:text-[28px] text-[#303135] text-center lg:text-start max-w-[218px] lg:max-w-[100%] sm:max-w-[280px]  mt-56 sm:mt-[486px] lg:leading-[60px] lg:mt-[50px] 2xl:text-[36px] 2xl:mt-[90px]
              "
            >
              User centric social content platform{" "}
              <span className="lg:block">
                for you to share and gain knowledge.
              </span>
            </p>
            <div className="text-center mt-[35px] sm:mt-[37.5px] lg:text-start w-full lg:mt-[90px]">
              <button className="ff_inter font-normal text-white text-sm lg:text-xl py-3 px-6 sm:px-7 bg-[#4D8AFF] rounded-[100px] lg:font-medium 2xl:text-2xl 2xl:px-10 2xl:py-[25px]">
                Get started
              </button>
            </div>
          </div>
          <img
            className=" w-[393px] h-[363px] sm:h-[661px] sm:w-[661px]  absolute top-[5px] sm:top-[-12px]  left-[50%] -translate-x-[50%] lg:top-[-10%] lg:left-[75%] xl:w-[75%] xl:h-[120%] xl:left-[72%] xl:top-[-10%]"
            src={LandingMain}
            alt="image of populat person"
          />
        </div>
      </div>
      <div className="px-3 lg:max-w-[1867px] lg:mx-auto lg:px-3">
        <div className="lg:flex items-center justify-between">
          {data.create.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full px-3 mt-[52px] sm:mt-[60px] lg:w-4/12"
              >
                <div
                  className={`flex justify-between items-center ${
                    index == 1 ? "flex-row-reverse , lg:flex-row" : "flex-row"
                  }`}
                >
                  <div className="w-[40%] sm:w-3/12 lg:w-4/12">
                    <img className="w-full" src={item.src} />
                  </div>
                  <div className="w-6/12 sm:w-7/12 ">
                    <h1 className="ff_inter font-medium text-lg text-black sm:text-2xl xl:text-3xl 2xl:text-4xl">
                      {item.title}
                    </h1>
                    <p
                      className={`ff_inter font-normal text-xs text-[#303135] mt-[18px] pe-8 sm:text-base sm:mt-[22px] sm:pe-0 xl:text-xl xl:mt-[30px] 2xl:text-2xl ${
                        index == 1 ? "2xl:max-w-[280px]" : "2xl:max-w-[240px]"
                      }`}
                    >
                      {item.about}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#F3F7FF] py-[50px] xl:py-[99px] mt-[50px] lg:mt-[100px] overflow-hidden relative">
        <p className="ff_inter font-medium text-lg sm:text-2xl xl:text-[44px] text-center">
          <span className="block sm:inline">Your Personalized</span> Learning &
          Networking Hub
        </p>
        <div className="flex items-center sm:justify-center mt-[50px] xl:mt-[100px]">
          <div className="w-7/12 px-3 sm:w-5/12 lg:w-6/12 2xl:w-5/12">
            <div className="flex items-start lg:items-center">
              <img
                className="w-[21px] sm:w-[29px] lg:w-[44px]"
                src={Environment}
              />
              <p className="ff_inter font-normal text-xs sm:text-base xl:text-2xl text-black ms-2  max-w-[130px] sm:max-w-full lg:text-2xl">
                <span className="text-[#4D8AFF]">Streamlined environment</span>{" "}
                for sharing valuable information.
              </p>
            </div>
            <div className="flex items-start lg:items-center mt-6 xl:mt-[60px]">
              <img
                className="w-[21px] sm:w-[29px] lg:w-[44px]"
                src={Personalised}
              />
              <p className="ff_inter font-normal text-xs sm:text-base xl:text-2xl text-black ms-2 max-w-[130px] sm:max-w-full lg:text-2xl">
                <span className="text-[#4D8AFF]">
                  Personalised recommendations
                </span>{" "}
                tailored to each user's{" "}
                <span className="">preferences and goals.</span>
              </p>
            </div>
            <div className="flex items-start lg:items-center mt-6 xl:mt-[60px]">
              <img className="w-[21px] sm:w-[29px] lg:w-[44px]" src={Peer} />
              <p className="ff_inter font-normal text-xs sm:text-base xl:text-2xl text-black ms-2 max-w-[120px] sm:max-w-full lg:text-2xl">
                <span className="text-[#4D8AFF]">Peer to peer learning</span>{" "}
                and collaboration.
              </p>
            </div>
          </div>
          <div className="w-7/12 sm:w-5/12 px-3 absolute sm:static right-[-9%] 2xl:w-3/12">
            <img className="w-full h-[248px] sm:h-full" src={Learning} />
          </div>
        </div>
      </div>
      <div>
        <div className="py-[52px] sm:py-[60px] lg:py-24">
          <p className="text-lg sm:text-2xl lg:text-[44px] ff_inter text-black font-medium text-center">
            We also offer you
          </p>
          <div className="flex flex-wrap justify-between sm:justify-evenly px-3 mt-3 sm:mt-[6px]">
            {data.offer.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-6/12 px-3 sm:w-5/12 xl:w-3/12 2xl:px-[59px]"
                >
                  <div className=" p-2 sm:px-11 sm:pt-6 lg:px-[60px] xl:px-4 xl:pt-9 2xl:px-7 bg-white shadow-md rounded-3xl h-[140px] sm:h-[180px] lg:h-[268px] mt-10 sm:mt-[54px] cursor-pointer ">
                    <div className="flex justify-center">
                      <img
                        className="w-[31px] sm:w-[21px] lg:w-[47px]"
                        src={item.src}
                      />
                    </div>
                    <p
                      className="text-center ff_inter text-black font-normal text-xs 
                    sm:text-base lg:text-2xl mt-[14px]"
                    >
                      <span className="text-[#4D8AFF]">{item.blue}</span>{" "}
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#F3F7FF]">
        <div className="py-[52px] sm:py-[46px] lg:py-24">
          <p className="text-lg sm:text-2xl lg:text-4xl xl:text-[44px] font-medium ff_inter text-black text-center">
            We have industry experts{" "}
            <span className="block sm:inline">who will guide you</span>
          </p>
          <div className="flex items-center justify-center sm:w-10/12 mx-auto  mt-[52px] lg:mt-[100px]">
            {data.guide.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-4/12 px-2 sm:px-[15px] xl:w-[25%] 2xl:px-10 ${
                    index == 3 ? "hidden , xl:flex" : "flex"
                  }`}
                >
                  <div className="bg-white">
                    <img className="w-full" src={item.src} />
                    <div className="p-1 sm:pb-3 lg:px-9 xl:px-6 2xl:px-8 2xl:pb-[18px] ">
                      <h1 className="ff_inter font-medium text-xs sm:text-lg lg:text-2xl text-black">
                        {item.name}
                      </h1>
                      <h1 className="mt-2 sm:mt-3 text-[10px] sm:text-base lg:text-xl font-normal text-[#303135] ff_inter">
                        {item.about}
                      </h1>
                      <img className="mt-2 sm:mt-3 w-6/12" src={item.company} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="py-[52px] sm:py-[60px] lg:py-[100px]">
          <p className="ff_inter text-lg lg:text-[44px] font-medium text-black text-center">
            Frequently asked questions
          </p>
          <div className="mt-[52px] sm:mt-[60px] lg:mt-[100px] px-4 sm:w-10/12 max-w-[1440px] mx-auto">
            <div className="w-full  border-[1px] border-[#E2E2E2] rounded-[2px] lg:rounded-2xl">
              <button
                onClick={() => handleToggel(1)}
                className="text-xs sm:text-base lg:text-2xl font-normal ff_inter text-black py-2 sm:py-[14px] lg:py-[26px] px-[14px] w-full text-start"
              >
                <span className="text-[#4D8AFF] me-3">
                  {question === 1 ? "-" : "+"}
                </span>
                Question 1
              </button>
              {question === 1 && (
                <div>
                  <p className="text-xs lg:text-2xl font-normal ff_inter text-[#14171A] pb-4 px-4 sm:px-[18px] sm:pb-[23px] lg:pb-[26px] lg:px-[14px]">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full  border-[1px] border-[#E2E2E2] rounded-[2px] lg:rounded-2xl mt-[22px] sm:mt-10">
              <button
                onClick={() => handleToggel(2)}
                className="text-xs sm:text-base lg:text-2xl font-normal ff_inter text-black py-2 sm:py-[14px] lg:py-[26px] px-[14px] w-full text-start"
              >
                <span className="text-[#4D8AFF] me-3">
                  {question === 2 ? "-" : "+"}
                </span>
                Question 2
              </button>
              {question === 2 && (
                <div>
                  <p className="text-xs lg:text-2xl font-normal ff_inter text-[#14171A] pb-4 px-4 sm:px-[18px] sm:pb-[23px] lg:pb-[26px] lg:px-[14px]">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full  border-[1px] border-[#E2E2E2] rounded-[2px] lg:rounded-2xl mt-[22px] sm:mt-10">
              <button
                onClick={() => handleToggel(3)}
                className="text-xs sm:text-base lg:text-2xl font-normal ff_inter text-black py-2 sm:py-[14px] lg:py-[26px] px-[14px] w-full text-start"
              >
                <span className="text-[#4D8AFF] me-3">
                  {question === 3 ? "-" : "+"}
                </span>
                Question 3
              </button>
              {question === 3 && (
                <div>
                  <p className="text-xs lg:text-2xl font-normal ff_inter text-[#14171A] pb-4 px-4 sm:px-[18px] sm:pb-[23px] lg:pb-[26px] lg:px-[14px]">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full  border-[1px] border-[#E2E2E2] rounded-[2px] lg:rounded-2xl mt-[22px] sm:mt-10">
              <button
                onClick={() => handleToggel(4)}
                className="text-xs sm:text-base lg:text-2xl font-normal ff_inter text-black py-2 sm:py-[14px] lg:py-[26px] px-[14px] w-full text-start"
              >
                <span className="text-[#4D8AFF] me-3">
                  {question === 4 ? "-" : "+"}
                </span>
                Question 4
              </button>
              {question === 4 && (
                <div>
                  <p className="text-xs lg:text-2xl font-normal ff_inter text-[#14171A] pb-4 px-4 sm:px-[18px] sm:pb-[23px] lg:pb-[26px] lg:px-[14px]">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full  border-[1px] border-[#E2E2E2] rounded-[2px] lg:rounded-2xl mt-[22px] sm:mt-10">
              <button
                onClick={() => handleToggel(5)}
                className="text-xs sm:text-base lg:text-2xl font-normal ff_inter text-black py-2 sm:py-[14px] lg:py-[26px] px-[14px] w-full text-start"
              >
                <span className="text-[#4D8AFF] me-3">
                  {question === 5 ? "-" : "+"}
                </span>
                Question 5
              </button>
              {question === 5 && (
                <div>
                  <p className="text-xs lg:text-2xl font-normal ff_inter text-[#14171A] pb-4 px-4 sm:px-[18px] sm:pb-[23px] lg:pb-[26px] lg:px-[14px]">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4D8AFF]">
        <div className="py-[18px] sm:py-11 lg:py-20">
          <p className="text-white text-[10px] lg:text-2xl font-normal ff_inter text-center">
            UPSKILL FOR A BETTER FUTURE
          </p>
          <p className="ff_inter font-medium text-white text-lg lg:text-4xl xl:text-7xl text-center mt-2 lg:mt-6">
            Request More Information
          </p>
          <div className="text-center mt-[28px] lg:mt-20">
            <button className="bg-white text-[#4D8AFF] ff_inter font-medium text-[14px] lg:text-2xl py-[11px] px-6  lg:py-6 lg:px-10 rounded-[100px]">
              Get started
            </button>
          </div>
          <p
            className="text-center text-white mt-[28px] lg:mt-20 ff_inter text-[10px] lg:text-base font-normal opacity-75
          "
          >
            <span className="block">©2024 by Wised INC</span>
            All Rights Reserved by Wised INC @ 2024
          </p>
          <div className="flex items-center justify-center mt-[28px]  lg:mt-20">
            <p className="text-white ff_inter text-[10px] lg:text-base font-normal opacity-75">
              Terms & Privacy
            </p>
            <p className="text-white ff_inter text-[10px] lg:text-base font-normal opacity-75 ms-8 lg:ms-[88px]">
              Cookies
            </p>
          </div>
          <div className="flex items-center justify-center gap-[14px] lg:gap-10 mt-[26px] lg:mt-8">
            <button className="svg_hover">
              <svg
                className="w-[26px]  h-[26px] lg:w-[73px] lg:h-[73px]"
                width="74"
                height="75"
                viewBox="0 0 74 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M71.4152 37.5771C71.4152 56.5736 56.0155 71.9733 37.019 71.9733C18.0226 71.9733 2.62288 56.5736 2.62288 37.5771C2.62288 18.5807 18.0226 3.18099 37.019 3.18099C56.0155 3.18099 71.4152 18.5807 71.4152 37.5771Z"
                  stroke="white"
                  stroke-width="4.91374"
                />
                <path
                  d="M29.1365 32.4586C30.663 32.4586 31.9005 31.2211 31.9005 29.6946C31.9005 28.1681 30.663 26.9307 29.1365 26.9307C27.61 26.9307 26.3726 28.1681 26.3726 29.6946C26.3726 31.2211 27.61 32.4586 29.1365 32.4586Z"
                  fill="#F5F8FA"
                />
                <path
                  d="M31.4398 34.3013H26.8332C26.5789 34.3013 26.3726 34.5076 26.3726 34.7619V48.5818C26.3726 48.8361 26.5789 49.0425 26.8332 49.0425H31.4398C31.6941 49.0425 31.9005 48.8361 31.9005 48.5818V34.7619C31.9005 34.5076 31.6941 34.3013 31.4398 34.3013Z"
                  fill="#F5F8FA"
                />
                <path
                  d="M45.1648 33.6666C43.196 32.9922 40.7333 33.5846 39.2564 34.6469C39.2057 34.4488 39.0251 34.3014 38.8105 34.3014H34.2038C33.9495 34.3014 33.7432 34.5078 33.7432 34.762V48.5819C33.7432 48.8362 33.9495 49.0426 34.2038 49.0426H38.8105C39.0647 49.0426 39.2711 48.8362 39.2711 48.5819V38.65C40.0155 38.0088 40.9746 37.8043 41.7596 38.1378C42.5206 38.4593 42.9564 39.2443 42.9564 40.29V48.5819C42.9564 48.8362 43.1628 49.0426 43.4171 49.0426H48.0237C48.278 49.0426 48.4844 48.8362 48.4844 48.5819V39.3622C48.4319 35.5765 46.6509 34.1752 45.1648 33.6666Z"
                  fill="#F5F8FA"
                />
              </svg>
            </button>
            <button className="svg_hover">
              <svg
                className="w-[26px] h-[26px]  lg:w-[73px] lg:h-[73px]"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M72.069 37.5771C72.069 56.5736 56.6693 71.9733 37.6729 71.9733C18.6764 71.9733 3.27669 56.5736 3.27669 37.5771C3.27669 18.5807 18.6764 3.18099 37.6729 3.18099C56.6693 3.18099 72.069 18.5807 72.069 37.5771Z"
                  stroke="white"
                  stroke-width="4.91374"
                />
                <path
                  d="M34.723 48.8673L34.6895 38.5535H30.3022V34.1333H34.6895V31.1865C34.6895 27.2095 37.134 25.2928 40.6553 25.2928C42.342 25.2928 43.7917 25.4194 44.2142 25.4759V29.6321L41.772 29.6332C39.8569 29.6332 39.4861 30.5501 39.4861 31.8955V34.1333H44.9265L43.464 38.5535H39.4861V48.8673H34.723Z"
                  fill="#F5F8FA"
                />
              </svg>
            </button>
            <button className="svg_hover">
              <svg
                className="w-[26px]  h-[26px]  lg:w-[73px] lg:h-[73px]"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M71.7228 37.5771C71.7228 56.5736 56.3231 71.9733 37.3267 71.9733C18.3302 71.9733 2.9305 56.5736 2.9305 37.5771C2.9305 18.5807 18.3302 3.18099 37.3267 3.18099C56.3231 3.18099 71.7228 18.5807 71.7228 37.5771Z"
                  stroke="white"
                  stroke-width="4.91374"
                />
                <path
                  d="M42.843 33.3879C43.5486 33.3879 44.1206 32.8159 44.1206 32.1103C44.1206 31.4048 43.5486 30.8328 42.843 30.8328C42.1374 30.8328 41.5654 31.4048 41.5654 32.1103C41.5654 32.8159 42.1374 33.3879 42.843 33.3879Z"
                  fill="#F5F8FA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.0034 37.5771C32.0034 40.5129 34.3909 42.9003 37.3266 42.9003C40.2624 42.9003 42.6498 40.5129 42.6498 37.5771C42.6498 34.6414 40.2624 32.2539 37.3266 32.2539C34.3909 32.2539 32.0034 34.6414 32.0034 37.5771ZM34.665 37.5771C34.665 36.1093 35.8588 34.9155 37.3266 34.9155C38.7945 34.9155 39.9882 36.1093 39.9882 37.5771C39.9882 39.045 38.7945 40.2388 37.3266 40.2388C35.8588 40.2388 34.665 39.045 34.665 37.5771Z"
                  fill="#F5F8FA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.0034 48.2235H42.6498C45.386 48.2235 47.973 45.6364 47.973 42.9003V32.2539C47.973 29.5177 45.386 26.9307 42.6498 26.9307H32.0034C29.2673 26.9307 26.6802 29.5177 26.6802 32.2539V42.9003C26.6802 45.6364 29.2673 48.2235 32.0034 48.2235ZM29.3418 32.2539C29.3418 31.0096 30.7591 29.5923 32.0034 29.5923H42.6498C43.8941 29.5923 45.3114 31.0096 45.3114 32.2539V42.9004C45.3114 44.1447 43.8941 45.562 42.6498 45.562H32.0034C30.7351 45.562 29.3418 44.1686 29.3418 42.9004V32.2539Z"
                  fill="#F5F8FA"
                />
              </svg>
            </button>
            <button className="svg_hover">
              <svg
                className="w-[26px]  h-[26px]  lg:w-[73px] lg:h-[73px]"
                width="74"
                height="75"
                viewBox="0 0 74 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M71.3766 37.5771C71.3766 56.5736 55.9769 71.9733 36.9805 71.9733C17.984 71.9733 2.58431 56.5736 2.58431 37.5771C2.58431 18.5807 17.984 3.18099 36.9805 3.18099C55.9769 3.18099 71.3766 18.5807 71.3766 37.5771Z"
                  stroke="white"
                  stroke-width="4.91374"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.0626 29.1305C49.1848 29.4275 50.0686 30.2981 50.3698 31.4013C50.9289 33.4149 50.9027 37.6131 50.9027 37.6131C50.9027 37.6131 50.8988 41.7882 50.3567 43.8005C50.0516 44.9025 49.1638 45.7717 48.043 46.0674C45.9924 46.5946 37.789 46.5856 37.789 46.5856C37.789 46.5856 29.6079 46.5766 27.5364 46.0237C26.4129 45.7267 25.5291 44.8562 25.2279 43.7542C24.6911 41.7612 24.6963 37.5643 24.6963 37.5643C24.6963 37.5643 24.7015 33.3879 25.2423 31.3743C25.5461 30.2723 26.4548 29.3825 27.5547 29.0881C29.6066 28.5596 37.8087 28.5686 37.8087 28.5686C37.8087 28.5686 46.0121 28.5776 48.0626 29.1305ZM35.1912 33.7181L35.1846 41.433L42.0092 37.582L35.1912 33.7181Z"
                  fill="#F5F8FA"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
