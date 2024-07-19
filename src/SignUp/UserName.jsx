import React from "react";

function UserName() {
  const years = Array.from({ length: 2024 - 1945 + 1 }, (_, i) => 1945 + i);
  const months = Array.from({ length: 12 }, (_, i) => 1 + i);
  const dates = Array.from({ length: 31 }, (_, i) => 1 + i);
  return (
    <div className="mt-10 sm:mt-6 sm:h-[365px]">
      <label
        htmlFor="username"
        className="ff_inter text-sm sm:text-base font-medium text-[#000000]"
      >
        Username*
      </label>
      <input
        id="username"
        className="w-full outline-none border-[1px] bg-[#F8F8F8] border-[#BEC1C3] rounded-[100px] py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px] mt-1"
        placeholder="Choose a username"
        type="text"
      />
      <p className="ff_inter font-medium text-sm sm:text-base text-[#000000] mt-[30px] sm:mt-6">
        Enter DOB*
      </p>
      <div className="flex items-center justify-between mt-1">
        <div className="w-4/12 px-1">
          <label
            htmlFor="date"
            className="ff_inter text-xs sm:text-base font-normal text-[#000000]"
          >
            Date
          </label>
          <select
            id="date"
            className="w-full outline-none border-[1px] bg-[#F8F8F8] border-[#BEC1C3] rounded-[100px] py-[11px]  sm:pt-[9px] sm:pb-[5px] px-4"
          >
            <option className="inline">DD</option>
            {dates.map((date)=>{
                return (
                    <option key={date} value={date}>{date}</option>
                )
            })}
          </select>
        </div>
        <div className="w-4/12 px-1">
          <label
            htmlFor="month"
            className="ff_inter  text-xs sm:text-base font-normal text-[#000000]"
          >
            Month
          </label>
          <select
            id="month"
            className="w-full outline-none border-[1px] bg-[#F8F8F8] border-[#BEC1C3] rounded-[100px] py-[11px]  sm:pt-[9px] sm:pb-[5px] px-4"
          >
            <option>MM</option>
            {months.map((month) => {
              return (
                <option key={month} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-4/12 px-1">
          <label
            htmlFor="year"
            className="ff_inter  text-xs sm:text-base font-normal text-[#000000]"
          >
            Year
          </label>
          <select
            id="year"
            className="w-full outline-none border-[1px] bg-[#F8F8F8] border-[#BEC1C3] rounded-[100px] py-[11px]  sm:pt-[9px] sm:pb-[5px] px-4"
          >
            <option>YYYY</option>
            {years.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default UserName;
