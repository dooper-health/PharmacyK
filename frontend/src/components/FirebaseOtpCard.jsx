import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import firebaseOtpService from '../services/firebaseOtpService.js';
import SuccessCard10 from './SuccessCard10.jsx';

const FirebaseOtpCard = ({ bookingId, phoneNumber, onSuccess, onError }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6-digit OTP for Firebase
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  
  const inputRefs = [
    useRef(null), useRef(null), useRef(null), 
    useRef(null), useRef(null), useRef(null)
  ];

  // Countdown timer for resend OTP
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // Initialize reCAPTCHA on component mount
  useEffect(() => {
    const initializeRecaptcha = async () => {
      try {
        await firebaseOtpService.initializeRecaptcha('recaptcha-container');
      } catch (error) {
        console.error('Failed to initialize reCAPTCHA:', error);
        setErrorMessage('Failed to initialize security verification');
      }
    };

    initializeRecaptcha();

    // Cleanup on unmount
    return () => {
      firebaseOtpService.clearRecaptcha();
    };
  }, []);

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    const inputValue = e.target.value.slice(-1).replace(/[^0-9]/g, '');

    newOtp[index] = inputValue;
    setOtp(newOtp);

    // Auto-focus next input
    if (index < otp.length - 1 && inputValue !== '') {
      inputRefs[index + 1].current.focus();
    }

    // Auto-verify when all digits are entered
    if (index === otp.length - 1 && inputValue !== '') {
      const fullOtp = newOtp.join('');
      if (fullOtp.length === 6) {
        handleVerifyOtp();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs[index - 1].current.focus();
    }
  };

  const sendOtp = async () => {
    if (!phoneNumber) {
      setErrorMessage('Phone number is required');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const result = await firebaseOtpService.sendOtp(phoneNumber);
      
      if (result.success) {
        setOtpSent(true);
        setCountdown(60); // 60 seconds countdown
        setErrorMessage('');
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    if (countdown > 0) return;
    
    setIsLoading(true);
    setErrorMessage('');

    try {
      const result = await firebaseOtpService.resendOtp(phoneNumber);
      
      if (result.success) {
        setCountdown(60);
        setErrorMessage('');
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage('Failed to resend OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndService = async () => {
    try {
      await axios.post(`/api/sd/completemedicine/${bookingId}`);
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const handleVerifyOtp = async () => {
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      setErrorMessage('Please enter complete 6-digit OTP');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const result = await firebaseOtpService.verifyOtp(otpString);
      
      if (result.success) {
        await handleEndService();
        setShowSuccessCard(true);
        if (onSuccess) onSuccess(result.user);
      } else {
        setErrorMessage(result.message);
        // Clear OTP on error
        setOtp(['', '', '', '', '', '']);
        inputRefs[0].current.focus();
      }
    } catch (error) {
      setErrorMessage('Failed to verify OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  if (showSuccessCard) {
    return <SuccessCard10 />;
  }

  return (
    <div className='absolute top-0 left-0 w-full h-[1215px] flex items-center justify-center bg-black bg-opacity-70 z-30'>
      <div className='absolute -ml-[208px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[96px] z-30'>
        <div className='sm:w-[600px] w-[300px] mb-40 h-auto p-[32px] bg-white rounded-2xl ml-[420px] relative z-30'>
          <h1 className='flex text-[#1A1C1F] text-[32px] font-[700] items-center justify-center mb-2'>
            Verify OTP
          </h1>
          
          {phoneNumber && (
            <h2 className='flex items-center justify-center font-Montserrat text-[#1A1C1F] text-[14px] font-[500] mb-4'>
              Enter the 6-digit code sent to {formatPhoneNumber(phoneNumber)}
            </h2>
          )}

          {/* reCAPTCHA Container */}
          <div id="recaptcha-container" className="mb-4"></div>

          {/* OTP Input Fields */}
          <div className='flex justify-center space-x-[8px] mb-6'>
            {otp.map((value, index) => (
              <div key={index} className="relative">
                <input
                  type='text'
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className='border font-Montserrat relative border-gray-300 rounded-md w-[48px] h-[48px] text-center text-[16px] font-[500] focus:border-[#E40443] focus:outline-none'
                  maxLength="1"
                  ref={inputRefs[index]}
                  disabled={isLoading}
                />
              </div>
            ))}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className='text-red-500 text-center text-sm mb-4'>
              {errorMessage}
            </div>
          )}

          {/* Action Buttons */}
          <div className='space-y-3'>
            {!otpSent ? (
              <button
                onClick={sendOtp}
                disabled={isLoading}
                className='inline-block bg-[#E40443] w-full pt-[12px] items-center h-[44px] rounded-lg font-Montserrat text-[14px] font-[600] text-white disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isLoading ? 'Sending...' : 'Send OTP'}
              </button>
            ) : (
              <>
                <button
                  onClick={handleVerifyOtp}
                  disabled={isLoading || otp.join('').length !== 6}
                  className='inline-block bg-[#E40443] w-full pt-[12px] items-center h-[44px] rounded-lg font-Montserrat text-[14px] font-[600] text-white disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isLoading ? 'Verifying...' : 'Verify OTP'}
                </button>
                
                <button
                  onClick={resendOtp}
                  disabled={isLoading || countdown > 0}
                  className='inline-block bg-transparent border border-[#E40443] w-full pt-[12px] items-center h-[44px] rounded-lg font-Montserrat text-[14px] font-[600] text-[#E40443] disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {countdown > 0 
                    ? `Resend in ${countdown}s` 
                    : 'Resend OTP'
                  }
                </button>
              </>
            )}
          </div>

          {/* Security Notice */}
          <div className='text-center text-xs text-gray-500 mt-4'>
            This verification is protected by reCAPTCHA Enterprise
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirebaseOtpCard; 