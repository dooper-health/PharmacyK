// import React, { useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import cloud from "../assets/upload.png";
// import SuccessCard4 from '../components/SuccessCard4';

// const ReportCard = () => {
//   const fileInputRef = useRef(null);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [isFileChangeProcessing, setIsFileChangeProcessing] = useState(false);
//   const [price, setPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [discountedPrice, setDiscountedPrice] = useState(null);
//   const [showSuccessCard4, setShowSuccessCard4] = useState(false);

//   const { bookingId } = useParams(); // Extract bookingId from URL params

//   // Function to handle the file input click event
//   const handleFileInputClick = () => {
//     fileInputRef.current.click();
//   };

//   // Function to handle file selection and update the state
//   const handleFileChange = async (event) => {
//     if (isFileChangeProcessing) return;
//     setIsFileChangeProcessing(true);

//     const newFiles = Array.from(event.target.files);
//     setSelectedFiles([...selectedFiles, ...newFiles]);

//     setIsFileChangeProcessing(false);
//   };

//   // Function to handle file upload along with price and discount fields
//   const handleUpload = async (event) => {
//     event.preventDefault();

//     if (selectedFiles.length === 0) {
//       alert("Please select at least one file!");
//       return;
//     }

//     const formData = new FormData();
//     selectedFiles.forEach((file, index) => {
//       formData.append('uploadreport', file); // Append each selected file to formData
//     });
//     formData.append('price', price);
//     formData.append('discount', discount);

//     try {
//       const response = await axios.post(`http://localhost:5000/api/otp/labreport/${bookingId}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.status === 201) {
//         setUploadStatus('Reports uploaded successfully');
//         setDiscountedPrice(response.data.discountedPrice); // Assuming response returns a discountedPrice field
//         setShowSuccessCard4(true);
//       } else {
//         setUploadStatus('Unexpected response status: ' + response.status);
//         console.error("Unexpected response status: ", response.status);
//       }
//     } catch (error) {
//       setUploadStatus('Failed to upload reports');
//       console.error("Failed to upload reports: ", error);
//       if (error.response) {
//         console.error("Response data: ", error.response.data);
//         alert("Failed to upload reports: " + error.response.data.message);
//       } else {
//         alert("Failed to upload reports: " + error.message);
//       }
//     }
//   };

//   // If upload is successful, show the SuccessCard component
//   if (showSuccessCard4) {
//     return <SuccessCard4 />;
//   }

//   return (
//     <>
//       <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50'>
//         <div className='bg-white rounded-2xl p-8 sm:w-full max-w-md mx-auto'>
//           <h1 className='text-2xl font-semibold mb-4'>Add Quotation</h1>
//           <div className='mb-4'>
//             <h2 className='text-sm font-medium text-gray-600'>Upload Quotation</h2>
//             <div className='border rounded-lg p-4 mt-2'>
//               <label className='cursor-pointer'>
//                 <input
//                   type="file"
//                   accept=".jpg,.jpeg,.png,.pdf"
//                   ref={fileInputRef}
//                   style={{ display: 'none' }}
//                   onChange={handleFileChange}
//                 />
//                 <img src={cloud} alt="Upload" className='mx-auto' />
//                 <p className='text-center mt-2 text-gray-600'>
//                   {selectedFiles.length === 0 ? "Place Holder" : `${selectedFiles.length} file(s) selected`}
//                 </p>
//               </label>
//             </div>
//             <ul className='list-disc mt-2 ml-5'>
//               {selectedFiles.map((file, index) => (
//                 <li key={index} className='text-sm'>{file.name}</li>
//               ))}
//             </ul>
//           </div>
//           <hr className="hr-text" data-content="OR"/>
//           <div className='mb-4'>
//             <h2 className='text-sm font-medium text-gray-600'>Price</h2>
//             <input
//               type="text"
//               className='border rounded-lg p-2 w-full mt-2'
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="Enter Price"
//             />
//           </div>
//           <div className='mb-4'>
//             <h2 className='text-sm font-medium text-gray-600'>Discount</h2>
//             <input
//               type="text"
//               className='border rounded-lg p-2 w-full mt-2'
//               value={discount}
//               onChange={(e) => setDiscount(e.target.value)}
//               placeholder="Enter Discount"
//             />
//           </div>
//           {discountedPrice !== null && (
//             <div className='mb-4'>
//               <h2 className='text-sm font-medium text-gray-600'>Discounted Price</h2>
//               <p className='border rounded-lg p-2 w-full mt-2'>{discountedPrice}</p>
//             </div>
//           )}
//           <button
//             className='mt-2 p-4 bg-red-600 rounded-xl w-full text-white'
//             onClick={handleUpload}
//           >
//             Send
//           </button>
//           {uploadStatus && <p className='mt-4 text-center text-sm text-red-500'>{uploadStatus}</p>}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ReportCard;



