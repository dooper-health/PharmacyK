// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import cal from "../assets/calendar.png"; // Import your image assets
// import clock from "../assets/clock.png";
// import pro from "../assets/Ellipse 2.png";

// const BookingCard = ({ booking, onAccept, onReject }) => (
//   <div className="w-[380px] border-[1px] bg-white border-[#D3D3D3] rounded-xl mb-4 ">
//     <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[14px] top-0 justify-center items-start">
//       <div className="flex flex-row w-[348px] gap-[8px]">
//         <h1 className="text-[#E40443] font-Montserrat text-[18px] font-[600] pr-[10px]">
//           {booking.bookingId}
//         </h1>
//         <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//           <img src={cal} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//           {booking.startDate}
//         </h2>
//         <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//           <img src={clock} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//           {booking.timeslot}
//         </h2>
//       </div>
//       <div className="text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px]">
//         {booking.Lab.join(' | ')}
//       </div>
//     </div>
//     <div className="flex gap-[16px] justify-center items-center py-[14px] px-[16px] border-b-[1px] border-[#E4E4E4]">
//       <img src={pro} alt="pro" className="w-[48px]" />
//       <div className="font-Montserrat">
//         <h1 className="font-Montserrat text-[18px] font-[600]">
//           {booking.patientName}
//         </h1>
//         <div className="text-[12px] font-[500] text-[#5B6572]">
//           {/* Age: {booking.patientAge} | Gender: {booking.patientGender} | Blood Group: O+ Height: 6” 3 inches | Weight: 76 */}
//           Age: {booking.patientAge} | Gender: {booking.patientGender} | Address: {booking.addr}
//         </div>
//       </div>
//     </div>
//     <div className="py-[13px] px-[16px] h-[56px]">
//       <button
//         onClick={() => onAccept(booking.labacceptedByid)}
//         className="inline-block text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] w-[168px] py-[6px] rounded-lg"
//       >
//         Accept
//       </button>
//       <button
//         onClick={() => onReject(booking.labacceptedByid)}
//         className="text-[#898989] text-center font-Montserrat text-[12px] font-semibold bg-white border border-[#898989] ml-[10px] px-[24px] w-[168px] py-[6px] rounded-lg"
//       >
//         Reject
//       </button>
//     </div>
//   </div>
// );

// const BookingsList = () => {
//   const [bookings, setBookings] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get('/api/sd/lab');
//         setBookings(response.data.allBookings);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleAccept = async (labacceptedByid) => {
//     try {
//       await axios.post('/api/sd/accept', { labacceptedByid });
//       navigate(0); // Refresh the page
//     } catch (error) {
//       console.error('Error accepting booking:', error);
//     }
//   };

//   const handleReject = async (labacceptedByid) => {
//     try {
//       await axios.post('/api/sd/reject', { labacceptedByid });
//       navigate(0); // Refresh the page
//     } catch (error) {
//       console.error('Error rejecting booking:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Bookings</h1>
//       {bookings.map((booking) => (
//         <BookingCard
//           key={booking._id}
//           booking={booking}
//           onAccept={handleAccept}
//           onReject={handleReject}
//         />
//       ))}
//     </div>
//   );
// };

// export default BookingsList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import cal from "../assets/calendar.png"; // Import your image assets
// import clock from "../assets/clock.png";
// import pro from "../assets/Ellipse 2.png";

