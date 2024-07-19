import React from "react";
import AddIcom from "../assets/images/svg/addicon.svg";
import DownArrow from "../assets/images/svg/downarrow.svg";

function EducationDetail() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 2024 - 1945 + 1 }, (_, i) => 1945 + i);
  return (
    <div>
      <div className="flex justify-end mt-6">
        <button className="flex items-center  border-[1px] border-[#BEC1C3] rounded-[100px] py-3 px-6">
          <img src={AddIcom} />
          <span className="ff_itner text-base font-normal text-[#000000] ms-2">
            Add
          </span>
        </button>
      </div>
      <div className="h-[321px] overflow-y-auto mt-6">
        <div>
          <label
            htmlFor="school"
            className="ff_inter text-sm sm:text-base font-medium text-[#000000]"
          >
            School / University details*
          </label>
          <div className="flex items-center w-full border-[1px] border-[#BEC1C3] rounded-[100px] mt-1">
            <input
              id="school"
              className="w-[90%] rounded-[100px] outline-none py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px]"
              placeholder="University name"
              type="text"
            />
            <img src={DownArrow} />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="institute"
            className="ff_inter text-sm sm:text-base font-medium text-[#000000]"
          >
            Institute name
          </label>
          <div className="flex items-center w-full border-[1px] border-[#BEC1C3] rounded-[100px] mt-1">
            <input
              id="institute"
              className="w-[90%] rounded-[100px] outline-none py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px]"
              placeholder="Institute name"
              type="text"
            />
            <img src={DownArrow} />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="Specialisation*"
            className="ff_inter text-sm sm:text-base font-medium text-[#000000]"
          >
            Specialisation*
          </label>
          <div className="flex items-center w-full border-[1px] border-[#BEC1C3] rounded-[100px] mt-1">
            <input
              id="Specialisation*"
              className="w-[90%] rounded-[100px] outline-none py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px]"
              placeholder="Specialisation"
              type="text"
            />
            <img src={DownArrow} />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="currently"
            className="ff_inter text-sm sm:text-base font-medium text-[#000000]"
          >
            Currently studying here*
          </label>
          <select className="w-full mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px] text-[#BEC1C3]">
            <option disabled value>
              Select an option
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="flex justify-between mt-6">
          <div className="w-[46%]">
            <label className="text-base font-medium ff_inter text-[#000000]">
              From*
            </label>
            <div className="flex justify-between">
              <select className="w-[48%] mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-2 px-[11px] text-[#BEC1C3]">
                <option>MM</option>
                {months.map((month) => {
                  return (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select className="w-[48%] mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-2 px-[11px] text-[#BEC1C3]">
                <option>YYYY</option>
                {years.map((year) => {
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="w-[46%]">
            <label className="text-base font-medium ff_inter text-[#000000]">
              Till*
            </label>
            <div className="flex justify-between">
              <select className="w-[48%] mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-2 px-[11px] text-[#BEC1C3]">
                <option>MM</option>
                {months.map((month) => {
                  return (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select className="w-[48%] mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-2 px-[11px] text-[#BEC1C3]">
                <option>YYYY</option>
                {years.map((year) => {
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label className="ff_inter text-sm sm:text-base font-medium text-[#000000]">
            If currently studying*
          </label>
          <div className="flex justify-between mt-1">
            <div className="w-[46%]">
              <select className="w-full mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px] text-[#BEC1C3]">
                <option>Year</option>
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
              </select>
            </div>
            <div className="w-[46%]">
              <select className="w-full mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px] text-[#BEC1C3]">
                <option>Semester</option>
                <option>First Semester</option>
                <option>Second Semester</option>
                <option>Third Semester</option>
                <option>Fourth Semester</option>
                <option>Fifth Semester</option>
                <option>Sixth Semester</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationDetail;
