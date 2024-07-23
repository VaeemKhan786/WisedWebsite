import React from 'react'
import Floyd from "../assets/images/png/Floyd.png";
import Miles from "../assets/images/png/Miles.png";
import Cooper from "../assets/images/png/Cooper.png";
import Bessie from "../assets/images/png/Bessie.png";
import Icon from "../assets/images/png/i_Icon.png";
import { Link } from "react-router-dom";    
export default function Spotlight() {
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
            Spotlight
          </p>
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
                <p className="lg:text-base md:text-xs text-xxs text-[#BEC1C3] text-nowrap mt-2 ">
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
    </>
  );
}
