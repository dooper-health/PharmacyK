// import React, { useState, useEffect, useContext } from 'react';
// import Navbar from './Navbar';
// import edit from "../assets/edit.png";
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import { useAvailabilityContext } from '../AvailabilityContext';
// import { Link } from 'react-router-dom'
// import arr from '../assets/arrow left.png'

// const EditProfile = () => {
//   const { mobileNumber } = useAvailabilityContext();
//   const [fullName, setFullName] = useState('');
//   const [labName, setLabName] = useState('');
//   const [labAddress1, setLabAddress1] = useState('');
//   const [labAddress2, setLabAddress2] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [labPhoto, setLabPhoto] = useState('');
//   const [existingLabPhoto, setExistingLabPhoto] = useState('');
//   const [isUpdating, setIsUpdating] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfileInfo = async () => {
//       if (!mobileNumber) {
//         console.error('Mobile number not available');
//         return;
//       }
//       try {
//         const response = await fetch(`/api/profile/mobile/${mobileNumber}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch profile info');
//         }
//         const data = await response.json();
//         setFullName(data.fullName);
//         setLabName(data.labName);
//         setLabAddress1(data.labAddress1);
//         setLabAddress2(data.labAddress2);
//         setCity(data.city);
//         setState(data.state);
//         setExistingLabPhoto(data.labPhoto);
//         setIsUpdating(true);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchProfileInfo();
//   }, [mobileNumber]);

//   const handleFileChange = (e) => {
//     setLabPhoto(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('fullName', fullName);
//     formData.append('labName', labName);
//     formData.append('labAddress1', labAddress1);
//     formData.append('labAddress2', labAddress2);
//     formData.append('city', city);
//     formData.append('state', state);
//     if (labPhoto) {
//       formData.append('labPhoto', labPhoto);
//     }

//     try {
//       const response = await fetch(`/api/profile/mobile/${mobileNumber}`, {
//         method: 'PATCH',
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error('Failed to save profile info');
//       }
//       alert('Profile info saved successfully');
//       navigate('/viewprofile');
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error saving profile info');
//     }
//   };

//   return (
//     <div className='w-full overflow-hidden'>
//     <Navbar />
//     <div className='sm:bg-[#F4F4F4] '>
//     <main className=' sm:mx-[120px] pt-[24px] pb-[48px]'>
//       <div className=' hidden sm:block'>
//     <Header />  
//     </div>
//     <div className='sm:hidden flex ml-2 space-x-1'>
//     <Link to="/myprofile ">
//       <img src={arr} className='mt-1.5' />
//       </Link>
//       <h1 className='font-Montserrat text-2xl font-bold'>Basic Details</h1>
//     </div> 
//           <div className='sm:w-[484px] bg-white rounded-lg h-auto p-[32px] mt-[26px]'>
//             <form onSubmit={handleSubmit}>
//               <div className='flex flex-col'>
//                 <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Full Name</label>
//                 <input
//                   type="text"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                 />
//                 <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>Lab Photo</label>
//                 <input
//                   type="file"
//                   onChange={handleFileChange}
//                   className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                 />
//                 <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-64 mt-[-36px]" />
//                 {existingLabPhoto && (
//                   <div className='mt-[8px]'>
//                     <a href={`/api/documents/file/${existingLabPhoto}`} target="_blank" rel="noopener noreferrer">
//                       View Lab Photo
//                     </a>
//                   </div>
//                 )}
//                 <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>Lab Name</label>
//                 <input
//                   type="text"
//                   value={labName}
//                   onChange={(e) => setLabName(e.target.value)}
//                   className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                 />
//                 <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>Lab Address 1</label>
//                 <input
//                   type="text"
//                   value={labAddress1}
//                   onChange={(e) => setLabAddress1(e.target.value)}
//                   className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                 />
//                 <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>Lab Address 2</label>
//                 <input
//                   type="text"
//                   value={labAddress2}
//                   onChange={(e) => setLabAddress2(e.target.value)}
//                   className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                 />
//                 <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>City</label>
//                 <input
//                   type="text"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                 />
//                 <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>State</label>
//                 <input
//                   type="text"
//                   value={state}
//                   onChange={(e) => setState(e.target.value)}
//                   className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
//                 />
//                 <button
//                   type='submit'
//                   className='px-[24px] flex items-center justify-center h-[44px] rounded-lg bg-[#41B079] text-white mt-[32px] w-[136px] font-Montserrat font-semibold text-sm'
//                 >
//                   Save Details
//                 </button>
//               </div>
//             </form>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default EditProfile;





