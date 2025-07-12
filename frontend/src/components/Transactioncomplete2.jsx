import React, { useState } from 'react'
import Navbar from './Navbar'
import arr from '../assets/arrow left.png'
import Association from './Association';
import { Link } from 'react-router-dom';
import EarningCard from './EarningCard';
import ud from "../assets/updown.png"
import vec from "../assets/vector.png"
import TransactionCard from './TransactionCard';
import Paymentstatus from './Paymentstatus';
import Withdrawalcard from './Withdrawalcard';



const Transactioncomplete= () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
 
    const [showPopup, setShowPopup] = useState(false); 
 
    const openPopup = () => {
        setShowPopup(true);
    };

  return (
    <>
    <div className='w-full '>
      <Navbar />
      <div className='bg-[#F4F4F4] pb-[60px]'>
      <main className='  mx-[120px] pt-[24px] pb-[48px]  '>
        <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>
          <img src={arr} alt="arr" srcset="" className='h-[24px] w-[24px] mt-1 mr-[8px]' />
          Earnings</div>
          <div className='flex mb-[8px]'>
          <div className=' p-[20px] bg-white  w-[229px] mt-[16px] rounded-lg'>
            <h1 className='font-Montserrat text-[28px] font-medium text-[#E40443] '>654</h1>
            <h2 className='font-Montserrat text-[14px] font-medium text-[#5B6572] '>Total Completed Bookings</h2>
        </div>
        
        <div className='p-[20px] bg-white  w-[200px] mt-[16px] ml-4 rounded-lg'>
            <h1 className='font-Montserrat text-[28px] font-medium text-[#E40443] '>Rs. 5000</h1>
            <h2 className='font-Montserrat text-[14px] font-medium text-[#5B6572] '>Total Earnings</h2>
          </div>

            <div className='p-[20px] bg-white  w-[200px] mt-[16px] ml-4 rounded-lg'>
            <h1 className='font-Montserrat text-[28px] font-medium text-[#E40443] '>Rs. 3000</h1>
            <h2 className='font-Montserrat text-[14px] font-medium text-[#5B6572] '>This Month Earnings</h2>
             </div>

            <div className='p-[20px] bg-white  w-[200px] mt-[16px] ml-4 rounded-lg'>
            <h1 className='font-Montserrat text-[28px] font-medium text-[#E40443] '>Rs. 2000</h1>
            <h2 className='font-Montserrat text-[14px] font-medium text-[#5B6572] '>Total Redeemed</h2>
          </div>
          </div>
          <input type="text" placeholder='Enter Amount' className='px-[16px] py-[12px] w-[370px] h-[44px]  items-center rounded-lg border border-[#E2E2E2] mt-[16px] font-Montserrat text-[14px] font-medium mr-3'/>
           <Link to="/withcard" className='inline-block  px-[16px] py-[12px] w-[370px] h-[44px]  items-center rounded-lg bg-[#E40443] mt-[16px] text-white   font-Montserrat text-[14px]  font-medium text-center'>Withdraw</Link>
          <ul className='flex items-start flex-1 h-[38px] space-x-[1px]  space-y-4 font-Montserrat text-[16px] text-[#5e6165] font-[500] '>
        <li
          className={`px-4 mt-4 py-[10px] cursor-pointer ${selectedItem === 'Urgent' ? ' border-b  text-black border-[#E40443]' : ''}`}
          onClick={() => handleItemClick('Urgent')}
        >
          <Link to="/earning">History</Link>
        </li>
        <li
          className={`px-4 py-[10px] cursor-pointer ${selectedItem === 'Non-Urgent' ? 'border-b  text-black border-[#E40443]' : ''}`}
          onClick={() => handleItemClick('Non-Urgent')}
        >
          <Link to="/transaction"> Withdrawals</Link>
        </li>
      </ul>
      <div className='float-right -mt-1 mr-0 font-Montserrat text-[14px] font-medium ml-1'>of 10</div>
      <div className='flex  float-right -mt-[3px] mr-2 text-[14px] font-Montserrat font-medium text-[#333333] '>Page 
      <div className='flex py-[5px] px-[15px] items-start gap-2 rounded-lg border border-[#DDD] -mt-2 ml-2'>
       <h1>1</h1>
       <img src={vec} alt="vec" className='mt-[7px] ml-[17px]' />
      </div>
      </div>
      <div className='flex font-Montserrat font-medium text-[14px] text-[#E40443] float-right -mt-[3px] mr-2'>Sort by <img src={ud} alt="s" className='ml-1' /></div>
      <hr className='mt-[22px] border border-[#E1E5E8]' />
           <div className='mt-[48px]'>
            <div className='flex '>
         <TransactionCard /> 
         {showPopup && (
                         <Withdrawalcard
                                onClose={() => setShowPopup(false)} // Add a function to close the popup
                            />
                        )}  
     
         </div>
         </div>
      </main>
      </div>
      
 
    </div>


    </>
    )
}

export default Transactioncomplete