// const BookingCard = ({ booking, profileData, onAccept, onReject }) => (
//   <div className="w-[380px] border-[1px] bg-white border-[#D3D3D3] rounded-xl mb-4 ">
//     <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[14px] top-0 justify-center items-start">
//       <div className="flex flex-row w-[348px] gap-[8px]">
//         <h1 className="text-[#E40443] font-Montserrat text-[18px] font-[600] pr-[10px]">
//           {booking.bookingId}
//         </h1>
//         <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//           <img src={cal} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//           {booking.startDate}
//         </h2>
//         <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//           <img src={clock} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//           {booking.timeslot}
//         </h2>
//       </div>
//       <div className="text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px]">
//         {booking.Medicine}
//       </div>
//     </div>
//     <div className="flex gap-[16px] justify-center items-center py-[14px] px-[16px] border-b-[1px] border-[#E4E4E4]">
//       <img src={pro} alt="pro" className="w-[48px]" />
//       <div className="font-Montserrat">
//        <div className='flex '>
//         <h1 className="font-Montserrat text-[18px] font-[600]">
//           {booking.patientName}
//         </h1>
//         <p className='mx-10 right-0'>Earning:₹{booking.dhaCharge}</p>
//         </div>
//         <div className="text-[12px] font-[500] text-[#5B6572]">
//           {/* Age: {booking.patientAge} | Gender: {booking.patientGender} | Blood Group: O+ Height: 6” 3 inches | Weight: 76 */}
//           Age: {booking.patientAge} | Gender: {booking.patientGender} 
          
//         </div>
//         {/* Display the user's address here */}
//         <div className="text-[12px] font-[500] text-[#5B6572]">
//           {profileData?.addressLine1}, {profileData?.city}, {profileData?.state}
//         </div>
//       </div>
//     </div>
//     <div className="py-[13px] px-[16px] h-[56px]">
//       <button
//         onClick={() => onAccept(booking.labacceptedByid)}
//         className="inline-block text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] w-[168px] py-[6px] rounded-lg"
//       >
//         Accept
//       </button>
//       <button
//         onClick={() => onReject(booking.labacceptedByid)}
//         className="text-[#898989] text-center font-Montserrat text-[12px] font-semibold bg-white border border-[#898989] ml-[10px] px-[24px] w-[168px] py-[6px] rounded-lg"
//       >
//         Reject
//       </button>
//     </div>
//   </div>
// );
                                        
// const BookingsList = () => {
//   const [bookings, setBookings] = useState([]);
//   const [profileData, setProfileData] = useState(null); // State for profile data
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch bookings
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get('/api/sd/medicine');
//         setBookings(response.data.allBookings);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     // Fetch profile data
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(`/api/viewprofile/${bookings.mobileNumber}`);
//         setProfileData(response.data);
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };

//     fetchBookings();
//     fetchProfileData(); // Fetch profile when component mounts
//   }, []);

//   const handleAccept = async (labacceptedByid) => {
//     try {
//       await axios.post('/api/sd/accept', { labacceptedByid });
//       navigate(0); // Refresh the page
//     } catch (error) {
//       console.error('Error accepting booking:', error);
//     }
//   };

//   const handleReject = async (labacceptedByid) => {
//     try {
//       await axios.post('/api/sd/reject', { labacceptedByid });
//       navigate(0); // Refresh the page
//     } catch (error) {
//       console.error('Error rejecting booking:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Bookings</h1>
//       {bookings.map((booking) => (
//         <BookingCard
//           key={booking._id}
//           booking={booking}
//           profileData={profileData} // Pass profile data to each BookingCard
//           onAccept={handleAccept}
//           onReject={handleReject}
//         />
//       ))}
//     </div>
//   );
// };

// export default BookingsList;


//new changes final //rajcode
//viewprofile
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import cal from "../assets/calendar.png"; 
// import clock from "../assets/clock.png";
// import pro from "../assets/Ellipse 2.png";
// import { useAvailabilityContext } from '../AvailabilityContext';

