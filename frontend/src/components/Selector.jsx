import React, { useEffect, useState } from "react";
import arrowicon from "../assets/ic (3).png"
import profile from "../assets/User.png"
import { Link } from 'react-router-dom'
import Details from "../assets/user-avatar.png"

import Document from "../assets/document.png"
import Bank from "../assets/credit-card.png"

const Selector = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setOpen(!open)}
        className={`${ !selected && "py-[20px] flex flex-row  border-b-[1px]" }` } >
      <div className="flex font-Montserrat font-medium text-[16px] -ml-[2px] gap-[18px] ">
      <img src={profile} alt="pro"  className='w-[20px] h-[20px] mt-[2px]'/>
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selectedsadfsdgsdg
          : "Edit Profile"}
      </div>
        <img src={arrowicon} alt="" className={`sm:ml-[248px] ml-[165px] mt-[3px] w-[16px] h-[16px] ${open && "rotate-90"}`}/>   
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
       {open &&<div className="space-y-[10px] overflow-hidden">
        <li>
        <Link to="/editprofile">
       <div className="flex justify-between ">
       <div className='flex ml-6 '>
        <img src={Details} className='w-[24px] h-[28px] mt-3' />
        <h1 className='font-Montserrat font-medium text-[16px] ml-[4px] mt-4'>Basic Details</h1>
      </div>
      <div> 
        <img src={arrowicon} className="mt-4"/>
        </div>
       </div>
       </Link>
       </li>
      <hr/>
      
       <li>
       <Link to="/document">
       <div className="flex justify-between">
       <div className='flex ml-6 '>
        <img src={Document} className='w-[24px] h-[28px] mt-3' />
        <h1 className='font-Montserrat font-medium text-[16px] ml-[4px] mt-4'>Documents</h1>
      </div>
      <div>
      <img src={arrowicon} className="mt-4"/>
        </div>
       </div>
       </Link>
       </li>
      <hr/>
      <li>
      <Link to="/bankinfo">
       <div className="flex justify-between">
       <div className='flex ml-6 '>
        <img src={Bank} className='w-[24px] h-[28px] mt-3' />
        <h1 className='font-Montserrat font-medium text-[16px] ml-[4px] mt-4'>Bank Info</h1>
      </div>
      <div><img src={arrowicon} className="mt-4"/>
      </div>
       </div>
       </Link>
       </li>
      <hr/>
       
       
       </div>}  
      </ul>
    </div>
  );
};

export default Selector;