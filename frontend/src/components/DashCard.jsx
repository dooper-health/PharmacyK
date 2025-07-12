import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Switch from '../assets/Switch.png'
import men from '../assets/men.png'
import { ThemeProvider } from 'styled-components'
import AvailabilityButton from './Togleswitch'
import { AvailabilityContext } from '../AvailabilityContext';
import CardforUrgent from './CardforUrgent'
import CardforStandalone from './CardforStandalone'

const DashCard = () => {
    const { isAvailable } = useContext(AvailabilityContext);
    const [selectedItem, setSelectedItem] = useState('Urgent');

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    return (
      <>
      <div className='w-full  h-[1024px]  '>
        <Navbar />
        <main className='h-auto  mx-[120px] pt-[24px] pb-[48px] '>
          <div className='font-Montserrat font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>Dashboard</div>
          <div className='float-right -mt-[24px] mr-[38px] font-Montserrat font-[600] h-[16px] text-[14px]'>
            <AvailabilityButton />
          </div>
          
         
          <ul className='flex items-start flex-1 h-[38px] space-x-[1px] space-y-4 font-Montserrat text-[16px] text-[#8D98A4] font-[500]'>
          <li
            className={`px-4 mt-4 cursor-pointer ${selectedItem === 'Urgent' ? ' border-b text-black pb-[8px] border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Urgent')}
          >
            Urgent
          </li>


        

          
          <li
            className={`px-4 cursor-pointer ${selectedItem === 'Standalone' ? 'border-b pb-[8px] text-black border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Standalone')}
          >
            Standalone
          </li>
        </ul>
           <hr className='mt-[10px] border border-[#E1E5E8]' />
          {isAvailable ? (
            <div className='flex flex-row flex-wrap justify-between space-y-[24px]'>
              {selectedItem === 'Standalone' && <CardforStandalone/>} 
              {selectedItem === 'Urgent' && <CardforUrgent />}

            </div>
          ) : (

            <div className='text-center mt-4 h-[100px]'>Availability is disabled. Please enable your availability to see the available details.</div>
          )}
        </main>
        <Footer />
      </div>
  
      </>
      )
  }

export default DashCard
