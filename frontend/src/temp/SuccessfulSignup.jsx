import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from '../components/SideBar';
import dooper from '../assets/dooper.png';
import done from '../assets/Done.png';

const SuccessfulSignup = () => {
  const location = useLocation();
  const { mobileNumber } = location.state || {};
  return (
    <div className='flex flex-col bg-[#FFFFFF]'>
      
      <div className='flex flex-col sm:max-w-[480px] mx-auto p-8'>
        <div className='text-center sm:mt-0 -mt-[80px]'>
          <img src={done} alt='Success' className='mx-auto w-[200px] h-[200px] mt-[100px]' />
          <h1 className='font-Montserrat text-center text-[27px] font-[700] leading-[28px] mt-[40px]'>
            Successful
          </h1>
          <h2 className='font-Montserrat text-[14px] font-[500] leading-[116%] text-center mt-[7px]  w-[350px] mx-auto'>
            OTP Is verified successfully. Start your work as Pharmacy
          </h2>
          <Link
            to='/Kstep1'
            state={{ mobileNumber }} 
            className='inline-block mt-[40px] sm:w-[416px] w-[335px] h-[44px] rounded-[8px] bg-[#FCE6EC] text-center font-Montserrat text-[14px] font-[600] leading-[166%] text-[#E40443] justify-center py-[12px]'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulSignup;
