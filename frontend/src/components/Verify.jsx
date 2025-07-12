import React, { useRef, useState } from 'react'
import SideBar from './SideBar'
import dooper from '../assets/dooper.png'
import { Link } from 'react-router-dom';

const Verify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];

    const inputValue = e.target.value.slice(-1).replace(/[^0-9]/g, '');

    newOtp[index] = inputValue;
    setOtp(newOtp);

    if (index < otp.length - 1 && inputValue !== '') {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <>
    <div className=' w-[1440px] p-[24px] flex bg-[#FFFFFF]'>
      <SideBar />
      <div className='w-[800px]  flex-1 ml-[32px] bg-white h-[510px] top-[24px] left-[616px] justify-between p-[48px] '>
      <img src={dooper} alt="dooper" className='mx-auto h-[50px] w-[170px]'/>
      <div className='w-[416px] h-[211px] mt-[200px] text-center mx-auto'>
        <h1 className='font-Montserrat text-[32px] font-[700] leading-[44px]'>Verify</h1>
        <h2 className='font-Montserrat text-[14px] font-[500] leading-[116%] mt-[7px]'>Enter OTP which we sent to you</h2>
        <div className='mt-4 flex justify-center space-x-4'>
              {otp.map((value, index) => (
                <>
              
              <div key={index} className="relative">
                <input
                  key={index}
                  type='text'
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                  className='border font-Montserrat relative border-gray-300 rounded-md w-[62px] h-[44px] px-[16px] py-[12px] text-center text-[14px] font-[500] mt-[40px]'
                  maxLength="1"
                  ref={inputRefs[index]} 
                />
             </div>
             </> ))}
            </div>
            <Link to="/successfull" className='inline-block h-[44px] w-[416px] rounded-[8px] bg-[#E40443] text-center mx-auto mt-[16px] justify-center font-Montserrat text-[14px] font-[600] leading-[116%] text-white py-[15px]'>Verify OTP</Link>
           
      </div>
      <div className='text-center mt-[378px] text-[#5B6572] font-Montserrat text-[16px] font-normal leading-[170%]'>
        Join the community of smart and experienced doctors. Login to access your <br /> personalized dashboard, track your record or process and get informed by our services
        </div>
      </div>

    </div>
    </>
  )
}

export default Verify
