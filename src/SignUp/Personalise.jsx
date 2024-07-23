import React, { useState } from "react";
import BackIcon from "../assets/images/svg/back arrow icon.svg";
import CloseIcon from "../assets/images/svg/close icon.svg";
import Interests from "./Interests";
import UserName from "./UserName";
import EducationDetail from "./EducationDetail";
import ProfessionalDetail from "./ProfessionalDetail";
import RecommendedPeople from "./RecommendedPeople";
import EditEducationalDetail from "./EditEducationalDetail";
import EditProfessionalDetail from "./EditProfessionalDetail";

function Personalise() {
  const [currentStep, SetCurrentStep] = useState(0);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [isEditingProfessional, setIsEditingProfessional] = useState(false);
  const [educationData,setEducationData] = useState(null)
  const [professionalData,setProfessionalData] = useState(null)

  const steps = [
    <Interests />,
    <UserName />,
    <EducationDetail onAdd={(data) => {
        setIsEditingEducation(true)
        setEducationData(data)
    }} />,
    <ProfessionalDetail onAdd={(data) => {
      setIsEditingProfessional(true)
      setProfessionalData(data)
      }
    } />,
    <RecommendedPeople />,
  ];

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      SetCurrentStep(currentStep + 1);
      setIsEditingEducation(false);
      setIsEditingProfessional(false);
    }
  };

  const handleSkip = () => {
    if (currentStep < steps.length - 1) {
      SetCurrentStep(currentStep + 1);
      setIsEditingEducation(false);
      setIsEditingProfessional(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      SetCurrentStep(currentStep - 1);
      setIsEditingEducation(false);
      setIsEditingProfessional(false);
    }
  };

  return (
    <>
      <div className="backdrop-blur-[10px] z-50 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100vh] w-full"></div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white w-full sm:w-[540px] mx-auto sm:rounded-[40px] py-[43px] px-[22px] sm:shadow-[0_8px_20px_0_rgba(0,0,0,0.2)] z-50">
          <div className="flex items-center sm:justify-between">
            <button onClick={handleBack}>
              <img className="w-[16px]" src={BackIcon} />
            </button>
            <div className="flex items-center flex-col">
              <p className="ff_inter text-base font-semibold ms-[6px] sm:ms-0">
                Personalise
              </p>
              {currentStep == 2 ? (
                <p className="ff_inter font-normal text-sm text-[#000000]">
                  Educational details
                </p>
              ) : (
                ""
              )}
              {currentStep == 3 ? (
                <p className="ff_inter font-normal text-sm text-[#000000]">
                  Professional details
                </p>
              ) : (
                ""
              )}
            </div>
            <button className="hidden sm:block">
              <img className="w-[26px]" src={CloseIcon} />
            </button>
          </div>
          <div className="max-w-[427px] mx-auto mt-4 sm:mt-9">
            <div className="flex items-center justify-between">
              {steps.map((_, index) => (
                <span
                  key={index}
                  className={`w-[19%] h-[6px] rounded-md ${
                    index == currentStep ? "bg-[#4D8AFF]" : "bg-[#EBF2FF]"
                  }`}
                ></span>
              ))}
            </div>
            {isEditingEducation && currentStep == 2 ? (
              <EditEducationalDetail DataOfEducation={educationData} />
            ) : isEditingProfessional && currentStep == 3 ? (
              <EditProfessionalDetail DataOfProfession={professionalData} />
            ) : (
              steps[currentStep]
            )}
            <div className="text-center mt-4 sm:mt-9">
              <button
                className="ff_inter font-normal text-sm sm:text-base text-white py-4 bg-[#4D8AFF] rounded-[100px] w-[90%] sm:w-[70%]"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
            {(currentStep === 2 || currentStep === 3) && (
              <div className="text-center mt-6">
                <button
                  className={`ff_inter font-normal text-sm sm:text-base text-[#000000] py-4 border-[1px] border-[#BEC1C3] rounded-[100px] w-[90%] sm:w-[70%]`}
                  onClick={handleSkip}
                >
                  Skip
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Personalise;
