import React from "react";
import Logo from "../assets/images/png/HomeLogo.png";
import Search from "../assets/images/png/icon.png";
import User from "../assets/images/png/User.png";
import { Link, useLocation } from "react-router-dom";
import { Create, HomeIcon, Notifications, Settings, Stream } from "./icon";

export default function navbar() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="fixed w-full top-0">
        <div className="w-full mx-auto h-[75px] lg:flex bg-[#EEEFEF]  lg:py-2 px-7  lg:justify-between">
          <div className="flex items-center justify-between  w-full">
            <div className="flex items-center">
              <img className="w-100" src={Logo} alt="Home Logo" />
              <div className="rounded-[33px] bg-white flex items-center justify-between px-[21px]  w-[260px] xl:w-[360px] ms-[41px]">
                <input
                  className="bg-transparent  pe-2 focus:outline-none w-full"
                  type="text"
                  id="input"
                  placeholder="Search"
                />

                <label for="input">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6398_12362)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.7861 26.0242L34.6621 32.9002L32.8741 34.6882L25.9981 27.8122C24.7141 28.7362 23.1661 29.3002 21.4741 29.3002C17.1661 29.3002 13.6741 25.8082 13.6741 21.5002C13.6741 17.1922 17.1661 13.7002 21.4741 13.7002C25.7821 13.7002 29.2741 17.1922 29.2741 21.5002C29.2741 23.1922 28.7101 24.7402 27.7861 26.0242ZM21.4741 16.1002C18.4861 16.1002 16.0741 18.5122 16.0741 21.5002C16.0741 24.4882 18.4861 26.9002 21.4741 26.9002C24.4621 26.9002 26.8741 24.4882 26.8741 21.5002C26.8741 18.5122 24.4621 16.1002 21.4741 16.1002Z"
                        fill="#BEC1C3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6398_12362">
                        <rect
                          x="0.473877"
                          y="0.5"
                          width="48"
                          height="48"
                          rx="24"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </label>
              </div>
            </div>
            <div className="flex gap-4 items-center ">
              <div className="flex lg:px-4 max-lg:py-[6.4px]  items-center lg:pb-1 lg:border-b-[2px] border-transparent">
                <Link className={` ${location.pathname ? "nav_Link" : ""} `}>
                  <HomeIcon />
                  <p className="text-[14px] font-normal ">Home</p>
                </Link>
              </div>
              <div className="flex lg:px-4 max-lg:py-[6.4px]  items-center lg:pb-1 lg:border-b-[2px] border-transparent">
                <Link>
                  <Stream />
                  <p className="text-[14px] font-normal ">By stream</p>
                </Link>
              </div>
              <div className="flex lg:px-4 max-lg:py-[6.4px]  items-center lg:pb-1 lg:border-b-[2px] border-transparent">
                <Link>
                  <Create />
                  <p className="text-[14px] font-normal nav_Link">Create</p>
                </Link>
              </div>
              <div className="flex lg:px-4 max-lg:py-[6.4px]  items-center lg:pb-1 lg:border-b-[2px] border-transparent">
                <Link>
                  <Settings />
                  <p className="text-[14px] font-normal nav_Link">Settings</p>
                </Link>
              </div>
              <div className="flex lg:px-4 max-lg:py-[6.4px]  items-center lg:pb-1 lg:border-b-[2px] border-transparent">
                <Link>
                  <Notifications />
                  <p className="text-[14px] font-normal nav_Link">
                    Notifications
                  </p>
                </Link>
              </div>
              <div className="flex lg:px-4 max-lg:py-[6.4px]  items-center lg:pb-1 lg:border-b-[2px] border-transparent">
                <Link>
                  <img src={User} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
