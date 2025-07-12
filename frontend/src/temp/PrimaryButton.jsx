import React from 'react';

export default function PrimaryButton({ title, action }) {
  return (
    <button 
      className="inline-block h-[44px] sm:w-[416px] w-[335px] rounded-[8px] bg-[#E40443] text-center mx-auto mt-[16px] justify-center font-Montserrat text-[14px] font-[600] leading-[116%] text-white py-[15px]" 
      onClick={action}
    >
      {title}
    </button>
  );
}