//yugalcode
import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import edit from "../assets/edit.png";
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useAvailabilityContext } from '../AvailabilityContext';

import { Link } from 'react-router-dom';
import arr from '../assets/arrow left.png'

const EditProfile = () => {
  const { mobileNumber } = useAvailabilityContext();
  const [fullName, setFullName] = useState('');
  const [pharmacyName, setPharmacyName] = useState('');
  const [pharmacyAddress1, setPharmacyAddress1] = useState('');
  const [pharmacyAddress2, setPharmacyAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pharmacyPhoto, setPharmacyPhoto] = useState(null);
  const [existingPharmacyPhoto, setExistingPharmacyPhoto] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const navigate = useNavigate();

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
        setFullName(data.fullName);
        setPharmacyName(data.pharmacyName);
        setPharmacyAddress1(data.pharmacyAddress1);
        setPharmacyAddress2(data.pharmacyAddress2);
        setCity(data.city);
        setState(data.state);
        setExistingPharmacyPhoto(data.pharmacyPhoto);
        setIsUpdating(true);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProfileInfo();
  }, [mobileNumber]);

  const handleFileChange = (e) => {
    setLabPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('pharmacyName', pharmacyName);
    formData.append('pharmacyAddress1', pharmacyAddress1);
    formData.append('pharmacyAddress2', pharmacyAddress2);
    formData.append('city', city);
    formData.append('state', state);
    if (pharmacyPhoto) {
      formData.append('pharmacyPhoto', pharmacyPhoto);
    }

    try {
      const response = await fetch(`/api/profile/mobile/${mobileNumber}`, {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to save profile info');
      }
      alert('Profile info saved successfully');
      navigate('/viewprofile');
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving profile info');
    }
  };

  return (
    <div className='w-full overflow-hidden'>
    <Navbar />
    <div className='sm:bg-[#F4F4F4] '>
    <main className=' sm:mx-[120px] pt-[24px] pb-[48px]'>
      <div className=' hidden sm:block'>
    <Header />  
    </div>
    <div className='sm:hidden flex ml-2 space-x-1'>
    <Link to="/myprofile ">
      <img src={arr} className='mt-1.5'alt="Arrow"  />
      <h1 className='font-Montserrat text-2xl font-bold'>Basic Details</h1>
      </Link>
    </div> 
    <div className="flex justify-center items-center lg:justify-start  lg:top-0 lg:left-0">

          <div className='sm:w-[484px] bg-white rounded-lg h-auto p-[32px] mt-[26px]'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col'>
                <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Full Name</label>
                <input
                  type="text"
                  placeholder='Full name'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                />
                <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>Pharmacy Photo</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                />
                <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-64 mt-[-36px]" />
                {existingPharmacyPhoto && (
                  <div className='mt-[8px]'>
                    <a href={`/api/documents/file/${existingPharmacyPhoto}`} target="_blank" rel="noopener noreferrer">
                      View Pharmacy Photo
                    </a>
                  </div>
                )}
                <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>Pharmacy Name</label>
                <input
                  type="text"
                  value={pharmacyName}
                  onChange={(e) => setPharmacyName(e.target.value)}
                  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                />
                <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>Pharmacy Address 1</label>
                <input
                  type="text"
                  value={pharmacyAddress1}
                  onChange={(e) => setPharmacyAddress1(e.target.value)}
                  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                />
                <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>Pharmacy Address 2</label>
                <input
                  type="text"
                  value={pharmacyAddress2}
                  onChange={(e) => setPharmacyAddress2(e.target.value)}
                  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                />
                <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                />
                <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1 mt-[24px]'>State</label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'
                />
                <button
                  type='submit'
                  className='px-[24px] flex items-center justify-center h-[44px] rounded-lg bg-[#41B079] text-white mt-[32px] w-[136px] font-Montserrat font-semibold text-sm'
                >
                  Save Details
                </button>
              </div>
            </form>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditProfile;