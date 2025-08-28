// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
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
//           <img
//             src={cal}
//             alt=""
//             className="h-[14px] w-[14px] mt-[2px] mr-[0px]"
//           />
//           {booking.startDate}
//         </h2>
//         <h2 className="flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1">
//           <img
//             src={clock}
//             alt=""
//             className="h-[14px] w-[14px] mt-[2px] mr-[0px]"
//           />
//           {booking.timeslot}
//         </h2>
//       </div>
//       <div className="text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px]">
//         {booking.Vaccine}
//       </div>
//     </div>
//     <div className="flex gap-[16px] justify-center items-center py-[14px] px-[16px] border-b-[1px] border-[#E4E4E4]">
//       <img src={pro} alt="pro" className="w-[48px]" />
//       <div className="font-Montserrat">
//         <div className="flex ">
//           <h1 className="font-Montserrat text-[18px] font-[600]">
//             {booking.patientName}
//           </h1>
//           <p className='mx-10 px-6 text-[#41B078] bg-[#ECF7F2] rounded-full  '>Completed</p>
//           </div>
//         <div className="text-[12px] font-[500] text-[#5B6572]">
//           {/* Age: {booking.patientAge} | Gender: {booking.patientGender} | Blood Group: O+ Height: 6” 3 inches | Weight: 76 */}
//           Age: {booking.patientAge} | Gender: {booking.patientGender}
//          {/* Age: {profileData?.age} | Gender: {profileData?.gender} */}

//         </div>
//         {/* Display the user's address here */}
//         <div className="text-[12px] font-[500] text-[#5B6572]">
//           {profileData?.addressLine1}, {profileData?.city}, {profileData?.state}
//         </div>
//       </div>
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
//         const response = await axios.get('/api/sd/completedvaccine');
//         setBookings(response.data.allBookings || []); // Ensure bookings is always an array
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchBookings();
//   }, []);


//    // Fetch profile data for each booking's mobile number
//    useEffect(() => {
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
//       {bookings.map((booking) => (
//         <BookingCard
//           key={booking._id}
//           booking={booking}
//           profileData={profileData} // Pass profile data to each BookingCard
//         />
//       ))}
//     </div>
//   );
// };

// export default BookingsList;



import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import cal from "../assets/calendar.png"; // Import your image assets
import clock from "../assets/clock.png";
import pro from "../assets/Ellipse 2.png";
import { useAvailabilityContext } from '../AvailabilityContext';

/* ---------------- Medicine Card ---------------- */
const MedicineCard = ({ booking, profileData }) => {
  const navigate = useNavigate(); // Use the navigate hook to handle redirection
    return (
    <div className="w-[380px] border-[1px] bg-white border-[#D3D3D3] rounded-xl mb-4 cursor-pointer">
      {/* <Link to={`/startservicing/${booking.labId}`}> */}
      <Link to='#'>
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
            {booking.Medicine}
          </div>
        </div>
        <div className="flex gap-[16px] justify-center items-center py-[14px] px-[16px] border-b-[1px] border-[#E4E4E4]">
          <img src={pro} alt="pro" className="w-[48px]" />
          <div className="font-Montserrat">
            <div className='flex gap-10'>
              <h1 className="font-Montserrat text-[18px] font-[600]">
                {booking.patientName}
              </h1>
              {/* <p className='mx-10 px-6 bg-[#41B078] rounded-full'>Completed</p> */}
              <p className='mx-10 px-6 bg-[#ECF7F1] rounded-full text-[#41B078]'>Completed</p>

            </div>
            <div className="text-[12px] font-[500] text-[#5B6572]">
            Age: {profileData?.age} | Gender: {profileData?.gender}
            </div>
            <div className="text-[12px] font-[500] text-[#5B6572]">
              {profileData?.addressLine1}, {profileData?.city}, {profileData?.state}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};


/* ---------------- Vaccine Card ---------------- */

const VaccineCard = ({ booking, profileData }) => {
  const navigate = useNavigate(); // Use the navigate hook to handle redirection

  return (
    <div className="w-[380px] border-[1px] bg-white border-[#D3D3D3] rounded-xl mb-4 cursor-pointer">
      <Link to="#">
      {/* <Link to={`/startservicing/${booking.labId}`}> */}
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
              {/* <p className='mx-10 px-6 bg-[#41B078] rounded-full'>Completed</p> */}
              <p className='mx-10 px-6 bg-[#ECF7F1] rounded-full text-[#41B078]'>Completed</p>
            </div>
            <div className="text-[12px] font-[500] text-[#5B6572]">
            Age: {profileData?.age} | Gender: {profileData?.gender}
            </div>
            <div className="text-[12px] font-[500] text-[#5B6572]">
              {profileData?.addressLine1}, {profileData?.city}, {profileData?.state}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

/* ---------------- Combined Page ---------------- */
const AllBookings = () => {
  const [medicineBookings, setMedicineBookings] = useState([]);
  const [vaccineBookings, setVaccineBookings] = useState([]);
  const [profileData, setProfileData] = useState(null);
  const { mobileNumber } = useAvailabilityContext();

// const BookingsList = () => {
//   const [bookings, setBookings] = useState([]); // Initial state as an empty array
//   const [profileData, setProfileData] = useState(null);
//   const { mobileNumber } = useAvailabilityContext();

useEffect(() => {
  const fetchMedicine = async () => {
    try {
      const response = await axios.post('/api/sd/completedmedicine', { 
        labownermobile: mobileNumber 
      });
      setMedicineBookings(response.data.allBookings || []); // ✅ fixed
    } catch (err) {
      console.error(err);
    }
  };

  const fetchVaccine = async () => {
    try {
      const response = await axios.post('/api/sd/completedvaccine', { 
        labownermobile: mobileNumber
      });
      setVaccineBookings(response.data.allBookings || []); // ✅ fixed
    } catch (err) {
      console.error(err);
    }
  };

  fetchMedicine();
  fetchVaccine();
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
  
    if (medicineBookings.length > 0)
      fetchProfileData(medicineBookings[0].mobileNumber);
    else if (vaccineBookings.length > 0)
      fetchProfileData(vaccineBookings[0].mobileNumber);
  }, [medicineBookings, vaccineBookings]);
  

  return (
    <div className="p-6">
      {/* Medicine Section */}
      <h1 className="text-2xl font-bold mb-6">Medicine Bookings</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {medicineBookings.length > 0 ? (
          medicineBookings.map((booking) => (
            <MedicineCard
              key={booking.labId}
              booking={booking}
              profileData={profileData}
            />
          ))
        ) : (
          <p>No pending medicine bookings available.</p>
        )}
      </div>

      {/* Vaccine Section */}
      <h1 className="text-2xl font-bold mb-6">Vaccine Bookings</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {vaccineBookings.length > 0 ? (
          vaccineBookings.map((booking) => (
            <VaccineCard
              key={booking.labId}
              booking={booking}
              profileData={profileData}
            />
          ))
        ) : (
          <p>No pending vaccine bookings available.</p>
        )}
      </div>
    </div>
  );
};

export default AllBookings;
