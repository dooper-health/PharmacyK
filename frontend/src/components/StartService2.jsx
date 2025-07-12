// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import Switch from '../assets/Switch.png';
// import arr from '../assets/arrow left.png';
// import pro from "../assets/Ellipse 2.png";
// import cal from "../assets/calendar.png";
// import clock from "../assets/clock.png";
// import no from "../assets/no.png";
// import one from "../assets/redtwo.png";
// import two from "../assets/3.png";
// import three from "../assets/4.png";
// import line from "../assets/Active line.png";
// import lineWhite from "../assets/Line 5.png";
// import both from "../assets/ic (4).png";
// import OtpCard2 from '../components/OtpCard2'
// import Prescription from './Prescription';




// const EndService = () => {
//   const { bookingId } = useParams();
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [dosage, setDosage] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOtpCard, setShowOtpCard] = useState(false);
//   const navigate = useNavigate();
//   const [showPrescriptionPopup, setShowPrescriptionPopup] = useState(false);
  

//   useEffect(() => {
//     axios.get(`/api/bookingservice2/${bookingId}`)
//       .then(response => {
//         setBookingDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching booking details:', error);
//       });
//   }, [bookingId]);

//   const handleEndService = () => {
//     axios.post(`/api/bookingservice2/${bookingId}/endService2`)
//       .then(response => {
//         setBookingDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error updating booking status:', error);
//       });
//   };

//   const handleStartDelivery1 = async () => {
//     try {
//       const response = await fetch('/api/Dosage', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ dosage }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Dosage created:', data);
//     } catch (error) {
//       console.error('Error creating dosage:', error);
//       alert('Error creating dosage. Please try again later.');
//     }
//   };

//   const handleStartDelivery = async () => {
//     try {
//       const response = await fetch("/api/otp/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phoneNumber: "123123" }),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       setOtp(data.otp);
//       alert(`OTP: ${data.otp}`);
//       setShowOtpCard(true);
//     } catch (error) {
//       console.error("Error generating OTP:", error);
//       alert("Error generating OTP. Please try again later.");
//     }
//   };

//   const handleCombinedAction = async () => {
//     try {
//       await handleStartDelivery1();
//       await handleEndService(); 
//       await handleStartDelivery(); 
      
//     } catch (error) {
//       console.error('Error in combined action:', error);
//     }
//   };

//   if (bookingDetails === null) {
//     return <div>Loading...</div>;
//   }



  

//   const prescriptionData = {
//     type: 'image', // 'image' or 'pdf'
//     source: 'https://res.cloudinary.com/dywrzseia/image/upload/v1696342167/image_201_qbntie.png', // Placeholder image URL
//   };
  
  
//   const openPrescriptionPopup = () => {
//     setShowPrescriptionPopup(true);
//   };
  
//   const closePrescriptionPopup = () => {
//     setShowPrescriptionPopup(false);
//   };

//   return (
//     <>
//        <div className='w-full overflow-hidden'>
//         <Navbar />
//         <div className='sm:bg-[#F4F4F4]'>
//           <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
//             <div className='font-Montserrat flex flex-row font-[700] text-[20px] h-[32px] w-[1077px] pb-[8px]'>
//               <Link to="/dashboardbooking">
//                 <img src={arr} alt="arr" className='h-[24px] w-[24px] mt-1 mr-[8px]' />
//               </Link>
//               Case #{bookingDetails._id}
//               </div>
//             <div className='h-auto w-[774px] mt-[8px] rounded-2xl bg-white'>
//               <div className='h-auto py-[12px] px-[12px] flex items-start self-stretch sm:border-none border-t'>
//                 <img src={pro} alt="pro" className='w-[88px] h-[88px]' />
//                <div className='flex flex-col ml-2'>
//                <h1 className='font-Montserrat text-[16px] font-semibold mt-[4px] sm:max-w-[200px] max-w-[150px]'>{bookingDetails.patientName}e</h1>
//                 <h2 className='text-[#5B6572] font-Montserrat text-[14px] font-medium break-words sm:max-w-[200px] max-w-[150px]'>{bookingDetails.address}</h2>
//                 <h3 className='hidden sm:block text-[#5B6572] font-Montserrat text-[10px] font-medium '>Age : 32 | Gender: Male | Blood Group: O+ <br /> Height : 6” 3 inches | Weight : 76</h3>
//                 <h3 className='sm:hidden text-[#5B6572] font-Montserrat text-[10px] font-medium '>Age : 32 | Gender: Male <br/> Blood Group: O+ <br /> Height : 6” 3 inches <br/> Weight : 76</h3>
//                </div>
//                 <img src={both} alt="" className='sm:ml-[365px] ml-[40px] mt-[30px]' />
//               </div>

