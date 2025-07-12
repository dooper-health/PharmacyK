// import Navbar from './Navbar';
// import Footer from './Footer';
// import Switch from '../assets/Switch.png';
// import arr from '../assets/arrow left.png';
// import pro from "../assets/Ellipse 2.png";
// import cal from "../assets/calendar.png";
// import clock from "../assets/clock.png";
// import no from "../assets/no.png";
// import both from "../assets/ic (4).png";
// import line from "../assets/Active line.png";
// import axios from 'axios';
// import ReportCard from './ReportCard';
// import SuccessCard from './SuccessCard';
// import Prescription from './Prescription';
// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';

// const prescriptionData = {
//   type: 'image',
//   source: 'https://res.cloudinary.com/dywrzseia/image/upload/v1696342167/image_201_qbntie.png',
// };

// const AddReportCard = ({ incrementCompletedBookings }) => {
//   const [showReportCard, setShowReportCard] = useState(false);
//   const [showSuccessCard, setShowSuccessCard] = useState(false);
//   const [showPrescriptionPopup, setShowPrescriptionPopup] = useState(false); //

//   const { bookingId } = useParams();
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [dosage, setDosage] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOtpCard, setShowOtpCard] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`/api/sd/pendingmedicine/${labId}`)
//       .then(response => {
//         setBookingDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching booking details:', error);
//       });
//   }, [bookingId]);
//   if (bookingDetails === null) {
//     return <div>Loading...</div>;
//   }

//   const openReportCard = () => {
//     setShowReportCard(true);
//   };

//   const closeReportCard = () => {
//     setShowReportCard(false);
//   };

//   const handleUploadSuccess = () => {
//     setShowReportCard(false);
//     setShowSuccessCard(true);
//     incrementCompletedBookings();
//   };

//   const openPrescriptionPopup = () => {
//     setShowPrescriptionPopup(true);
//   };

//   const closePrescriptionPopup = () => {
//     setShowPrescriptionPopup(false);
//   };

//   return (
//     <>
//       {/* <div className='w-full overflow-hidden'>
//         <Navbar />
//         <div className='sm:bg-[#F4F4F4]'>
//           <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
//             <div className='font-Montserrat flex flex-row font-[700] text-[20px] h-[32px] w-[1077px] pb-[8px]'>
//               <Link to="/dashboardbooking">
//                 <img src={arr} alt="arr" className='h-[24px] w-[24px] mt-1 mr-[8px]' />
//               </Link>
//               Case #{bookingDetails._id}
//             </div>
//             <div className='h-auto w-[774px] mt-[8px] rounded-2xl bg-white'>
//               <div className='h-[122px] py-[12px] px-[20px] flex items-start self-stretch'>
//                 <img src={pro} alt="pro" className='w-[88px] h-[88px]' />
//                <div className='flex flex-col ml-2'>
//                <h1 className='font-Montserrat text-[16px font-semibold mt-[4px]'>{bookingDetails.patientName}e</h1>
//                 <h2 className='text-[#5B6572] font-Montserrat text-[14px] font-medium break-words'>{bookingDetails.address}</h2>
//                 <h3 className='hidden sm:block text-[#5B6572] font-Montserrat text-[10px] font-medium '>Age : 32 | Gender: Male | Blood Group: O+ <br /> Height : 6” 3 inches | Weight : 76</h3>
//                 <h3 className='sm:hidden text-[#5B6572] font-Montserrat text-[10px] font-medium '>Age : 32 | Gender: Male <br/> Blood Group: O+ <br /> Height : 6” 3 inches <br/> Weight : 76</h3>
//                </div>
//                 <img src={both} alt="" className='sm:ml-[312px] ml-[40px] mt-[30px]' />
//               </div> */}
//               <div className='w-full overflow-hidden'>
//         <Navbar />
//         <div className='sm:bg-[#F4F4F4]'>
//           <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
//             <div className='font-Montserrat flex flex-row font-[700] text-[20px] h-[32px] w-[1077px] pb-[8px]'>
//               <Link to="/dashboardbooking">
//                 <img src={arr} alt="arr" className='h-[24px] w-[24px] mt-1 mr-[8px]' />
//               </Link>
//               Case #{bookingDetails._id}
//             </div>
//             <div className='h-auto w-[774px] mt-[8px] rounded-2xl bg-white'>
//               <div className='h-auto py-[12px] px-[12px] flex items-start self-stretch sm:border-none border-t'>
//                 <img src={pro} alt="pro" className='w-[88px] h-[88px]' />
//                <div className='flex flex-col ml-2'>
//                <h1 className='font-Montserrat text-[16px] font-semibold mt-[4px] sm:max-w-[200px] max-w-[150px]'>{bookingDetails.patientName}e</h1>
//                 <h2 className='text-[#5B6572] font-Montserrat text-[14px] font-medium break-words sm:max-w-[200px] max-w-[150px]'>{bookingDetails.address}</h2>
//                 <h3 className='hidden sm:block text-[#5B6572] font-Montserrat text-[10px] font-medium '>Age : 32 | Gender: Male | Blood Group: O+ <br /> Height : 6” 3 inches | Weight : 76</h3>
//                </div>
//                 <img src={both} alt="" className='sm:ml-[365px] ml-[40px] mt-[30px]' />
//               </div>

