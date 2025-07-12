import React, { useState } from "react";
import Navbar from "./Navbar";
import arr from "../assets/arrow left.png";

import { Link } from "react-router-dom";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px] sm:ml-0 ml-3">
        <Link to="/myprofile">
          <img
            src={arr}
            alt="arr"
            srcset=""
            className="h-[24px] w-[24px] mt-1 mr-[8px]"
          />
        </Link>
        Edit Profile
      </div>
      <ul className="flex items-start flex-1 h-[38px] space-x-[1px] space-y-4 font-Montserrat text-[16px] text-[#8D98A4] font-[500] mt-4">
        <li
          className={`px-4 mt-4 cursor-pointer ${
            selectedItem === "Basic Details"
              ? " border-b pb-[8px] text-[#E40443] border-[#E40443]"
              : ""
          }`}
          onClick={() => handleItemClick("Basic Details")}
        >
          <Link to="/editprofile">Basic Details</Link>
        </li>

        <li
          className={`px-4  cursor-pointer ${
            selectedItem === "Documents"
              ? "border-b pb-[8px] text-[#E40443] border-[#E40443]"
              : ""
          }`}
          onClick={() => handleItemClick("Documents")}
        >
          <Link to="/document">Documents</Link>
        </li>
        <li
          className={`px-4  cursor-pointer ${
            selectedItem === "Bank Info"
              ? "border-b pb-[8px] text-[#E40443] border-[#E40443]"
              : ""
          }`}
          onClick={() => handleItemClick("Bank Info")}
        >
          <Link to="/bankinfo">Bank info</Link>
        </li>
      </ul>
    </>
  );
};
export default Header;
