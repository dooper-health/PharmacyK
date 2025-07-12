//practice
import React, { useState, useContext} from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Switch from '../assets/Switch.png'
import men from '../assets/men.png'
// import Card from './card'
// import Incoming from './IncomingCard'
import arr from '../assets/drop.png'
import { Link } from 'react-router-dom'
import AvailabilityButton from './Togleswitch.jsx'
// import { ThemeProvider } from '@mui/material'
import { AvailabilityContext } from '../AvailabilityContext.jsx';
import IncomingMedicineCard from './IncomingMedicineCard.jsx'
import IncomingVaccineCard from './IncomingVaccineCard.jsx'
import Phone from "../assets/phone.png";
import Notificaion from "../assets/not.png";
import hamburger from "../assets/hamburger.png";
import Footermobile from './Footermobile.jsx'
import CancelledMedicineCard from './CancelledMedicineCard.jsx'
import CancelledVaccineCard from './CancelledVaccineCard.jsx'


const Incoming = ({Pending}) => {
    const [selectedItem, setSelectedItem] = useState('Urgent');
    const { isAvailable } = useContext(AvailabilityContext);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    return (
      <>
      <div className='w-full  h-[1024px] scrollbar-hide overflow-x-hidden '>
        <Navbar />
        <main className='h-auto sm:mx-[120px] mx-[5px] pt-[24px] sm:pb-0 pb-[140px]'>
        <div className='flex justify-between'>  
          <div className='flex sm:space-x-0 space-x-4'>
          <Link to="/Sidebarmobile">
          <img src={hamburger} className='sm:hidden w-[20px] h-[26px]'/>
          </Link>
          <div className='font-Montserrat font-[700] sm:text-[22px] text-[20px] h-[32px] pb-[8px]'>My Booking </div>
          </div>
         <div className='flex flex-col'>
         <div className='flex sm:hidden justify-end'>
          <Link to="/notifications">
          <img src={Notificaion} className='w-[36px] h-[36px]'/>
          </Link>
          <img src={Phone} className='w-[36px] h-[36px] '/>
          </div>
          <div className=''>
          <AvailabilityButton />
          </div>
         </div>
          </div>
          
          <ul className='flex items-start flex-1 h-[38px] space-x-[1px] space-y-4 font-Montserrat text-[16px] text-[#8D98A4] font-[500]'>
          <div
            className={`px-4 mt-4 cursor-pointer ${selectedItem === 'Urgent' ? ' border-b pb-[8px] text-[#E40443] border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Urgent')}
          >
            Medicine
          </div>
          {/* <li
            className={`px-4 cursor-pointer ${selectedItem === 'Non-Urgent' ? 'border-b pb-[8px] text-[#E40443] border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Non-Urgent')}
          >
            Non-Urgent
          </li> */}
          <li
            className={`px-4 cursor-pointer ${selectedItem === 'Standalone' ? 'border-b pb-[8px] text-[#E40443] border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Standalone')}
          >
            Vaccination
          </li>
        </ul>
        <div className='float-right -mt-5 font-Montserrat text-[14px] font-semibold flex'><img src={arr} alt="" className='ml-2 mt-[2px] text-[#8D98A4] h-4 w-4'/></div>
           <hr className='mt-[10px] border border-[#E1E5E8]' />
           {/* <div className='my-[16px] font-Montserrat font-bold text-base'>All</div> */}

          {/* <Link to="/dashboardbooking" className=''> */}
          {/* <hr className='mt-[10px] border border-[#E1E5E8]' /> */}
          {isAvailable ? (
            <div className=''>
              {selectedItem === 'Urgent' && <CancelledMedicineCard/>}
              {selectedItem === 'Standalone' && <CancelledVaccineCard/>}
            </div>
          ) : (

            <div className='text-center mt-4 h-[100px]'>Availability is disabled. Please enable your availability to see the available details.</div>
          )}

          {/* </Link> */}
          {/* <div className='flex flex-row flex-wrap   '>
          <hr className='mt-[10px] border border-[#E1E5E8]' />
         {isAvailable ? (
            <div className='flex flex-row flex-wrap justify-between space-y-[24px]'>
              {selectedItem === 'Standalone' && <CardforStandalone/>}
              {selectedItem === 'Urgent' && <CardforUrgent/>}
            </div>
          ) : (

            <div className='text-center mt-4 h-[100px]'>Availability is disabled. Please enable your availability to see the available details.</div>
          )}

          </div> 
            */}
        </main>
        <Footer />
      </div>
  
  <Footermobile/>
      </>
      )
  }

 
export default Incoming
