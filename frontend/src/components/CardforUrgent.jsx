// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import cal from "../assets/calendar.png";
// import clock from "../assets/clock.png";
// import pro from "../assets/Ellipse 2.png";
// import { useAvailabilityContext } from '../AvailabilityContext'; 

// const CardforUrgent = () => {
//   const { mobileNumber } = useAvailabilityContext(); 
//   const [bookingsUrgent, setBookingsUrgent] = useState([]);

//   useEffect(() => {
//     if (mobileNumber) {
//       fetchBookings();
//     }
    
//   }, [mobileNumber]); 

//   const fetchBookings = () => {
//     axios.post('/api/booking/incoming', { phoneNumber: mobileNumber })
//       .then(response => {
//         console.log('Bookings data:', response.data);
//         setBookingsUrgent(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   };

//   const handleAccept = (id) => {
//     axios.post(`/api/booking/${id}/accept`)
//       .then(response => {
//         setBookingsUrgent(bookingsUrgent.filter(booking => booking._id !== id));
//       })
//       .catch(error => {
//         console.error('Error accepting booking:', error);
//       });
//   };

//   const handleReject = (id) => {
//     axios.post(`/api/booking/${id}/reject`)
//       .then(response => {
//         setBookingsUrgent(bookingsUrgent.filter(booking => booking._id !== id));
//       })
//       .catch(error => {
//         console.error('Error rejecting booking:', error);
//       });
//   };

//   return (
//     <>
//       {bookingsUrgent.map((bookingUrgent) => (
//         <div key={bookingUrgent._id} className=' w-[320px] sm:h-[185px] h-[165px] border-[1px] border-[#D3D3D3] rounded-xl mt-[24px] mx-auto'>
//           <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[6px] top-0 justify-center items-start ">
//           <div className='flex justify-between w-[300px]'>
//                 <h1 className='text-[#E40443] font-Montserrat text-[14px] font-[600] pr-1 break-words'>{bookingUrgent.bookingId}</h1>
//                <div className='flex mr-2'>
//                <h2 className='flex font-Montserrat text-[10px] font-[500] text-[#5B6572] pt-1 pr-3'><img src={cal} alt="" className='h-[10px] w-[10px] mt-[2px] ' />{bookingUrgent.date}</h2>
//                <h2 className='flex font-Montserrat text-[10px] font-[500] text-[#5B6572] pt-1'><img src={clock} alt="" className='h-[10px] w-[10px] mt-[2px] ' />{bookingUrgent.time}</h2>
//                </div>
//               </div>
//             <div className='text-[#E40443] font-Montserrat sm:text-[12px] text-[10px] font-[600] tracking-[1px]'>
//               {(bookingUrgent.labTests && bookingUrgent.labTests.length > 0) ? bookingUrgent.labTests.join(' | ') : 'No lab tests'}
//             </div>
//           </div>
//           <div className='py-[8px] px-[16px] h-[66px] border-b-[1px] border-[#E4E4E4]'>
//             <img src={pro} alt="pro" className='' />
//             <h1 className='font-Montserrat text-[14px] font-[600] ml-[62px] -mt-[47px]'>{bookingUrgent.patientName}</h1>
//             <div className='flex justify-between'>
//             <h2 className='font-Montserrat text-[10px] font-[500] ml-[63px] break-words'>{bookingUrgent.address}</h2>
//             <p className='justify-end font-Montserrat text-[8px] font-[500]'>Earning : {bookingUrgent.charges}</p>
//             </div>
//           </div>
//           <div className='py-[7px] sm:px-[16px] px-[20px] h-[56px]'>
//             <button
//               onClick={() => handleAccept(bookingUrgent._id)}
//               className='inline-block text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] sm:w-[138px] w-[134px] py-[6px] rounded-lg'
//             >
//               Accept
//             </button>
//             <button
//               onClick={() => handleReject(bookingUrgent._id)}
//               className='text-[#898989] text-center font-Montserrat text-[12px] font-semibold bg-white border border-[#898989] ml-[10px] px-[24px] sm:w-[138px] w-[134px] py-[6px] rounded-lg'
//             >
//               Reject
//             </button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default CardforUrgent;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cal from "../assets/calendar.png";
import clock from "../assets/clock.png";
import pro from "../assets/Ellipse 2.png";
import { useAvailabilityContext } from '../AvailabilityContext'; 

