import React from 'react'
import { Link } from 'react-router-dom';
import Floyd from "../assets/images/png/Floyd.png";
import Miles from "../assets/images/png/Miles.png";
import Cooper from "../assets/images/png/Cooper.png";
import Bessie from "../assets/images/png/Bessie.png";


export default function ByStream() {
  return (
    <>
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
    </>
  );
}
