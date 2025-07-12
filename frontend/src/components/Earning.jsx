  import React, { useState, useEffect } from 'react';
  import Navbar from './Navbar';
  import arr from '../assets/arrow left.png';
  import { Link } from 'react-router-dom';
  import EarningCard from './EarningCard';
  import ud from "../assets/updown.png";
  import vec from "../assets/Vector.png";
  import axios from 'axios';
  import { useAvailabilityContext } from '../AvailabilityContext';
  import Footermobile from './Footermobile'

  const Earning = ({earnapi,earnnavigate}) => {
    const { mobileNumber } = useAvailabilityContext();
    const [selectedItem, setSelectedItem] = useState(null);
    const [earningsData, setEarningsData] = useState({
      totalCompletedBookings: 0,
      totalEarnings: 0
    });
    const [earningsData2, setEarningsData2] = useState({
      availableBalance: 0,
      totalRedeemed: 0
    });

    useEffect(() => {
      const fetchEarnings = async () => {
        try {
          const response = await axios.post(earnapi.earntotal, { phoneNumber: mobileNumber });
          setEarningsData(response.data);
        } catch (error) {
          console.error("There was an error fetching the earnings data!", error);
        }
      };

      if (mobileNumber) {
        fetchEarnings();
      }
    }, [mobileNumber]);

    useEffect(() => {
      const fetchEarnings2 = async () => {
        try {
          const response = await axios.post(earnapi.earnavailable, { phoneNumber: mobileNumber });
          setEarningsData2(response.data);
        } catch (error) {
          console.error("There was an error fetching the earnings data!", error);
        }
      };

      if (mobileNumber) {
        fetchEarnings2();
      }
    }, [mobileNumber]);

    const handleItemClick = (item) => {
      setSelectedItem(item);
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
                <h1 className='font-Montserrat sm:text-[28px] text-[22px] font-medium text-[#E40443]'>{earningsData.totalCompletedBookings}</h1>
                <h2 className='font-Montserrat sm:text-[14px] text-[10px] font-medium text-[#5B6572'>Total Completed Bookings</h2>
              </div>
              <div className='sm:p-[20px] p-[10px] sm:bg-white  sm:w-[200px] w-[150px] sm:mt-[16px] mt-[30px] rounded-lg ml-4 '>
                <h1 className='font-Montserrat sm:text-[28px] text-[22px] font-medium text-[#E40443]'>Rs. {earningsData.totalEarnings}</h1>
                <h2 className='font-Montserrat sm:text-[14px] text-[10px] font-medium text-[#5B6572'>Total Earnings</h2>
              </div>
              <div className='sm:p-[20px] p-[10px] sm:bg-white  sm:w-[200px] w-[150px] sm:mt-[16px] mt-[30px] rounded-lg ml-4 '>
                <h1 className='font-Montserrat sm:text-[28px] text-[22px] font-medium text-[#E40443]'>Rs. {earningsData2.availableBalance}</h1>
                <h2 className='font-Montserrat sm:text-[14px] text-[10px] font-medium text-[#5B6572]'>Availabe Balance</h2>
              </div>
              <div className='sm:p-[20px] p-[10px] sm:bg-white  sm:w-[200px] w-[150px] sm:mt-[16px] mt-[30px] rounded-lg ml-4 '>
                <h1 className='font-Montserrat sm:text-[28px] text-[22px] font-medium text-[#E40443]]'>Rs. {earningsData2.totalRedeemed}</h1>
                <h2 className='font-Montserrat sm:text-[14px] text-[10px] font-medium text-[#5B6572'>Total Redeemed</h2>
              </div>
            </div>
            <ul className='flex justify-between h-[38px] font-Montserrat sm:text-[16px] text-[14px] text-[#5e6165] font-[500] mt-10'>
          <div className='flex'>
          <li
            className={`px-8  py-[10px] cursor-pointer ${selectedItem === 'Urgent' ? ' border-b  text-black border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Urgent')}
          >
            {/* <Link to="/earning">History</Link> */}
            <Link to="#">History</Link>
          </li>
          <li
            className={`sm:px-4 py-[10px] cursor-pointer ${selectedItem === 'Non-Urgent' ? 'border-b  text-black border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Non-Urgent')}
          >
            <Link to={earnnavigate.withdrawbutton}> Withdrawals</Link>    
          </li>
          </div>
          
          <div>
          <li>
          <div className='flex font-Montserrat font-medium sm:text-[18px] text-[14px] text-[#E40443] sm:mt-10 mt-3 sm:mr-0 mr-[30px]'>Sort by <img src={ud} alt="s" className='ml-1' /></div>
          </li>
          </div>
          
          </ul>
      <div className='sm:-mt-[23px] mt-5 sm:mr-0 mr-[22px]'>
      <div className='float-right -mt-1 mr-2 font-Montserrat text-[14px] font-medium ml-1'>of 10</div>
      <div className='flex  float-right -mt-[3px] mr-2 text-[14px] font-Montserrat font-medium text-[#333333] '>Page 
      <div className='flex py-[5px] px-[5px] items-start gap-2 rounded-lg border border-[#DDD] -mt-3 ml-2'>
       <h1>1</h1>
       <img src={vec} alt="vec" className='mt-[7px] ml-[17px]' />
      </div>
      </div>
      </div>
        
        
        <hr className='lg:block hidden sm:ml-0 ml-[60px] mt-[22px] border border-[#E1E5E8]' />
             <div className='mt-[48px] '>
           <EarningCard earnapi={earnapi}/>  
           </div>
        </main>
        </div>
        
  
      </div>

  <Footermobile />
      </>
    );
  }

  export default Earning;
