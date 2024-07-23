import React, { useState } from "react";
import AddIcom from "../assets/images/svg/addicon.svg";
import DownArrow from "../assets/images/svg/downarrow.svg";

function EducationDetail({ onAdd }) {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 2024 - 1945 + 1 }, (_, i) => 1945 + i);

  const [data,setData] = useState([])


  const [university, setUniversity] = useState("");
  const [institute, setInstitute] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [currentlyStudy, setCurrentlyStudy] = useState("");
  const [fromMonth, setFromMonth] = useState("");
  const [fromYear, setFromYear] = useState("");
  const [tillMonth, setTillMonth] = useState("");
  const [tillYear, setTillYear] = useState("");
  const [currentlyYear, setCurrentlyYear] = useState("");
  const [currentlySemester, setCurrentlySemester] = useState("");

  function handleAdd(e){
    e.preventDefault()
    const obj = {
      university :university,
      institute :institute,
      specialisation:specialisation,
      currentlyStudy:currentlyStudy,
      fromMonth:fromMonth,
      fromYear:fromYear,
      tillMonth:tillMonth,
      tillYear:tillYear,
      currentlyYear:currentlyYear,
      currentlySemester:currentlySemester,
    };
    onAdd(obj)

    setUniversity("")
    setInstitute("")
    setSpecialisation("")
    setCurrentlyStudy("")
    setFromMonth("")
    setFromYear("")
    setTillMonth("")
    setTillYear("")
    setCurrentlyYear("")
    setCurrentlySemester("")
  }



  return (
    <div>
      <div className="flex justify-end mt-6">
        <button
          className="flex items-center  border-[1px] border-[#BEC1C3] rounded-[100px] py-3 px-6"
          onClick={handleAdd}
        >
          <img src={AddIcom} />
          <span className="ff_itner text-base font-normal text-[#000000] ms-2">
            Add
          </span>
        </button>
      </div>
      <div className="h-[321px] overflow-y-auto custom-scrollbar mt-6">
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
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
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
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
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
              value={specialisation}
              onChange={(e) => setSpecialisation(e.target.value)}
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
          <select
            className="w-full mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px] text-[#BEC1C3]"
            value={currentlyStudy}
            onChange={(e) => setCurrentlyStudy(e.target.value)}
          >
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
              <select
                className="w-[48%] mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-2 px-[11px] text-[#BEC1C3]"
                value={fromMonth}
                onChange={(e) => setFromMonth(e.target.value)}
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
              <select
                className="w-[48%] mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-2 px-[11px] text-[#BEC1C3]"
                value={fromYear}
                onChange={(e) => setFromYear(e.target.value)}
              >
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
              <select
                className="w-[48%] mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-2 px-[11px] text-[#BEC1C3]"
                value={tillMonth}
                onChange={(e) => setTillMonth(e.target.value)}
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
              <select
                className="w-[48%] mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-2 px-[11px] text-[#BEC1C3]"
                value={tillYear}
                onChange={(e) => setTillYear(e.target.value)}
              >
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
              <select
                className="w-full mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px] text-[#BEC1C3]"
                value={currentlyYear}
                onChange={(e) => setCurrentlyYear(e.target.value)}
              >
                <option>Year</option>
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
              </select>
            </div>
            <div className="w-[46%]">
              <select
                className="w-full mt-1 border-[1px] border-[#BEC1C3] rounded-[100px] outline-none py-[11px] sm:pt-[7px] sm:pb-[10px] ps-[26px] pe-[28px] text-[#BEC1C3]"
                value={currentlySemester}
                onChange={(e) => setCurrentlySemester(e.target.value)}
              >
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