// const BookingCard = ({ booking, profileData, onAccept, onReject, labownermobile }) => (
//   <div className="w-[380px] border-[1px] bg-white border-[#D3D3D3] rounded-xl mb-4 ">
//     <h1>{booking.labId}</h1>
//     <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[14px] top-0 justify-center items-start">
//       <div className="flex flex-row w-[348px] gap-[8px]">
//         <h1 className="text-[#E40443] font-Montserrat text-[18px] font-[600] pr-[10px]">
//           {booking.bookingId}
//         </h1>
//         <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//           <img src={cal} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//           {booking.startDate}
//         </h2>
//         <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//           <img src={clock} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//           {booking.timeslot}
//         </h2>
//       </div>
//       <div className="text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px]">
//         {booking.Lab.join(' | ')}
//       </div>
//     </div>
//     <div className="flex gap-[16px] justify-center items-center py-[14px] px-[16px] border-b-[1px] border-[#E4E4E4]">
//       <img src={pro} alt="pro" className="w-[48px]" />
//       <div className="font-Montserrat">
//         <div className='flex'>
//           <h1 className="font-Montserrat text-[18px] font-[600]">
//             {booking.patientName}
//           </h1>
//           <p className='mx-10 right-0'>Earning: ₹{booking.dhaCharge}</p>
//         </div>
//         <div className="text-[12px] font-[500] text-[#5B6572]">
//           Age: {profileData?.age} | Gender: {profileData?.gender}
//         </div>
//         <div className="text-[12px] font-[500] text-[#5B6572]">
//           {profileData?.addressLine1}, {profileData?.city}, {profileData?.state}
//         </div>
//       </div>
//     </div>
//     <div className="py-[13px] px-[16px] h-[56px]">
//       <button
//         onClick={() => onAccept(labownermobile, booking.labId)} 
//         className="inline-block text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] w-[168px] py-[6px] rounded-lg"
//       >
//         Accept
//       </button>
//       <button
//         onClick={() => onReject(labownermobile, booking.labId)} 
//         className="text-[#898989] text-center font-Montserrat text-[12px] font-semibold bg-white border border-[#898989] ml-[10px] px-[24px] w-[168px] py-[6px] rounded-lg"
//       >
//         Reject
//       </button>
//     </div>
//   </div>
// );

// const BookingsList = () => {
//   const { mobileNumber } = useAvailabilityContext(); // Lab owner's mobile number
//   const labownermobile = mobileNumber; // Store the lab owner's mobile

//   const [bookings, setBookings] = useState([]);
//   const [profileData, setProfileData] = useState(null); // State for profile data
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch bookings
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get('/api/sd/lab');
//         setBookings(response.data.allBookings);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // Fetch profile data for each booking's mobile number
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

//   // Accept booking handler
//   const handleAccept = async (labownermobile, labId) => {
//     try {
//       await axios.post('/api/sd/accept', { labownermobile, labId });
//       navigate(0); // Refresh the page
//     } catch (error) {
//       console.error('Error accepting booking:', error);
//     }
//   };

//   // Reject booking handler
//   const handleReject = async (labownermobile, labId) => {
//     try {
//       await axios.post('/api/sd/reject', { labownermobile, labId });
//       navigate(0); // Refresh the page
//     } catch (error) {
//       console.error('Error rejecting booking:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Bookings</h1>
//       {bookings.map((booking) => (
//         <BookingCard
//           key={booking._id}
//           booking={booking}
//           profileData={profileData} // Pass profile data to each BookingCard
//           onAccept={handleAccept}
//           onReject={handleReject}
//           labownermobile={labownermobile} // Pass lab owner's mobile number to each BookingCard
//         />
//       ))}
//     </div>
//   );
// };

// export default BookingsList;


//     



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import cal from "../assets/calendar.png"; 
// import clock from "../assets/clock.png";
// import pro from "../assets/Ellipse 2.png";
// import { useAvailabilityContext } from '../AvailabilityContext';

// const BookingCard = ({ booking, profileData, onAccept, onReject, labownermobile }) => (
//   <div className="w-[380px] border-[1px] bg-white border-[#D3D3D3] rounded-xl mb-4">
//     {/* <h1>{booking.labId}</h1> */}
//     <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[14px] top-0 justify-center items-start">
//       <div className="flex flex-row w-[348px] gap-[8px]">
//         <h1 className="text-[#E40443] font-Montserrat text-[18px] font-[600] pr-[10px]">
//           {booking.bookingId}
//         </h1>
//         <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//           <img src={cal} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//           {booking.startDate}
//         </h2>
//         <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//           <img src={clock} alt="" className="h-[14px] w-[14px] mt-[2px] mr-[0px]" />
//           {booking.timeslot}
//         </h2>
//       </div>
//       <div className="text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px]">
//         {booking.Medicine}
//       </div>
//     </div>
//     <div className="flex gap-[16px] justify-center items-center py-[14px] px-[16px] border-b-[1px] border-[#E4E4E4]">
//       <img src={pro} alt="pro" className="w-[48px]" />
//       <div className="font-Montserrat">
//         <div className='flex'>
//           <h1 className="font-Montserrat text-[18px] font-[600]">
//             {booking.patientName}
//           </h1>
//           <p className='mx-10 right-0'>Earning: ₹{booking.dhaCharge}</p>
//         </div>
//         <div className="text-[12px] font-[500] text-[#5B6572]">
//         Age: {booking.patientAge} | Gender: {booking.patientGender}

