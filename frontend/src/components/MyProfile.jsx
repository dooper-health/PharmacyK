import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Selector from './Selector';
import Footermobile from './Footermobile';
import { useAvailabilityContext } from '../AvailabilityContext';
import editimage from "../assets/photo.png";
import icon from "../assets/icon.png";
import arrowicon from "../assets/ic (3).png";
import profileIcon from "../assets/User.png";
import wallet from "../assets/Frame (1).png";
import phone from "../assets/Call.png";
import privacy from "../assets/Vector (3).png";
import terms from "../assets/terms.png";
import info from "../assets/info.png";
import star from "../assets/star (1).png";
import logoutIcon from "../assets/logout (1).png";
import hamburger from "../assets/hamburger.png";
import axios from 'axios';
import logout from "../assets/logout (1).png";
import { Link } from 'react-router-dom';


const MyProfile = () => {
  const { mobileNumber, setMobileNumber } = useAvailabilityContext();
  const [fullName, setFullName] = useState('');
  const [earningsData2, setEarningsData2] = useState({ availableBalance: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEarnings2 = async () => {
      try {
        const response = await axios.post('/api/earning/available', { phoneNumber: mobileNumber });
        console.log('Earnings Data:', response.data);
        setEarningsData2(response.data);
      } catch (error) {
        console.error("There was an error fetching the earnings data!", error);
      }
    };

    if (mobileNumber) {
      fetchEarnings2();
    }
  }, [mobileNumber]);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      if (!mobileNumber) {
        console.error('Mobile number not available');
        return;
      }
      try {
        const response = await fetch(`/api/profile/mobile/${mobileNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile info');
        }
        const data = await response.json();
        console.log('Profile Data:', data);
        setFullName(data.fullName);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProfileInfo();
  }, [mobileNumber]);

 

  const handleLogout = async () => {
    try {

      console.log('Logout successful'); 
      setMobileNumber('');
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='w-full h-full overflow-x-hidden'>
        <Navbar />
        <div className='sm:bg-[#F4F4F4]'>
          <main className='sm:mx-[120px] mx-[5px] pt-[24px] pb-[100%]'>
            <div className='flex sm:space-x-0 space-x-4'>
            <Link to="/Sidebarmobile">
          <img src={hamburger} className='sm:hidden w-[20px] h-[26px]'/>
          </Link>
              <div className='font-Montserrat font-[700] sm:text-[22px] text-[20px] h-[32px] pb-[8px]'>
                My Profile
              </div>
            </div>
            {/* <div className='h-[656px] sm:w-[454px] w-[350px] rounded-2xl sm:p-[32px] p-[16px] bg-white sm:mt-[32px]'>
             */}
             <div className="flex justify-center items-center lg:justify-start  lg:top-0 lg:left-0">
             <div className='h-[656px] sm:w-[454px] w-[350px] rounded-2xl sm:p-[32px] p-[16px] bg-white sm:mt-[32px]'>

              <div className='flex pt-[12px] pb-[20px] relative border-b border-[gray]'>
               {/* facing issues while using EC2 instance */}
                <img src={editimage} alt="phone" className='w-[48px] h-[48px] rounded-full ' />
                <Link to="/editprofile">
                  <img src={icon} alt="icon" className='absolute top-0 left-0 mt-7 ml-4' />
                </Link>
                <div className='ml-[16px]'>
                  <h1 className='font-Montserrat text-[14px] font-[600] text-black'>{fullName}</h1>
                  <h2 className='font-Montserrat text-[14px] font-[500] text-[#5B6572]'>Rs. {earningsData2.availableBalance}</h2>
                  <Link to="/viewprofile">
                    <img src={arrowicon} alt="" className='sm:ml-[309px] ml-[225px] -mt-[29px] w-[16px] h-[16px]' />
                  </Link>
                </div>
              </div>
              <div className='sm:hidden'>
                <Selector />
              </div>
              <div className='hidden sm:block'>
                <div className='py-[20px] flex flex-row border-b-[1px]'>
                  <img src={profileIcon} alt="pro" className='w-[20px] h-[20px] mt-[2px]' />
                  <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Edit Profile</h1>
                  <Link to="/editprofile">
                    <img src={arrowicon} alt="" className='sm:ml-[248px] ml-[165px] mt-[3px] w-[16px] h-[16px]' />
                  </Link>
                </div>
              </div>
                 {/* <div className='py-[20px] flex flex-row border-b-[1px]'>
                <img src={wallet} alt="pro" className='w-[20px] h-[20px] mt-[2px]' />
                <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>My Earnings</h1>
                <Link to="/earning">
                  <img src={arrowicon} alt="" className='sm:ml-[237px] ml-[155px] mt-[3px] w-[16px] h-[16px]' />
                </Link>
              </div> */}
              <div className='py-[20px] flex flex-row border-b-[1px]'>
  <img src={wallet} alt="wallet" className='w-[20px] h-[20px] mt-[2px]' />
  <Link to="/earning" className='flex flex-row items-center w-full'>
    <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>My Earnings</h1>
    <img src={arrowicon} alt="arrow" className='sm:ml-[237px] ml-[155px] mt-[3px] w-[16px] h-[16px]' />
  </Link>
</div>

              <div className='py-[20px] flex flex-row border-b-[1px]'>
                <img src={phone} alt="pro" className='w-[20px] h-[20px] mt-[2px]' />
                <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Contact Us</h1>
                <img src={arrowicon} alt="" className='sm:ml-[248px] ml-[165px] mt-[3px] w-[16px] h-[16px]' />
              </div>
              <div className='py-[20px] flex flex-row border-b-[1px]'>
                <img src={privacy} alt="pro" className='w-[20px] h-[20px] mt-[2px]' />
                <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Privacy Policy</h1>
                <img src={arrowicon} alt="" className='sm:ml-[226px] ml-[145px] mt-[3px] w-[16px] h-[16px]' />
              </div>
              <div className='py-[20px] flex flex-row border-b-[1px]'>
                <img src={terms} alt="pro" className='w-[20px] h-[20px] mt-[2px]' />
                <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Terms & Conditions</h1>
                <img src={arrowicon} alt="" className='sm:ml-[180px] ml-[99px] mt-[3px] w-[16px] h-[16px]' />
              </div>
              <div className='py-[20px] flex flex-row border-b-[1px]'>
                <img src={info} alt="pro" className='w-[20px] h-[20px] mt-[2px]' />
                <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>About Us</h1>
                <img src={arrowicon} alt="" className='sm:ml-[262px] ml-[180px] mt-[3px] w-[16px] h-[16px]' />
              </div>
              <div className='py-[20px] flex flex-row border-b-[1px]'>
                <img src={star} alt="pro" className='w-[20px] h-[20px] mt-[2px]' />
                <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Rate Us</h1>
                <img src={arrowicon} alt="" className='sm:ml-[271px] ml-[193px] mt-[3px] w-[16px] h-[16px]' />
              </div>
              <div className='py-[20px] flex flex-row'>
                <img src={logoutIcon} alt="pro" className='w-[20px] h-[20px] mt-[2px]' />
                <h1 onClick={handleLogout} className='font-Montserrat font-medium text-[16px] ml-[16px] cursor-pointer'>Logout</h1>
                {/* <img src={arrowicon} alt="" className='sm:ml-[263px] ml-[195px] mt-[3px] w-[16px] h-[16px]' /> */}
              </div>
            </div>
            </div>
          </main>
        </div>
        <Footermobile />
      </div>
    </>
  );
};

export default MyProfile;

