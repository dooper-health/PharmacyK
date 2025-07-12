import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SecondaryButton from '../temp/SecondaryButton.jsx';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useAuth } from "../context/AuthContext.jsx";
import { useAvailabilityContext } from "../AvailabilityContext.jsx";

const SignupStep1 = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { sendOTP, verifyOTP } = useAuth();
  const { setMobileNumber } = useAvailabilityContext();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Disable button
    setIsButtonDisabled(true);

    // Re-enable button after 3 seconds
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3000);

    if (number === "" || number === undefined) {
      setError("Please enter a valid phone number!");
      setIsLoading(false);
      return;
    }

    try {
      // Format phone number to E.164 format
      const formattedNumber = number.startsWith('+') ? number : `+${number}`;
      
      console.log('Attempting to send OTP to:', formattedNumber);
      const response = await sendOTP(formattedNumber, "recaptcha-container");
      setResult(response);
      setFlag(true);
      setIsLoading(false);
    } catch (err) {
      console.error("OTP Error:", err);
      setError(err.message || "Failed to send OTP. Please try again.");
      setIsLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (otp === "" || otp === null) {
      setError("Please enter the OTP");
      setIsLoading(false);
      return;
    }

    try {
      console.log('Attempting to verify OTP...');
      const verificationResult = await verifyOTP(result, otp);
      
      // Set mobile number in context after successful verification
      let phoneNumber;
      if (verificationResult && verificationResult.user && verificationResult.user.phoneNumber) {
        phoneNumber = verificationResult.user.phoneNumber;
        setMobileNumber(phoneNumber);
        console.log('Mobile number set in context:', phoneNumber);
      } else {
        // Fallback to the number from the form
        phoneNumber = number.startsWith('+') ? number : `+${number}`;
        setMobileNumber(phoneNumber);
        console.log('Mobile number set in context (fallback):', phoneNumber);
      }
      
      // Create user in backend database
      try {
        // Use the normalized phone number format
        const response = await axios.post('/api/auth/signup/checkuserexistance', {
          phoneNumber: phoneNumber
        });
        console.log('Backend user creation response:', response.data);
      } catch (backendError) {
        console.error('Error creating user in backend:', backendError);
        // Don't block the signup process if backend user creation fails
      }
      
      navigate("/success-signup");
    } catch (err) {
      console.error("Verification Error:", err);
      setError(err.message || "Invalid OTP. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="font-Montserrat text-2xl font-bold leading-10 text-[#1A1C1F]">
          Welcome
        </div>
        <div className="text-[#1A1C1F] font-medium text-[14px] mt-1 sm:text-[14px]">
          Welcome to <span className="text-[#E40443] font-semibold">DOOPER</span>, please enter your details
        </div>
      </div>

      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}

      {!flag ? (
        <form onSubmit={getOtp}>
          <label htmlFor="mobileNumber" className="text-[#8D98A4] text-sm font-normal">
            Phone Number
          </label>
          <div className="mb-4">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <div id="recaptcha-container" className="mt-2" />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-2 bg-red-600 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isButtonDisabled || isLoading}
          >
            {isLoading ? "Sending..." : "Send OTP"}
          </button>
          
          <div className="flex items-center justify-between mt-4">
            <hr className="flex-1 bg-[#B8BFC7] h-[1px]" />
            <span className="text-[#B8BFC7] text-xs">Already have an account?</span>
            <hr className="flex-1 bg-[#B8BFC7] h-[1px]" />
          </div>
          
          <SecondaryButton title="Log In" action={() => navigate('/')} />

          <div className="flex flex-col mt-4">
            <div className="flex items-center text-sm font-normal text-[#000000]">
              <input type="checkbox" className="mr-2 h-4 w-4 border-2 border-[#4B465C]" />
              By signing up you agree to <a href="#" className="text-[#E40443]">Terms of use</a>
            </div>
            <div className="flex items-center text-sm font-normal text-[#000000]">
              <input type="checkbox" className="mr-2 h-4 w-4 border-2 border-[#000000]" />
              Get updates on WhatsApp
            </div>
          </div>
          
          <div className="text-center mt-4 text-[#5B6572] text-sm font-normal">
            Join the community of smart and experienced doctors. Signup to access your personalized dashboard, track your record or process and get informed by our services
          </div>
        </form>
      ) : (
        <form onSubmit={verifyOtp}>
          <div className="mb-4">
            <label htmlFor="otp" className="text-[#8D98A4] text-sm font-normal">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              placeholder="Enter 6-digit OTP"
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded mt-1"
              maxLength={6}
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-2 bg-red-600 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>
          
          <button 
            type="button" 
            onClick={() => setFlag(false)}
            className="w-full py-2 bg-gray-500 text-white rounded mt-2"
          >
            Back to Phone Number
          </button>
        </form>
      )}
    </div>
  );
};

export default SignupStep1;