import React from 'react'
import SideBar from './SideBar'
import dooper from '../assets/dooper.png'
import done from '../assets/Done.png'
import { Link } from 'react-router-dom'


const Successfull = () => {
  return (
    <>
    <div className=' w-[1440px] p-[24px] flex bg-[#FFFFFF]'>
    <SideBar />
    <div className='w-[800px] h-[210px] flex-1 ml-[32px] bg-white  top-[24px] left-[616px] justify-between p-[48px] '>
    <img src={dooper} alt="dooper" className='mx-auto h-[50px] w-[170px]'/>
       <img src={done} alt="" srcset="" className='text-center  mx-auto w-[200px] h-[200px] mt-[190px]'/>
       <h1 className='font-Montserrat text-center mx-auto w-[112px] h-[28px] font-[700] text-[27px] leading-[28px] ml-[279px] mt-[40px]'>Successful</h1>
       <h2 className='font-Montserrat text-[14px] font-[500] leading-[116%] text-center mx-auto mt-[7px]'>OPT Is verified successfully, Start your work as pharmacy</h2>
       <Link to='/profileunderreview' className= 'inline-block text-center ml-[142px]  mt-[40px] w-[416px] h-[44px]  bg-[#FCE6EC] rounded-[8px] text-[14px] font-[600] font-Montserrat leading-[166%] text-[#E40443] justify-center pt-[12px]'>Continue</Link>
       </div>
      </div>
    </>
  )
}

export default Successfull
