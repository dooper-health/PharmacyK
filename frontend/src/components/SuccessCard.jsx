import React, { useRef, useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';


import done from "../assets/Done.png" 
import { Link } from 'react-router-dom'
import axios from 'axios';
const SuccessCard = () => {
  const { bookingId } = useParams();

  useEffect(() => {
    axios.get(`/api/bookingservice`)
      .then(response => {
        setBookingDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
      });
  }, [bookingId]);

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className='absolute top-0 left-0 w-full h-[1215px] flex items-center justify-center bg-[black] bg-opacity-[40%] z-30'>
    <div className='absolute -ml-[208px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[96px] z-30 '>
    <div className='sm:w-[600px] w-[300px]  mb-40  h-auto p-[32px] bg-white rounded-2xl ml-[420px] relative z-30' >
    <img src={done} alt="done" className='block mx-auto h-[120px] w-[120px] '/> 
    <h1 className='flex items-center justify-center mt-[40px] font-Montserrat text-[20px] font-[700] '>Successful</h1>
    <h2 className='flex items-center justify-center mt-[7px] font-Montserrat text-[14px] font-[500] '>OPT Is verified successfully123</h2>
    
    <Link to={`/samplecollected/${bookingDetails._id}`} className='mt-[40px] flex items-center cursor-pointer justify-center font-Montserrat text-[14px] font-[500] text-[#8D98A4]'>Later</Link>

    </div>
    </div>
    </div>
  )
}

export default SuccessCard