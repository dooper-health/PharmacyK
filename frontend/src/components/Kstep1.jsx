// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Step1image from '../assets/Step-1-of-3.svg';
// //import in every component
// import { useAvailabilityContext } from '../AvailabilityContext';
// //import in every component

// const Kstep1 = () => {

//   const navigate = useNavigate();

//   //add in every component
//   const { mobileNumber } = useAvailabilityContext();

//   //add in every component

//   // remove if exist 
//   // const location = useLocation();
//   // const { mobileNumber } = location.state || {};

//   const [fullName, setFullName] = useState('');
//   const [labName, setLabName] = useState('');
//   const [labAddress1, setLabAddress1] = useState('');
//   const [labAddress2, setLabAddress2] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [files, setFiles] = useState({
//     labPhoto: null,
//   });

//   const fileInputRefs = {
//     labPhoto: useRef(null),
//   };

//   const handleFileChange = (e, field) => {
//     setFiles((prevFiles) => ({
//       ...prevFiles,
//       [field]: e.target.files[0],
//     }));
//   };

//   const handleUploadClick = (field) => {
//     fileInputRefs[field].current.click();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('fullName', fullName);
//     formData.append('labName', labName); 
//     formData.append('labAddress1', labAddress1);
//     formData.append('labAddress2', labAddress2);
//     formData.append('city', city);
//     formData.append('state', state);
//     formData.append('mobileNumber', mobileNumber);
//     if (files.labPhoto) {
//       formData.append('labPhoto', files.labPhoto);
//     }
  
//     try {
//       const response = await axios.post('/api/auth/signup1', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Data submitted successfully:', response.data);
//       navigate('/Kstep2', { state: { mobileNumber } });
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       alert('Error submitting data');
//     }
//   };

//   const renderUploadField = (label, field) => (
//     <div className="mb-6">
//       <label className="block text-gray-700 mb-2">{label}</label>
//       <div
//         className="border border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer"
//         onClick={() => handleUploadClick(field)}
//       >
//         <span className="text-gray-500">{files[field] ? files[field].name : 'Upload'}</span>
//         <input
//           type="file"
//           ref={fileInputRefs[field]}
//           className="hidden"
//           onChange={(e) => handleFileChange(e, field)}
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex w-full overflow-hidden">
//       <div className="flex flex-col sm:w-[480px] w-[340px] mx-auto sm:p-8 p-6">
//         <img src={Step1image} alt="step1" />

//         <h2 className="text-2xl font-bold mb-6 text-center">Basic Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="fullName">Full name</label>
//             <input
//               className="w-full border border-gray-300 rounded-md p-2"
//               type="text"
//               id="fullName"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="Enter full name"
//             />
//           </div>

//           {renderUploadField('Pharmacy photo*', 'labPhoto')}

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="labName">Pharmacy name</label>
//             <input
//               className="w-full border border-gray-300 rounded-md p-2"
//               type="text"
//               id="labName"
//               value={labName}
//               onChange={(e) => setLabName(e.target.value)}
//               placeholder="Enter Pharmacy name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="labAddress1">Pharmacy Address</label>
//             <input
//               className="w-full border border-gray-300 rounded-md p-2 mb-2"
//               type="text"
//               id="labAddress1"
//               value={labAddress1}
//               onChange={(e) => setLabAddress1(e.target.value)}
//               placeholder="Address line 1"
//             />
//             <input
//               className="w-full border border-gray-300 rounded-md p-2"
//               type="text"
//               id="labAddress2"
//               value={labAddress2}
//               onChange={(e) => setLabAddress2(e.target.value)}
//               placeholder="Address line 2"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
//             <input
//               className="w-full border border-gray-300 rounded-md p-2"
//               type="text"
//               id="city"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//           </div>
//           <div className="mb-8">
//             <label className="block text-gray-700 mb-2" htmlFor="state">State</label>
//             <input
//               className="w-full border border-gray-300 rounded-md p-2"
//               type="text"
//               id="state"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="inline-block mt-[40px] w-full h-[44px] rounded-[8px] bg-[#FCE6EC] text-center font-Montserrat text-[14px] font-[600] leading-[166%] text-[#E40443] py-[12px]"
//           >
//             Continue
//           </button>
//         </form>
//         <p className="text-center text-gray-500 mt-4">We are working in KOTA only</p>
//       </div>
//     </div>
//   );
// };

// export default Kstep1;





//modified
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Step1image from '../assets/Step-1-of-3.svg';
import { useAvailabilityContext } from '../AvailabilityContext';
import MobileNumberDebug from './MobileNumberDebug';