//           {/* Age: {profileData?.age} | Gender: {profileData?.gender} */}
//         </div>
//         <div className="text-[12px] font-[500] text-[#5B6572]">
//           {profileData?.addressLine1}, {profileData?.city}, {profileData?.state}
//         </div>
//       </div>
//     </div>
//     <div className="py-[13px] px-[16px] h-[56px]">
//       {/* <button
//         onClick={() => onAccept(labownermobile, booking.labId)} 
//         className="inline-block text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] w-[168px] py-[6px] rounded-lg"
//       >
//         Accept
//       </button> */}

//       <button
//   onClick={() =>
//     onAccept(
//       labownermobile,
//       booking.labId,
//       booking.pharmacyId,
//       booking.userId
//     )
//   }
//   className="inline-block text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] w-[168px] py-[6px] rounded-lg"
// >
//   Accept
// </button>

//       <button
//         onClick={() => onReject(labownermobile, booking.labId)} 
//         className="text-[#898989] text-center font-Montserrat text-[12px] font-semibold bg-white border border-[#898989] ml-[10px] px-[24px] w-[168px] py-[6px] rounded-lg"
//       >
//         Reject
//       </button>
//     </div>
//   </div>
// );

// const BookingsList = () => {
//   const { mobileNumber } = useAvailabilityContext(); // Lab owner's mobile number
//   const labownermobile = mobileNumber; // Store the lab owner's mobile

//   const [bookings, setBookings] = useState([]); // Initialize bookings as an empty array
//   const [profileData, setProfileData] = useState(null); // State for profile data
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch bookings
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get('/api/sd/medicine');
//         setBookings(response.data.allBookings || []); // Ensure bookings is always an array
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // Fetch profile data for each booking's mobile number
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

//   // Accept booking handler
//   // const handleAccept = async (labownermobile, labId) => {
//   //   try {
//   //     await axios.post('/api/sd/acceptmedicine', { labownermobile, labId });
//   //     navigate('/pending'); // Refresh the page
//   //   } catch (error) {
//   //     console.error('Error accepting booking:', error);
//   //   }
//   // };

//   const handleAccept = async (labownermobile, labId, bookingId, pharmacyId, userId) => {
//   try {
//     // Step 1: Accept the medicine booking
//     await axios.post('/api/sd/acceptmedicine', { labownermobile, labId });

//     // Step 2: Notify PWA about the accepted booking
//     await axios.post('/api/notifications/medicine-to-pwa', {
//       bookingId,
//       pharmacyId,
//       userId
//     });

//     // Step 3: Redirect
//     navigate('/incoming');
//   } catch (error) {
//     console.error('Error during acceptance and notification:', error);
//   }
// };


//   // Reject booking handler
//   const handleReject = async (labownermobile, labId) => {
//     try {
//       await axios.post('/api/sd/rejectmedicine', { labownermobile, labId });
//       navigate('/cancelled'); // Refresh the page
//     } catch (error) {
//       console.error('Error rejecting booking:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Bookings</h1>
//       <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-5 gap-5'>

//       {bookings.length > 0 ? (
//         bookings.map((booking) => (
//           <BookingCard
//             key={booking._id}
//             booking={booking}
//             profileData={profileData} // Pass profile data to each BookingCard
//             onAccept={handleAccept}
//             onReject={handleReject}
//             labownermobile={labownermobile} // Pass lab owner's mobile number to each BookingCard
//           />
//         ))
//       ) : (
//         <p>No bookings available</p> // Show a message when there are no bookings
//       )}
//     </div>
//     </div>
//   );
// };

