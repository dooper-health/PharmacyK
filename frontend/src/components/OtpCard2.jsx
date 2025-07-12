// import React, { useRef, useState } from 'react';
// import SuccessCard6 from './SuccessCard6';

// const OtpCard2 = ({ onOtpSuccess }) => {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

//   const handleOtpChange = (e, index) => {
//     const newOtp = [...otp];
//     const inputValue = e.target.value.slice(-1).replace(/[^0-9]/g, '');

//     newOtp[index] = inputValue;
//     setOtp(newOtp);

//     if (index < otp.length - 1 && inputValue !== '') {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const otpString = otp.join('');
//     try {
//       const response = await fetch('/api/otp/check-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ otp: otpString }),
//       });
      
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const isValid = ()=>{
//        if( response.data==otpString){
//         return true;
//        }
//       }

//       const data = await response.json();
//       console.log('API response:', data); 
// console.log(`data.isValid:`,isValid)
//       if (isValid) {
//         onOtpSuccess();
//       } else {
//         alert('Invalid OTP');
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       alert('Error verifying OTP. Please try again later.');
//     }
//   };

//   return (
//     <div className='absolute top-0 left-0 w-full h-[1015px] flex items-center justify-center bg-black bg-opacity-70 z-30'>
//       <div className='absolute -ml-[208px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[96px] z-30'>
//         <div className='sm:w-[600px] w-[300px] h-[319px] p-[32px] bg-white rounded-2xl ml-[420px] relative z-30'>
//           <h1 className='flex text-[#1A1C1F] text-[32px] font-[700] items-center justify-center'>Verify</h1>
//           <h2 className='flex items-center justify-center font-Montserrat text-[#1A1C1F] text-[14px] font-[500]'>Ask patient for OTP</h2>
//           <div className='flex justify-center space-x-[8px]'>
//             {otp.map((value, index) => (
//               <div key={index} className="relative">
//                 <input
//                   type='text'
//                   value={value}
//                   onChange={(e) => handleOtpChange(e, index)}
//                   className='border font-Montserrat relative border-gray-300 rounded-md w-[64px] h-[64px] my-[40px] text-center text-[14px] font-[500]'
//                   maxLength="1"
//                   ref={inputRefs[index]}
//                 />
//               </div>
//             ))}
//           </div>
//           <button 
//             onClick={handleVerifyOtp} 
//             className='inline-block bg-[#E40443] w-full pt-[12px] items-center h-[44px] rounded-lg font-Montserrat text-[14px] font-[600] text-white'
//           >
//             Verify OTP2
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ParentComponent = () => {
//   const [isVerified, setIsVerified] = useState(false);

//   const handleOtpSuccess = () => {
//     setIsVerified(true);
//   };

//   return (
//     <>
//       {isVerified ? <SuccessCard6 /> : <OtpCard2 onOtpSuccess={handleOtpSuccess} />}
//     </>
//   );
// };

// export default ParentComponent;



import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SuccessCard10 from './SuccessCard10.jsx';


const OtpCard2 = ({ bookingId }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [showSuccessCard, setShowSuccessCard] = useState(false); // State to track visibility of SuccessCard3
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    const inputValue = e.target.value.slice(-1).replace(/[^0-9]/g, '');

    newOtp[index] = inputValue;
    setOtp(newOtp);

    if (index < otp.length - 1 && inputValue !== '') {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleEndService = () => {
    axios.post(`/api/sd/completevaccine/${bookingId}`)
      .catch(error => {
        console.error('Error updating booking status:', error);
      });
  };

  const handleVerifyOtp = async () => {
    const otpString = otp.join('');
    console.log('Sending OTP:', otpString);
    try {
      const response = await fetch(`/api/otp/checkotp2/${bookingId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp: otpString }),
      });

      if (response.ok) {
        handleEndService(); 
        alert('OTP verified successfully and service completed');
        setShowSuccessCard(true); // Show SuccessCard3 on OTP verification success

      }

      const data = await response.json();
      console.log('API response:', data);

      if (!data.isValid) {
        // Handle invalid OTP case
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div className='absolute top-0 left-0 w-full h-[1215px] flex items-center justify-center bg-black bg-opacity-70 z-30'>
      <div className='absolute -ml-[208px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[96px] z-30'>
        <div className='sm:w-[600px] w-[300px]  mb-40 h-[319px]  p-[32px] bg-white rounded-2xl ml-[420px] relative z-30'>
          <h1 className='flex text-[#1A1C1F] text-[32px] font-[700] items-center justify-center'>Verify</h1>
          <h2 className='flex items-center justify-center font-Montserrat text-[#1A1C1F] text-[14px] font-[500]'>Ask patient for OTP</h2>
          <div className='flex justify-center space-x-[8px]'>
            {otp.map((value, index) => (
              <div key={index} className="relative">
                <input
                  type='text'
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                  className='border font-Montserrat relative border-gray-300 rounded-md w-[64px] h-[64px] my-[40px] text-center text-[14px] font-[500]'
                  maxLength="1"
                  ref={inputRefs[index]}
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleVerifyOtp}
            className='inline-block bg-[#E40443] w-full pt-[12px] items-center h-[44px] rounded-lg font-Montserrat text-[14px] font-[600] text-white'
          >
            Verify OTP
          </button>
        </div>
      </div>
      {showSuccessCard && (<SuccessCard10/>)}
    </div>
    
  );
};

export default OtpCard2;