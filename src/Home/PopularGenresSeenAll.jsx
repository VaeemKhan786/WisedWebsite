import React from "react";
import English from "../assets/images/png/English.png";
import BookOpenGlobe from "../assets/images/png/BookOpenGlobe.png";
import Math from "../assets/images/png/Math.png";

import { Link } from "react-router-dom";

export default function PopularGenresSeenAll() {
  return (
    <>
      <section className="px-6 max-sm:px-4">
        <div className=" flex justify-center items-center sm:pb-10 pb-4 lg:pb-10 sm:pt-4">
          <Link>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.15898 13.8666C7.36292 14.0528 7.67918 14.0384 7.86536 13.8345C8.05154 13.6305 8.03714 13.3143 7.8332 13.1281L1.66535 7.49736H15.4961C15.7722 7.49736 15.9961 7.2735 15.9961 6.99736C15.9961 6.72122 15.7722 6.49736 15.4961 6.49736H1.66824L7.8332 0.86927C8.03714 0.68309 8.05154 0.366835 7.86536 0.162895C7.67918 -0.0410457 7.36292 -0.0554433 7.15898 0.130737L0.242631 6.44478C0.102683 6.57254 0.0228539 6.74008 0.00314236 6.91323C-0.0014925 6.94058 -0.00390625 6.96869 -0.00390625 6.99736C-0.00390625 7.02423 -0.00178671 7.05061 0.00229454 7.07633C0.0204692 7.25224 0.100582 7.4229 0.242631 7.55258L7.15898 13.8666Z"
                fill="#303135"
              />
            </svg>
          </Link>
          <p className=" text-black font-semibold sm:text-[24px] text-base text-center lg:py-10 sm:py-10 py-4 pe-2 ms-[19px]">
            Popular genres
          </p>
        </div>
        <div className="container mx-auto lg:pb-10 sm:pb-4 pb-4">

          <div className="grid sm:grid-cols-3 grid-cols-2 lg:gap-x-[77px] sm:gap-x-[25px] gap-x-[16px]  lg:pb-10 sm:pb-12 pb-4 max-sm:gap-4 gap-[20px] lg:gap-[55px]">
            <Link>
              <div className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={English} alt="" />
                <div className="lg:py-5 sm:py-2 py-1 absolute bg-[rgba(255, 255, 255, 0.4)] w-full bottom-0 backdrop-blur-[5.63793px] text-center bg-[#FFFFFF66]">
                  <p className="text-white font-semibold lg:text-[24px] sm:text-base text-[12px] pb-3">
                    English
                  </p>

                  <div className="">
                    <img
                      className=" pb-2 mx-auto lg:w-[36px] sm:w-[21px] w-[10px] "
                      src={BookOpenGlobe}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={Math} alt="" />
                <div className="lg:py-5 sm:py-2 py-1 absolute bg-[rgba(255, 255, 255, 0.4)] w-full bottom-0 backdrop-blur-[5.63793px] text-center bg-[#FFFFFF66]">
                  <p className="text-white font-semibold lg:text-[24px] sm:text-base text-[12px] pb-3">
                    Math
                  </p>

                  <div className="">
                    <img
                      className=" pb-2 mx-auto lg:w-[36px] sm:w-[21px] w-[10px] "
                      src={BookOpenGlobe}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={Math} alt="" />
                <div className="lg:py-5 sm:py-2 py-1 absolute bg-[rgba(255, 255, 255, 0.4)] w-full bottom-0 backdrop-blur-[5.63793px] text-center bg-[#FFFFFF66]">
                  <p className="text-white font-semibold lg:text-[24px] sm:text-base text-[12px] pb-3">
                    Math
                  </p>

                  <div className="">
                    <img
                      className=" pb-2 mx-auto lg:w-[36px] sm:w-[21px] w-[10px] "
                      src={BookOpenGlobe}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={English} alt="" />
                <div className="lg:py-5 sm:py-2 py-1 absolute bg-[rgba(255, 255, 255, 0.4)] w-full bottom-0 backdrop-blur-[5.63793px] text-center bg-[#FFFFFF66]">
                  <p className="text-white font-semibold lg:text-[24px] sm:text-base text-[12px] pb-3">
                    English
                  </p>

                  <div className="">
                    <img
                      className=" pb-2 mx-auto lg:w-[36px] sm:w-[21px] w-[10px] "
                      src={BookOpenGlobe}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={Math} alt="" />
                <div className="lg:py-5 sm:py-2 py-1 absolute bg-[rgba(255, 255, 255, 0.4)] w-full bottom-0 backdrop-blur-[5.63793px] text-center bg-[#FFFFFF66]">
                  <p className="text-white font-semibold lg:text-[24px] sm:text-base text-[12px] pb-3">
                    Math
                  </p>

                  <div className="">
                    <img
                      className=" pb-2 mx-auto lg:w-[36px] sm:w-[21px] w-[10px] "
                      src={BookOpenGlobe}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="relative rounded-xl overflow-hidden">
                <img className="w-full" src={Math} alt="" />
                <div className="lg:py-5 sm:py-2 py-1 absolute bg-[rgba(255, 255, 255, 0.4)] w-full bottom-0 backdrop-blur-[5.63793px] text-center bg-[#FFFFFF66]">
                  <p className="text-white font-semibold lg:text-[24px] sm:text-base text-[12px] pb-3">
                    Math
                  </p>

                  <div className="">
                    <img
                      className=" pb-2 mx-auto lg:w-[36px] sm:w-[21px] w-[10px] "
                      src={BookOpenGlobe}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>

         
        </div>
      </section>
    </>
  );
}
