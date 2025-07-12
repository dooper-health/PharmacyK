// import React, { useState, useEffect, useContext } from 'react';
// import Navbar from './Navbar'
// import arr from '../assets/arrow left.png'

// import { Link } from 'react-router-dom';
// import Header from './Header';
// import edit from "../assets/edit.png"
// import arrowicon from "../assets/ic (3).png"
// import { useNavigate } from 'react-router-dom';
// import { useAvailabilityContext } from '../AvailabilityContext';

// const Bankinfo = () => {
//   const { mobileNumber } = useAvailabilityContext();
//   const [bankName, setBankName] = useState('');
//   const [accountNumber, setAccountNumber] = useState('');
//   const [ifscCode, setIfscCode] = useState('');
//   const [bankStatement, setBankStatement] = useState(null);
//   const [existingBankStatement, setExistingBankStatement] = useState('');
//   const [isUpdating, setIsUpdating] = useState(false);
  

//   const navigate = useNavigate();
  
//   useEffect(() => {
//     const fetchBankInfo = async () => {
//       if (!mobileNumber) {
//         console.error('Mobile number not available');
//         return;
//       }
//       try {
//         const response = await fetch(`/api/bankinfo/mobile/${mobileNumber}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch bank info');
//         }
//         const data = await response.json();
//         setBankName(data.bankName);
//         setAccountNumber(data.accountNumber);
//         setIfscCode(data.ifscCode);
//         setExistingBankStatement(data.uploadbankstatement); 
//         setIsUpdating(true); 
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchBankInfo();
//   }, [mobileNumber]);

//   const handleFileChange = (e) => {
//     setBankStatement(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('bankName', bankName);
//     formData.append('accountNumber', accountNumber);
//     formData.append('ifscCode', ifscCode);
//     if (bankStatement) {
//       formData.append('uploadbankstatement', bankStatement);
//     }

//     try {
//       const response = await fetch(`/api/bankinfo/mobile/${isUpdating ? mobileNumber : ''}`, {
//         method: isUpdating ? 'PUT' : 'POST',
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error('Failed to save bank info');
//       }
//       alert('Bank info saved successfully');
//       navigate('/viewprofile'); 
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error saving bank info');
//     }
//   };

//    return (
//     <>
//        <div className='w-full overflow-x-hidden'>
//     <Navbar />
//     <div className='sm:bg-[#F4F4F4]'>
//     <main className=' sm:mx-[120px] pt-[24px] pb-[48px]  '>
//     <div className=' hidden sm:block'>
//     <Header />  
//     </div>
//     <div className='sm:hidden flex ml-2 space-x-1'>
//     <Link to="/myprofile ">
//       <img src={arr} className='mt-1.5' />
//       </Link>
//       <h1 className='font-Montserrat text-2xl font-bold'>Bank Info</h1>
//     </div> 
//             <div className='sm:w-[484px] h-auto bg-white rounded-lg p-[32px] mt-[26px]'>
//               <form onSubmit={handleSubmit}>
//                 <div className='flex flex-col'>
//                   <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Bank Name</label>
//                   <input
//                     type='text'
//                     placeholder='Central Bank'
//                     value={bankName}
//                     onChange={(e) => setBankName(e.target.value)}
//                     className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                   />
//                   <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Account Number</label>
//                   <input
//                     type='text'
//                     placeholder='122223348494'
//                     value={accountNumber}
//                     onChange={(e) => setAccountNumber(e.target.value)}
//                     className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                   />
//                   <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>IFSC Code</label>
//                   <input
//                     type='text'
//                     placeholder='CBIN03545'
//                     value={ifscCode}
//                     onChange={(e) => setIfscCode(e.target.value)}
//                     className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                   />
//                   <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Upload bank statement / cancel cheque</label>
//                   <input
//                     type='file'
//                     onChange={handleFileChange}
//                     className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                   />
//                   <img src={edit} alt='' className='h-[24px] w-[24px] sm:ml-[380px] ml-64 mt-[-36px]' />
//                   {existingBankStatement && (
//                     <div className='mt-[8px]'>
//                       <a href={`${existingBankStatement}`} target="_blank" rel="noopener noreferrer">
//                         View Uploaded File
//                       </a>
//                     </div>
//                   )}
                  