//               {showReportCard && (
//                 <ReportCard onClose={closeReportCard} onUploadSuccess={handleUploadSuccess} />
//               )}
//               {showSuccessCard && (
//                 <SuccessCard />
//               )}

// <div className='border-b-red'>
//                 <ul className='h-auto w-full flex sm:justify-between py-[8px] px-[12px] items-center border-t border-b'>
//                 <div className='grid sm:grid-cols-4 grid-cols-2 gap-1'>
//                  {bookingDetails.labTests.map((test, index) => (
//                     <li key={index}   className='py-[8px] px-[10px] text-center items-center rounded-lg border border-[#DBDDDF] text-[12px] font-Montserrat font-medium mr-2 '>{test}</li>
//                   ))}
//                  </div>

//                   <button onClick={openPrescriptionPopup} className='py-[8px] px-[10px] rounded-lg border bg-[#E40443] text-white text-[12px] font-Montserrat font-medium sm:ml-0 ml-[15px]'>View Prescription</button>
//                 </ul>
//               </div>

// <div className='h-[84px] py-[20px] px-[20px] border-t-[#EEF0F3]'>
//                 <h1 className='font-Montserrat text-[14px] font-medium'>Need</h1>
//                   <h2 className='flex font-Montserrat text-[12px] font-medium mt-[8px] w-[345px]'>
//                     <img src={cal} alt="cal" className='h-4 w-4 mr-[7px]' />
//                     {bookingDetails.date}
//                   </h2>
//                   <h3 className='flex font-Montserrat text-[12px] font-medium -mt-[19px] sm:ml-[372px] ml-[200px]'>
//                     <img src={clock} alt="cal" className='h-4 w-4 mr-[7px] mt-[1px]' />
//                     {bookingDetails.time}
//                   </h3>

//               </div>
//               <div className='py-[10px] border border-t-[#EEF0F3]'>

//                 {showPrescriptionPopup && (
//                   <Prescription prescription={prescriptionData} onClose={closePrescriptionPopup} />
//                 )}

//                 <div className='flex flex-row h-[24px] ml-[34px]'>
//                 </div>
//                 <button onClick={openReportCard} className='ml-[12px] h-[36px] w-auto bg-[green] text-[13px] font-[600] font-Montserrat text-white rounded-lg items-center justify-center px-[24px]'>Add Quatation</button>
//               </div>
//             </div>
//           </main>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default AddReportCard;

// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Switch from "../assets/Switch.png";
// import arr from "../assets/arrow left.png";
// import pro from "../assets/Ellipse 2.png";
// import cal from "../assets/calendar.png";
// import clock from "../assets/clock.png";
// import no from "../assets/no.png";
// import both from "../assets/ic (4).png";
// import line from "../assets/Active line.png";
// import axios from "axios";
// import ReportCard from "./ReportCard";
// import SuccessCard from "./SuccessCard";
// import Prescription from "./Prescription";
// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate, useLocation } from "react-router-dom";

// const prescriptionData = {
//   type: "image",
//   source:
//     "https://res.cloudinary.com/dywrzseia/image/upload/v1696342167/image_201_qbntie.png",
// };

// const AddReportCard = ({ incrementCompletedBookings }) => {
//   const location = useLocation();
//   const item = location.state;

//   console.log("first", item);
//   const [showReportCard, setShowReportCard] = useState(false);
//   const [showSuccessCard, setShowSuccessCard] = useState(false);
//   const [showPrescriptionPopup, setShowPrescriptionPopup] = useState(false);

//   const { bookingId } = useParams();
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [dosage, setDosage] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showOtpCard, setShowOtpCard] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`/api/sd/pendingmedicine/${bookingId}`)
//       .then((response) => {
//         setBookingDetails(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching booking details:", error);
//       });
//   }, [bookingId]);

//   if (bookingDetails === null) {
//     return <div>Loading...</div>;
//   }

//   const openReportCard = () => {
//     setShowReportCard(true);


//     // api call karne ke baad setShowReportCard ko false kar dena
//   };

//   const closeReportCard = () => {
//     setShowReportCard(false);
//   };

//   const handleUploadSuccess = () => {
//     setShowReportCard(false);
//     setShowSuccessCard(true);
//     incrementCompletedBookings();
//   };

//   const openPrescriptionPopup = () => {
//     setShowPrescriptionPopup(true);
//   };

//   const closePrescriptionPopup = () => {
//     setShowPrescriptionPopup(false);
//   };

//   return (
//     <>
//       <div className="w-full overflow-hidden">
//         <Navbar />
//         <div className="sm:bg-[#F4F4F4]">
//           <main className="sm:mx-[120px] pt-[24px] pb-[48px]">
//             <div className="font-Montserrat flex flex-row font-[700] text-[20px] h-[32px] w-[1077px] pb-[8px]">
//               <Link to="/pending">
//                 <img
//                   src={arr}
//                   alt="arr"
//                   className="h-[24px] w-[24px] mt-1 mr-[8px]"
//                 />
//               </Link>
//               Case #{item.item.bookingId}
//             </div>
//             <div className="h-auto w-[774px] mt-[8px] rounded-2xl bg-white">
//               <div className="h-auto py-[12px] px-[12px] flex items-start self-stretch sm:border-none border-t">
//                 <img src={pro} alt="pro" className="w-[88px] h-[88px]" />
//                 <div className="flex flex-col ml-2">
//                   <h1 className="font-Montserrat text-[16px] font-semibold mt-[4px] sm:max-w-[200px] max-w-[150px]">
//                     {item.item.patientName}
//                   </h1>
//                   {/* <h2 className="text-[#5B6572] font-Montserrat text-[14px] font-medium break-words sm:max-w-[200px] max-w-[150px]">
//                     {item.labAddress1}address, {item.item.city}city,
//                     {item.item.state}state
//                   </h2> */}
                  
//                   <h3 className="hidden sm:block text-[#5B6572] font-Montserrat text-[14px] font-medium ">
//                     Age: {item.item.patientAge}, Gender: {item.item.patientGender}
//                   </h3>
//                 </div>
//                 <img
//                   src={both}
//                   alt=""
//                   className="sm:ml-[365px] ml-[40px] mt-[30px]"
//                 />
//               </div>

//               {showReportCard && (
//                 <ReportCard
//                   onClose={closeReportCard}
//                   onUploadSuccess={handleUploadSuccess}
//                 />
//               )}
//               {showSuccessCard && <SuccessCard />}

