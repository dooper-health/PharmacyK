import React from 'react'
import { Link } from 'react-router-dom'

const Withdrawalcard = ({withcardnavigate}) => {
  return (
    <div className='absolute top-0 left-0 w-full sm:h-[1245px] h-[1100px] flex items-center justify-center bg-[black] bg-opacity-[40%] z-30'>
    <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-[190px] z-30 '>
  
    <div className='py-[50px] sm:w-[438px] w-[300px] px-[30px] bg-white rounded-lg'>
      <h1 className='font-Montserrat text-lg font-medium  text-center items-center'>Your <span className='text-[#E40443]'>Withdrawal</span> request have been submitted</h1>
    <Link to={withcardnavigate.done}>
    <button className='flex mx-auto text-white  items-center justify-center px-[4px] h-[38px] mt-[49px] bg-[#E40443] w-[226px] rounded-lg'>Done</button></Link>
    </div>
    </div>
    </div>

  )
}

export default Withdrawalcard
