import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Step3image from '../assets/Step-3-of-3.svg';
import { useAvailabilityContext } from '../AvailabilityContext';

const Kstep3 = () => {
  const location = useLocation();
  const { mobileNumber: contextMobileNumber } = useAvailabilityContext();
  const { mobileNumber: stateMobileNumber } = location.state || {};
  
  // Use state mobile number if available, otherwise fall back to context
  const mobileNumber = stateMobileNumber || contextMobileNumber;
  
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
  
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [files, setFiles] = useState({
    uploadbankstatement: null,
  });

  const fileInputRefs = {
    uploadbankstatement: useRef(null),
  };

  const navigate = useNavigate();

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
    if (!bankName.trim()) {
      alert('Please enter bank name');
      return;
    }
    
    if (!accountNumber.trim()) {
      alert('Please enter account number');
      return;
    }
    
    if (!ifscCode.trim()) {
      alert('Please enter IFSC code');
      return;
    }
    
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
    formData.append('bankName', bankName);
    formData.append('accountNumber', accountNumber);
    formData.append('ifscCode', ifscCode);
    formData.append('mobileNumber', normalizedMobileNumber);
    if (files.uploadbankstatement) {
      formData.append('uploadbankstatement', files.uploadbankstatement);
    }

    try {
      console.log('Submitting Kstep3 with mobileNumber:', normalizedMobileNumber);
      const response = await axios.post('/api/auth/signup3', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      navigate('/profileunderreview', { state: { mobileNumber: normalizedMobileNumber } }); 
    } catch (error) {
      console.error('Error uploading file:', error);
      
      // Better error handling
      if (error.response) {
        const errorMessage = error.response.data?.message || 'Server error occurred';
        alert(`Error: ${errorMessage}`);
      } else if (error.request) {
        alert('Network error. Please check your internet connection and try again.');
      } else {
        alert('Error uploading file. Please try again.');
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
    <div className="flex w-full">
     
     

      <div className="flex flex-col sm:w-[480px] w-[340px] mx-auto sm:p-8 p-6">
      <img src={Step3image} alt="step3" />


        <h2 className="text-2xl font-bold mb-6 text-center">Bank Info</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="bankName">Bank Name</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              id="bankName"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder="Enter bank name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="accountNumber">Account Number</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter account number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="ifscCode">IFSC Code</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              type="text"
              id="ifscCode"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              placeholder="Enter IFSC code"
            />
          </div>
          <div className="mb-4">
            {renderUploadField('Upload Bank Statement / Cancel Cheque', 'uploadbankstatement')}
          </div>
          <button
            type="submit"
            className="inline-block mt-[40px] w-full h-[44px] rounded-[8px] bg-[#FCE6EC] text-center font-Montserrat text-[14px] font-[600] leading-[166%] text-[#E40443] py-[12px]"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">We are working in KOTA only</p>
      </div>
    </div>
  );
};

export default Kstep3;