const CardforUrgent = () => {
  const { mobileNumber } = useAvailabilityContext(); 
  const [bookingsUrgent, setBookingsUrgent] = useState([]);

  useEffect(() => {
    if (mobileNumber) {
      fetchBookings();
    }
    
  }, [mobileNumber]); 

  const fetchBookings = () => {
    axios.post('/api/booking/incoming', { phoneNumber: mobileNumber })
      .then(response => {
        console.log('Bookings data:', response.data);
        setBookingsUrgent(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  const handleAccept = (id) => {
    axios.post(`/api/booking/${id}/accept`)
      .then(response => {
        setBookingsUrgent(bookingsUrgent.filter(booking => booking._id !== id));
      })
      .catch(error => {
        console.error('Error accepting booking:', error);
      });
  };

  const handleReject = (id) => {
    axios.post(`/api/booking/${id}/reject`)
      .then(response => {
        setBookingsUrgent(bookingsUrgent.filter(booking => booking._id !== id));
      })
      .catch(error => {
        console.error('Error rejecting booking:', error);
      });
  };

  return (
    <>
      {bookingsUrgent.map((bookingUrgent) => (
        <div key={bookingUrgent._id} className=' w-[320px] sm:h-[185px] h-[165px] border-[1px] border-[#D3D3D3] rounded-xl mt-[24px] mx-auto'>
          <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[6px] top-0 justify-center items-start ">
          <div className='flex justify-between w-[300px]'>
                <h1 className='text-[#E40443] font-Montserrat text-[14px] font-[600] pr-1 break-words'>{bookingUrgent.bookingId}</h1>
               <div className='flex mr-2'>
               <h2 className='flex font-Montserrat text-[10px] font-[500] text-[#5B6572] pt-1 pr-3'><img src={cal} alt="" className='h-[10px] w-[10px] mt-[2px] ' />{bookingUrgent.date}</h2>
               <h2 className='flex font-Montserrat text-[10px] font-[500] text-[#5B6572] pt-1'><img src={clock} alt="" className='h-[10px] w-[10px] mt-[2px] ' />{bookingUrgent.time}</h2>
               </div>
              </div>
            <div className='text-[#E40443] font-Montserrat sm:text-[12px] text-[10px] font-[600] tracking-[1px]'>
              {(bookingUrgent.labTests && bookingUrgent.labTests.length > 0) ? bookingUrgent.labTests.join(' | ') : 'No lab tests'}
            </div>
          </div>
          <div className='py-[8px] px-[16px] h-[66px] border-b-[1px] border-[#E4E4E4]'>
            <img src={pro} alt="pro" className='' />
            <h1 className='font-Montserrat text-[14px] font-[600] ml-[62px] -mt-[47px]'>{bookingUrgent.patientName}</h1>
            <div className='flex justify-between'>
            <h2 className='font-Montserrat text-[10px] font-[500] ml-[63px] break-words'>{bookingUrgent.address}</h2>
            <p className='justify-end font-Montserrat text-[8px] font-[500]'>Earning : {bookingUrgent.charges}</p>
            </div>
          </div>
          <div className='py-[7px] sm:px-[16px] px-[20px] h-[56px]'>
            <button
              onClick={() => handleAccept(bookingUrgent._id)}
              className='inline-block text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] sm:w-[138px] w-[134px] py-[6px] rounded-lg'
            >
              Accept
            </button>
            <button
              onClick={() => handleReject(bookingUrgent._id)}
              className='text-[#898989] text-center font-Montserrat text-[12px] font-semibold bg-white border border-[#898989] ml-[10px] px-[24px] sm:w-[138px] w-[134px] py-[6px] rounded-lg'
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardforUrgent;
