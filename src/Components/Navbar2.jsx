import React from 'react'

export default function Navbar2() {
  return (
    <>
      <div className="static top-0">
        <div class="  w-full z-[1] h-[88px]  p-4 fixed top-[82px] max-lg:top-[60px] max-sm:top-[59px] bg-white">
          <div class="container mx-auto">
            <div class="flex justify-between items-center max-sm:flex-row-reverse">
              <button class="flex items-center border border-[#BEC1C3] rounded-[6px]  max-sm:h-[35px] sm:rounded-2xl py-3 px-4 fiter_btn max-md:py-[9px] max-sm:min-w-[36px] max-sm:w-[36px] max-sm:p-2 max-md:ps-[16px] max-md:pr-[10px] max-sm:justify-center max-sm:ml-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2351 10.2208L18.6155 2.64414C19.1631 1.99377 18.7008 1 17.8506 1H2.14945C1.29919 1 0.836858 1.99377 1.38454 2.64414L7.76491 10.2208C7.91674 10.4011 8 10.6293 8 10.865V18.2192C8 18.8698 8.61139 19.3472 9.24253 19.1894L11.2425 18.6894C11.6877 18.5781 12 18.1781 12 17.7192V10.865C12 10.6293 12.0833 10.4011 12.2351 10.2208Z"
                    stroke="black"
                  ></path>
                </svg>
                <span class="text-black pl-2 text-base max-md:text-[14px] font-normal max-sm:hidden">
                  Filters
                </span>
              </button>
              <div class="flex items-center space-x-1 sm:space-x-2 max-sm:border border-[#BEC1C3] rounded-[6px]  max-sm:px-[6px] max-sm:py-1">
                <div class="flex items-center sm:p-2 gap-3 max-sm:gap-1">
                  <button class="px-3 py-2 max-sm:py-[2px] max-sm:px-2 font-medium hover:bg-[#EEEFEF] text-black text-base max-md:text-[14px] max-sm:text-[12px] rounded-2xl bg-light-400 lg:mr-3">
                    Interests
                  </button>
                  <div class="flex-none overscroll-x-auto">
                    <button class="px-3 py-2 max-sm:py-[2px] max-sm:px-1 font-medium text-black text-base max-md:text-[14px] max-sm:text-[12px] rounded-2xl hover:bg-[#EEEFEF] ">
                      Topic 1
                    </button>
                  </div>
                  <div class="flex-none overscroll-x-auto">
                    <button class="px-3 py-2 max-sm:py-[2px] max-sm:px-1 font-medium text-black text-base max-md:text-[14px] max-sm:text-[12px] rounded-2xl hover:bg-[#EEEFEF] ">
                      Topic 2
                    </button>
                  </div>
                  <div class="flex-none overscroll-x-auto">
                    <button class="px-3 py-2 max-sm:py-[2px] max-sm:px-1 font-medium text-black text-base max-md:text-[14px] max-sm:text-[12px] rounded-2xl hover:bg-[#EEEFEF] ">
                      Topic 3
                    </button>
                  </div>
                  <div class="flex-none overscroll-x-auto">
                    <button class="px-3 py-2 max-sm:py-[2px] max-sm:px-1 font-medium text-black text-base max-md:text-[14px] max-sm:text-[12px] rounded-2xl hover:bg-[#EEEFEF] ">
                      Topic 4
                    </button>
                  </div>
                  <div class="flex-none overscroll-x-auto">
                    <button class="px-3 py-2 max-sm:py-[2px] max-sm:px-1 font-medium text-black text-base max-md:text-[14px] max-sm:text-[12px] rounded-2xl hover:bg-[#EEEFEF] ">
                      Topic 5
                    </button>
                  </div>
                  <div class="flex-none overscroll-x-auto">
                    <button class="px-3 py-2 max-sm:py-[2px] max-sm:px-1 font-medium text-black text-base max-md:text-[14px] max-sm:text-[12px] rounded-2xl hover:bg-[#EEEFEF] ">
                      Topic 6
                    </button>
                  </div>
                  <div class="flex-none overscroll-x-auto">
                    <button class="px-3 py-2 max-sm:py-[2px] max-sm:px-1 font-medium text-black text-base max-md:text-[14px] max-sm:text-[12px] rounded-2xl hover:bg-[#EEEFEF] ">
                      Topic 7
                    </button>
                  </div>
                  <div class="flex-none overscroll-x-auto">
                    <button class="px-3 py-2 max-sm:py-[2px] max-sm:px-1 font-medium text-black text-base max-md:text-[14px] max-sm:text-[12px] rounded-2xl hover:bg-[#EEEFEF] ">
                      Topic 8
                    </button>
                  </div>
                  <div class="flex-none sm:pt-4 max-sm:mr-1 mr-4 max-sm:hidden">
                    <div class="cursor-default">...</div>
                  </div>
                </div>
                <button class="py-[13px] px-[18px] bg-[#EEEFEF] rounded-[16px] pagination_icon flex items-center justify-center max-sm:h-[25px] max-sm:p-0 max-sm:w-[25px]">
                  <svg
                    width="13"
                    height="23"
                    viewBox="0 0 13 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.12125 21.1263C-0.0343978 20.9707 -0.0350409 20.7185 0.119811 20.5621L8.84953 11.7429C9.00383 11.587 9.00383 11.336 8.84953 11.1801L0.119814 2.36096C-0.0350376 2.20452 -0.0343952 1.95237 0.121252 1.79672L1.3153 0.602667C1.47151 0.446457 1.72478 0.446457 1.88099 0.602667L12.457 11.1787C12.6132 11.3349 12.6132 11.5882 12.457 11.7444L1.88099 22.3204C1.72478 22.4766 1.47151 22.4766 1.3153 22.3204L0.12125 21.1263Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
