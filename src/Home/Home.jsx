import React from "react";
import Floyd from "../assets/images/png/Floyd.png";
import Miles from "../assets/images/png/Miles.png";
import Cooper from "../assets/images/png/Cooper.png";
import Bessie from "../assets/images/png/Bessie.png";
import Icon from "../assets/images/png/i_Icon.png";
import English from "../assets/images/png/English.png";
import BookOpenGlobe from "../assets/images/png/BookOpenGlobe.png";
import Math from "../assets/images/png/Math.png";


import { Link } from "react-router-dom";
import Navbar2 from "../Components/Navbar2";
import Navbar from "../Components/navbar";


export default function Home() {
  return (
    <>
      <div className=" pb-5 mt-5 h-[137px]">
        <div>
          <Navbar />
        </div>
        <div>
          <Navbar2 />
        </div>
      </div>
      <section className="px-6 max-sm:px-4 ">
        <p className="text-black font-semibold sm:text-[24px] text-base text-center lg:pb-10 sm:pb-10 pb-4 sm:pt-4">
          Spotlight
        </p>
        <div className="container mx-auto grid grid-rows-1 sm:grid-cols-3 grid-cols-2 xl:gap-x-[77px] sm:gap-x-[42px] gap-x-4 lg:mb-10 sm:mb-12 mb-4 max-sm:gap-y-4">
          <Link className="max-sm:rounded-[6px] rounded-[15px] border border-grey card_shadow lg:h-[580px] sm:h-[370px] shadow-[0_8px_20px_0_#2F327D1A] h-[265px] flex flex-col justify-between overflow-hidden">
            <img
              className="w-full lg:pb-6 sm:pb-4 pb-3 lg:h-[340px] sm:h-[216px] h-[155px]"
              src={Floyd}
              alt=""
            />
            <div className="lg:py-3 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1  flex flex-col justify-between">
              <p className="font-normal sm:text-base text-xs text-black sm:pb-6 pb-[10px]">
                Norem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="flex items-center pb-4 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1">
              <img
                className="max-sm:mr-1 mr-3 max-md:min-w-[36px] max-md:h-[36px] max-sm:rounded-[6px] rounded-[15px]"
                src={Miles}
                alt=""
              />
              <div>
                <p className="font-bold lg:text-[24px] md:text-sm text-xs text-black">
                  Floyd Miles
                </p>
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2">
                  09: 15 pm | 26 Dec 23
                </p>
              </div>
            </div>
          </Link>

          <Link className="max-sm:rounded-[6px] rounded-[15px] border border-grey card_shadow lg:h-[580px] sm:h-[370px] shadow-[0_8px_20px_0_#2F327D1A] h-[265px] flex flex-col justify-between overflow-hidden">
            <img
              className="w-full lg:pb-6 sm:pb-4 pb-3 lg:h-[340px] sm:h-[216px] h-[155px]"
              src={Bessie}
              alt=""
            />
            <div className="lg:py-3 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1  flex flex-col justify-between">
              <p className="font-normal sm:text-base text-xs text-black sm:pb-6 pb-[10px]">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="flex items-center pb-4 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1">
              <img
                className="max-sm:mr-1 mr-3 max-md:min-w-[36px] max-md:h-[36px] max-sm:rounded-[6px] rounded-[15px]"
                src={Cooper}
                alt=""
              />
              <div>
                <p className="font-bold lg:text-[24px] md:text-sm text-xs text-black">
                  Floyd Miles
                </p>
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2">
                  09: 15 pm | 26 Dec 23
                </p>
              </div>
            </div>
          </Link>

          <Link className="max-sm:rounded-[6px] rounded-[15px] border border-grey card_shadow lg:h-[580px] sm:h-[370px] shadow-[0_8px_20px_0_#2F327D1A] h-[265px] flex flex-col justify-between overflow-hidden">
            <div className="lg:py-3 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1  flex flex-col justify-between">
              <div className="text-right sm:pt-7 pt-2 sm:pb-4 pb-3">
                <p className="  sm:px-4 sm:py-[10px] px-[6.49px] py-1 bg-[#F8F8F8] rounded-[10.38px] inline-block sm:text-base font-normal text-xxs text-nowrap mt-2">
                  # Tips and tricks
                </p>
              </div>
              <p className="font-semibold sm:text-xl text-xs sm:pb-6 pb-[10px]">
                Nunc vulputate libero et interdu, vulputate libero...
              </p>
              <p className="font-normal sm:text-base text-xs text-black sm:pb-6 pb-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia ...
              </p>
            </div>
            <div className="flex items-center pb-4 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1">
              <img
                className="max-sm:mr-1 mr-3 max-md:min-w-[36px] max-md:h-[36px] max-sm:rounded-[6px] rounded-[15px]"
                src={Miles}
                alt=""
              />
              <div>
                <p className="font-bold lg:text-[24px] md:text-sm text-xs text-black">
                  Floyd Miles
                </p>
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2">
                  09: 15 pm | 26 Dec 23
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className=" text-center lg:mb-10 sm:mb-12 mb-4">
          <Link>
            <div className="inline-block">
              <div className="h-[40px]  justify-center items-center bg-primary flex rounded-[100px] ">
                <button className=" text-white font-normal lg:text-base text-sm h-[40px] md:h-[50px] lg:h-[60px] w-[106px] md:w-[132px] flex items-center justify-center lg:px-10 bg-[#4D8AFF] rounded-[100px] mx-auto sm:px-7 px-6">
                  See All
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <hr />
      <section className="px-6 max-sm:px-4">
        <div className=" flex justify-center items-center sm:pb-10 pb-4 lg:pb-10 sm:pt-4">
          <p className=" text-black font-semibold sm:text-[24px] text-base text-center lg:py-10 sm:py-10 py-4 pe-2">
            Updated contents
          </p>

          <Link>
            <img src={Icon} alt="" />
          </Link>
        </div>

        <div className="container mx-auto grid sm:grid-cols-3 grid-cols-2 lg:gap-[77px] sm:gap-[42px] gap-4 lg:mb-10 sm:mb-12 mb-4">
          <Link className="max-sm:rounded-[6px] rounded-[15px] border border-grey card_shadow lg:h-[580px] sm:h-[370px] shadow-[0_8px_20px_0_#2F327D1A] h-[265px] flex flex-col justify-between overflow-hidden">
            <img
              className="w-full lg:pb-6 sm:pb-4 pb-3 lg:h-[340px] sm:h-[216px] h-[155px]"
              src={Floyd}
              alt=""
            />
            <div className="lg:py-3 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1  flex flex-col justify-between">
              <p className="font-normal sm:text-base text-xs text-black sm:pb-6 pb-[10px]">
                Norem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="flex items-center pb-4 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1">
              <img
                className="max-sm:mr-1 mr-3 max-md:min-w-[36px] max-md:h-[36px] max-sm:rounded-[6px] rounded-[15px]"
                src={Miles}
                alt=""
              />
              <div>
                <p className="font-bold lg:text-[24px] md:text-sm text-xs text-black">
                  Floyd Miles
                </p>
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2">
                  09: 15 pm | 26 Dec 23
                </p>
              </div>
            </div>
          </Link>

          <Link className="max-sm:rounded-[6px] rounded-[15px] border border-grey card_shadow lg:h-[580px] sm:h-[370px] shadow-[0_8px_20px_0_#2F327D1A] h-[265px] flex flex-col justify-between overflow-hidden">
            <img
              className="w-full lg:pb-6 sm:pb-4 pb-3 lg:h-[340px] sm:h-[216px] h-[155px]"
              src={Bessie}
              alt=""
            />
            <div className="lg:py-3 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1  flex flex-col justify-between">
              <p className="font-normal sm:text-base text-xs text-black sm:pb-6 pb-[10px]">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="flex items-center pb-4 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1">
              <img
                className="max-sm:mr-1 mr-3 max-md:min-w-[36px] max-md:h-[36px] max-sm:rounded-[6px] rounded-[15px]"
                src={Cooper}
                alt=""
              />
              <div>
                <p className="font-bold lg:text-[24px] md:text-sm text-xs text-black">
                  Floyd Miles
                </p>
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2">
                  09: 15 pm | 26 Dec 23
                </p>
              </div>
            </div>
          </Link>

          <Link className="max-sm:rounded-[6px] rounded-[15px] border border-grey card_shadow lg:h-[580px] sm:h-[370px] shadow-[0_8px_20px_0_#2F327D1A] h-[265px] flex flex-col justify-between overflow-hidden">
            <div className="lg:py-3 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1  flex flex-col justify-between">
              <div className="text-right sm:pt-7 pt-2 sm:pb-4 pb-3">
                <p className="  sm:px-4 sm:py-[10px] px-[6.49px] py-1 bg-[#F8F8F8] rounded-[10.38px] inline-block sm:text-base font-normal text-xxs text-nowrap mt-2">
                  # Tips and tricks
                </p>
              </div>
              <p className="font-semibold sm:text-xl text-xs sm:pb-6 pb-[10px]">
                Nunc vulputate libero et interdu, vulputate libero...
              </p>
              <p className="font-normal sm:text-base text-xs text-black sm:pb-6 pb-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia ...
              </p>
            </div>
            <div className="flex items-center pb-4 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1">
              <img
                className="max-sm:mr-1 mr-3 max-md:min-w-[36px] max-md:h-[36px] max-sm:rounded-[6px] rounded-[15px]"
                src={Miles}
                alt=""
              />
              <div>
                <p className="font-bold lg:text-[24px] md:text-sm text-xs text-black">
                  Floyd Miles
                </p>
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2">
                  09: 15 pm | 26 Dec 23
                </p>
              </div>
            </div>
          </Link>
          <Link className="max-sm:rounded-[6px] rounded-[15px] border border-grey card_shadow lg:h-[580px] sm:h-[370px] shadow-[0_8px_20px_0_#2F327D1A] h-[265px] flex flex-col justify-between overflow-hidden">
            <img
              className="w-full lg:pb-6 sm:pb-4 pb-3 lg:h-[340px] sm:h-[216px] h-[155px]"
              src={Floyd}
              alt=""
            />
            <div className="lg:py-3 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1  flex flex-col justify-between">
              <p className="font-normal sm:text-base text-xs text-black sm:pb-6 pb-[10px]">
                Norem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="flex items-center pb-4 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1">
              <img
                className="max-sm:mr-1 mr-3 max-md:min-w-[36px] max-md:h-[36px] max-sm:rounded-[6px] rounded-[15px]"
                src={Miles}
                alt=""
              />
              <div>
                <p className="font-bold lg:text-[24px] md:text-sm text-xs text-black">
                  Floyd Miles
                </p>
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2">
                  09: 15 pm | 26 Dec 23
                </p>
              </div>
            </div>
          </Link>

          <Link className="max-sm:rounded-[6px] rounded-[15px] border border-grey card_shadow lg:h-[580px] sm:h-[370px] shadow-[0_8px_20px_0_#2F327D1A] h-[265px] flex flex-col justify-between overflow-hidden">
            <img
              className="w-full lg:pb-6 sm:pb-4 pb-3 lg:h-[340px] sm:h-[216px] h-[155px]"
              src={Bessie}
              alt=""
            />
            <div className="lg:py-3 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1  flex flex-col justify-between">
              <p className="font-normal sm:text-base text-xs text-black sm:pb-6 pb-[10px]">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="flex items-center pb-4 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1">
              <img
                className="max-sm:mr-1 mr-3 max-md:min-w-[36px] max-md:h-[36px] max-sm:rounded-[6px] rounded-[15px]"
                src={Cooper}
                alt=""
              />
              <div>
                <p className="font-bold lg:text-[24px] md:text-sm text-xs text-black">
                  Floyd Miles
                </p>
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2">
                  09: 15 pm | 26 Dec 23
                </p>
              </div>
            </div>
          </Link>

          <Link className="max-sm:rounded-[6px] rounded-[15px] border border-grey card_shadow lg:h-[580px] sm:h-[370px] shadow-[0_8px_20px_0_#2F327D1A] h-[265px] flex flex-col justify-between overflow-hidden">
            <div className="lg:py-3 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1  flex flex-col justify-between">
              <div className="text-right sm:pt-7 pt-2 sm:pb-4 pb-3">
                <p className="  sm:px-4 sm:py-[10px] px-[6.49px] py-1 bg-[#F8F8F8] rounded-[10.38px] inline-block sm:text-base font-normal text-xxs text-nowrap mt-2">
                  # Tips and tricks
                </p>
              </div>
              <p className="font-semibold sm:text-xl text-xs sm:pb-6 pb-[10px]">
                Nunc vulputate libero et interdu, vulputate libero...
              </p>
              <p className="font-normal sm:text-base text-xs text-black sm:pb-6 pb-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia ...
              </p>
            </div>
            <div className="flex items-center pb-4 lg:px-7 sm:px-3 px-2 lg:mx-3 sm:mx-1">
              <img
                className="max-sm:mr-1 mr-3 max-md:min-w-[36px] max-md:h-[36px] max-sm:rounded-[6px] rounded-[15px]"
                src={Miles}
                alt=""
              />
              <div>
                <p className="font-bold lg:text-[24px] md:text-sm text-xs text-black">
                  Floyd Miles
                </p>
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2">
                  09: 15 pm | 26 Dec 23
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className=" text-center lg:mb-10 sm:mb-12 mb-4">
          <Link>
            <div className="inline-block">
              <div className="h-[40px]  justify-center items-center bg-primary flex rounded-[100px] ">
                <button className=" text-white font-normal lg:text-base text-sm h-[40px] md:h-[50px] lg:h-[60px] w-[106px] md:w-[132px] flex items-center justify-center lg:px-10 bg-[#4D8AFF] rounded-[100px] mx-auto sm:px-7 px-6">
                  See All
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <hr />
      <section className="px-6 max-sm:px-4">
        <div className="container mx-auto lg:pb-10 sm:pb-4 pb-4">
          <div>
            <p className=" text-black font-semibold sm:text-[24px] text-base text-center lg:py-10 sm:py-10 py-4 pe-2">
              Popular genres
            </p>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 lg:gap-x-[77px] sm:gap-x-[25px] gap-x-[16px]  lg:pb-10 sm:pb-12 pb-4 max-sm:gap-4">
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

          <div className=" text-center lg:mb-10 sm:mb-12 mb-4">
            <Link>
              <div className="inline-block">
                <div className="h-[40px]  justify-center items-center bg-primary flex rounded-[100px] ">
                  <button className=" text-white font-normal lg:text-base text-sm h-[40px] md:h-[50px] lg:h-[60px] w-[106px] md:w-[132px] flex items-center justify-center lg:px-10 bg-[#4D8AFF] rounded-[100px] mx-auto sm:px-7 px-6">
                    See All
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