// import React, { useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import cloud from "../assets/upload.png";
// import SuccessCard4 from '../components/SuccessCard4';

// const ReportCard = () => {
//   const fileInputRef = useRef(null);
//   const [selectedFile, setSelectedFile] = useState(null); // State for single file
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [price, setPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [discountedPrice, setDiscountedPrice] = useState(null);
//   const [showSuccessCard4, setShowSuccessCard4] = useState(false);

//   const { bookingId } = useParams(); // Extract bookingId from URL params

//   // Function to handle the file input click event
//   const handleFileInputClick = () => {
//     fileInputRef.current.click();
//   };

//   // Function to handle file selection and update the state
//   const handleFileChange = (event) => {
//     const file = event.target.files[0]; // Ensure only a single file is selected
//     setSelectedFile(file);
//   };

//   // Function to handle file upload along with price and discount fields
//   const handleUpload = async (event) => {
//     event.preventDefault();

//     if (!selectedFile) {
//       alert("Please select a file!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('uploadreport', selectedFile); // Append the single selected file to formData
//     formData.append('price', price);
//     formData.append('discount', discount);

//     try {
//       const response = await axios.post(`http://localhost:5000/api/otp/labreport/${bookingId}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.status === 201) {
//         setUploadStatus('Reports uploaded successfully');
//         setDiscountedPrice(response.data.discountedPrice); // Assuming response returns a discountedPrice field
//         setShowSuccessCard4(true); // Show SuccessCard4 upon successful upload
//       } else {
//         setUploadStatus('Unexpected response status: ' + response.status);
//         console.error("Unexpected response status: ", response.status);
//       }
//     } catch (error) {
//       setUploadStatus('Failed to upload report');
//       console.error("Failed to upload report: ", error);
//       if (error.response) {
//         console.error("Response data: ", error.response.data);
//         alert("Failed to upload report: " + error.response.data.message);
//       } else {
//         alert("Failed to upload report: " + error.message);
//       }
//     }
//   };

//   // If upload is successful, show the SuccessCard4 component
//   if (showSuccessCard4) {
//     return <SuccessCard4 />;
//   }

//   return (
//     <>
//       <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50'>
//         <div className='bg-white rounded-2xl p-8 sm:w-full max-w-md mx-auto'>
//           <h1 className='text-2xl font-semibold mb-4'>Add Quotation</h1>
//           <div className='mb-4'>
//             <h2 className='text-sm font-medium text-gray-600'>Upload Quotation</h2>
//             <div className='border rounded-lg p-4 mt-2'>
//               <label className='cursor-pointer'>
//                 <input
//                   type="file"
//                   accept=".jpg,.jpeg,.png,.pdf"
//                   ref={fileInputRef}
//                   style={{ display: 'none' }}
//                   onChange={handleFileChange}
//                 />
//                 <img src={cloud} alt="Upload" className='mx-auto' />
//                 <p className='text-center mt-2 text-gray-600'>
//                   {selectedFile ? selectedFile.name : "Place Holder"}
//                 </p>
//               </label>
//             </div>
//             {selectedFile && (
//               <ul className='list-disc mt-2 ml-5'>
//                 <li className='text-sm'>{selectedFile.name}</li>
//               </ul>
//             )}
//           </div>
//           <hr className="hr-text" data-content="OR"/>
//           <div className='mb-4'>
//             <h2 className='text-sm font-medium text-gray-600'>Price</h2>
//             <input
//               type="text"
//               className='border rounded-lg p-2 w-full mt-2'
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="Enter Price"
//             />
//           </div>
//           <div className='mb-4'>
//             <h2 className='text-sm font-medium text-gray-600'>Discount</h2>
//             <input
//               type="text"
//               className='border rounded-lg p-2 w-full mt-2'
//               value={discount}
//               onChange={(e) => setDiscount(e.target.value)}
//               placeholder="Enter Discount"
//             />
//           </div>
//           {discountedPrice !== null && (
//             <div className='mb-4'>
//               <h2 className='text-sm font-medium text-gray-600'>Discounted Price</h2>
//               <p className='border rounded-lg p-2 w-full mt-2'>{discountedPrice}</p>
//             </div>
//           )}
//           <button
//             className='mt-2 p-4 bg-red-600 rounded-xl w-full text-white'
//             onClick={handleUpload}
//           >
//             Send
//           </button>
//           {uploadStatus && <p className='mt-4 text-center text-sm text-red-500'>{uploadStatus}</p>}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ReportCard;



import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import cloud from "../assets/upload.png";
import SuccessCard4 from '../components/SuccessCard4';

const ReportCard = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [showSuccessCard4, setShowSuccessCard4] = useState(false);
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const { bookingId } = useParams();

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append('uploadreport', selectedFile);
    formData.append('price', price);
    formData.append('discount', discount);

    try {
      const response = await axios.post(`/api/otp/labreport/${bookingId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        setUploadStatus('Reports uploaded successfully');
        setDiscountedPrice(response.data.discountedPrice);
        setShowSuccessCard4(true);

        
        // Navigate to the successful page after successful upload
        // navigate(`/successCard4/${bookingId}`);

      } else {
        setUploadStatus('Unexpected response status: ' + response.status);
        console.error("Unexpected response status: ", response.status);
      }
    } catch (error) {
      setUploadStatus('Failed to upload report');
      console.error("Failed to upload report: ", error);
      if (error.response) {
        console.error("Response data: ", error.response.data);
        alert("Failed to upload report: " + error.response.data.message);
      } else {
        alert("Failed to upload report: " + error.message);
      }
    }
  };

   if (showSuccessCard4) {
    return <SuccessCard4 />;
  }

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50'>
        <div className='bg-white rounded-2xl p-8 sm:w-full max-w-md mx-auto'>
          <h1 className='text-2xl font-semibold mb-4'>Add Quotation</h1>
          <div className='mb-4'>
            <h2 className='text-sm font-medium text-gray-600'>Upload Quotation</h2>
            <div className='border rounded-lg p-4 mt-2'>
              <label className='cursor-pointer'>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <img src={cloud} alt="Upload" className='mx-auto' />
                <p className='text-center mt-2 text-gray-600'>
                  {selectedFile ? selectedFile.name : "Place Holder"}
                </p>
              </label>
            </div>
            {selectedFile && (
              <ul className='list-disc mt-2 ml-5'>
                <li className='text-sm'>{selectedFile.name}</li>
              </ul>
            )}
          </div>
          <hr className="hr-text" data-content="OR" />
          <div className='mb-4'>
            <h2 className='text-sm font-medium text-gray-600'>Price</h2>
            <input
              type="text"
              className='border rounded-lg p-2 w-full mt-2'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
            />
          </div>
          <div className='mb-4'>
            <h2 className='text-sm font-medium text-gray-600'>Discount</h2>
            <input
              type="text"
              className='border rounded-lg p-2 w-full mt-2'
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Enter Discount"
            />
          </div>
          {discountedPrice !== null && (
            <div className='mb-4'>
              <h2 className='text-sm font-medium text-gray-600'>Discounted Price</h2>
              <p className='border rounded-lg p-2 w-full mt-2'>{discountedPrice}</p>
            </div>
          )}
          <button
            className='mt-2 p-4 bg-red-600 rounded-xl w-full text-white'
            onClick={handleUpload}
          >
            Send
          </button>
          {uploadStatus && <p className='mt-4 text-center text-sm text-red-500'>{uploadStatus}</p>}
        </div>
      </div>
    </>
  );
}

export default ReportCard;
