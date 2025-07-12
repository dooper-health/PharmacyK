
// //working with profile and booking fetching properly by passing booking phoneNumber for profile 
// import React, { useState, useEffect} from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import cal from "../assets/calendar.png"; // Import your image assets
// import clock from "../assets/clock.png";
// import pro from "../assets/Ellipse 2.png";
// import { useAvailabilityContext } from '../AvailabilityContext';

// const BookingCard = ({ booking, profileData }) => {
//   const navigate = useNavigate(); // Use the navigate hook to handle redirection

//   const handleCardClick = () => {
//     navigate(`/startservicing/${booking._id}`);
//   };

//   return (
//     <div className="w-[380px] border-[1px] bg-white border-[#D3D3D3] rounded-xl mb-4 cursor-pointer">
//         <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[14px] top-0 justify-center items-start">
//           <div className="flex flex-row w-[348px] gap-[8px]">
//             <h1 className="text-[#E40443] font-Montserrat text-[18px] font-[600] pr-[10px]">
//               {booking.bookingId}
//             </h1>
//             <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//               <img src={cal} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//               {booking.startDate}
//             </h2>
//             <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//               <img src={clock} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//               {booking.timeslot}
//             </h2>
//           </div>
//           <div className="text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px]">
//             {booking.Vaccine}
//           </div>
//         </div>
//         <div className="flex gap-[16px] justify-center items-center py-[14px] px-[16px] border-b-[1px] border-[#E4E4E4]">
//           <img src={pro} alt="pro" className="w-[48px]" />
//           <div className="font-Montserrat">
//             <div className='flex gap-10'>
//               <h1 className="font-Montserrat text-[18px] font-[600]">
//                 {booking.patientName}
//               </h1>
//               {/* <p className='mx-10 px-6 bg-[#FDF0CC] rounded-full'>Pending</p> */}
//               <p className='mx-10 px-6 bg-[#FDF0CC] rounded-full'>Pending</p>

//             </div>
//             <div className="text-[12px] font-[500] text-[#5B6572]">
//             Age: {profileData?.age} | Gender: {profileData?.gender}
//             </div>
//             <div className="text-[12px] font-[500] text-[#5B6572]">
//               {profileData?.addressLine1}, {profileData?.city}, {profileData?.state}
//             </div>
//           </div>
//         </div>
//         <Link to={`/addreportcard2/${booking.labId}`}>

// <button
//       className='inline-block text-[#E40443] text-center font-Montserrat text-[12px] font-semibold bg-[#FCE6EC] px-[24px] py-[6px] mx-10 my-2 justify-center items-center w-[300px] rounded-lg'
//     >
//       Send Quotation
//     </button>
//       </Link>
//     </div>
//   );
// };

// const BookingsList = () => {
//   const [bookings, setBookings] = useState([]); // Initial state as an empty array
//   const [profileData, setProfileData] = useState(null);
//   const { mobileNumber } = useAvailabilityContext();

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.post('/api/sd/pendingvaccine', { labownermobile: mobileNumber });
//         console.log(response.data); // Log the response to check structure
//         setBookings(response.data.allBookings || []); // Fallback to empty array if undefined

//         if (response.data.allBookings.length > 0) {
//           const userMobile = response.data.allBookings[0].mobileNumber;
//           // You may need a setter for mobileNumber in context
//         }
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchBookings();
//   }, [mobileNumber]);

//   useEffect(() => {
//     const fetchProfileData = async (mobileNumber) => {
//       if (!mobileNumber) return; // Early exit if no mobile number
//       try {
//         const response = await axios.get(`/api/viewprofile/${mobileNumber}`);
//         setProfileData(response.data);
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };
  
//     if (bookings.length > 0) {
//       // Fetch profile data for the mobile number from the first booking
//       fetchProfileData(bookings[0].mobileNumber);
//     }
//   }, [bookings]);
  

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Bookings</h1>
//       {bookings.length > 0 ? ( // Check if bookings array is not empty
//         bookings.map((booking) => (
//           <BookingCard
//             key={booking.labId}
//             booking={booking}
//             profileData={profileData}
//           />
//         ))
//       ) : (
//         <p>No pending bookings available.</p> // Message when no bookings are found
//       )}
//     </div>
//   );
// };