// export default BookingsList;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cal from "../assets/calendar.png"; 
import clock from "../assets/clock.png";
import pro from "../assets/Ellipse 2.png";
import { useAvailabilityContext } from '../AvailabilityContext';

const BookingCard = ({ booking, profileData, onAccept, onReject, labownermobile }) => (
  <div className="w-[380px] border-[1px] bg-white border-[#D3D3D3] rounded-xl mb-4">
    <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[14px]">
      <div className="flex flex-row w-[348px] gap-[8px]">
        <h1 className="text-[#E40443] font-Montserrat text-[18px] font-[600] pr-[10px]">
          {booking.bookingId}
        </h1>
        <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
          <img src={cal} alt="calendar" className="h-[14px] w-[14px] mt-[2px] mr-[4px]" />
          {booking.startDate}
        </h2>
        <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
          <img src={clock} alt="clock" className="h-[14px] w-[14px] mt-[2px] mr-[4px]" />
          {booking.timeslot}
        </h2>
      </div>
      <div className="text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px]">
        {booking.Medicine}
      </div>
    </div>

    <div className="flex gap-[16px] justify-center items-center py-[14px] px-[16px] border-b-[1px] border-[#E4E4E4]">
      <img src={pro} alt="pro" className="w-[48px]" />
      <div className="font-Montserrat w-full">
        <div className='flex justify-between'>
          <h1 className="text-[18px] font-[600]">
            {booking.patientName}
          </h1>
          <p className='text-right'>Earning: ₹{booking.dhaCharge}</p>
        </div>
        <div className="text-[12px] font-[500] text-[#5B6572]">
          Age: {booking.patientAge} | Gender: {booking.patientGender}
        </div>
        <div className="text-[12px] font-[500] text-[#5B6572]">
          {profileData?.addressLine1 || 'Address N/A'}, {profileData?.city}, {profileData?.state}
        </div>
      </div>
    </div>

    <div className="py-[13px] px-[16px] h-[56px] flex">
      <button
        onClick={() => onAccept(
          labownermobile,
          booking.labId,
          booking.bookingId,
          booking.pharmacyId,
          booking.userId
        )}
        className="text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] w-[168px] py-[6px] rounded-lg"
      >
        Accept
      </button>

      <button
        onClick={() => onReject(labownermobile, booking.labId)} 
        className="text-[#898989] text-center font-Montserrat text-[12px] font-semibold bg-white border border-[#898989] ml-[10px] px-[24px] w-[168px] py-[6px] rounded-lg"
      >
        Reject
      </button>
    </div>
  </div>
);

const BookingsList = () => {
  const { mobileNumber } = useAvailabilityContext(); // Lab owner's mobile number
  const labownermobile = mobileNumber;

  const [bookings, setBookings] = useState([]);
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/sd/medicine');
        setBookings(response.data.allBookings || []);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    const fetchProfileData = async (mobileNumber) => {
      if (!mobileNumber) return;
      try {
        const response = await axios.get(`/api/viewprofile/${mobileNumber}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    if (bookings.length > 0) {
      fetchProfileData(bookings[0].mobileNumber);
    }
  }, [bookings]);

  const handleAccept = async (labownermobile, labId, bookingId, pharmacyId, userId) => {
    try {
      await axios.post('/api/sd/acceptmedicine', { labownermobile, labId });

      await axios.post('/api/notifications/medicine-to-pwa', {
        bookingId,
        pharmacyId,
        userId
      });

      navigate('/incoming');
    } catch (error) {
      console.error('Error during acceptance and notification:', error);
    }
  };

  const handleReject = async (labownermobile, labId) => {
    try {
      await axios.post('/api/sd/rejectmedicine', { labownermobile, labId });
      navigate('/cancelled');
    } catch (error) {
      console.error('Error rejecting booking:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bookings</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <BookingCard
              key={booking._id}
              booking={booking}
              profileData={profileData}
              onAccept={handleAccept}
              onReject={handleReject}
              labownermobile={labownermobile}
            />
          ))
        ) : (
          <p>No bookings available</p>
        )}
      </div>
    </div>
  );
};

export default BookingsList;