//               <div className="border-b-red">
//                 <ul className="h-auto w-full flex sm:justify-between py-[8px] px-[12px] items-center border-t border-b">
//                   <div className="grid sm:grid-cols-4 grid-cols-2 gap-1">
//                     {Array.isArray(bookingDetails.labTests) &&
//                     bookingDetails.labTests.length > 0 ? (
//                       bookingDetails.labTests.map((test, index) => (
//                         <li
//                           key={index}
//                           className="py-[8px] px-[10px] text-center items-center rounded-lg border border-[#DBDDDF] text-[12px] font-Montserrat font-medium mr-2 "
//                         >
//                           {test}
//                         </li>
//                       ))
//                     ) : (
//                       <li>
//                         {item.item.Medicine}
//                         {item.item.Vaccine}
//                       </li>
//                     )}
//                   </div>
//                   <button
//                     onClick={openPrescriptionPopup}
//                     className="py-[8px] px-[10px] rounded-lg border bg-[#E40443] text-white text-[12px] font-Montserrat font-medium sm:ml-0 ml-[15px]"
//                   >
//                     View Prescription
//                   </button>
//                 </ul>
//               </div>

//               <div className="h-[84px] py-[20px] px-[20px] border-t-[#EEF0F3]">
//                 <h1 className="font-Montserrat text-[14px] font-medium">
//                   Need
//                 </h1>
//                 <h2 className="flex font-Montserrat text-[12px] font-medium mt-[8px] w-[345px]">
//                   <img src={cal} alt="cal" className="h-4 w-4 mr-[7px]" />
//                   {item.item.startDate}
//                 </h2>
//                 <h3 className="flex font-Montserrat text-[12px] font-medium -mt-[19px] sm:ml-[372px] ml-[200px]">
//                   <img
//                     src={clock}
//                     alt="cal"
//                     className="h-4 w-4 mr-[7px] mt-[1px]"
//                   />
//                   {item.item.timeslot}
//                 </h3>
//               </div>
//               <div className="py-[10px] border border-t-[#EEF0F3]">
//                 {showPrescriptionPopup && (
//                   <Prescription
//                     prescription={prescriptionData}
//                     onClose={closePrescriptionPopup}
//                   />
//                 )}
//                 <button
//                   onClick={openReportCard}
//                   className="ml-[12px] h-[36px] w-auto bg-[green] text-[13px] font-[600] font-Montserrat text-white rounded-lg items-center justify-center px-[24px]"
//                 >
//                   Add Quotation
//                 </button>
//               </div>
//             </div>
//           </main>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default AddReportCard;



//rajcode
//working code perfectly
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Switch from '../assets/Switch.png';
import arr from '../assets/arrow left.png';
import pro from "../assets/Ellipse 2.png";
import cal from "../assets/calendar.png";
import clock from "../assets/clock.png";
import no from "../assets/no.png";
import one from "../assets/2.png";
import two from "../assets/3.png";
import three from "../assets/4.png";
import line from "../assets/Line 5.png";
import both from "../assets/ic (4).png";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAvailabilityContext } from '../AvailabilityContext'; // Import the context hook
import control from '../assets/icons8-back-50.png'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import ReportCard from "./ReportCard";
import SuccessCard from "./SuccessCard";
import Prescription from "./Prescription";


