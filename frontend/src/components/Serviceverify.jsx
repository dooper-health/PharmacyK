import React, { useEffect, useState } from 'react';
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
import lineWhite from "../assets/Line 5.png";
import OtpCard from './OtpCard';

const Serviceverify = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { bookingId } = useParams();
    const [bookingDetails, setBookingDetails] = useState(null);

    useEffect(() => {
        axios.get(`/api/bookingservice/${bookingId}`)
            .then(response => {
                setBookingDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching booking details:', error);
            });
    }, [bookingId]);
    const sendOtp = async () => {
              try {
                  const response = await axios.post('/api/otp/send-otp');
                  if (response.status === 200) {
                      setSuccessMessage('OTP sent successfully.');
                  } else {
                      setErrorMessage('Failed to send OTP.');
                  }
              } catch (error) {
                  console.error('Error sending OTP:', error);
                  setErrorMessage('Error sending OTP. Please try again.');
              }
          };

    const verifyOtp = async (otp) => {
        // Function to verify OTP
        try {
            const response = await axios.post(`/api/verifyOtp`, { otp });
            if (response.data.success) {
                setShowPopup(false);
                setErrorMessage('');
            } else {
                setErrorMessage('Invalid OTP. Please try again.');
            }
        } catch (error) {
            setErrorMessage('Error verifying OTP. Please try again.');
        }
    };

    const openPopup = () => {
        setShowPopup(true);
    };

    if (!bookingDetails) {
        return <div>Loading...</div>;
    }
    const handleClick = () => {
        openPopup();
        sendOtp();
      };
    

    return (
        <>
            <div className='w-full'>
                <Navbar />
                <div className='bg-[#F4F4F4]'>
                    <main className='mx-[120px] pt-[24px] pb-[48px]'>
                        <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>
                            <Link to="/dashboardbooking">
                                <img src={arr} alt="arr" className='h-[24px] w-[24px] mt-1 mr-[8px]' />
                            </Link>
                            Case #{bookingDetails.bookingId}
                        </div>
                        <div className='h-[534px] w-[774px] mt-[8px] rounded-2xl border bg-white'>
                            <div className='h-[122px] py-[12px] px-[20px] flex items-start self-stretch'>
                                <img src={pro} alt="pro" className='w-[88px] h-[88px]' />
                                <h1 className='font-Montserrat text-[16px font-semibold ml-[16px] mt-[4px]'>{bookingDetails.patientName}</h1>
                                <h2 className='text-[#5B6572] font-Montserrat text-[16px] font-medium -ml-[113px] mt-[27px]'>{bookingDetails.address}</h2>
                                <h3 className='text-[#5B6572] font-Montserrat text-[10px] font-medium -ml-[138px] mt-[51px]'>Age: {bookingDetails.age}  | Gender: {bookingDetails.gender} | Blood Group: {bookingDetails.bloodGroup}<br />Height: {bookingDetails.height} | Weight: {bookingDetails.weight}</h3>
                                <img src={both} alt="" className='ml-[338px] mt-[30px]' />
                            </div>
                            <div className='border-b-red'>
                                <ul className='flex py-[8px] px-[12px] items-center border border-t-[#EEF0F3]'>
                                    {bookingDetails.tests?.map((test, index) => (
                                        <li key={index} className='py-[8px] px-[10px] items-center rounded-lg border border-[#DBDDDF] text-[12px] font-Montserrat font-medium mr-2'>{test}</li>
                                    ))}
                                    <li className='py-[8px] px-[10px] text-end rounded-lg border bg-[#E40443] text-white text-[12px] font-Montserrat font-medium ml-[417px]'>View Prescription</li>
                                </ul>
                            </div>
                            <div className='h-[84px] py-[20px] px-[20px] border-t-[#EEF0F3]'>
                                <h1 className='font-Montserrat text-[14px] font-medium'>Request For</h1>
                                <h2 className='flex font-Montserrat text-[12px] font-medium mt-[8px] w-[345px]'><img src={cal} alt="cal" className='h-4 w-4 mr-[7px]' />{bookingDetails.date}</h2>
                                <h3 className='flex font-Montserrat text-[12px] font-medium -mt-[19px] ml-[372px]'><img src={clock} alt="cal" className='h-4 w-4 mr-[7px] mt-[1px]' />{bookingDetails.time}</h3>
                            </div>
                            <div className='py-[20px] px-[20px] h-[276px] pt-[12px] mb-[24px] border border-t-[#EEF0F3]'>
                                <img src={no} alt="no" className='' />
                                <div className='flex flex-row h-[36px] ml-[34px] -mt-8 mb-[32px]'>
                                    <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium'>Lab test details</h1>
                                    <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[93px]'>Assigned</h2>
                                </div>
                                <img src={one} alt="no" className='' />
                                <img src={line} alt="line" className='absolute -mt-[70px] h-[38px] ml-[15px]' />
                                <img src={lineWhite} alt="line" className='absolute mt-[0px] h-[160px] ml-[15px]' />
                                <div className='flex flex-row h-[36px] ml-[34px] -mt-8 mb-[20px]'>
                                    <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium'>Start Service</h1>
                                    <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[76px]'>18, June 2023</h2>
                                </div>
                                
                                <button onClick={handleClick}  className='ml-[53px] h-[36px] w-[90px] bg-[#E40443] text-[14px] font-[600] font-Montserrat text-white rounded-lg items-center justify-center px-[24px]'>Verify</button>
                                <img src={two} alt="no" className='mt-[32px]' />
                                <div className='flex flex-row h-[36px] ml-[34px] -mt-[32px] mb-[32px]'>
                                    <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium'>Sample Collected</h1>
                                    <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[103px]'>18, June 2023</h2>
                                </div>
                                <img src={three} alt="no" className='' />
                                <div className='flex flex-row h-[36px] ml-[34px] -mt-8'>
                                    <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium'>Complete</h1>
                                    <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[58px]'>18, June 2023</h2>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
            {showPopup && (
                <OtpCard
                    verifyOtp={verifyOtp}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                />
            )}
        </>
    );
};

export default Serviceverify;
