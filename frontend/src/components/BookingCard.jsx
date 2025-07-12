import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cal from "../assets/calendar.png";
import clock from "../assets/clock.png";
import pro from "../assets/Ellipse 2.png";
import { Link } from 'react-router-dom';
import { useAvailabilityContext } from '../AvailabilityContext'; 


const BookingCard = () => {
  const [bookingsUrgent, setBookingsUrgent] = useState([]);
  const { mobileNumber } = useAvailabilityContext(); 

  useEffect(() => {
    if (mobileNumber) {
      fetchBookings();
    }
  }, [mobileNumber]); 

  const fetchBookings = () => {
    axios.post('/api/booking/pending', { phoneNumber: mobileNumber })
      .then(response => {
        console.log('Bookings data:', response.data);
        setBookingsUrgent(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  return (
    <>
      {bookingsUrgent.map((bookingUrgent) => (
        <Link to={`/addreportcard/${bookingUrgent._id}`} key={bookingUrgent._id}>
        <div key={bookingUrgent._id} className='w-[320px] sm:h-[190px] h-[170px] border-[1px] border-[#D3D3D3] rounded-xl mt-[24px] mx-auto'>
          <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[6px] top-0 justify-center items-start ">
            <div className='w-[300px] flex justify-between'>
              <h1 className='text-[#E40443] font-Montserrat text-[14px] font-[600] pr-1 break-words'>{bookingUrgent.bookingId}</h1>
             
             <div className='flex justify-end mr-2'>
             <h2 className='flex font-Montserrat text-[10px] font-[500] text-[#5B6572] pt-1 pr-3'>
                <img src={cal} alt="" className='h-[10px] w-[10px] mt-[2px]' />{bookingUrgent.date}
              </h2>
              <h2 className='flex font-Montserrat text-[10px] font-[500] text-[#5B6572] pt-1 '>
                <img src={clock} alt="" className='h-[10px] w-[10px] mt-[2px] ' />{bookingUrgent.time}
              </h2> 
            
             </div>
            </div>
              <div className='text-[#E40443] font-Montserrat sm:text-[12px] text-[10px] font-[600] tracking-[1px]'>{bookingUrgent.labTests.join(' | ')}</div>
            </div>
            <div className='py-[6px] px-[16px] h-[66px] border-b-[1px] border-[#E4E4E4]'>
            <img src={pro} alt="pro" className='' />
             <div className='-mt-[45px]'>
             <div className='flex justify-between'>
              <div className='font-Montserrat text-[14px] font-[600] ml-[62px] '>{bookingUrgent.patientName}</div>
              <span className='font-Montserrat mb-[2px] py-1 h-[20px] w-[48px] rounded-3xl text-[8px] font-medium bg-red-100 text-center'>{bookingUrgent.status}</span>
              </div>
              <div className='flex justify-between'>
              <h3 className='font-Montserrat text-[10px] font-[500] ml-[63px] break-words'>{bookingUrgent.address}</h3>
              <span className='font-Montserrat text-[8px] font-[500] h-[20px] w-[48px] mt-0.5'>{bookingUrgent.earnings}</span>
              </div>
             </div>
             
              <div className='mt-[25px] -ml-[7px]'>
            <button
              onClick={() => handleAccept(bookingUrgent._id)}
              className='inline-block text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] w-[300px] py-[6px] rounded-lg'
            >
              Send Quatation
            </button>
           
          </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BookingCard;
