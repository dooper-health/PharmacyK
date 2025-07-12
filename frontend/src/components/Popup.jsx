import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'

const Popup = () => {
  return (
    <>
    <div className='absolute sm:mt-[287px] mt-[257px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'>
    <div className='sm:w-[475px] w-[280px] sm:h-[259px] h-[220px] mb-5 sm:py-[60px] py-[40px] px-[24px] rounded-[8px] bg-gray-200'>
        <h1 className='text-black text-center font-Montserrat font-medium text-base leading-5'>
        Your <span className='text-[#E40443] font-[600] '>Availability</span> is disabled. Please enable your Availability to get new bookings
        </h1>
        <Link to={"/incoming"} className='flex items-center sm:w-[279px] h-[46px]  text-center justify-center mx-auto rounded-lg text-white  bg-[#E40443] sm:mt-[64px] mt-[32px] font-semibold font-Montserrat text-[16px]'>Enable Availaibility</Link>
    </div>  
    </div>
  </>
  )
}

export default Popup
