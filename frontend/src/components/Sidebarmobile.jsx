import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import editimage from "../assets/photo.png";
import icon from "../assets/icon.png";
import arrowicon from "../assets/ic (3).png";
import profileIcon from "../assets/User.png";
import wallet from "../assets/Frame (1).png";
import phone from "../assets/Call.png";
import privacy from "../assets/Vector (3).png";
import terms from "../assets/terms.png";
import info from "../assets/info.png";
import star from "../assets/star (1).png";
import logoutIcon from "../assets/logout (1).png";
import dooper from "../assets/dooper.png"
import arr from '../assets/arrow left.png';

const Sidebarmobile = () => {
    return(
        <>
            <div className="w-full overflow-x-hidden py-[10px]">
            <div className="flex h-[80px] items-center space-x-5 ml-[30px]">
                <Link to="/incoming">
                <img src={arr} className="w-8 h-8"/>
                </Link>
                <img src={dooper} className="h-[60px] w-[180px] "/>
            </div>
            <hr/>
            <Link to="/myprofile">
            <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={profileIcon} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Profile</h1>
            </div>
            </Link>
            <hr/>
            <Link to="/incoming">
            <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={wallet} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Dashboard</h1>
            </div>
            </Link>
            <hr/>
            <Link to="/pending">
            <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={wallet} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Accepted Booking</h1>
            </div>
            </Link>
            <hr/>
            <Link to="/completed">
            <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={wallet} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Completed Booking</h1>
            </div>
            </Link>
            <hr/>
            <Link to="/cancelled">
            <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={wallet} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Rejected Booking</h1>
            </div>
            </Link>
            <hr/>
           <Link to="/earningmedicine">
           <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={wallet} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Medicine Earning </h1>
            </div>
           </Link>

            <hr/>
            <Link to="/earningvaccine">
           <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={wallet} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Vaccination Earning </h1>
            </div>
           </Link>
           <hr/>

            <Link to="/dashboard">
            <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={phone} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Help & Support</h1>
            </div>
            </Link>
            <hr/>
           <Link to="/dashboard">
           <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={privacy} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Privacy Policy</h1>
            </div>
           </Link>
            <hr/>
           <Link to="/dashboard">
           <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={terms} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Terms and Conditions</h1>
            </div>
           </Link>
            <hr/>
           <Link to="/dashboard">
           <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={info} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">About us</h1>
            </div>
           </Link>
            <hr/>
            <Link to="/dashboard">
            <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={star} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Rate us</h1>
            </div>
            </Link>
            <hr/>
            <Link to="/">
            <div className="flex h-[60px] items-center space-x-2 ml-[40px]">
                <img src={logoutIcon} className="w-7 h-7"/>
                <h1 className="font-Montserrat text-[15px]">Logout</h1>
            </div>
            </Link>
            <hr/>
            


            </div>
        </>
    )
}
export default Sidebarmobile