const Kstep1 = () => {
  const navigate = useNavigate();
  const { mobileNumber } = useAvailabilityContext();
  
  // Debug logging
  console.log('Kstep1 - mobileNumber from context:', mobileNumber);
  
  // Fallback to localStorage if context is empty
  const getMobileNumber = () => {
    if (mobileNumber) return mobileNumber;
    const storedMobile = localStorage.getItem('mobileNumber');
    console.log('Kstep1 - mobileNumber from localStorage:', storedMobile);
    return storedMobile;
  };
  
  // Function to normalize mobile number format
  const normalizeMobileNumber = (mobile) => {
    if (!mobile) return null;
    
    // Remove any non-digit characters except +
    let cleaned = mobile.replace(/[^\d+]/g, '');
    
    // If it starts with +91, keep it as is
    if (cleaned.startsWith('+91')) {
      return cleaned;
    }
    
    // If it starts with 91 (without +), add +
    if (cleaned.startsWith('91')) {
      return '+' + cleaned;
    }
    
    // If it's a 10-digit number, add +91
    if (cleaned.length === 10) {
      return '+91' + cleaned;
    }
    
    // If it's already in the correct format, return as is
    return cleaned;
  };
  
  const [fullName, setFullName] = useState('');
  const [pharmacyName, setPharmacyName] = useState('');
  const [pharmacyAddress1, setPharmacyAddress1] = useState('');
  const [pharmacyAddress2, setPharmacyAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [files, setFiles] = useState({
    pharmacyPhoto: null,
  });

  const fileInputRefs = {
    pharmacyPhoto: useRef(null),
  };

  const handleFileChange = (e, field) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [field]: e.target.files[0],
    }));
  };

  const handleUploadClick = (field) => {
    fileInputRefs[field].current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!fullName.trim()) {
      alert('Please enter your full name');
      return;
    }
    
    if (!pharmacyName.trim()) {
      alert('Please enter pharmacy name');
      return;
    }
    
    if (!pharmacyAddress1.trim()) {
      alert('Please enter pharmacy address');
      return;
    }
    
    if (!city.trim()) {
      alert('Please enter city');
      return;
    }
    
    if (!state.trim()) {
      alert('Please enter state');
      return;
    }
    
    const currentMobileNumber = getMobileNumber();
    if (!currentMobileNumber) {
      alert('Mobile number is required. Please go back and complete phone verification.');
      return;
    }
    
    // Normalize the mobile number format
    const normalizedMobileNumber = normalizeMobileNumber(currentMobileNumber);
    if (!normalizedMobileNumber) {
      alert('Invalid mobile number format. Please go back and complete phone verification.');
      return;
    }
    
    console.log('Submitting form with mobile number:', normalizedMobileNumber);
    
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('pharmacyName', pharmacyName); 
    formData.append('pharmacyAddress1', pharmacyAddress1);
    formData.append('pharmacyAddress2', pharmacyAddress2);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('mobileNumber', normalizedMobileNumber);
    
    if (files.pharmacyPhoto) {
      formData.append('labPhoto', files.pharmacyPhoto);
    }
  
    try {
      console.log('Submitting data with mobileNumber:', normalizedMobileNumber);
      const response = await axios.post('/api/auth/signup1', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data submitted successfully:', response.data);
      
      // Store the normalized mobile number in localStorage for consistency
      localStorage.setItem('mobileNumber', normalizedMobileNumber);
      
      navigate('/Kstep2', { state: { mobileNumber: normalizedMobileNumber } });
    } catch (error) {
      console.error('Error submitting data:', error);
      
      // Better error handling
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data?.message || 'Server error occurred';
        if (errorMessage === 'User not found') {
          alert('User not found. Please go back and complete phone verification first.');
        } else {
          alert(`Error: ${errorMessage}`);
        }
      } else if (error.request) {
        // Network error
        alert('Network error. Please check your internet connection and try again.');
      } else {
        // Other error
        alert('Error submitting data. Please try again.');
      }
    }
  };

  const renderUploadField = (label, field) => (
    <div className="mb-6">
      <label className="block text-gray-700 mb-2">{label}</label>
      <div
        className="border border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer"
        onClick={() => handleUploadClick(field)}
      >
        <span className="block w-full truncate text-gray-500">{files[field] ? files[field].name : 'Upload'}</span>
        <input
          type="file"
          ref={fileInputRefs[field]}
          className="hidden"
          onChange={(e) => handleFileChange(e, field)}
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col bg-[#FFFFFF]">
      
      <div className="flex flex-col sm:w-[480px] w-[340px] mx-auto sm:p-8 p-6">
      <img src={Step1image} alt="step1" />

        <h2 className="text-2xl font-bold mb-6 text-center">Basic Details</h2>
        
        {/* Temporary debug component */}
        <MobileNumberDebug />
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">Full name</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
            />
          </div>
          
          {renderUploadField('Pharmacy photo*', 'pharmacyPhoto')}
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="pharmacyName">Pharmacy name</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              id="pharmacyName"
              value={pharmacyName}
              onChange={(e) => setPharmacyName(e.target.value)}
              placeholder="Enter Pharmacy name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="pharmacyAddress1">Pharmacy Address</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 mb-2"
              type="text"
              id="pharmacyAddress1"
              value={pharmacyAddress1}
              onChange={(e) => setPharmacyAddress1(e.target.value)}
              placeholder="Address line 1"
            />
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              id="pharmacyAddress2"
              value={pharmacyAddress2}
              onChange={(e) => setPharmacyAddress2(e.target.value)}
              placeholder="Address line 2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 mb-2" htmlFor="state">State</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="inline-block mt-[40px] w-full h-[44px] rounded-[8px] bg-[#FCE6EC] text-center font-Montserrat text-[14px] font-[600] leading-[166%] text-[#E40443] py-[12px]"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">We are working in KOTA only</p>
      </div>
    </div>
  );
};

export default Kstep1;
