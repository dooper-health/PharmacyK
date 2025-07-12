// import React, { useState, useEffect, useContext } from 'react'
// import Navbar from './Navbar'
// import arr from '../assets/arrow left.png'

// import { Link, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import edit from "../assets/edit.png"
// import { useAvailabilityContext } from '../AvailabilityContext';


// const Documents = () => {
//   const { mobileNumber } = useAvailabilityContext();
//   const [documents, setDocuments] = useState({
//     aadharCard: '',
//     panCard: '',
//     pharmacyLicense: '',
//     pharmacyEstablishedLicense: '',
//     nablLicense: '',
//     gstCertificate: '',
//   });
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchDocuments();
//   }, []);

//   const fetchDocuments = async () => {
//     try {
//       const response = await fetch(`/api/documents/mobile/${mobileNumber}`);
//       if (response.ok) {
//         const data = await response.json();
//         setDocuments(data);
//         setIsUpdating(true);
//       } else if (response.status === 404) {
//         setIsUpdating(false);
//         setError('User not found');
//       } else {
//         throw new Error('Failed to fetch documents');
//       }
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//       setError('Failed to fetch documents');
//     }
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setDocuments({
//       ...documents,
//       [name]: files[0],
//     });
//   };

//   const saveDocuments = async (e) => {
//     e.preventDefault();
//     // setLoading(true);
//     const formData = new FormData();
//     formData.append('aadharCard', documents.aadharCard);
//     formData.append('panCard', documents.panCard);
//     formData.append('pharmacyLicense', documents.pharmacyLicense);
//     formData.append('pharmacyEstablishedLicense', documents.pharmacyEstablishedLicense);
//     formData.append('nablLicense', documents.nablLicense);
//     formData.append('gstCertificate', documents.gstCertificate);

//     try {
//       const response = await fetch(`/api/documents/mobile/${isUpdating ? mobileNumber : ''}`, {
//         method: isUpdating ? 'PUT' : 'POST',
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error('Failed to save documents');
//       }
//       const data = await response.json();
//       console.log('Documents saved:', data);
//       alert('Documents saved successfully');
//       navigate('/bankInfo');
//     } catch (error) {
//       console.error('Error saving documents:', error);
//       alert('Error saving documents');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     // <div className='w-full overflow-hidden'>
//     // <Navbar />
//     // <div className='sm:bg-[#F4F4F4]'>
//     // <main className=' sm:mx-[120px] pt-[24px] pb-[48px]  '>
//     // <div className=' hidden sm:block'>
//     // <Header />  
//     // </div>
//     // <div className='sm:hidden flex ml-2 space-x-1'>
//     // <Link to="/myprofile ">
//     //   <img src={arr} className='mt-1.5' />
//     //   </Link>
//     //   <h1 className='font-Montserrat text-2xl font-bold'>Documents</h1>
//     // </div> 
//     <div className='w-full overflow-hidden'>
//   <Navbar />
//   <div className='sm:bg-[#F4F4F4]'>
//     <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
//       <div className='hidden sm:block'>
//         <Header />
//       </div>
//       <div className='sm:hidden flex ml-2 space-x-1'>
//         <Link to="/myprofile" className='flex items-center space-x-1'>
//           <img src={arr} className='mt-1.5' alt="Arrow" />
//           <h1 className='font-Montserrat text-2xl font-bold'>Documents</h1>
//         </Link>
//       </div>


//           <div className="sm:w-[484px] h-auto bg-white rounded-lg p-[32px] mt-[26px]">
//             <div className="flex flex-col ">
//               <form onSubmit={saveDocuments}>
//                 <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1">Aadhar Card</label>
//                 <input
//                   type="file"
//                   name="aadharCard"
//                   onChange={handleFileChange}
//                   className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
//                 />
//                 <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px]" />
//                 {documents.aadharCard && (
//                   <a href={`/${documents.aadharCard}`} target="_blank" rel="noopener noreferrer">
//                     <h1 className='mt-5'>View Aadhar Card</h1>
//                   </a>
//                 )}

//                 <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1">Pan Card</label>
//                 <input
//                   type="file"
//                   name="panCard"
//                   onChange={handleFileChange}
//                   className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
//                 />
//                 <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px]" />
//                 {documents.panCard && (
//                   <a href={`/${documents.panCard}`} target="_blank" rel="noopener noreferrer">
//                     <h1 className='mt-5'>View Pan Card</h1>
//                   </a>
//                 )}

//                 <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1">Lab License</label>
//                 <input
//                   type="file"
//                   name="pharmacyLicense"
//                   onChange={handleFileChange}
//                   className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
//                 />
//                 <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px] " />
//                 {documents.pharmacyLicense && (
//                   <a href={`/${documents.pharmacyLicense}`} target="_blank" rel="noopener noreferrer">
//                     <h1 className='mt-5'>View Lab License</h1>
//                   </a>
//                 )}

               
//                 <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1">GST</label>
//                 <input
//                   type="file"
//                   name="gstCertificate"
//                   onChange={handleFileChange}
//                   className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
//                 />
//                 <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px]" />
//                 {documents.gstCertificate && (
//                   <a href={`/${documents.gstCertificate}`} target="_blank" rel="noopener noreferrer">
//                     <h1 className='mt-5'>View GST</h1>
//                   </a>
//                 )}

//                 <button
//                   type="submit"
//                   className="px-[24px] flex items-center justify-center h-[44px] rounded-lg bg-[#41B079] text-white mt-[32px] w-[136px] font-Montserrat font-semibold text-sm"
//                   disabled={loading}
//                 >
//                   Save Details
//                 </button>
//               </form>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Documents;



//yugalcode
import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Navbar'
import arr from '../assets/arrow left.png'
// import BasicDetails from './BasicDetails';
// import Association from './Association';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import edit from "../assets/edit.png"
import { useAvailabilityContext } from '../AvailabilityContext';


const Documents = () => {
  const { mobileNumber } = useAvailabilityContext();
  const [documents, setDocuments] = useState({
    aadharCard: '',
    panCard: '',
    pharmacyLicense: '',
    pharmacyEstablishedLicense: '',
    nablLicense: '',
    gstCertificate: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //const objectId = '666adb064fe31a74893fe406'; 
  const navigate = useNavigate();

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch(`/api/documents/mobile/${mobileNumber}`);
      if (response.ok) {
        const data = await response.json();
        setDocuments(data);
        setIsUpdating(true);
      } else if (response.status === 404) {
        setIsUpdating(false);
        setError('User not found');
      } else {
        throw new Error('Failed to fetch documents');
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
      setError('Failed to fetch documents');
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments({
      ...documents,
      [name]: files[0],
    });
  };

  const saveDocuments = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('aadharCard', documents.aadharCard);
    formData.append('panCard', documents.panCard);
    formData.append('pharmacyLicense', documents.pharmacyLicense);
    formData.append('pharmacyEstablishedLicense', documents.pharmacyEstablishedLicense);
    formData.append('nablLicense', documents.nablLicense);
    formData.append('gstCertificate', documents.gstCertificate);

    try {
      const response = await fetch(`/api/documents/mobile/${isUpdating ? mobileNumber : ''}`, {
        method: isUpdating ? 'PUT' : 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to save documents');
      }
      const data = await response.json();
      console.log('Documents saved:', data);
      alert('Documents saved successfully');
      navigate('/bankInfo');
    } catch (error) {
      console.error('Error saving documents:', error);
      alert('Error saving documents');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <div className='w-full overflow-hidden'>
    // <Navbar />
    // <div className='sm:bg-[#F4F4F4]'>
    // <main className=' sm:mx-[120px] pt-[24px] pb-[48px]  '>
    // <div className=' hidden sm:block'>
    // <Header />  
    // </div>
    // <div className='sm:hidden flex ml-2 space-x-1'>
    // <Link to="/myprofile ">
    //   <img src={arr} className='mt-1.5' />
    //   </Link>
    //   <h1 className='font-Montserrat text-2xl font-bold'>Documents</h1>
    // </div> 
    <div className='w-full overflow-hidden'>
  <Navbar />
  <div className='sm:bg-[#F4F4F4]'>
    <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
      <div className='hidden sm:block'>
        <Header />
      </div>
      {/* <div className='sm:hidden flex ml-2 space-x-1'>
        <Link to="/myprofile" className='flex items-center space-x-1'>
          <img src={arr} className='mt-1.5' alt="Arrow" />
          <h1 className='font-Montserrat text-2xl font-bold'>Documents</h1>
        </Link>
      </div> */}
      <div className='sm:hidden flex ml-2 space-x-1'>
  <Link to="/myprofile" className='flex items-center space-x-1'>
    <img src={arr} className='mt-1.5' alt="Arrow" />
    <h1 className='font-Montserrat text-2xl font-bold cursor-pointer'>Documents</h1>
  </Link>
</div>

          <div className="sm:w-[484px] h-auto bg-white rounded-lg p-[32px] mt-[26px]">
            <div className="flex flex-col ">
              <form onSubmit={saveDocuments}>
                <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1">Aadhar Card</label>
                <input
                  type="file"
                  name="aadharCard"
                  onChange={handleFileChange}
                  className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
                />
                <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px]" />
                {documents.aadharCard && (
                  <a href={`/api/documents/file/${documents.aadharCard}`} target="_blank" rel="noopener noreferrer">
                    <h1 className='mt-5'>View Aadhar Card</h1>
                  </a>
                )}

                <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1">Pan Card</label>
                <input
                  type="file"
                  name="panCard"
                  onChange={handleFileChange}
                  className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
                />
                <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px]" />
                {documents.panCard && (
                  <a href={`/api/documents/file/${documents.panCard}`} target="_blank" rel="noopener noreferrer">
                    <h1 className='mt-5'>View Pan Card</h1>
                  </a>
                )}

                <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1">Pharmacy License</label>
                <input
                  type="file"
                  name="pharmacyLicense"
                  onChange={handleFileChange}
                  className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
                />
                <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px] " />
                {documents.pharmacyLicense && (
                  <a href={`/api/documents/file/${documents.pharmacyLicense}`} target="_blank" rel="noopener noreferrer">
                    <h1 className='mt-5'>View Pharmacy License</h1>
                  </a>
                )}

                {/* <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1">Established License</label>
                <input
                  type="file"
                  name="pharmacyEstablishedLicense"
                  onChange={handleFileChange}
                  className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
                />
                <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px]" />
                {documents.pharmacyEstablishedLicense && (
                  <a href={`/api/documents/file/${documents.pharmacyEstablishedLicense}`} target="_blank" rel="noopener noreferrer">
                    <h1 className='mt-5'>View Established License</h1>
                  </a>
                )} */}

                {/* <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1">Nabl License</label>
                <input
                  type="file"
                  name="nablLicense"
                  onChange={handleFileChange}
                  className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
                />
                <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px]" />
                {documents.nablLicense && (
                  <a href={`/api/documents/file/${documents.nablLicense}`} target="_blank" rel="noopener noreferrer">
                   <h1 className='mt-5'> View Nabl License</h1>
                  </a>
                )} */}

                <label className="flex flex-col font-Montserrat text-[12px] font-medium text-[#8D98A4] mt-[24px] ml-1">GST</label>
                <input
                  type="file"
                  name="gstCertificate"
                  onChange={handleFileChange}
                  className="sm:px-[16px] px-[1px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]"
                />
                <img src={edit} alt="" className="h-[24px] w-[24px] sm:ml-[380px] ml-[280px] mt-[-36px]" />
                {documents.gstCertificate && (
                  <a href={`/api/documents/file/${documents.gstCertificate}`} target="_blank" rel="noopener noreferrer">
                    <h1 className='mt-5'>View GST</h1>
                  </a>
                )}

                <button
                  type="submit"
                  className="px-[24px] flex items-center justify-center h-[44px] rounded-lg bg-[#41B079] text-white mt-[32px] w-[136px] font-Montserrat font-semibold text-sm"
                  disabled={loading}
                >
                  {/* {isUpdating ? 'Update Details' : 'Save Details'} */}
                  Save Details
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documents;
