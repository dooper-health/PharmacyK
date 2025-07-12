import React from 'react'
import doubleleft from "../assets/Control.png"
import left from "../assets/Control (1).png"
import doubleright from "../assets/Control (3).png"
import right from "../assets/Control (2).png"
import tick from "../assets/no (5).png"
import tick2 from "../assets/no (6).png"
import tick3 from "../assets/4.png"
import line from "../assets/Active line (1).png"
import four from "../assets/no (7).png"






const Paymentstatus = () => {
  return (
    <div className='p-[32px] lg:ml-[225px] bg-white sm:w-[484px] rounded-lg '>
     <div className='font-Montserrat text-lg font-semibold text-black'>Withdrawal status</div>
    <div className='relative py-[20px] mt-[10px]'>
        <h1 className='font-Montserrat text-[14px] font-medium text-[#1A1C1F]'>Withdrawal #1234</h1>
        <h2 className='font-Montserrat text-[14px] font-medium text-[#1A1C1F] mt-2'>Rs.3000</h2>
        <h3 className='font-Montserrat text-[12px] font-normal text-[#38404A] mt-[8px]'>16,June 2023</h3>
         <button className='absolute top-0 right-0 text-[#F1614B] bg-[#F5F6F7] rounded-[40px] mt-5 font-Montserrat text-xs px-[16px] py-[8px]'>Pending</button>
      <div className='px-5 mt-[50px]  '>
      <img src={tick} alt="" className='-ml-5' />
            <div className='ml-[42px] -mt-[48px] '>
            <h1 className='font-Montserrat lg:text-lg text-md font-medium text-[#1A1C1F]'>Payment Request Generated</h1>
            <h1 className='font-Montserrat text-sm font-medium text-[#5B6572]'>17, June 2023 | 08:00 AM</h1>   
       </div>
         <img src={line} alt="" className='absolute h-[160px]' />
    
        </div>
        <div className='pt-10'>
        <img src={tick} alt="" className='' />
            <div className='ml-[62px] -mt-[48px] '>
            <h1 className='font-Montserrat lg:text-lg text-md font-medium text-[#1A1C1F]'>Payment Request Generated</h1>
            <h1 className='font-Montserrat text-sm font-medium text-[#5B6572]'>17, June 2023 | 08:00 AM</h1>   
        </div>
        </div>
        <div className='pt-10'>
        <img src={tick2} alt="" className='' />
            <div className='ml-[62px] -mt-[48px] '>
            <h1 className='font-Montserrat lg:text-lg text-md font-medium text-[#1A1C1F]'>Payment Request Generated</h1>
            <h1 className='font-Montserrat text-sm font-medium text-[#5B6572]'>17, June 2023 | 08:00 AM</h1>   
        </div>
        </div>
        <div className='pt-10'>
        <img src={four} alt="" className='' />
            <div className='ml-[62px] -mt-[48px] '>
            <h1 className='font-Montserrat lg:text-lg text-md font-medium text-[#1A1C1F]'>Payment Request Generated</h1>
            <h1 className='font-Montserrat text-sm font-medium text-[#5B6572]'>17, June 2023 | 08:00 AM</h1>   
        </div>
        </div>
        </div>

        
      
      
 
    </div>
  )
}

export default Paymentstatus