//               <div className='border-b-red'>
//                 <ul className='h-auto w-full flex sm:justify-between py-[8px] px-[12px] items-center border-t border-b'>
//                 <div className='grid sm:grid-cols-4 grid-cols-2 gap-1'>
//                  {bookingDetails.labTests.map((test, index) => (
//                     <li key={index}   className='py-[8px] px-[10px] text-center items-center rounded-lg border border-[#DBDDDF] text-[12px] font-Montserrat font-medium mr-2 '>{test}</li>
//                   ))}
//                  </div>
                 
//                   <button onClick={openPrescriptionPopup} className='py-[8px] px-[10px] rounded-lg border bg-[#E40443] text-white text-[12px] font-Montserrat font-medium sm:ml-0 ml-[15px]'>View Prescription</button>
//                 </ul>
//               </div>


//               <div className='h-[84px] py-[20px] px-[20px] border-t-[#EEF0F3]'>
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

//               <div className='py-[20px] px-[20px] pt-[12px] border-t'>
//                 <label
//                   htmlFor="instruction"
//                   className="block mb-2 text-sm font-medium text-gray-600"
//                 >
//                   Dosage Instruction
//                 </label>
//                 <textarea
//                   type="text"
//                   id="instruction"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-[700px] w-[330px] p-2.5 h-[80px]"
//                   placeholder=""
//                   required
//                   onChange={(e) => setDosage(e.target.value)}
//                 />
//               </div>

//               <div className='flex flex-row h-[36px] ml-[34px] -mt-8 mb-[20px]'>
//                 <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px]'>{bookingDetails.startServiceDate}</h2>
//               </div>

//               <div className='flex flex-row h-[36px] ml-[34px] -mt-8 mb-[32px]'>
//                 <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px]'>{bookingDetails.sampleCollectedDate}</h2>
//               </div>

//               <div className='flex flex-row h-[36px] ml-[34px] -mt-8'>
//                 <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px]'>{bookingDetails.completeDate}</h2>
//               </div>

//               <button
//                 onClick={handleCombinedAction}
//                 className='inline-block h-[36px] w-auto bg-[#E40443] text-[13px] font-[600] font-Montserrat text-white rounded-lg items-center justify-center px-[24px] ml-4 mb-4'
//               >
//                 End Service
//               </button>
//             </div>
//           </main>

//         </div>
//         {showOtpCard && <OtpCard2 />}
//         {showPrescriptionPopup && (
//                   <Prescription prescription={prescriptionData} onClose={closePrescriptionPopup} />
//                 )}

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default EndService;










import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import Loading from './Loading';
import OtpCard2 from '../components/OtpCard2';
import arr from '../assets/arrow left.png';
import pro from "../assets/Ellipse 2.png";
import cal from "../assets/calendar.png";
import clock from "../assets/clock.png";
import both from "../assets/ic (4).png";

