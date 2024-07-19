import React, { useState } from "react";
import Search from "../assets/images/svg/search.svg";
import Tick from "../assets/images/svg/tick.svg";
import { data } from "../pages/Data";

function Interests() {
  const [clicked, setClicked] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  function handleCliced(i) {
    setClicked((prevClicked) => {
      if (prevClicked.includes(i)) {
        return prevClicked.filter((index) => index !== i);
      } else {
        return [...prevClicked, i];
      }
    });
  }

  const filteredButtons = data.buttons.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <p className="mt-3 ff_inter font-medium text-base text-[#000000] text-center">
        What interests you ?
      </p>
      <p className="mt-3 ff_inter font-medium text-sm sm:text-base text-[#BEC1C3] text-center">
        Choose 5 or more
      </p>
      <div className="flex items-center justify-center mt-3">
        <img className="h-[14px] sm:h-[23px]" src={Search} />
        <input
          className="outline-none ps-3 w-[112px]"
          placeholder="| Looking for...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
      </div>
      <div className="flex items-center justify-center gap-5 flex-wrap mt-3 h-[280px] overflow-y-auto">
        {filteredButtons.length > 0 ? (
          filteredButtons.map((item, index) => {
            const isClicked = clicked.includes(index);
            return (
              <button
                onClick={() => handleCliced(index)}
                key={index}
                className={`text-xs sm:text-base font-normal ff_inter text-[#4D8AFF] px-[18px] py-[6px] border-[0.51px] border-[#4D8AFF] rounded-md flex items-center ${
                  isClicked ? "bg-[#EBF2FF]" : ""
                }`}
              >
                <img
                  className={`me-2 ${isClicked ? "block" : "hidden"}`}
                  src={Tick}
                />
                {item}
              </button>
            );
          })
        ) : (
          <p className="text-sm sm:text-base text-center text-[#BEC1C3]">
            Element not found
          </p>
        )}
      </div>
    </div>
  );
}

export default Interests;
