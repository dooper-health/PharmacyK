import React, { useEffect, useState } from 'react'
import Frame from '../assets/Frame.png'
import SideBar from './SideBar'
import dooper from '../assets/dooper.png'
import { Navigate, useNavigate } from 'react-router-dom';
const Profileunder = () => {
  const navigate = useNavigate();


  const [redirectTo, setRedirectTo] = useState(null);


  useEffect(() => {
    const timer = setTimeout(() => {
     
      setRedirectTo('/dashboarddark'); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [redirectTo, navigate]);
  return (
    <div>
      <div className=' w-[1440px] p-[24px] flex bg-[#FFFFFF]'>
    <SideBar />
    <div className='w-[800px] h-[510px] flex-1 ml-[32px] bg-white  top-[24px] left-[616px] justify-between p-[48px] '>
    <img src={dooper} alt="dooper" className='mx-auto h-[50px] w-[170px]'/>
       <img src={Frame} alt="" srcset="" className='text-center  mx-auto w-[200px] h-[200px] mt-[200px]'/>
       <h1 className='font-Montserrat text-center mx-auto w-[221px]  h-[28px] font-[700] text-[20px] leading-[28px] justify-center  mt-[40px]'>Profile Under Review</h1>
       <h2 className='font-Montserrat text-[14px] font-[500] leading-[116%] text-center mx-auto mt-[8px] '>You profile is under review, which will be shown if <br /> the sign-up is completed.</h2>
       </div>
      </div>
    </div>
  )
}

export default Profileunder