// export default BookingsList;

//working with profile and booking fetching properly by passing booking phoneNumber for profile 
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import cal from "../assets/calendar.png"; // Import your image assets
import clock from "../assets/clock.png";
import pro from "../assets/Ellipse 2.png";
import { useAvailabilityContext } from '../AvailabilityContext';

const BookingCard = ({ booking, profileData }) => {
  const navigate = useNavigate(); // Use the navigate hook to handle redirection

  const handleCardClick = () => {
    navigate(`/startservicing/${booking._id}`);
  };

  return (
    <div className="w-[380px] border-[1px] bg-white border-[#D3D3D3] rounded-xl mb-4 cursor-pointer">
        <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[14px] top-0 justify-center items-start">
          <div className="flex flex-row w-[348px] gap-[8px]">
            <h1 className="text-[#E40443] font-Montserrat text-[18px] font-[600] pr-[10px]">
              {booking.bookingId}
            </h1>
            <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
              <img src={cal} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
              {booking.startDate}
            </h2>
            <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
              <img src={clock} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
              {booking.timeslot}
            </h2>
          </div>
          <div className="text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px]">
            {booking.Vaccine}
          </div>
        </div>
        <div className="flex gap-[16px] justify-center items-center py-[14px] px-[16px] border-b-[1px] border-[#E4E4E4]">
          <img src={pro} alt="pro" className="w-[48px]" />
          <div className="font-Montserrat">
            <div className='flex gap-10'>
              <h1 className="font-Montserrat text-[18px] font-[600]">
                {booking.patientName}
              </h1>
              {/* <p className='mx-10 px-6 bg-[#FDF0CC] rounded-full'>Pending</p> */}
              <p className='mx-10 px-6 bg-[#FDF0CC] rounded-full'>Pending</p>

            </div>
            <div className="text-[12px] font-[500] text-[#5B6572]">
            Age: {profileData?.age} | Gender: {profileData?.gender}
            </div>
            <div className="text-[12px] font-[500] text-[#5B6572]">
              {profileData?.addressLine1}, {profileData?.city}, {profileData?.state}
            </div>
          </div>
        </div>
        <Link to={`/addreportcard2/${booking.labId}`}>

<button
      className='inline-block text-[#E40443] text-center font-Montserrat text-[12px] font-semibold bg-[#FCE6EC] px-[24px] py-[6px] mx-10 my-2 justify-center items-center w-[300px] rounded-lg'
    >
      Send Quotation
    </button>
      </Link>
    </div>
  );
};

const BookingsList = () => {
  const [bookings, setBookings] = useState([]); // Initial state as an empty array
  const [profileData, setProfileData] = useState(null);
  const { mobileNumber } = useAvailabilityContext();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.post('/api/sd/pendingvaccine', { labownermobile: mobileNumber });
        console.log(response.data); // Log the response to check structure
        setBookings(response.data.allBookings || []); // Fallback to empty array if undefined

        if (response.data.allBookings.length > 0) {
          const userMobile = response.data.allBookings[0].mobileNumber;
          // You may need a setter for mobileNumber in context
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [mobileNumber]);

  useEffect(() => {
    const fetchProfileData = async (mobileNumber) => {
      if (!mobileNumber) return; // Early exit if no mobile number
      try {
        const response = await axios.get(`/api/viewprofile/${mobileNumber}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
  
    if (bookings.length > 0) {
      // Fetch profile data for the mobile number from the first booking
      fetchProfileData(bookings[0].mobileNumber);
    }
  }, [bookings]);
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bookings</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-5 gap-5'>
      {bookings.length > 0 ? ( // Check if bookings array is not empty
        bookings.map((booking) => (
          <BookingCard
            key={booking.labId}
            booking={booking}
            profileData={profileData}
          />
        ))
      ) : (
        <p>No pending bookings available.</p> // Message when no bookings are found
      )}
    </div>
    </div>
  );
};

export default BookingsList;