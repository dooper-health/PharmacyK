// import React from 'react'
// import dooper from "../assets/dooper.png"
// import arr from '../assets/arrow.png'
// import photo from "../assets/photo.png"
// import not from "../assets/not.png"
// import { Link } from 'react-router-dom'
// import { useAvailabilityContext } from '../AvailabilityContext';
// import { useState,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

 
// const Navbar = () => {
//    const { mobileNumber } = useAvailabilityContext();
//   const [fullName, setFullName] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfileInfo = async () => {
//       if (!mobileNumber) {
//         console.error('Mobile number not available');
//         return;
//       }
//       try {
//         const response = await fetch(`/api/profile/mobile/${mobileNumber}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch profile info');
//         }
//         const data = await response.json();
//         setFullName(data.fullName);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchProfileInfo();
//   }, [mobileNumber]);
//   return (
//   <>
//     <div className='hidden sm:block h-[44px] py-[4px] my-[40px] mx-[120px]    '>
//     <Link to="/dashboard">
//             <img src={dooper} alt='jjjj' className='h-[36px] w-[123.55px]  '/></Link>
//         <ul className='flex flex-row float-right -mt-[30px] font-Montserrat text-[#8D98A4] justify-between space-x-[16px] h-[16px] '>
        
//             <Link to="/dashboard">
//             <li className='hidden xl:block'>Home</li></Link>
//             <Link to="/dashboardbooking2">
//             <li className='hidden xl:block'>My Bookings</li></Link>
//             <Link to="/earning">
//             <li className='hidden xl:block'>My Earnings</li></Link>
            
//             <li className='hidden xl:block'>About Us</li>
//             <li className='hidden lg:block'>Contact Us</li>
//             <Link to="/myprofile" className='h-[44px] w-[177px] bg-[#F4F4F4] flex py-[8px] px-[5px] items-center -mt-[10.7px] border border-solid rounded-[8px] border-[#F5F6F7]'>
//             <img src={photo} alt="" srcset="" className='h-[28px] w-[28px] ' />
//             <h1 className='text-[14px] font-[500] font-Montserrat pl-[6px] pr-[6px]'>{fullName}</h1>
//             <img src={arr} alt="" className='font-Montserrat text-[14px] font-[500] leading-[116%]' />
//             </Link>
//             <Link to="/notifications">
//             <img src={not} alt="" srcset="" className='h-[40px] w-[40px] -mt-[8px]' />
//             </Link>
//         </ul>
//     </div>
//     <hr className='bg-[#E3E6E8] border' />
//     </>
//   )
// }

// export default Navbar




import React from 'react'
import dooper from "../assets/dooper.png"
import arr from '../assets/arrow.png'
import photo from "../assets/photo.png"
import not from "../assets/not.png"
import { Link } from 'react-router-dom'
import { useAvailabilityContext } from '../AvailabilityContext';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

 
const Navbar = () => {
   const { mobileNumber } = useAvailabilityContext();
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate();

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
        setFullName(data.fullName);
        console.log(fullName)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProfileInfo();
  }, [mobileNumber]);
  return (
  <>
    <div className='hidden sm:block h-[44px] py-[4px] my-[40px] mx-[120px]   '>
    <Link to="/incoming">
            <img src={dooper} alt='jjjj' className='h-[36px] w-[123.55px]  '/></Link>
        <ul className=' flex flex-row float-right -mt-[30px] font-Montserrat text-[#8D98A4] justify-between space-x-[16px] h-[16px] '>
           <Link to="/incoming">
            <li className='hidden xl:block'>Home</li></Link>
           <Link to="/pending">
            <li className='hidden xl:block'>Accepted</li></Link>
           <Link to="/cancelled">
            <li className='hidden xl:block'>Rejected</li></Link>
           <Link to="/completed">
            <li className='hidden xl:block'>Completed</li></Link>
           <Link to="/earningmedicine">
            <li className='hidden xl:block'>Medicine Earnings </li></Link>
           <Link to="/earningvaccine">
            <li className='hidden xl:block'>Vaccine Earnings </li></Link>
           <Link to="/earning">
            {/* <li>About Us</li> */}
            <li className='hidden lg:block'>Contact Us</li></Link>
            {/* <li>Join us with <img src={arr} alt="" srcset="" className='float-right mt-[1px] ml-[4px]' /></li> */}
            <Link to="/myprofile" className='h-[44px] w-[177px] bg-[#F4F4F4] flex py-[8px] px-[5px] items-center -mt-[10.7px] border border-solid rounded-[8px] border-[#F5F6F7]'>
            <img src={photo} alt="" srcset="" className='h-[28px] w-[28px] ' />
            <h1 className='text-[14px] font-[500] font-Montserrat pl-[6px] pr-[6px]'>{fullName}</h1>
            <img src={arr} alt="" className='font-Montserrat text-[14px] font-[500] leading-[116%]' />
            </Link>
            <Link to="/notifications">
            <img src={not} alt="" srcset="" className='h-[40px] w-[40px] -mt-[8px]' />
            </Link>
        </ul>
    </div>
    <hr className='bg-[#E3E6E8] border' />
    </>
  )
}

export default Navbar
