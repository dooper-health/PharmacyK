import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import Switch from '../assets/Switch.png';
import arr from '../assets/arrow left.png';
import pro from "../assets/Ellipse 2.png";
import cal from "../assets/calendar.png";
import clock from "../assets/clock.png";
import no from "../assets/no.png";
import one from "../assets/redtwo.png";
import two from "../assets/3.png";
import three from "../assets/4.png";
import line from "../assets/Active line.png";
import lineWhite from "../assets/Line 5.png";
import both from "../assets/ic (4).png";

const EndService = () => {
  const { bookingId } = useParams();
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/bookingservice/${bookingId}`)
      .then(response => {
        setBookingDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
      });
  }, [bookingId]);

  const handleEndService = () => {
    axios.post(`/api/bookingservice/${bookingId}/endService`)
      .then(response => {
        setBookingDetails(response.data); 
        
        navigate(`/addreportcard/${bookingDetails._id}`);
      })
      .catch(error => {
        console.error('Error updating booking status:', error);
      });
  };

  if (bookingDetails === null) {
    return <div>Loading...</div>;
  }

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
              Case #{bookingDetails._id} 
            </div>
            <div className='h-auto w-[774px] mt-[8px] rounded-2xl bg-white'>
              <div className='h-[122px] py-[12px] px-[20px] flex items-start self-stretch'>
                <img src={pro} alt="pro" className='w-[88px] h-[88px]' />
                <h1 className='font-Montserrat text-[16px font-semibold ml-[16px] mt-[4px]'>{bookingDetails.patientName}</h1>
                <h2 className='text-[#5B6572] font-Montserrat text-[16px] font-medium -ml-[113px] mt-[27px]'>{bookingDetails.address}</h2>
                <h3 className='text-[#5B6572] font-Montserrat text-[10px] font-medium -ml-[138px] mt-[51px]'>Age : 32 | Gender: Male | Blood Group: O+ <br /> Height : 6” 3 inches | Weight : 76</h3>
                <img src={both} alt="" className='ml-[338px] mt-[30px]' />
              </div>

              <div className='border-b-red'>
                <ul className='flex py-[8px] px-[12px] items-center border border-t-[#EEF0F3]'>
                  {bookingDetails.labTests.map((test, index) => (
                    <li key={index} className='py-[8px] px-[10px] items-center rounded-lg border border-[#DBDDDF] text-[12px] font-Montserrat font-medium mr-2'>{test}</li>
                  ))}
                  <Link to={`/viewprescription/${bookingDetails._id}`} className='py-[8px] px-[10px] text-end rounded-lg border bg-[#E40443] text-white text-[12px] font-Montserrat font-medium ml-[417px]'>View Prescription</Link>
                </ul>
              </div>

              <div className='h-[84px] py-[20px] px-[20px] border-t-[#EEF0F3]'>
                <h1 className='font-Montserrat text-[14px] font-medium'>Request For</h1>
                <h2 className='flex font-Montserrat text-[12px] font-medium mt-[8px] w-[345px]'><img src={cal} alt="cal" className='h-4 w-4 mr-[7px]' />{bookingDetails.date}</h2>
                <h3 className='flex font-Montserrat text-[12px] font-medium -mt-[19px] ml-[372px]'><img src={clock} alt="cal" className='h-4 w-4 mr-[7px] mt-[1px]' />{bookingDetails.time}</h3>
              </div>

              <div className='py-[20px] px-[20px] pt-[12px] border border-t-[#EEF0F3]'>
                <img src={no} alt="no" className='' />
                <div className='flex flex-row h-[36px] ml-[34px] -mt-8 mb-[32px]'>
                  <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium '>Lab test details</h1>
                  <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[93px]'>Assigned</h2>
                </div>
                <img src={no} alt="no" className='' />
                <img src={line} alt="line" className='absolute -mt-[70px] h-[108px] ml-[15px]' />
                <img src={lineWhite} alt="line" className='absolute mt-[69px] h-[39px] ml-[15px]' />

                <div className='flex flex-row h-[36px] ml-[34px] -mt-8 mb-[20px]'>
                  <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium '>Start Service</h1>
                  <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[76px]'>{bookingDetails.startServiceDate}</h2>
                </div>

                <img src={no} alt="no" className='mt-[32px]' />
                <div className='flex flex-row h-[36px] ml-[34px] -mt-[32px] mb-[32px]'>
                  <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium '>Sample Collected</h1>
                  <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[103px]'>{bookingDetails.sampleCollectedDate}</h2>
                </div>

                <img src={three} alt="no" className='' />
                <div className='flex flex-row h-[36px] ml-[34px] -mt-8'>
                  <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium '>Complete</h1>
                  <h2 className='font-Montserrat text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[58px]'>{bookingDetails.completeDate}</h2>
                </div>

                <Link 
                  to={`/addreportcard/${bookingDetails._id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleEndService();
                  }}
                  className='inline-block h-[36px] w-auto bg-[#E40443] text-[13px] font-[600] font-Montserrat text-white rounded-lg items-center justify-center px-[24px] mt-[32px] pt-2'
                >
                  End Service
                </Link>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EndService;
