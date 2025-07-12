import React, { useEffect, useState } from 'react';
import doubleleft from "../assets/Control.png";
import left from "../assets/Control (1).png";
import doubleright from "../assets/Control (3).png";
import right from "../assets/Control (2).png";
import axios from 'axios';
import { useAvailabilityContext } from '../AvailabilityContext';

const TransactionCard = () => {
  const [transactions, setTransactions] = useState([]);
  const { mobileNumber } = useAvailabilityContext();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.post('/api/earning/history', { phoneNumber: mobileNumber });
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    if (mobileNumber) {
      fetchTransactions();
    }
  }, [mobileNumber]);

  return (
    <div className='p-[32px] bg-white sm:w-[484px] rounded-lg'>
      {transactions.map((transaction) => (
        <div key={transaction.bookingId} className='relative p-[20px] rounded-lg border border-[#E3E6E8] mt-[24px]'>
          <h1 className='md:max-w-full max-w-[150px] font-Montserrat text-[14px] font-medium text-black break-words'>transaction #{transaction.bookingId}</h1>
          <h2 className='font-Montserrat text-[12px] font-normal text-[#38404A] mt-[8px]'>{transaction.date}</h2>
          <div className='absolute flex px-[16px] py-[8px] rounded-[40px] bg-[#F5F6F7] text-[#F1614B] font-Montserrat text-[10px] font-medium h-[30px] w-[75px] top-0 right-0 mt-5 mr-5'>RS {transaction.charges}</div>
        </div>
      ))}
      <div className='h-[32px] w-full flex mt-[24px]'>
        <img src={doubleleft} alt="" className='' />
        <img src={left} alt="" className='mx-[5px]' />
        <ul className='flex space-x-[5px]'>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] bg-[#E40443] text-white items-center justify-center text-[13px] font-semibold font-sans'>1</li>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] border bg-white text-[#8D98A4] items-center justify-center text-[13px] font-semibold font-sans'>2</li>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] border bg-white text-[#8D98A4] items-center justify-center text-[13px] font-semibold font-sans'>3</li>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] border bg-white text-[#8D98A4] items-center justify-center text-[13px] font-semibold font-sans'>...</li>
          <li className='flex w-[32px] h-[32px] p-[10px] rounded-[32px] border bg-white text-[#8D98A4] items-center justify-center text-[13px] font-semibold font-sans'>10</li>
          <img src={right} alt="" className='' />
          <img src={doubleright} alt="" className='' />
        </ul>
      </div>
    </div>
  );
};

export default TransactionCard;
