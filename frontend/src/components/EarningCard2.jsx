import React, { useEffect, useState } from 'react';
import doubleleft from "../assets/control.png";
import left from "../assets/control (1).png";
import doubleright from "../assets/control (3).png";
import right from "../assets/control (2).png";
import axios from 'axios';
import { useAvailabilityContext } from '../AvailabilityContext';

const EarningCard = () => {
  const [bookings, setBookings] = useState([]);
  const { mobileNumber } = useAvailabilityContext();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/earning2/history2', { mobileNumber });
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className='p-[32px] bg-white w-[484px] rounded-lg'>
      {bookings.map((booking) => (
        <div key={booking.bookingId} className='relative p-[20px] rounded-lg border border-[#E3E6E8] mt-[24px]'>
          <h1 className='font-Montserrat text-[14px] font-medium text-black'>#{booking.bookingId}</h1>
          <h2 className='font-Montserrat text-[12px] font-normal text-[#38404A] mt-[8px]'>{booking.date}16,June 2024</h2>
          <div className='absolute flex px-[16px] py-[8px] rounded-[40px] bg-[#E5FFF2] text-[#41B079] font-Montserrat text-[12px] font-medium h-[30px] w-[75px] top-0 right-0 mt-5 mr-5'>RS {booking.charges}</div>
        </div>
      ))}

      <div className='h-[32px] w-full flex mt-[24px]'>
        <img src={doubleleft} alt="" className='sm:ml-0 -ml-[20px]' />
        <img src={left} alt="" className='mx-[5px]' />
        <ul className='flex space-x-[5px]'>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] bg-[#E40443] text-white items-center justify-center text-[13px] font-semibold font-sans'>1</li>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] border bg-white text-[#8D98A4] items-center justify-center text-[13px] font-semibold font-sans'>2</li>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] border bg-white text-[#8D98A4] items-center justify-center text-[13px] font-semibold font-sans'>3</li>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] border bg-white text-[#8D98A4] items-center justify-center text-[13px] font-semibold font-sans'>...</li>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] border bg-white text-[#8D98A4] items-center justify-center text-[13px] font-semibold font-sans'>10</li>
          <img src={right} alt="" className='' />
          <img src={doubleright} alt="" className='' />
        </ul>
      </div>
    </div>
  );
}

export default EarningCard;