const EndService = () => {
  const { bookingId } = useParams(); // Extract bookingId from the URL
  const [bookingDetails, setBookingDetails] = useState(null);
  const [dosage, setDosage] = useState('');
  const [showOtpCard, setShowOtpCard] = useState(false);
  const navigate = useNavigate();
  const [profileDetails, setProfileDetails] = useState(null);

  useEffect(() => {
    // Fetch booking details using the bookingId from the URL
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`/api/sd/pendingvaccine/${bookingId}`);
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

  const handleEndService = () => {
    axios.post(`/api/sd/completedvaccine/${bookingId}`)
      .then(response => {
        alert('Service completed successfully');
      })
      .catch(error => {
        console.error('Error updating booking status:', error);
      });
  };

  const handleDosage = async () => {
    try {
      axios.post(`/api/dosage/2/${bookingId}`, { dosage })
        .then(response => {
          alert('Dosage created successfully');
        });
    } catch (error) {
      console.error('Error creating dosage:', error);
      alert('Error creating dosage. Please try again later.');
    }
  };
  
  const handlesendOtp = async () => {
    try {
      const response = axios.post(`/api/otp/sendotp2/${bookingId}`)
      .then(response => {
        alert(`OTP: ${response.data.otp}`);
      })

      setShowOtpCard(true);
    } catch (error) {
      console.error("Error generating OTP:", error);
      alert("Error generating OTP. Please try again later.");
    }
  };

  const handleCombinedAction = async () => {
    try {
      await handleDosage();
      await handlesendOtp(); 
    } catch (error) {
      console.error('Error in combined action:', error);
    }
  };

  if (!bookingDetails || !profileDetails) {
    return <Loading bookingDetails={bookingDetails} profileDetails={profileDetails} />;
  }

  return (
    <>
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
                </div>
                <a href={`tel: ${profileDetails.mobileNumber}`}> 
                <img src={both} alt="" className='sm:ml-[365px] ml-[40px] mt-[30px]' />
              </a>
              </div>

              <div className=' border-b-red'>
                <ul className='h-auto w-full flex sm:justify-between py-[8px] px-[12px] items-center border-t border-b'>
                  <div className='text-[#E40443] font-Montserrat text-[12px] font-[600] tracking-[1px] sm:max-w-[300px] max-w-[150px]'> {bookingDetails.Vaccine}</div>
                  <a href={`/api/otp/downloadreport/${bookingDetails.prescriptionId}`} target='_blank' className='py-[8px] px-[10px] rounded-lg border bg-[#E40443] text-white text-[12px] font-Montserrat font-medium sm:ml-0 ml-[55px]'>View Prescription</a>
                </ul>
              </div>
              <div className='h-[84px] py-[20px] px-[20px] border-t-[#EEF0F3]'>
                <h1 className='font-Montserrat text-[14px] font-medium'>Need</h1>
                <h2 className='flex font-Montserrat text-[12px] font-medium mt-[8px] w-[345px]'><img src={cal} alt="cal" className='h-4 w-4 mr-[7px]' />{bookingDetails.startDate}</h2>
                <h3 className='flex font-Montserrat text-[12px] font-medium -mt-[19px] sm:ml-[372px] ml-[228px]'><img src={clock} alt="cal" className='h-4 w-4 mr-[7px] mt-[1px]' />{bookingDetails.timeslot}</h3>
              </div>
              <div className='py-[20px] px-[20px] pt-[12px] border-t'>
                <label
                  htmlFor="instruction"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Dosage Instruction
                </label>
                <textarea
                  type="text"
                  id="instruction"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-[700px] w-[330px] p-2.5 h-[80px]"
                  placeholder=""
                  required
                  onChange={(e) => setDosage(e.target.value)}
                />
              </div>
               <button
                onClick={handleCombinedAction}
                className='inline-block h-[36px] w-auto bg-[#E40443] text-[13px] font-[600] font-Montserrat text-white rounded-lg items-center justify-center px-[24px] ml-4 mb-4'
              >
                End Service
              </button>
            </div>
          </main>
        </div>
        {showOtpCard && <OtpCard2 bookingId={bookingId} />}
        <Footer />
      </div>
    </>
  );
};

export default EndService;


