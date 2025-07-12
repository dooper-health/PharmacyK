import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from '../assets/dashboard.png'
import Bookings from '../assets/book.png'
import Earnings from '../assets/salary.png'
import Profile from '../assets/profile.png'

const Footermobile = () =>{

    return (
        <>
        <div className='sm:hidden fixed bottom-0 flex bg-[#FFFFFF] w-full h-18 border-t border-gray-300'>
        <div className='flex mx-auto my-2 space-x-8 '>
        <div className='flex flex-col items-center ' >
        <Link to="/dashboarddark" className='flex flex-col items-center'>
            <img src={Dashboard} className='w-[30px] h-[30px] mb-1 border border-gray-300 p-1 rounded-full'/>
            <p className=' text-black text-[14px] hover:text-red-900 hover:font-bold  '>Dashboard</p>
            </Link>
        </div>
        <div className='flex flex-col items-center '>
        <Link to="/incoming" className='flex flex-col items-center'>
            <img src={Bookings} className='w-[30px] h-[30px] mb-1 border border-gray-300 p-1 rounded-full'/>
            <p className='text-black text-[14px] hover:text-red-900 hover:font-bold  '>Bookings</p>
            </Link>
        </div>
        <div className='flex flex-col items-center '>
        <Link to="/earningmedicine" className='flex flex-col items-center'>
            <img src={Earnings} className='w-[30px] h-[30px] mb-1 border border-gray-300 p-1 rounded-full'/>
            <p className='text-black text-[14px] hover:text-red-900 hover:font-bold '>My Earnings</p>
            </Link>
        </div>
        <div className='flex flex-col items-center'>
        <Link to="/myprofile" className='flex flex-col items-center'>
            <img src={Profile} className='w-[30px] h-[30px] mb-1 border border-gray-300 p-1 rounded-full'/>
            <p className='text-black text-[14px] hover:text-red-900 hover:font-bold  '>Profile</p>
            </Link>
        </div>
        </div>
        </div>
        </>
    )


}
export default Footermobile
