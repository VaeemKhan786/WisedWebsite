import React from "react";
import Search from "../assets/images/svg/search.svg";
import { data } from "../pages/Data";

function RecommendedPeople() {
  return (
    <div>
      <p className="mt-3 ff_inter font-medium text-base text-[#000000] text-center">
        Recommended people
      </p>
      <p className="mt-3 ff_inter font-medium text-sm sm:text-base text-[#BEC1C3] text-center">
        Choose 5 or more
      </p>
      <div className="flex items-center justify-center mt-3">
        <img className="h-[14px] sm:h-[23px]" src={Search} />
        <input
          className="outline-none ps-3 w-[112px]"
          placeholder="| Looking for...."
        />
      </div>
     <div className="mt-8 h-[300px] overflow-y-auto">
     {data.recommended.map((item,index)=>{
        return (
            <div key={index} className={`flex items-center justify-between ${index != 0 ? "mt-4" : ""}`}>
                <div className="flex items-center">
                    <img src={item.src}/>
                    <div className="ms-2">
                        <p className="ff_inter font-medium text-xs sm:text-lg text-[#000000] ">{item.name}</p>
                        <p className="ff_inter text-[10px] sm:text-base font-normal text-[#303135] mt-1">{item.post}</p>
                    </div>
                </div>
                <div>
                    <button className="border-[1px] rounded-[100px] p-2 sm:px-4 sm:py-[10px] text-sm ff_inter font-normal text-[#000000]">Follow</button>
                </div>
            </div>
        )
      })}
     </div>
    </div>
  );
}

export default RecommendedPeople;
