import React from 'react'
import dooper from "../assets/dooper.png"
import arr from '../assets/arrow.png'
import photo from "../assets/photo.png"
import not from "../assets/not.png"
import { Link } from 'react-router-dom'
import { useAvailabilityContext } from '../AvailabilityContext';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

 

 
const Navbardark = () => {
  const { mobileNumber } = useAvailabilityContext();
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileInfo = async () => {
      if (!mobileNumber) {
        console.error('Mobile number not available');
        return;
      }
      try {
        const response = await fetch(`/api/profile/mobile/${mobileNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile info');
        }
        const data = await response.json();
        setFullName(data.fullName);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProfileInfo();
  }, [mobileNumber]);
  
  return (
  <>
    <div className=' hidden sm:block h-[44px] py-[4px] my-[40px] mx-[120px] '>
        <img src={dooper} alt='jjjj' className='h-[36px] w-[123.55px]'/>
        <ul className='flex flex-row float-right -mt-[30px] font-Montserrat text-[#5e6165] justify-between space-x-[16px] h-[16px] '>
        <li className='hidden xl:block'>Home</li>
        <li className='hidden xl:block'>Accepted</li>
        <li className='hidden xl:block'>Rejected</li>
        <li className='hidden xl:block'>Completed</li>
        <li className='hidden xl:block'>My Earnings</li>
        <li className='hidden xl:block'>About Us</li>
        <li className='hidden lg:block'>Contact Us</li>
            <button className='h-[44px] w-[177px]  flex py-[8px] px-[5px] items-center -mt-[10.7px] border border-solid border-gray-400 rounded-[8px] '>
            <img src={photo} alt="" srcset="" className='h-[28px] w-[28px] ' />
            <h1 className='text-[14px] font-[500] font-Montserrat pl-[6px] pr-[6px]'>{fullName}</h1>
            <img src={arr} alt="" className='font-Montserrat text-[14px] font-[500] leading-[116%]' />
            </button>
            <img src={not} alt="" srcset="" className='h-[40px] w-[40px] -mt-[8px] opacity-[0.1]' />  
        </ul>
    </div>
    </>
  )
}

export default Navbardark
