import React, { useRef } from "react";
import Slider from "react-slick";
import User from "../assets/images/png/UserPost.png";
import UserId from "../assets/images/png/UserId.png";
import PostId from "../assets/images/png/PostId.png";
import Similar from "../assets/images/png/Similar.png";
import Similar2 from "../assets/images/png/Similar2.png";
import Slider_img from "../assets/images/png/Slider.png";
import { Link } from "react-router-dom";

export default function Postviewed() {
  //  var settings = {
  //    dots: true,
  //    infinite: true,
  //    speed: 500,
  //    slidesToShow: 1,
  //    slidesToScroll: 1,
  //  };
  const sliderRef = useRef();
  const settings = {
    // dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //    nextArrow: "NextArrow",
    //    prevArrow: "PrevArrow",
  };
  return (
    <>
      <div className="all_content">
        <div>
          <div className=" max-w-[1800px] mx-auto sm:px-6 px-4 lg:pt-[26px] sm:pt-[31px] flex pb-5 max-lg:flex-col">
            <div className=" w-3/4 max-lg:w-full">
              <div className=" flex justify-between pb-[10px] sm:pb-4">
                <button>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.15898 13.8666C7.36292 14.0528 7.67918 14.0384 7.86536 13.8345C8.05154 13.6305 8.03714 13.3143 7.8332 13.1281L1.66535 7.49736H15.4961C15.7722 7.49736 15.9961 7.2735 15.9961 6.99736C15.9961 6.72122 15.7722 6.49736 15.4961 6.49736H1.66824L7.8332 0.86927C8.03714 0.68309 8.05154 0.366835 7.86536 0.162895C7.67918 -0.0410457 7.36292 -0.0554433 7.15898 0.130737L0.242631 6.44478C0.102683 6.57254 0.0228539 6.74008 0.00314236 6.91323C-0.0014925 6.94058 -0.00390625 6.96869 -0.00390625 6.99736C-0.00390625 7.02423 -0.00178671 7.05061 0.00229454 7.07633C0.0204692 7.25224 0.100582 7.4229 0.242631 7.55258L7.15898 13.8666Z"
                      fill="#303135"
                    />
                  </svg>
                </button>
              </div>
              <div className="lg:px-15">
                <div className="flex justify-between">
                  <Link>
                    <div className="flex items-center pb-4">
                      <div className="sm:pr-[10px] pr-[14px]">
                        <img
                          className="max-md:w-[39px] max-md:h-[39px]"
                          src={User}
                          alt="post_as_view_user"
                        />
                      </div>
                      <div>
                        <p className="sm:font-bold font-medium sm:text-lg text-sm">
                          Aadya Rathore
                        </p>
                        <p className="text-normal sm:text-base text-xs md:text-sm">
                          HOD of Physics
                          <span className="text-grey font-normal sm:text-base text-xs pl-2">
                            22h
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="relative">
                    <button className="max-sm:rotate-90">
                      <svg
                        width="15"
                        height="4"
                        viewBox="0 0 15 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.164 0.284424C1.22033 0.284424 0.448242 1.05652 0.448242 2.00018C0.448242 2.94385 1.22033 3.71595 2.164 3.71595C3.10767 3.71595 3.87976 2.94385 3.87976 2.00018C3.87976 1.05652 3.10767 0.284424 2.164 0.284424ZM12.4586 0.284423C11.5149 0.284423 10.7428 1.05652 10.7428 2.00018C10.7428 2.94385 11.5149 3.71594 12.4586 3.71594C13.4022 3.71594 14.1743 2.94385 14.1743 2.00018C14.1743 1.05652 13.4022 0.284423 12.4586 0.284423ZM7.31129 0.284423C6.36762 0.284424 5.59552 1.05652 5.59552 2.00018C5.59552 2.94385 6.36762 3.71594 7.31129 3.71594C8.25495 3.71594 9.02705 2.94385 9.02705 2.00018C9.02705 1.05652 8.25495 0.284423 7.31129 0.284423Z"
                          fill="#303135"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="lg:pb-0 sm:pb-6 pb-0 sm:mb-9 mb-[9px] text-sm sm:text-base md:text-md sm:font-normal">
                  We cover everything you need to build your first website. From
                  creating your first page through to uploading your website to
                  the internet. We’ll use the world’s most popular (and free)
                  web design tool called Visual Studio Code. There are exercise
                  files you can download and then work along with me. At the end
                  of each video I have a downloadable version of where we are in
                  the process so that you can compare your project with mine.
                  This will enable you to see easily where you might have a
                  problem. We will delve into all the good stuff such as how to
                  create your very own mobile burger menu from scratch learning
                  some basic JavaScript and jQuery. If that all sounds a little
                  too fancy - don’t worry, this course is aimed at people new to
                  web design and who have never coded before. We’ll start right
                  at the beginning and work our way through step by step. In ut
                  aliquet ante. Curabitur mollis tincidunt turpis, sed aliquam
                  mauris finibus vel. Praesent eget mi in mi maximus egestas.
                  Mauris eget ipsum in justo bibendum pellentesque. Sed id arcu
                  in arcu ullamcorper eleifend condimentum quis diam. Phasellus
                  tempus, urna ut auctor mattis, nisi nunc tincidunt lorem, eu
                  egestas augue lectus sit amet sapien. Maecenas tristique
                  aliquet massa, a venenatis augue tempor in. Aliquam turpis
                  urna, imperdiet in lacus a, posuere suscipit augue. Nullam non
                  quam a lectus finibus varius nec a orci. Aliquam efficitur sem
                  cursus elit efficitur lacinia Morbi sit amet pretium tellus.
                  Donec blandit fermentum tincidunt. Proin iaculis sem et
                  imperdiet tristique. Nam varius ac nisl id sodales. Donec
                  iaculis interdum mattis. Curabitur posuere ultricies diam in
                  egestas. Donec id diam et lacus pharetra vestibulum a id est.
                  Mauris vestibulum massa quis elit feugiat, dictum maximus
                  ipsum pellentesque. Sed elementum, libero id lacinia aliquet,
                  purus nibh consectetur mauris, eget interdum mi lacus vitae
                  sem. Donec congue aliquam lorem nec congue. Suspendisse eu
                  risus mattis, interdum ante sed, fringilla urna. Praesent
                  mattis dictum sapien a lacinia. Ut scelerisque magna.
                </p>
                <div className="rounded-[16px] sm:rounded-[31px] bg-[#F8F8F8] lg:py-6 sm:py-7 py-3 overflow-hidden relative">
                  <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="bg-white flex items-center justify-center sm:w-[37px] w-[19px] sm:h-[37px] h-[19px] rounded-[50%] absolute top-1/2 right-[26px] sm:right-[38px] md:right-[59px] -translate-y-1/2 slider_btn z-50"
                  >
                    <svg
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.359316 18.7733C0.0175977 18.4315 0.0175977 17.8775 0.359316 17.5358L8.19915 9.69594L0.359315 1.8561C0.017597 1.51439 0.0175969 0.96035 0.359315 0.618632C0.701034 0.276913 1.25507 0.276913 1.59679 0.618632L10.0554 9.07721C10.3971 9.41892 10.3971 9.97296 10.0554 10.3147L1.59679 18.7733C1.25507 19.115 0.701035 19.115 0.359316 18.7733Z"
                        fill="#303135"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="bg-white flex items-center justify-center sm:w-[37px] w-[19px] sm:h-[37px] h-[19px] rounded-[50%] absolute top-1/2 left-[26px] sm:left-[38px] md:left-[59px] -translate-y-1/2 rotate-180 slider_btn z-10"
                  >
                    <svg
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.359316 18.7733C0.0175977 18.4315 0.0175977 17.8775 0.359316 17.5358L8.19915 9.69594L0.359315 1.8561C0.017597 1.51439 0.0175969 0.96035 0.359315 0.618632C0.701034 0.276913 1.25507 0.276913 1.59679 0.618632L10.0554 9.07721C10.3971 9.41892 10.3971 9.97296 10.0554 10.3147L1.59679 18.7733C1.25507 19.115 0.701035 19.115 0.359316 18.7733Z"
                        fill="#303135"
                      ></path>
                    </svg>
                  </button>

                  {/* <div className="w-full flex justify-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden text-center xxl:h-[600px]">
                    <img src={Slider} alt="slider_img" />
                  </div> */}

                  <div className=" sm:px-12 px-7 max-sm:py-3 max-sm:px-7 flex justify-between sm:pb-7 pb-3">
                    <p className="font-semibold sm:text-[18px] xl:text-lg text-sm">
                      Title of the document
                    </p>
                    <p className="font-semibold sm:text-[18px] xl:text-lg text-sm">
                      Notes
                    </p>
                  </div>
                  <Slider ref={sliderRef} {...settings}>
                    <div className="w-full flex justify-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden text-center xxl:h-[600px]">
                      <img
                        className="w-full flex justify-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden text-center xxl:h-[600px]"
                        src={Slider_img}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                    <div>
                      <h3>5</h3>
                    </div>
                    <div>
                      <h3>6</h3>
                    </div>
                  </Slider>
                  <div className=" sm:px-12 px-7 max-sm:py-3 max-sm:px-7 flex justify-between sm:pt-7 pt-3">
                    <p className="font-semibold sm:text-md xl:text-lg text-xs">
                      1/4 <button className="ms-6 text-primary"></button>
                    </p>
                    <a className="max_icon" href="/showpdf" target="_blank">
                      <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.05664 10.2034C7.05664 8.03293 8.81613 6.27344 10.9866 6.27344H14.9165C15.4591 6.27344 15.899 6.71331 15.899 7.25592C15.899 7.79853 15.4591 8.23841 14.9165 8.23841H10.9866C9.90136 8.23841 9.02161 9.11815 9.02161 10.2034V14.1333C9.02161 14.6759 8.58174 15.1158 8.03912 15.1158C7.49651 15.1158 7.05664 14.6759 7.05664 14.1333V10.2034ZM25.7238 7.25592C25.7238 6.71331 26.1637 6.27344 26.7063 6.27344H30.6363C32.8067 6.27344 34.5662 8.03293 34.5662 10.2034V14.1333C34.5662 14.6759 34.1263 15.1158 33.5837 15.1158C33.0411 15.1158 32.6012 14.6759 32.6012 14.1333V10.2034C32.6012 9.11815 31.7215 8.23841 30.6363 8.23841H26.7063C26.1637 8.23841 25.7238 7.79853 25.7238 7.25592ZM8.03912 24.9406C8.58174 24.9406 9.02161 25.3805 9.02161 25.9231V29.8531C9.02161 30.9383 9.90136 31.818 10.9866 31.818H14.9165C15.4591 31.818 15.899 32.2579 15.899 32.8005C15.899 33.3431 15.4591 33.783 14.9165 33.783H10.9866C8.81613 33.783 7.05664 32.0235 7.05664 29.8531V25.9231C7.05664 25.3805 7.49651 24.9406 8.03912 24.9406ZM33.5837 24.9406C34.1263 24.9406 34.5662 25.3805 34.5662 25.9231V29.8531C34.5662 32.0235 32.8067 33.783 30.6363 33.783H26.7063C26.1637 33.783 25.7238 33.3431 25.7238 32.8005C25.7238 32.2579 26.1637 31.818 26.7063 31.818H30.6363C31.7215 31.818 32.6012 30.9383 32.6012 29.8531V25.9231C32.6012 25.3805 33.0411 24.9406 33.5837 24.9406Z"
                          fill="#242424"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-center sm:pt-8 pt-[9px]">
                  <div className="sm:mr-12 mr-6 flex items-center">
                    <span className="inline-block sm:pr-[5px] pr-[3px] like_icon cursor-pointer ">
                      <svg
                        width="29"
                        height="34"
                        viewBox="0 0 29 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8132 2.19304C15.3088 0.959082 16.697 -0.366428 18.4751 0.127778C19.8737 0.516469 20.7822 1.36208 21.3014 2.48858C21.7854 3.53859 21.9042 4.77452 21.9269 5.95234C21.9512 7.21928 21.6866 8.73927 21.3752 10.0686C21.23 10.6883 21.07 11.2856 20.9138 11.8225H24.1951C27.3575 11.8225 29.6324 14.8614 28.7415 17.8958L25.5094 28.9031C24.5756 32.0835 21.2138 33.8785 18.0515 32.8852L5.36248 28.8995C3.97178 28.4627 2.85954 27.41 2.34684 26.0455L1.11488 22.7667C0.305512 20.6125 1.16084 18.1883 3.14279 17.019L7.57763 14.4026C7.58645 14.3964 7.59926 14.3873 7.61588 14.375C7.66462 14.3391 7.7462 14.2765 7.85592 14.1835C8.07524 13.9975 8.40775 13.6894 8.81576 13.2292C9.63089 12.3098 10.7536 10.7764 11.8771 8.38539C12.3625 7.35247 12.7708 6.5405 13.1417 5.80307C13.7411 4.61109 14.2426 3.61385 14.8132 2.19304ZM8.85358 16.3995C8.84014 16.4081 8.82655 16.4166 8.81279 16.4247L4.34663 19.0595C3.35566 19.6442 2.92799 20.8563 3.33268 21.9334L4.56463 25.2122C4.82098 25.8945 5.3771 26.4208 6.07245 26.6392L18.7615 30.6249C20.6588 31.2209 22.6759 30.1438 23.2362 28.2357L26.4683 17.2283C26.9138 15.7111 25.7763 14.1917 24.1951 14.1917H19.2931C18.9084 14.1917 18.5477 14.0048 18.3257 13.6906C18.1037 13.3764 18.0481 12.974 18.1766 12.6113C18.4135 11.9431 18.7739 10.7852 19.0684 9.5282C19.3671 8.25323 19.5767 6.96401 19.5581 5.9979C19.5368 4.88839 19.4192 4.06476 19.1498 3.48032C18.9157 2.97237 18.5539 2.60864 17.8407 2.41043C17.7386 2.38205 17.6196 2.39033 17.4633 2.49291C17.2927 2.60495 17.1181 2.81105 17.0117 3.07594C16.4107 4.57263 15.8357 5.71896 15.1992 6.98775C14.8325 7.71871 14.4455 8.49032 14.0213 9.39297C12.8038 11.9839 11.5573 13.7082 10.5885 14.8009C10.1046 15.3467 9.69146 15.7333 9.38813 15.9905C9.23653 16.1191 9.11252 16.2151 9.02102 16.2826C8.97527 16.3163 8.93766 16.3428 8.9088 16.3626L8.87216 16.3873L8.85891 16.396L8.85358 16.3995ZM7.56631 14.4105L7.56347 14.4124Z"
                          fill="black"
                        />
                      </svg>
                    </span>

                    <span className="lg:text-xxl sm:text-lg text-base font-normal ms-1">
                      0
                    </span>
                  </div>
                  <div className="sm:mr-12 mr-6 flex items-center">
                    <span className="  like_icon pr-[3px] cursor-pointer ">
                      <svg
                        width="29"
                        height="34"
                        viewBox="0 0 29 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.7239 30.9879C15.2194 32.2218 16.6076 33.5473 18.3858 33.0531C19.7843 32.6644 20.6928 31.8188 21.212 30.6923C21.696 29.6423 21.8148 28.4064 21.8375 27.2286C21.8619 25.9616 21.5972 24.4416 21.2858 23.1123C21.1406 22.4926 20.9806 21.8953 20.8245 21.3584H24.1057C27.2682 21.3584 29.5431 18.3195 28.6521 15.2851L25.4201 4.27778C24.4862 1.09745 21.1244 -0.69755 17.9621 0.295734L5.27313 4.28142C3.88243 4.71825 2.77019 5.77087 2.25748 7.13542L1.02553 10.4142C0.216156 12.5684 1.07149 14.9926 3.05344 16.1619L7.48828 18.7783C7.49709 18.7845 7.50991 18.7936 7.52653 18.8059C7.57527 18.8418 7.65684 18.9044 7.76656 18.9974C7.98588 19.1834 8.3184 19.4915 8.72641 19.9517C9.54154 20.8711 10.6642 22.4045 11.7877 24.7955C12.2731 25.8284 12.6815 26.6404 13.0523 27.3778C13.6518 28.5698 14.1533 29.5671 14.7239 30.9879ZM8.76423 16.7814C8.75078 16.7728 8.7372 16.7644 8.72343 16.7562L4.25728 14.1214C3.2663 13.5367 2.83864 12.3246 3.24332 11.2475L4.47528 7.96872C4.73163 7.28644 5.28775 6.76013 5.9831 6.54172L18.6721 2.55603C20.5695 1.96006 22.5866 3.03706 23.1469 4.94525L26.3789 15.9526C26.8244 17.4698 25.6869 18.9892 24.1057 18.9892H19.2038C18.8191 18.9892 18.4583 19.1761 18.2363 19.4903C18.0143 19.8045 17.9587 20.2069 18.0873 20.5696C18.3241 21.2379 18.6846 22.3957 18.9791 23.6527C19.2778 24.9277 19.4873 26.2169 19.4688 27.183C19.4474 28.2925 19.3298 29.1162 19.0604 29.7006C18.8263 30.2085 18.4645 30.5723 17.7514 30.7705C17.6492 30.7989 17.5302 30.7906 17.374 30.688C17.2033 30.576 17.0287 30.3699 16.9224 30.105C16.3213 28.6083 15.7463 27.4619 15.1099 26.1932C14.7432 25.4622 14.3561 24.6906 13.932 23.7879C12.7145 21.197 11.468 19.4727 10.4992 18.38C10.0152 17.8342 9.60211 17.4476 9.29878 17.1904C9.14717 17.0619 9.02317 16.9658 8.93166 16.8984C8.88591 16.8647 8.8483 16.8381 8.81945 16.8183L8.78281 16.7936L8.76956 16.7849L8.76423 16.7814ZM7.47696 18.7704L7.47411 18.7685Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                  <button className="share_icon cursor-pointer">
                    <svg
                      width="33"
                      height="34"
                      viewBox="0 0 33 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.434 2.87656C25.9192 2.87656 24.6913 4.10454 24.6913 5.61933C24.6913 7.13411 25.9192 8.36209 27.434 8.36209C28.9488 8.36209 30.1768 7.13411 30.1768 5.61933C30.1768 4.10454 28.9488 2.87656 27.434 2.87656ZM21.9485 5.61933C21.9485 2.58975 24.4045 0.133789 27.434 0.133789C30.4636 0.133789 32.9196 2.58975 32.9196 5.61933C32.9196 8.6489 30.4636 11.1049 27.434 11.1049C25.7828 11.1049 24.302 10.3753 23.2964 9.22097L10.8568 15.4408C10.9358 15.8115 10.9774 16.1961 10.9774 16.5904C10.9774 16.9847 10.9358 17.3692 10.8568 17.74L23.2964 23.9598C24.3021 22.8055 25.7829 22.0759 27.434 22.0759C30.4636 22.0759 32.9196 24.5319 32.9196 27.5615C32.9196 30.591 30.4636 33.047 27.434 33.047C24.4045 33.047 21.9485 30.591 21.9485 27.5615C21.9485 27.1674 21.99 26.7831 22.069 26.4126L9.62905 20.1926C8.62341 21.3466 7.14281 22.0759 5.49188 22.0759C2.46231 22.0759 0.00634766 19.62 0.00634766 16.5904C0.00634766 13.5608 2.46231 11.1049 5.49188 11.1049C7.14279 11.1049 8.62336 11.8342 9.62901 12.9881L22.069 6.76816C21.99 6.39768 21.9485 6.01335 21.9485 5.61933ZM2.74912 16.5904C2.74912 18.1052 3.97709 19.3332 5.49188 19.3332C7.00667 19.3332 8.23465 18.1052 8.23465 16.5904C8.23465 15.0756 7.00667 13.8476 5.49188 13.8476C3.97709 13.8476 2.74912 15.0756 2.74912 16.5904ZM24.6913 27.5615C24.6913 29.0763 25.9192 30.3042 27.434 30.3042C28.9488 30.3042 30.1768 29.0763 30.1768 27.5615C30.1768 26.0467 28.9488 24.8187 27.434 24.8187C25.9192 24.8187 24.6913 26.0467 24.6913 27.5615Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/4 mt-[92px] max-lg:w-full lg:ps-7 hidden lg:block">
              <div className="border-2 border-[#EEEFEF] mb-6 rounded-[11px]">
                <Link>
                  <div className="relative max-xl:max-w-[270px] max-xl:mx-auto">
                    <img
                      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[114px] h-[114px]"
                      src={UserId}
                      alt="post_as_view_user_bg"
                    />

                    <img
                      className="w-full"
                      src={PostId}
                      alt="post_as_view_user_bg"
                    />
                  </div>
                </Link>
                <div className="text-center pb-3">
                  <p className="pb-6 text-xl font-semibold mt-3">
                    Aadya Rathore
                  </p>
                  <p className="pb-1 font-normal text-base">HOD of Physics</p>
                  <p className=" font-normal text-base">at BITS Pilani</p>
                  <p className="font-semibold text-base py-6 pb-8">
                    1000 Followers
                  </p>
                  <div className="mb-3">
                    <button>
                      <div className="inline-block">
                        <div className="h-[40px]  justify-center items-center bg-[#4D8AFF] flex rounded-[100px] ">
                          <button className=" text-white font-normal lg:text-base text-sm h-[40px] md:h-[50px] lg:h-[60px] w-[106px] md:w-[132px] flex items-center justify-center lg:px-10 bg-[#4D8AFF] rounded-[100px] mx-auto sm:px-7 px-6">
                            Follow
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-2 border-[#EEEFEF] overflow-hidden px-2 py-3 rounded-2xl">
                <p className="text-center text-xl font-semibold pb-4">
                  Similar
                </p>
                <div className="p-[15px] rounded-[10px] bg-[#F8F8F8] mb-4">
                  <a href="/userPost">
                    <div className="flex items-center max-2xl:flex-col max-2xl:items-start max-2xl:gap-3">
                      <img src={Similar} alt="" className=" pr-4" />
                      <p className=" text-base font-normal">
                        In ut aliquet ante. Curabitur mollis tincidunt turpis,
                        sed aliquam mauris finibus vel...
                      </p>
                    </div>
                  </a>
                </div>
                <div className="p-[15px] rounded-[10px] bg-[#F8F8F8] mb-4">
                  <p className=" font-semibold text-base">Write - Up Topic</p>
                  <p className=" text-base font-normal">
                    In ut aliquet ante. Curabitur mollis tincidunt turpis, sed
                    aliquam mauris finibus vel. Praesent eget mi in mi maximus
                    egestas. Praesent eget mi in mi maximus egestas. tincidunt
                    turpis, sed aliquam mauris finibus vel...
                  </p>
                </div>
              </div>
              <div className="p-[15px] rounded-[10px] bg-[#F8F8F8] mb-4">
                <a href="/userPost">
                  <div className="flex items-center max-2xl:flex-col max-2xl:items-start max-2xl:gap-3">
                    <img src={Similar2} alt="" className=" pr-4" />
                    <p className=" text-base font-normal">
                      In ut aliquet ante. Curabitur mollis tincidunt turpis, sed
                      aliquam mauris finibus vel...
                    </p>
                  </div>
                </a>
              </div>
              <div className="p-[15px] rounded-[10px] bg-[#F8F8F8]">
                <p className=" font-semibold text-base">Write - Up Topic</p>
                <p className=" text-base font-normal">
                  In ut aliquet ante. Curabitur mollis tincidunt turpis, sed
                  aliquam mauris finibus vel. Praesent eget mi in mi maximus
                  egestas. Praesent eget mi in mi maximus egestas. tincidunt
                  turpis, sed aliquam mauris finibus vel...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
