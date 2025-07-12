import React, { useState } from 'react'
import Navbar from './Navbar'
import arr from '../assets/arrow left.png'

import { Link } from 'react-router-dom';
import Header from './Header';




const Association = () => {
  
  return (
    <>
    <div className='w-full '>
      <Navbar />
      <div className='bg-[#F4F4F4] h-[744px]'>
      <main className='  mx-[120px] pt-[24px] pb-[48px]  '>
           <Header />
           
        <div className='w-[484px] h-auto bg-white rounded-lg  p-[32px] mt-[26px]'>
      <div className='flex flex-col '>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Full Name</label>
        <input type="text" placeholder='ABP care Hospital'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Hospital Address *</label>
        <input type="text" placeholder='121'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <input type="text" placeholder='Some Society,nr.Some School'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <input type="text" placeholder='Surat'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
     
        <input type="text" placeholder='Gujarat'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[12px]'/>
      </div>
    </div>
       
    
      
    </main>
    </div>
</div>
  
    </>
    )
}

export default Association
