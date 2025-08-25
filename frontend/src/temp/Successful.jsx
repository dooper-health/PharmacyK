// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useSession } from '../context/SessionContext.jsx';
// import SideBar from '../components/SideBar';
// import dooper from '../assets/dooper.png';
// import done from '../assets/Done.png';

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSession } from '../context/SessionContext.jsx';
import SideBar from '../components/SideBar';
import dooper from '../assets/dooper.png';
import done from '../assets/Done.png';

const Successful = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mobileNumber: sessionMobileNumber, signupCompleted, getRedirectPath, getSignupProgress } = useSession();
  const { mobileNumber: stateMobileNumber } = location.state || {};
  
  // Use state mobile number if available, otherwise fall back to session context
  const mobileNumber = stateMobileNumber || sessionMobileNumber;
  const [isChecking, setIsChecking] = useState(false);

  const handleContinue = async () => {
    setIsChecking(true);
    
    try {
      // Double-check the signup progress from the server
      const progress = await getSignupProgress(mobileNumber);
      
      if (progress && progress.signupCompleted) {
        // User has completed all three signup steps, go to dashboard
        console.log('User has completed signup, going to dashboard');
        navigate('/dashboarddark');
      } else {
        // User needs to complete signup, redirect to appropriate step
        const redirectPath = getRedirectPath();
        console.log('User needs to complete signup, redirecting to:', redirectPath);
        navigate(redirectPath);
      }
    } catch (error) {
      console.error('Error checking signup progress:', error);
      // Fallback: redirect to first signup step
      navigate('/Kstep1');
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className='flex flex-col bg-[#FFFFFF]] '>
      
      <div className='flex flex-col sm:max-w-[480px] mx-auto p-8'>
        <div className='text-center sm:my-0 -mt-[80px]'>
          <img src={done} alt='Success' className='mx-auto w-[200px] h-[200px] mt-[100px]' />
          <h1 className='font-Montserrat text-center text-2xl font-[700] leading-[28px] mt-[40px]'>
            Successful
          </h1>
          <h2 className='font-Montserrat text-[14px] font-[500] leading-[116%] text-center mt-[7px] w-[350px] mx-auto'>
            OTP Is verified successfully. Start your work as pharmacy
          </h2>
          <button
            onClick={handleContinue}
            disabled={isChecking}
            className='inline-block mt-[40px] sm:w-[416px] w-[335px] h-[44px] rounded-[8px] bg-[#FCE6EC] text-center font-Montserrat text-[14px] font-[600] leading-[166%] text-[#E40443] justify-center py-[12px] disabled:bg-gray-400 disabled:cursor-not-allowed'
          >
            {isChecking ? 'Checking...' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Successful;

