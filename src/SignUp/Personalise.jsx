import React from "react";
import BackIcon from "../assets/images/svg/back arrow icon.svg";
import CloseIcon from "../assets/images/svg/close icon.svg";
import Interests from "./Interests";
import UserName from "./UserName";
import EducationDetail from "./EducationDetail";
import EditEducationalDetail from "./EditEducationalDetail";
import ProfessionalDetail from "./ProfessionalDetail";
import EditProfessionalDetail from "./EditProfessionalDetail";
import RecommendedPeople from "./RecommendedPeople";

function Personalise() {
    return (
        <>
            <div className="backdrop-blur-[10px] z-50 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100vh] w-full"></div>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white w-full sm:w-[540px] mx-auto sm:rounded-[40px] py-[43px] px-[22px] sm:shadow-[0_8px_20px_0_rgba(0,0,0,0.2)] z-50">
                    <div className="flex items-center sm:justify-between">
                        <button>
                            <img className="w-[16px]" src={BackIcon} />
                        </button>
                        <p className="ff_inter text-base font-semibold ms-[6px] sm:ms-0">Personalise</p>
                        <button className="hidden sm:block">
                            <img className="w-[26px]" src={CloseIcon} />
                        </button>
                    </div>
                    <div className="max-w-[427px] mx-auto mt-4 sm:mt-9">
                        <div className="flex items-center justify-between">
                            <span className="w-[19%] h-[6px] bg-[#EBF2FF] rounded-md"></span>
                            <span className="w-[19%] h-[6px] bg-[#EBF2FF] rounded-md"></span>
                            <span className="w-[19%] h-[6px] bg-[#EBF2FF] rounded-md"></span>
                            <span className="w-[19%] h-[6px] bg-[#EBF2FF] rounded-md"></span>
                            <span className="w-[19%] h-[6px] bg-[#EBF2FF] rounded-md"></span>
                        </div>
                          {/* <Interests/> */}
                          {/* <UserName/> */}
                          {/* <EducationDetail/> */}
                          {/* <EditEducationalDetail/> */}
                          {/* <ProfessionalDetail/> */}
                          {/* <EditProfessionalDetail/> */}
                          <RecommendedPeople/>
                        <div className="text-center mt-4 sm:mt-9">
                            <button className="ff_inter font-normal text-sm sm:text-base text-white py-4 bg-[#4D8AFF] rounded-[100px] w-[90%] sm:w-[70%]">Continue</button>
                        </div>
                        <div className="text-center mt-6">
                            <button className="ff_inter font-normal text-sm sm:text-base text-[#000000] py-4 border-[1px] border-[#BEC1C3] rounded-[100px] w-[90%] sm:w-[70%]">Skip</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Personalise;
