import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Switch from '../assets/d.png'
import men from '../assets/men.png'
import Card from './Popup'
import Navbardark from './Navbardark'
import Phone from "../assets/phone.png";
import Notificaion from "../assets/not.png";
import hamburger from "../assets/hamburger.png";
import Footermobile from './Footermobile'
import { Link } from 'react-router-dom';

const DashboardDark = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
    return (
      <>
            <div className="w-ful bg-opacity-40 pt-[1px] scrollbar-hide overflow-x-hidden">
          <Navbardark />
          <main className='h-auto sm:mx-[120px] mx-[5px] pt-[24px] sm:pb-0 pb-[100px]'>
          <div className='flex justify-between'>  
            <div className='flex sm:space-x-0 space-x-4'>
            <img src={hamburger} className='sm:hidden w-[20px] h-[26px]'/>
            <div className='font-Montserrat font-[700] sm:text-[22px] text-[20px] h-[32px] pb-[8px]'>
            Dashboard
            </div>
            </div>
            <div className='flex flex-col'>
            <div className='flex sm:hidden justify-end'>
           <Link to="/notifications">
            <img src={Notificaion} className=' bg-opacity-40 w-[36px] h-[36px]'/>
            </Link>
            <img src={Phone} className=' bg-opacity-40 w-[36px] h-[36px] '/>
            </div>
            <img src={Switch} className='w-32 h-5'/>
            </div>
          </div>
          
           
          <ul className='flex items-start flex-1 h-[38px] space-x-[1px]  space-y-4 font-Montserrat text-[16px] text-[#5e6165] font-[500] '>
          <li
            className={`px-4 mt-4 cursor-pointer ${selectedItem === 'Urgent' ? ' border-b pb-[8px] text-black border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Urgent')}
          >
            Medicines
          </li>
          
          <li
            className={`px-4 cursor-pointer ${selectedItem === 'Standalone' ? 'border-b pb-[8px] text-black border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Standalone')}
          >
            Vaccination
          </li>
        </ul>
           <hr className='mt-[10px] border border-[#5e6165] ' />
           <Card />
            <img src={men} alt="men" className='mt-[16px] justify-center mx-auto relative'  />
        </main>
        <Footer />
      </div>
      <Footermobile/>
  </>
    )
  }
  export default DashboardDark
  

