import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Step2image from '../assets/Step-2-of-3.svg';
import { useSession } from '../context/SessionContext.jsx';

const Kstep2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mobileNumber: sessionMobileNumber, updateSignupProgress } = useSession();
  const { mobileNumber: stateMobileNumber } = location.state || {};
  
  // Use state mobile number if available, otherwise fall back to session context
  const mobileNumber = stateMobileNumber || sessionMobileNumber;

  // Check if user should be on this step
  useEffect(() => {
    const checkUserProgress = async () => {
      const currentMobile = mobileNumber;
      if (!currentMobile) {
        navigate('/signup');
        return;
      }
      
      // If user has completed signup, redirect to dashboard
      if (currentMobile && localStorage.getItem('signupCompleted') === 'true') {
        navigate('/dashboarddark');
        return;
      }
    };

    checkUserProgress();
  }, [mobileNumber, navigate]);
  
  // Function to normalize mobile number format (same as backend)
  const normalizeMobileNumber = (mobile) => {
    if (!mobile) return null;
    
    // Convert to string and trim
    let mobileStr = String(mobile).trim();
    
    // Remove any non-digit characters except +
    let cleaned = mobileStr.replace(/[^\d+]/g, '');
    
    // If it starts with +91, keep it as is
    if (cleaned.startsWith('+91')) {
      return cleaned;
    }
    // If it starts with 91 (without +), add +
    else if (cleaned.startsWith('91')) {
      return '+' + cleaned;
    }
    // If it's a 10-digit number, add +91
    else if (cleaned.length === 10) {
      return '+91' + cleaned;
    }
    // Otherwise, keep as is
    else {
      return cleaned;
    }
  };
  
  const [files, setFiles] = useState({
    aadharCard: null,
    panCard: null,
    pharmacyLicense: null,
    pharmacyEstablishedLicense: null,
    nablLicense: null,
    gstCertificate: null,
  });

  const fileInputRefs = {
    aadharCard: useRef(null),
    panCard: useRef(null),
    pharmacyLicense: useRef(null),
    pharmacyEstablishedLicense: useRef(null),
    nablLicense: useRef(null),
    gstCertificate: useRef(null),
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
    
    // Validate mobile number
    if (!mobileNumber) {
      alert('Mobile number is required. Please go back and complete phone verification.');
      return;
    }
    
    // Normalize mobile number
    const normalizedMobileNumber = normalizeMobileNumber(mobileNumber);
    if (!normalizedMobileNumber) {
      alert('Invalid mobile number format. Please go back and complete phone verification.');
      return;
    }
    
    const formData = new FormData();
    formData.append('aadharCard', files.aadharCard);
    formData.append('panCard', files.panCard);
    formData.append('pharmacyLicense', files.pharmacyLicense);
    formData.append('pharmacyEstablishedLicense', files.pharmacyEstablishedLicense);
    formData.append('nablLicense', files.nablLicense);
    formData.append('gstCertificate', files.gstCertificate);
    formData.append('mobileNumber', normalizedMobileNumber);
  
    try {
      console.log('Submitting Kstep2 with mobileNumber:', normalizedMobileNumber);
      const response = await axios.post('/api/auth/signup2', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data submitted successfully:', response.data);
      
      // Update session progress
      await updateSignupProgress(2, false);
      
      navigate('/Kstep3', { state: { mobileNumber: normalizedMobileNumber } });
    } catch (error) {
      console.error('Error submitting data:', error);
      
      // Better error handling
      if (error.response) {
        const errorMessage = error.response.data?.message || 'Server error occurred';
        alert(`Error: ${errorMessage}`);
      } else if (error.request) {
        alert('Network error. Please check your internet connection and try again.');
      } else {
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
        <span className="text-gray-500">{files[field] ? files[field].name : 'Upload'}</span>
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
    <div className="flex w-full h-screen">
      

      <div className="flex flex-col sm:w-[480px] w-[340px] mx-auto sm:p-8 p-6]">
      <img src={Step2image} alt="step2" />


        <h2 className="text-2xl font-bold mb-6 text-center">Upload Documents</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {renderUploadField('Aadhar Card*', 'aadharCard')}
            {renderUploadField('Pan Card*', 'panCard')}
            {renderUploadField('Lab license file*', 'pharmacyLicense')}
           
            {renderUploadField('GST', 'gstCertificate')}
          </div>
          
          <button
            type="submit"
            className="inline-block mt-[40px] w-full h-[44px] rounded-[8px] bg-[#FCE6EC] text-center font-Montserrat text-[14px] font-[600] leading-[166%] text-[#E40443] py-[12px]"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Kstep2;