//                   <button
//                     type='submit'
//                     className='px-[24px] flex items-center justify-center h-[44px] rounded-lg bg-[#41B079] text-white mt-[32px] w-[136px] font-Montserrat font-semibold text-sm'
//                   >
//                     Save Details
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bankinfo;



//practice3
// Bankinfo.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import arr from '../assets/arrow left.png';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import edit from "../assets/edit.png";
import { useAvailabilityContext } from '../AvailabilityContext';

const Bankinfo = () => {
  const { mobileNumber } = useAvailabilityContext();
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [bankStatement, setBankStatement] = useState(null);
  const [existingBankStatement, setExistingBankStatement] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBankInfo = async () => {
      if (!mobileNumber) {
        console.error('Mobile number not available');
        return;
      }
      try {
        const response = await fetch(`/api/bankinfo/mobile/${mobileNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bank info');
        }
        const data = await response.json();
        setBankName(data.bankName);
        setAccountNumber(data.accountNumber);
        setIfscCode(data.ifscCode);
        setExistingBankStatement(data.uploadbankstatement);
        setIsUpdating(true);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBankInfo();
  }, [mobileNumber]);

  const handleFileChange = (e) => {
    setBankStatement(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bankName', bankName);
    formData.append('accountNumber', accountNumber);
    formData.append('ifscCode', ifscCode);
    if (bankStatement) {
      formData.append('uploadbankstatement', bankStatement);
    }

    try {
      const response = await fetch(`/api/bankinfo/mobile/${mobileNumber}`, {
        method: isUpdating ? 'PUT' : 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to save bank info');
      }
      alert('Bank info saved successfully');
      navigate('/viewprofile');
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving bank info');
    }
  };

  return (
    <>
      <div className='w-full overflow-x-hidden'>
        <Navbar />
        <div className='sm:bg-[#F4F4F4]'>
          <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
            <div className='hidden sm:block'>
              <Header />
            </div>
            <div className='sm:hidden flex ml-2 space-x-1'>
              <Link to="/myprofile " className='flex items-center space-x-1'>
                <img src={arr} className='mt-1.5' alt="Back" />
              <h1 className='font-Montserrat text-2xl font-bold'>Bank Info</h1>
              </Link>
            </div>
            <div className='sm:w-[484px] h-auto bg-white rounded-lg p-[32px] mt-[26px]'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                  <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Bank Name</label>
                  <input
                    type='text'
                    placeholder='Central Bank'
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                  />
                  <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Account Number</label>
                  <input
                    type='text'
                    placeholder='122223348494'
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                  />
                  <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>IFSC Code</label>
                  <input
                    type='text'
                    placeholder='CBIN03545'
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                    className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                  />
                  <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Upload bank statement / cancel cheque</label>
                  <input
                    type='file'
                    onChange={handleFileChange}
                    className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                  />
                  <img src={edit} alt='edit' className='h-[24px] w-[24px] sm:ml-[380px] ml-64 mt-[-36px]' />
                  {existingBankStatement && (
                    <div className='mt-[8px]'>
                      <a href={`/api/documents/file/${existingBankStatement}`} target="_blank" rel="noopener noreferrer">
                        View bankStatement
                      </a>
                    </div>
                  )}
                  <button
                    type='submit'
                    className='px-[24px] flex items-center justify-center h-[44px] rounded-lg bg-[#41B079] text-white mt-[32px] w-[136px] font-Montserrat font-semibold text-sm'
                  >
                    Save Details
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Bankinfo;
