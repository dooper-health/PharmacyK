import React from 'react'
import Profile from "../assets/profile.png"
import star from "../assets/star.png"

const SideBar = () => {
  return (
    <div className='hidden xl:block box-border w-[560px] rounded-[16px] p-[56px] bg-primary-darker min-h-full'>
      <h1 className='text-white  font-Montserrat text-base font-semibold'>DOOPER</h1>
      <div className='box-border flex flex-col justify-between min-h-full'>
        <div>
          <h2 className='flex text-white mt-[112px] w-[326px] font-montserrat text-[40px] font-bold'>Start your journey with us</h2>
          <h3 className='text-[#FFF] font-Montserrat text-[28px] mt-[14px] font-normal w-[357px]'>Discover the world’s best community of doctors and DHAs</h3>
        </div>
        <div>
         
          <div className='w-[448px] p-[32px] bg-white rounded-[16px] mb-[24px]'>
            <div className='font-Montserrat text-[#1A1C1F] w-[384px] text-[20px] font-normal'>Simply unbelievable! I am really satisfied with the doctor who treated me. This is absolutely wonderful!</div> 
            <div className='flex'>
              <img src={Profile} alt="profile" className='w-[56px] rounded-[8px]' />
              <div className='ml-2'>
                <div className='font-Montserrat text-[18px] font-[600] text-black'>Timson K</div>
                <ul className='mt-[9px] flex gap-1'>
                    <li><img src={star} alt="" className='h-[16px] w-[16px]'/></li>
                    <li><img src={star} alt="" className='h-[16px] w-[16px]' /></li>
                    <li><img src={star} alt="" className='h-[16px] w-[16px]' /></li>
                    <li><img src={star} alt="" className='h-[16px] w-[16px]' /></li>
                    <li><img src={star} alt="" className='h-[16px] w-[16px]' /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default SideBar