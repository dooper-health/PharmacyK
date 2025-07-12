import React from "react";
import SideBar from "./SideBar";
import dooper from "../assets/dooper.png";
import india from "../assets/india.png";
import arrow from "../assets/arrow.png";
import rect from "../assets/rect.png";
import square from "../assets/square.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className=" flex  p-[24px]   bg-[#FFFFFF]  min-h-screen overflow-y-hidden ">
        <SideBar />
        <div className="w-[800px]  flex-1 ml-[32px] bg-white top-[24px] left-[616px] justify-between p-[48px] ">
          <img
            src={dooper}
            alt="dooper"
            className="mx-auto h-[50px] w-[170px]"
          />
          <div className="font-Montserrat h-[44px] w-[159px] text-[32px] font-[700] leading-[44px] text-center mx-auto mt-[166px] ">
            Welcome
          </div>
          <div className=" text-[#1A1C1F] ml-[192px] mt-[2px] font-big text-[14px] mb-[40px] font-[500] leading-[116%]">
            {" "}
            Welcome to <span className="font-[600] text-[#E40443]">DOOPER</span>
            , please enter your details
          </div>
          <label
            htmlFor=""
            className="text-[#8D98A4]  h-[14px] w-[85px] ml-[148px]  text-[12px] font-[400] "
          >
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter your phone number"
            className="flex text-center placeholder-[#5B6572]  text-[red] font-Montserrat  text-[14px] font-medium mx-auto w-[416px] h-[44px] mt-[4px] rounded-[8px] border-solid border-[1px] border-[#EEF0F3] py-[12px] px-[16px] pr-[80px]"
          />
          <img src={india} alt="india" className="ml-[160px] -mt-8" />
          <img src={arrow} alt="arr" className="ml-[186px] -mt-[21px]" />
          <img
            src={rect}
            alt="rect"
            srcset=""
            className="bg-black ml-[214px] -mt-[16px] h-[11px] w-[1px]"
          />
          <Link
            to="/verify"
            className="inline-block text-center pt-[13px] h-[44px] w-[416px] rounded-[8px] mt-[33px] px-[24px] text-white bg-[#E40443] ml-[144px] font-Montserrat text-[14px] font-[600] "
          >
            Send OTP
          </Link>
          <div className="text-black mt-[177px] ml-[169px] font-Montserrat text-[14px] font-normal leading-[116%] flex flex-row">
            <input
              type="checkbox"
              className="mr-[14px] -mt-[2px] h-[18px] w-[18px] border-[#4B465C]  border-2 "
            />
            By signing up you agree to{" "}
            <span className="text-[#E40443] ml-1"> Terms of use</span>
          </div>
          <div className="text-black mt-[16px] ml-[169px] font-Montserrat text-[14px] font-normal leading-[116%] flex flex-row">
            <input
              type="checkbox"
              className="mr-[14px] -mt-[2px] h-[18px] w-[18px] border-2 border-[#4B465C]"
            />
            By signing up you agree to{" "}
            <span className="text-[#E40443] ml-1">Marketing condition</span>
          </div>

          <div className="text-center mt-[158px] text-[#5B6572] font-Montserrat text-[16px] font-normal leading-[170%]">
            Join the community of smart and experienced doctors. Login to access
            your <br /> personalized dashboard, track your record or process and
            get informed by our services
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
