import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import done from "../assets/Done.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const SuccessCard4 = () => {
  const { bookingId } = useParams();
  const [bookingDetails, setBookingDetails] = useState(null);
  // const [bookingDetails, setBookingDetails] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);


  useEffect(() => {
    // Fetch booking details using the bookingId from the URL
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`/api/sd/pendingmedicine/${bookingId}`);
        const bookingData = response.data.booking;
        setBookingDetails(bookingData);

        // Fetch profile details based on the mobileNumber from booking details
        const profileResponse = await axios.get(`/api/viewprofile/${bookingData.mobileNumber}`);
        setProfileDetails(profileResponse.data);
      } catch (error) {
        console.error('Error fetching booking or profile details:', error);
      }
    };

    fetchBookingDetails();
  }, [bookingId]); // Run effect when bookingId changes

 
 
  if (!bookingDetails || !profileDetails) {
    return <Loading bookingDetails={bookingDetails} profileDetails={profileDetails} />;
  }

  return (
    <div className='absolute top-0 left-0 w-full h-[1015px] flex items-center justify-center bg-black bg-opacity-40 z-30'>
      <div className='absolute -ml-[208px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[96px] z-30 '>
        <div className='sm:w-[600px] mb-40  w-[300px] h-auto p-[32px] bg-white rounded-2xl ml-[420px] relative z-30' >
          <img src={done} alt="done" className='block mx-auto h-[120px] w-[120px]' />
          <h1 className='flex items-center justify-center mt-[40px] font-Montserrat text-[20px] font-[700]'>Quotation Sent
         </h1>
         
          <h2 className='flex items-center justify-center mt-[7px] font-Montserrat text-[14px] font-[500]'>Quotation  Sent successfully</h2>
          {/* <Link to={`/startservicing/${bookingDetails._id}`} className='mt-[40px] flex items-center cursor-pointer justify-center font-Montserrat text-[14px] font-[500] text-[#8D98A4]'>Later</Link> */}
          
          <Link to={`/startservicing/${bookingId}`} className='mt-[40px] flex items-center cursor-pointer justify-center font-Montserrat text-[14px] font-[500] text-[#8D98A4]'>Later</Link>

        </div>
      </div>
    </div>
  );
}

export default SuccessCard4;