const AddReportCard = ({incrementCompletedBookings}) => {
  const [showReportCard, setShowReportCard] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [showPrescriptionPopup, setShowPrescriptionPopup] = useState(false); 
  const { bookingId } = useParams(); // Extract bookingId from the URL
  const [bookingDetails, setBookingDetails] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);
  const [dosage, setDosage] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpCard, setShowOtpCard] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    // Fetch booking details using the bookingId from the URL
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`/api/sd/pendingmedicine/${bookingId}`);
        const bookingData = response.data.booking;
        setBookingDetails(bookingData);

        // Fetch profile details based on the mobileNumber from booking details
        const profileResponse = await axios.get(`/api/viewprofile/${bookingData.mobileNumber}`);
        setProfileDetails(profileResponse.data);
      } catch (error) {
        console.error('Error fetching booking or profile details:', error);
      }
    };

    fetchBookingDetails();
  }, [bookingId]); // Run effect when bookingId changes

 
 
  if (!bookingDetails || !profileDetails) {
    return <Loading bookingDetails={bookingDetails} profileDetails={profileDetails} />;
  }

    const openReportCard = () => {
    setShowReportCard(true);
  };

  const closeReportCard = () => {
    setShowReportCard(false);
  };

  const handleUploadSuccess = () => {
    setShowReportCard(false);
    setShowSuccessCard(true);
    incrementCompletedBookings();
  };

  const openPrescriptionPopup = () => {
    setShowPrescriptionPopup(true);
  };

  const closePrescriptionPopup = () => {
    setShowPrescriptionPopup(false);
  };



  return (
    <>
    {/* <div>{bookingDetails.prescriptionId}</div>
    <div>{bookingDetails.labreportId}</div> */}

      {/* <div>
            <h1>Booking Details</h1>
            <h1>Booking Details</h1>
            <p><strong>Booking ID:</strong> {bookingDetails.bookingId}</p>
            <p><strong>Patient Name:</strong> {bookingDetails.patientName}</p>
            <p><strong>Patient Age:</strong> {bookingDetails.patientAge}</p>
            <p><strong>Patient Gender:</strong> {bookingDetails.patientGender}</p>
            <p><strong>Lab Tests:</strong> {bookingDetails.Lab}</p>
            <p><strong>Status:</strong> {bookingDetails.status}</p>
            <p><strong>Time Slot:</strong> {bookingDetails.timeslot}</p>
            <p><strong>DHA Charge:</strong> {bookingDetails.dhaCharge}</p>
            <p><strong>DHA Charge:</strong> {bookingDetails.startDate}</p>
            <p><strong>labid:</strong> {bookingDetails.labId}</p>
            
            <h2>Profile Details</h2>
            <p><strong>Full Name:</strong> {profileDetails.fullName}</p>
            <p><strong>Mobile Number:</strong> {profileDetails.mobileNumber}</p>
            <p><strong>Email:</strong> {profileDetails.email}</p>
            <p><strong>Address:</strong> {profileDetails.addressLine1}, {profileDetails.city}, {profileDetails.state}</p>
            <p><strong>Age:</strong> {profileDetails.age}</p>
            <p><strong>Blood Group:</strong> {profileDetails.bloodGroup}</p>
            <p><strong>Height:</strong> {profileDetails.height}</p>
            <p><strong>Weight:</strong> {profileDetails.weight}</p>
            <p><strong>Weight:</strong> {profileDetails.gender}</p>
            <p><strong>Diseases:</strong> {profileDetails.diseases}</p>
        </div> */}
      <div className='w-full '>
        <Navbar />
        <div className='sm:bg-[#F4F4F4]'>
          <main className='sm:mx-[120px] pt-[24px] pb-[48px] overflow-x-hidden'>
            <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>
              <Link to="/incoming">
                <img src={arr} alt="arr" className='h-[24px] w-[24px] mt-1 mr-[8px]' />
              </Link>
              Case #{bookingDetails.bookingId}
            </div>
            <div className='h-auto w-[774px] mt-[8px] rounded-2xl border-t bg-white'>
              <div className='h-auto py-[12px] px-[12px] flex items-start self-stretch sm:border-none border-t'>
                <img src={pro} alt="pro" className='w-[88px] h-[88px]' />

                <div className='flex flex-col ml-2'>
                  <h1 className='font-Montserrat text-[16px] font-semibold mt-[4px] sm:max-w-[200px] max-w-[150px]'>{bookingDetails.patientName}</h1>
                  <h2 className='text-[#5B6572] font-Montserrat text-[14px] font-medium break-words sm:max-w-[200px] max-w-[120px]'> {profileDetails.addressLine1}, {profileDetails.city}, {profileDetails.state}</h2>
                  <h3 className='hidden sm:block text-[#5B6572] font-Montserrat text-[10px] font-medium  '>Age: {bookingDetails.patientAge}  | Gender:{profileDetails.gender} | Blood Group: {profileDetails.bloodGroup}<br />Height: {profileDetails.height} | Weight: {profileDetails.weight}</h3>
                  <h3 className='sm:hidden text-[#5B6572] font-Montserrat text-[10px] font-medium'>Age:  {profileDetails.age}  | Gender:{profileDetails.gender}<br /> Blood Group: {profileDetails.bloodGroup}<br />Height: {profileDetails.height} <br /> Weight: {profileDetails.weight}</h3>
                  {/* <h1>{bookingDetails.mobileNumber} from booking</h1>
                  <h1>{profileDetails.mobileNumber} from profile</h1> */}
                </div>
                <a href={`tel: ${profileDetails.mobileNumber}`}> 
                <img src={both} alt="" className='sm:ml-[365px] ml-[40px] mt-[30px]' />
              </a>
              </div>
              {showReportCard && (
                <ReportCard
                  onClose={closeReportCard}
                  onUploadSuccess={handleUploadSuccess}
                />
              )}
              {/* {showSuccessCard && <SuccessCard />} */}

              <div className=' border-b-red'>
                <ul className='h-auto w-full flex sm:justify-between py-[8px] px-[12px] items-center border-t border-b'>
                  {/* {bookingDetails.tests?.map((test, index) => (
                    <li key={index} className='py-[8px] px-[10px] items-center rounded-lg border border-[#DBDDDF] text-[12px] font-Montserrat font-medium mr-2'>{test}</li>
                  ))} */}
                  <div className='text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px] sm:max-w-[300px] max-w-[150px]'> {bookingDetails.Medicine}</div>
                  {/* <li className='py-[8px] px-[10px] rounded-lg border bg-[#E40443] text-white text-[12px] font-Montserrat font-medium sm:ml-0 ml-[55px]'>View Prescription</li> */}
                  <a href={`/api/otp/downloadreport/${bookingDetails.prescriptionId}`} target='_blank' className='py-[8px] px-[10px] rounded-lg border bg-[#E40443] text-white text-[12px] font-Montserrat font-medium sm:ml-0 ml-[55px]'>View Prescription</a>
                
                
                </ul>
              </div>
              <div className='h-[84px] py-[20px] px-[20px] border-t-[#EEF0F3]'>
                <h1 className='font-Montserrat text-[14px] font-medium'>Need</h1>
                <h2 className='flex font-Montserrat text-[12px] font-medium mt-[8px] w-[345px]'><img src={cal} alt="cal" className='h-4 w-4 mr-[7px]' />{bookingDetails.startDate}</h2>
                <h3 className='flex font-Montserrat text-[12px] font-medium -mt-[19px] sm:ml-[372px] ml-[228px]'><img src={clock} alt="cal" className='h-4 w-4 mr-[7px] mt-[1px]' />{bookingDetails.timeslot}</h3>
              </div>
               {/* <button onClick={openReportCard} className='ml-[12px] h-[36px] w-auto bg-[green] text-[13px] font-[600] font-Montserrat text-white rounded-lg items-center justify-center px-[24px]'>Add Quotation</button> */}
               <div className="py-[10px] border border-t-[#EEF0F3]">
                {showPrescriptionPopup && (
                  <Prescription
                    prescription={prescriptionData}
                    onClose={closePrescriptionPopup}
                  />
                )}

                <div className="flex flex-row h-[24px] ml-[34px]"></div>
                <button
                  onClick={openReportCard}
                  className="ml-[12px] h-[36px] w-auto bg-[green] text-[13px] font-[600] font-Montserrat text-white rounded-lg items-center justify-center px-[24px]"
                >
                  Add Quotation
                </button>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>

    </>


  );
};

export default AddReportCard;

