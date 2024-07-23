import React from "react";

export default function DotsPopUp() {
  return (
    <>
      <div className="max-w-[185px] sm:max-w-[320px] bg-white rounded-[16px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-center w-full overflow-hidden z-[60] sm:h-auto sm:block flex sm:flex-row flex-col items-center sm:scroll-auto justify-center shadow">
        <a className="w-full font-normal sm:text-base text-sm text-red-500 py-2 inline-block cursor-pointer ">
          Report
        </a>
        <hr />
        <p className="w-full font-normal sm:text-base text-sm py-2  cursor-pointer inline-block">
          Copy link
        </p>
        <hr className="w-full" />
        <p className="w-full font-normal sm:text-base text-sm py-2  cursor-pointer inline-block">
          Not interested
        </p>
        <hr className="w-full" />
        <button className="w-full font-normal sm:text-base text-sm py-2 inline-block">
          Cancel
        </button>
      </div>
    </>
  );
}
