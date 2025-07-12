import React, { useState } from 'react'
import Navbar from './Navbar'
import arr from '../assets/arrow left.png'
import Association from './Association';
import { Link } from 'react-router-dom';
import EarningCard from './EarningCard';
import ud from "../assets/updown.png"
import vec from "../assets/Vector.png"
import TransactionCard from './TransactionCard';
import Paymentstatus from './Paymentstatus';
import Withdrawalcard from './Withdrawalcard';
import Footermobile from './Footermobile'




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
    <div className='sm:bg-[#F4F4F4] pb-[60px]'>
    <main className=' sm:mx-[120px] mx-[5px] pt-[24px] pb-[48px] overflow-x-hidden'>
      <div className='font-Montserrat flex flex-row font-[700] sm:text-[22px] text-[20px] h-[32px] xl:w-[1077px] pb-[8px] sm:ml-0 ml-5'>
      <Link to="/myprofile">
        <img src={arr} alt="arr" srcset="" className='sm:h-[24px] h-[20px] sm:w-[24px] w-[25px] mt-1 mr-[8px]' />
        </Link>
        
         My Earnings</div>
          <div className='flex flex-wrap'>
          <div className='sm:p-[20px] p-[10px] sm:bg-white  sm:w-[200px] w-[150px] sm:mt-[16px] mt-[30px] rounded-lg sm:ml-0 ml-4 '>
            <h1 className='font-Montserrat sm:text-[28px] text-[22px] font-medium text-[#E40443] '>654</h1>
            <h2 className='font-Montserrat sm:text-[14px] text-[10px] font-medium text-[#5B6572] '>Total Completed Bookings</h2>
        </div>
        
        <div className='sm:p-[20px] p-[10px] sm:bg-white  sm:w-[200px] w-[150px] sm:mt-[16px] mt-[30px] rounded-lg sm:ml-0 ml-4 '>
            <h1 className='font-Montserrat sm:text-[28px] text-[22px] font-medium text-[#E40443] '>Rs. 5000</h1>
            <h2 className='font-Montserrat sm:text-[14px] text-[10px] font-medium text-[#5B6572'>Total Earnings</h2>
          </div>

            <div className='sm:p-[20px] p-[10px] sm:bg-white  sm:w-[200px] w-[150px] sm:mt-[16px] mt-[30px] rounded-lg sm:ml-0 ml-4 '>
            <h1 className='font-Montserrat sm:text-[28px] text-[22px] font-medium text-[#E40443] '>Rs. 3000</h1>
            <h2 className='font-Montserrat sm:text-[14px] text-[10px] font-medium text-[#5B6572 '>This Month Earnings</h2>
             </div>

            <div className='sm:p-[20px] p-[10px] sm:bg-white  sm:w-[200px] w-[150px] sm:mt-[16px] mt-[30px] rounded-lg sm:ml-0 ml-4 '>
            <h1 className='font-Montserrat sm:text-[28px] text-[22px] font-medium text-[#E40443] '>Rs. 2000</h1>
            <h2 className='font-Montserrat sm:text-[14px] text-[10px] font-medium text-[#5B6572 '>Total Redeemed7788877</h2>
          </div>
          </div>
          <input type="text" placeholder='Enter Amount' className='sm:ml-0 ml-4 px-[16px] py-[12px] md:w-[370px] w-[155px] h-[44px] items-center rounded-lg border border-[#E2E2E2] mt-[16px] font-Montserrat text-[14px] font-medium mr-3'/>
           <Link to="/withcard" className='inline-block mx-auto text-center px-[16px] py-[12px] md:w-[370px] w-[155px] h-[44px] items-center rounded-lg bg-[#E40443] mt-[16px] text-white font-Montserrat text-[14px] font-medium'>Withdraw</Link>
           <ul className='flex items-start flex-1 h-[38px] space-x-[1px]  space-y-4 font-Montserrat text-[16px] text-[#5e6165] font-[500] '></ul>
            <ul className='flex justify-between h-[38px] font-Montserrat sm:text-[16px] text-[14px] text-[#5e6165] font-[500] sm:mt-10'>
        <div className='flex'>
        <li
          className={`px-8 py-[10px] cursor-pointer ${selectedItem === 'Urgent' ? ' border-b  text-black border-[#E40443]' : ''}`}
          onClick={() => handleItemClick('Urgent')}
        >
          <Link to="/earning">History</Link>
        </li>
        <li
          className={`sm:px-4 py-[10px] cursor-pointer ${selectedItem === 'Non-Urgent' ? 'border-b  text-black border-[#E40443]' : ''}`}
          onClick={() => handleItemClick('Non-Urgent')}
        >
          <Link to="/transaction"> Withdrawals</Link>
        </li>
        </div>
        
        <div>
        <li>
        <div className='flex font-Montserrat font-medium sm:text-[18px] text-[14px] text-[#E40443] sm:mt-10 mt-3 sm:mr-0 mr-[30px]'>Sort by <img src={ud} alt="s" className='ml-1' /></div>
        </li>
        </div>
        </ul>
      <div className='sm:-mt-[23px] mt-5 sm:mr-0 mr-[30px]'>
      <div className='float-right -mt-1 mr-2 font-Montserrat text-[14px] font-medium ml-1'>of 10</div>
      <div className='flex  float-right -mt-[3px] mr-2 text-[14px] font-Montserrat font-medium text-[#333333] '>Page 
      <div className='flex py-[5px] px-[5px] items-start gap-2 rounded-lg border border-[#DDD] -mt-3 ml-2'>
       <h1>1</h1>
       <img src={vec} alt="vec" className='mt-[7px] ml-[17px]' />
      </div>
      </div>
      </div>
      
     
      
      <hr className='lg:block hidden sm:ml-0 ml-[60px] mt-[22px] border border-[#E1E5E8]' />
           <div className='mt-[64px]'>
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
