import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import arr from '../assets/arrow left.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAvailabilityContext } from '../AvailabilityContext';

const ViewProfile = () => {
  const { mobileNumber } = useAvailabilityContext();
  const [profile, setProfile] = useState({});
  const [docs, setDocs] = useState({});
  const [bankInfo, setBankInfo] = useState({});

  useEffect(() => {
    const fetchProfileInfo = async () => {
      if (!mobileNumber) {
        console.error('Mobile number not available');
        return;
      }
      try {
        const response = await fetch(`/api/profile/mobile/${mobileNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile info');
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchBankInfo = async () => {
      try {
        const response = await fetch(`/api/bankinfo/mobile/${mobileNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bank info');
        }
        const data = await response.json();
        setBankInfo(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchDocuments = async () => {
      try {
        const response = await fetch(`/api/documents/mobile/${mobileNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch documents');
        }
        const data = await response.json();
        setDocs(data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchProfileInfo();
    fetchBankInfo();
    fetchDocuments();
  }, [mobileNumber]);

  if (!profile || !bankInfo) {
    return <div>No profile or bank info data available</div>;
  }

  const {
    fullName,
    pharmacyPhoto,
    pharmacyName,
    pharmacyAddress1,
    pharmacyAddress2,
    city,
    state,
  } = profile;

  const {
    bankName,
    accountNumber,
    ifscCode,
    uploadbankstatement,
  } = bankInfo;

  const {
    aadharCard,
    panCard,
    pharmacyLicense,
    
    gstCertificate,
  } = docs;

  const newLocal = 'font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1';
  return (
    <>
      <div className='w-full overflow-hidden'>
        <Navbar />
        <div className='sm:bg-[#F4F4F4]'>
          <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
            
            <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] pb-[8px]'>
              <Link to="/myprofile">
                <img src={arr} alt="arr" className='h-[24px] w-[24px] mt-1 mr-[8px]' />
              </Link>
              View Profile
            </div>
           <div className='sm:flex sm:flex-row flex-col space-x-5'> 
           <div className='sm:w-[580px] bg-white rounded-lg h-auto p-[32px] mt-[26px]'>
             <div className='flex flex-col'>
               <h1 className='font-Montserrat text-[20px] font-medium text-[#1A1C1F] mb-[22px]'>Basic details</h1>
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Full Name</label>
               <input type="text" value={fullName} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Mobile Number</label>
               <input type="text" value={mobileNumber} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Pharmacy Photo</label>
               <input type="text" value={pharmacyPhoto} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <a href={`/api/documents/file/${pharmacyPhoto}`} target="_blank" rel="noopener noreferrer" className='block text-center'>
                 <h1 className='h-[24px] w-[24px] sm:ml-[280px] ml-[220px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
               </a>
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Pharmacy Name</label>
               <input type="text" value={pharmacyName} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Pharmacy Address 1</label>
               <input type="text" value={pharmacyAddress1} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Pharmacy Address 2</label>
               <input type="text" value={pharmacyAddress2} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>City</label>
               <input type="text" value={city} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>State</label>
               <input type="text" value={state} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
             </div>
           </div>
           <div className='flex flex-col'>
           <div className='sm:w-[580px] h-auto bg-white rounded-lg p-[32px] mt-[26px] '>
             <div className='flex flex-col'>
               <h1 className='font-Montserrat text-[20px] font-medium text-[#1A1C1F] mb-[22px]'>Documents</h1>
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Aadhar Card</label>
               <input type="text" value={aadharCard} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <a href={`/api/documents/file/${aadharCard}`} target="_blank" rel="noopener noreferrer" className='block text-center'>
                 <h1 className='h-[24px] w-[24px] sm:ml-[460px] ml-[220px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
               </a>
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Pan Card</label>
               <input type="text" value={panCard} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <a href={`/api/documents/file/${panCard}`} target="_blank" rel="noopener noreferrer" className='block text-center'>
                 <h1 className='h-[24px] w-[24px] sm:ml-[460px] ml-[220px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
               </a>
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Pharmacy License</label>
               <input type="text" value={pharmacyLicense} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <a href={`/api/documents/file/${pharmacyLicense}`} target="_blank" rel="noopener noreferrer" className='block text-center'>
                 <h1 className='h-[24px] w-[24px] sm:ml-[460px] ml-[220px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
               </a>
               {/* <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Lab Established License</label>
               <input type="text" value={labEstablishedLicense} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <a href={`server/${labEstablishedLicense}`} target="_blank" rel="noopener noreferrer" className='block text-center'>
                 <h1 className='h-[24px] w-[24px] sm:ml-[460px] ml-[220px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
               </a>
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>NABL License</label>
               <input type="text" value={nablLicense} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <a href={`server/${nablLicense}`} target="_blank" rel="noopener noreferrer" className='block text-center'>
                 <h1 className='h-[24px] w-[24px] sm:ml-[460px] ml-[220px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
               </a> */}
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>GST Certificate</label>
               <input type="text" value={gstCertificate} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <a href={`/api/documents/file/${gstCertificate}`} target="_blank" rel="noopener noreferrer" className='block text-center'>
                 <h1 className='h-[24px] w-[24px] sm:ml-[460px] ml-[220px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
               </a>
             </div>
           </div>
           <div className='sm:w-[580px] h-auto bg-white rounded-lg p-[32px] mt-[26px]'>
             <div className='flex flex-col'>
               <h1 className='font-Montserrat text-[20px] font-medium text-[#1A1C1F] mb-[22px]'>Bank details</h1>
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Bank Name</label>
               <input type="text" value={bankName} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Account Number</label>
               <input type="text" value={accountNumber} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>IFSC Code</label>
               <input type="text" value={ifscCode} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1'>Bank Statement</label>
               <input type="text" value={uploadbankstatement} readOnly className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]' />
               <a href={`/api/documents/file/${uploadbankstatement}`} target="_blank" rel="noopener noreferrer" className='block text-center'>
                 <h1 className='h-[24px] w-[24px] sm:ml-[460px] ml-[220px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
               </a>
             </div>
           </div>
           </div>
           </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;