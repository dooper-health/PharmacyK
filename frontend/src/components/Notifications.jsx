// // // import React, { useState, useEffect, useRef } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';
// // // import Navbar from './Navbar';
// // // import arr from '../assets/arrow left.png';
// // // import rl from '../assets/rlarrow.png';
// // // import av1 from '../assets/Avatar (1).png';
// // // import { useAvailabilityContext } from '../AvailabilityContext';
// // // import control from '../assets/icons8-back-50.png';
// // // import Phone from '../assets/phone.png';
// // // import Notificaion from '../assets/not.png';
// // // import { io as socketIOClient } from 'socket.io-client';

// // // const SOCKET_SERVER_URL = 'http://localhost:5000'; // Change if your backend runs elsewhere

// // // const Notifications = () => {
// // //   const [notifications, setNotifications] = useState([]);
// // //   const { mobileNumber } = useAvailabilityContext();
// // //   const [selectedItem, setSelectedItem] = useState(null);
// // //   const [markAllReadClicked, setMarkAllReadClicked] = useState(false);
// // //   const socketRef = useRef(null);

// // //   useEffect(() => {
// // //     const fetchNotifications = async () => {
// // //       try {
// // //         const response = await axios.post('/api/notifications/pharmacy/incoming', { phoneNumber: mobileNumber });
// // //         if (response.data && response.data.notifications) {
// // //           setNotifications(response.data.notifications);
// // //         } else if (Array.isArray(response.data)) {
// // //         setNotifications(response.data);
// // //         }
// // //       } catch (error) {
// // //         console.error('Error fetching notifications:', error);
// // //       }
// // //     };
// // //     fetchNotifications();
// // //   }, [mobileNumber]);

// // //   // Real-time notification setup
// // //   useEffect(() => {
// // //     if (!mobileNumber) return;
// // //     // Connect to socket server
// // //     socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
// // //       transports: ['websocket'],
// // //       reconnection: true,
// // //     });
// // //     // Register pharmacy (join room)
// // //     socketRef.current.emit('register', mobileNumber);
// // //     // Listen for new notifications
// // //     socketRef.current.on('newPharmacyNotification', (notification) => {
// // //       setNotifications((prev) => [notification, ...prev]);
// // //     });
// // //     // Cleanup
// // //     return () => {
// // //       if (socketRef.current) {
// // //         socketRef.current.disconnect();
// // //       }
// // //     };
// // //   }, [mobileNumber]);

// // //   const handleClearAll = async () => {
// // //     try {
// // //       await axios.put('/api/alerts/clearAll', { phoneNumber: mobileNumber });
// // //       setNotifications([]);
// // //     } catch (error) {
// // //       console.error('Error clearing notifications:', error);
// // //     }
// // //   };

// // //   const handleMarkAllAsRead = async () => {
// // //     try {
// // //       await axios.put('/api/alerts', { phoneNumber: mobileNumber });
// // //       const updatedNotifications = notifications.map(notification => ({ ...notification, status: 'read' }));
// // //       setNotifications(updatedNotifications);
// // //       setMarkAllReadClicked(true);
// // //     } catch (error) {
// // //       console.error('Error marking all notifications as read:', error);
// // //     }
// // //   };

// // //   const handleItemClick = (item) => {
// // //     setSelectedItem(item);
// // //   };

// // //   return (
// // //     <div className='w-full overflow-hidden'>
// // //       <Navbar />
// // //       <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
// // //         <div className='flex justify-between'>
// // //           <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] sm:w-[1077px] pb-[8px] mt-3'>
// // //             <Link to="/myprofile">
// // //               <img src={control} className='sm:hidden h-[18px] w-[20px] mt-1.5 mr-[10px] ml-[10px]' />
// // //               <img src={arr} alt="arr" className='hidden sm:block h-[24px] sm:w-[24px] mt-1 mr-[8px]' />
// // //             </Link>
// // //             Notifications
// // //           </div>
// // //           <div className='flex sm:hidden mr-3'>
// // //             <img src={Notificaion} className='w-[50px]' />
// // //             <img src={Phone} className='w-[50px]' />
// // //           </div>
// // //         </div>
// // //         <hr className='mt-[28px]' />
// // //         <div className='flex justify-end mt-[23px] mb-[23px] sm:space-x-10 space-x-6'>
// // //           <div
// // //             className='ml-7 font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] cursor-pointer'
// // //             onClick={handleMarkAllAsRead}
// // //             style={{ backgroundColor: markAllReadClicked ? 'yellow' : 'transparent' }}
// // //           >
// // //             Mark all as read
// // //           </div>
// // //           <div
// // //             className='font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] mr-[57px] cursor-pointer'
// // //             onClick={handleClearAll}
// // //           >
// // //             Clear all
// // //           </div>
// // //           <h1 className='font-sans text-center sm:text-[18px] text-[11px] font-[400] text-[#4B465C] mr-[33px] opacity-[50%]'>
// // //             1-{notifications.length} of {notifications.length}
// // //           </h1>
// // //           <img src={rl} alt="rl" />
// // //         </div>
// // //         <hr />
// // //         {notifications.map((notification, index) => {
// // //           const dateObj = new Date(notification.createdAt || notification.date);
// // //           const formattedDate = dateObj.toLocaleDateString('en-GB', {
// // //             day: '2-digit', month: 'long', year: 'numeric'
// // //           });
// // //           const formattedTime = dateObj.toLocaleTimeString('en-GB', {
// // //             hour: '2-digit', minute: '2-digit'
// // //           });

// // //           return (
// // //             <div key={index} className='md:flex md:justify-between px-[14px] py-[20px]' onClick={() => handleItemClick(notification)}>
// // //               <div className='flex max-w-[500px]'>
// // //                 <img src={av1} alt="" className='rounded-full ml-[20px]' />
// // //                 <div className='ml-5'>
// // //                   <h2 className='font-Montserrat text-[16px] font-medium text-[#000000] mt-1'>
// // //                   {notification.message}
// // //                 </h2>
// // //                   {notification.serviceType && (
// // //                     <div className='text-xs text-[#E40443] font-semibold mt-1'>
// // //                       Service Type: {notification.serviceType}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //               <div className='flex gap-3'>
// // //                 <h3 className='ml-[75px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
// // //                   {formattedDate}
// // //                 </h3>
// // //                 <h4 className='ml-[3px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
// // //                   {formattedTime}
// // //                 </h4>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //         <hr />
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Notifications;


// // import React, { useState, useEffect, useRef } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import Navbar from './Navbar';
// // import arr from '../assets/arrow left.png';
// // import rl from '../assets/rlarrow.png';
// // import av1 from '../assets/Avatar (1).png';
// // import { useAvailabilityContext } from '../AvailabilityContext';
// // import control from '../assets/icons8-back-50.png';
// // import Phone from '../assets/phone.png';
// // import Notificaion from '../assets/not.png';
// // import { io as socketIOClient } from 'socket.io-client';

// // const SOCKET_SERVER_URL = 'http://localhost:5000'; // Change if your backend runs elsewhere

// // const Notifications = () => {
// //   const [notifications, setNotifications] = useState([]);
// //   const { mobileNumber } = useAvailabilityContext();
// //   const [markAllReadClicked, setMarkAllReadClicked] = useState(false);
// //   const socketRef = useRef(null);

// //   useEffect(() => {
// //     const fetchNotifications = async () => {
// //       try {
// //         const response = await axios.get('/api/notifications/pharmacy/incoming', { params: { phoneNumber: mobileNumber } });
// //         if (response.data && response.data.notifications) {
// //           setNotifications(response.data.notifications);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching notifications:', error);
// //       }
// //     };
// //     fetchNotifications();
// //   }, [mobileNumber]);

// //   // Real-time notification setup
// //   useEffect(() => {
// //     if (!mobileNumber) return;
// //     // Connect to socket server
// //     socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
// //       transports: ['websocket'],
// //       reconnection: true,
// //     });
// //     // Register pharmacy (join room)
// //     socketRef.current.emit('register', mobileNumber);
// //     // Listen for new notifications
// //     socketRef.current.on('newPharmacyNotification', (notification) => {
// //       setNotifications((prev) => [notification, ...prev]);
// //     });
// //     // Cleanup
// //     return () => {
// //       if (socketRef.current) {
// //         socketRef.current.disconnect();
// //       }
// //     };
// //   }, [mobileNumber]);

// //   const handleClearAll = async () => {
// //     try {
// //       await axios.put('/api/alerts/clearAll', { phoneNumber: mobileNumber });
// //       setNotifications([]);
// //     } catch (error) {
// //       console.error('Error clearing notifications:', error);
// //     }
// //   };

// //   const handleMarkAllAsRead = async () => {
// //     try {
// //       await axios.put('/api/alerts', { phoneNumber: mobileNumber });
// //       const updatedNotifications = notifications.map(notification => ({ ...notification, status: 'read' }));
// //       setNotifications(updatedNotifications);
// //       setMarkAllReadClicked(true);
// //     } catch (error) {
// //       console.error('Error marking all notifications as read:', error);
// //     }
// //   };

// //   return (
// //     <div className='w-full overflow-hidden'>
// //       <Navbar />
// //       <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
// //         <div className='flex justify-between'>
// //           <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] sm:w-[1077px] pb-[8px] mt-3'>
// //             <Link to="/myprofile">
// //               <img src={control} className='sm:hidden h-[18px] w-[20px] mt-1.5 mr-[10px] ml-[10px]' />
// //               <img src={arr} alt="arr" className='hidden sm:block h-[24px] sm:w-[24px] mt-1 mr-[8px]' />
// //             </Link>
// //             Notifications
// //           </div>
// //           <div className='flex sm:hidden mr-3'>
// //             <img src={Notificaion} className='w-[50px]' />
// //             <img src={Phone} className='w-[50px]' />
// //           </div>
// //         </div>
// //         <hr className='mt-[28px]' />
// //         <div className='flex justify-end mt-[23px] mb-[23px] sm:space-x-10 space-x-6'>
// //           <div
// //             className='ml-7 font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] cursor-pointer'
// //             onClick={handleMarkAllAsRead}
// //             style={{ backgroundColor: markAllReadClicked ? 'yellow' : 'transparent' }}
// //           >
// //             Mark all as read
// //           </div>
// //           <div
// //             className='font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] mr-[57px] cursor-pointer'
// //             onClick={handleClearAll}
// //           >
// //             Clear all
// //           </div>
// //           <h1 className='font-sans text-center sm:text-[18px] text-[11px] font-[400] text-[#4B465C] mr-[33px] opacity-[50%]'>
// //             1-{notifications.length} of {notifications.length}
// //           </h1>
// //           <img src={rl} alt="rl" />
// //         </div>
// //         <hr />
// //         {notifications.map((notification, index) => {
// //           const dateObj = new Date(notification.createdAt || notification.date);
// //           const formattedDate = dateObj.toLocaleDateString('en-GB', {
// //             day: '2-digit', month: 'long', year: 'numeric'
// //           });
// //           const formattedTime = dateObj.toLocaleTimeString('en-GB', {
// //             hour: '2-digit', minute: '2-digit'
// //           });

// //           return (
// //             <div key={index} className='md:flex md:justify-between px-[14px] py-[20px]'>
// //               <div className='flex max-w-[500px]'>
// //                 <img src={av1} alt="" className='rounded-full ml-[20px]' />
// //                 <div className='ml-5'>
// //                   <h2 className='font-Montserrat text-[16px] font-medium text-[#000000] mt-1'>
// //                     {notification.message}
// //                   </h2>
// //                   {notification.serviceType && (
// //                     <div className='text-xs text-[#E40443] font-semibold mt-1'>
// //                       Service Type: {notification.serviceType}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //               <div className='flex gap-3'>
// //                 <h3 className='ml-[75px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
// //                   {formattedDate}
// //                 </h3>
// //                 <h4 className='ml-[3px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
// //                   {formattedTime}
// //                 </h4>
// //               </div>
// //             </div>
// //           );
// //         })}
// //         <hr />
// //       </main>
// //     </div>
// //   );
// // };

// // export default Notifications;




// ////KamalCOde

// // import React, { useState, useEffect, useRef } from 'react';
// // import axios from 'axios';
// // import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
// // import Navbar from './Navbar';
// // import arr from '../assets/arrow left.png';
// // import rl from '../assets/rlarrow.png';
// // import av1 from '../assets/Avatar (1).png';
// // import { useAvailabilityContext } from '../AvailabilityContext';
// // import control from '../assets/icons8-back-50.png';
// // import Phone from '../assets/phone.png';
// // import Notificaion from '../assets/not.png';
// // import { io as socketIOClient } from 'socket.io-client';

// // const SOCKET_SERVER_URL = 'http://localhost:5000'; // Change if your backend runs elsewhere

// // const Notifications = () => {
// //   const [notifications, setNotifications] = useState([]);
// //   const { mobileNumber } = useAvailabilityContext();
// //   const [markAllReadClicked, setMarkAllReadClicked] = useState(false);
// //   const socketRef = useRef(null);
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   useEffect(() => {
// //     const fetchNotifications = async () => {
// //       try {
// //         const response = await axios.get('/api/notifications/pharmacy/incoming', { params: { phoneNumber: mobileNumber } });
// //         if (response.data && response.data.notifications) {
// //           setNotifications(response.data.notifications);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching notifications:', error);
// //       }
// //     };
// //     fetchNotifications();
// //   }, [mobileNumber]);

// //   // Real-time notification setup
// //   useEffect(() => {
// //     if (!mobileNumber) return;
// //     // Connect to socket server
// //     socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
// //       transports: ['websocket'],
// //       reconnection: true,
// //     });
// //     // Register pharmacy (join room)
// //     socketRef.current.emit('register', mobileNumber);
// //     // Listen for new notifications
// //     socketRef.current.on('newPharmacyNotification', (notification) => {
// //       setNotifications((prev) => [notification, ...prev]);
// //     });
// //     // Cleanup
// //     return () => {
// //       if (socketRef.current) {
// //         socketRef.current.disconnect();
// //       }
// //     };
// //   }, [mobileNumber]);

// //   const handleClearAll = async () => {
// //     try {
// //       await axios.put('/api/alerts/clearAll', { phoneNumber: mobileNumber });
// //       setNotifications([]);
// //     } catch (error) {
// //       console.error('Error clearing notifications:', error);
// //     }
// //   };

// //   const handleMarkAllAsRead = async () => {
// //     try {
// //       await axios.put('/api/alerts', { phoneNumber: mobileNumber });
// //       const updatedNotifications = notifications.map(notification => ({ ...notification, status: 'read' }));
// //       setNotifications(updatedNotifications);
// //       setMarkAllReadClicked(true);
// //     } catch (error) {
// //       console.error('Error marking all notifications as read:', error);
// //     }
// //   };

// //   const handleNotificationClick = (notification) => {
// //     // Navigate based on the service type
// //     if (notification.serviceType === 'Medicine') {
// //       navigate('/incoming'); // Navigate to Medicine section
// //     } else if (notification.serviceType === 'Vaccination') {
// //       navigate('/incoming'); // Navigate to Vaccination section
// //     } else {
// //       navigate('/incoming'); // Default navigation if service type is unknown
// //     }
// //   };

// //   return (
// //     <div className='w-full overflow-hidden'>
// //       <Navbar />
// //       <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
// //         <div className='flex justify-between'>
// //           <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] sm:w-[1077px] pb-[8px] mt-3'>
// //             <Link to="/myprofile">
// //               <img src={control} className='sm:hidden h-[18px] w-[20px] mt-1.5 mr-[10px] ml-[10px]' />
// //               <img src={arr} alt="arr" className='hidden sm:block h-[24px] sm:w-[24px] mt-1 mr-[8px]' />
// //             </Link>
// //             Notifications
// //           </div>
// //           <div className='flex sm:hidden mr-3'>
// //             <img src={Notificaion} className='w-[50px]' />
// //             <img src={Phone} className='w-[50px]' />
// //           </div>
// //         </div>
// //         <hr className='mt-[28px]' />
// //         <div className='flex justify-end mt-[23px] mb-[23px] sm:space-x-10 space-x-6'>
// //           <div
// //             className='ml-7 font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] cursor-pointer'
// //             onClick={handleMarkAllAsRead}
// //             style={{ backgroundColor: markAllReadClicked ? 'yellow' : 'transparent' }}
// //           >
// //             Mark all as read
// //           </div>
// //           <div
// //             className='font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] mr-[57px] cursor-pointer'
// //             onClick={handleClearAll}
// //           >
// //             Clear all
// //           </div>
// //           <h1 className='font-sans text-center sm:text-[18px] text-[11px] font-[400] text-[#4B465C] mr-[33px] opacity-[50%]'>
// //             1-{notifications.length} of {notifications.length}
// //           </h1>
// //           <img src={rl} alt="rl" />
// //         </div>
// //         <hr />
// //         {notifications.map((notification, index) => {
// //           const dateObj = new Date(notification.createdAt || notification.date);
// //           const formattedDate = dateObj.toLocaleDateString('en-GB', {
// //             day: '2-digit', month: 'long', year: 'numeric'
// //           });
// //           const formattedTime = dateObj.toLocaleTimeString('en-GB', {
// //             hour: '2-digit', minute: '2-digit'
// //           });

// //           return (
// //             <div key={index} className='md:flex md:justify-between px-[14px] py-[20px]' onClick={() => handleNotificationClick(notification)}>
// //               <div className='flex max-w-[500px]'>
// //                 <img src={av1} alt="" className='rounded-full ml-[20px]' />
// //                 <div className='ml-5'>
// //                   <h2 className='font-Montserrat text-[16px] font-medium text-[#000000] mt-1'>
// //                     {notification.message}
// //                   </h2>
// //                   {notification.serviceType && (
// //                     <div className='text-xs text-[#E40443] font-semibold mt-1'>
// //                       Service Type: {notification.serviceType}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //               <div className='flex gap-3'>
// //                 <h3 className='ml-[75px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
// //                   {formattedDate}
// //                 </h3>
// //                 <h4 className='ml-[3px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
// //                   {formattedTime}
// //                 </h4>
// //               </div>
// //             </div>
// //           );
// //         })}
// //         <hr />
// //       </main>
// //     </div>
// //   );
// // };

// // export default Notifications;





// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
// import arr from '../assets/arrow left.png';
// import rl from '../assets/rlarrow.png';
// import av1 from '../assets/Avatar (1).png';
// import { useAvailabilityContext } from '../AvailabilityContext';
// import control from '../assets/icons8-back-50.png';
// import Phone from '../assets/phone.png';
// import Notificaion from '../assets/not.png';
// import { io as socketIOClient } from 'socket.io-client';

// const SOCKET_SERVER_URL = 'http://localhost:5000'; // Change if your backend runs elsewhere

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);
//   const { mobileNumber } = useAvailabilityContext();
//   const [markAllReadClicked, setMarkAllReadClicked] = useState(false);
//   const socketRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get('/api/notifications/pharmacy/incoming', { params: { phoneNumber: mobileNumber } });
//         if (response.data && response.data.notifications) {
//           setNotifications(response.data.notifications);
//         }
//       } catch (error) {
//         console.error('Error fetching notifications:', error);
//       }
//     };
//     fetchNotifications();
//   }, [mobileNumber]);

//   // Real-time notification setup
//   useEffect(() => {
//     if (!mobileNumber) return;
//     // Connect to socket server
//     socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
//       transports: ['websocket'],
//       reconnection: true,
//     });
//     // Register pharmacy (join room)
//     socketRef.current.emit('register', mobileNumber);
//     // Listen for new notifications
//     socketRef.current.on('newPharmacyNotification', (notification) => {
//       setNotifications((prev) => [notification, ...prev]);
//     });
//     // Listen for booking status changes
//     socketRef.current.on('bookingStatusChanged', ({ notificationId, newStatus }) => {
//       if (newStatus === 'pending') {
//         // Remove the notification from the state
//         setNotifications((prev) => prev.filter((n) => n._id !== notificationId));
//       }
//     });
//     // Cleanup
//     return () => {
//       if (socketRef.current) {
//         socketRef.current.disconnect();
//       }
//     };
//   }, [mobileNumber]);

//   const handleClearAll = async () => {
//     try {
//       await axios.put('/api/alerts/clearAll', { phoneNumber: mobileNumber });
//       setNotifications([]);
//     } catch (error) {
//       console.error('Error clearing notifications:', error);
//     }
//   };

//   const handleMarkAllAsRead = async () => {
//     try {
//       await axios.put('/api/alerts', { phoneNumber: mobileNumber });
//       const updatedNotifications = notifications.map(notification => ({ ...notification, status: 'read' }));
//       setNotifications(updatedNotifications);
//       setMarkAllReadClicked(true);
//     } catch (error) {
//       console.error('Error marking all notifications as read:', error);
//     }
//   };

//   const handleNotificationClick = async (notification) => {
//     // Call API to update booking status
//     await axios.put('/api/notifications/update-status', {
//       notificationId: notification._id,
//       newStatus: 'pending' // Change status to pending
//     });
//     // Remove the notification from the state
//     setNotifications((prev) => prev.filter((n) => n._id !== notification._id));

//     if (notification.serviceType === 'Medicine') {
//       navigate('/incoming');
//     } else if (notification.serviceType === 'Vaccination') {
//       navigate('/incoming');
//     } else {
//       navigate('/incoming');
//     }
//   };

//   return (
//     <div className='w-full overflow-hidden'>
//       <Navbar />
//       <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
//         <div className='flex justify-between'>
//           <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] sm:w-[1077px] pb-[8px] mt-3'>
//             <Link to="/myprofile">
//               <img src={control} className='sm:hidden h-[18px] w-[20px] mt-1.5 mr-[10px] ml-[10px]' />
//               <img src={arr} alt="arr" className='hidden sm:block h-[24px] sm:w-[24px] mt-1 mr-[8px]' />
//             </Link>
//             Notifications
//           </div>
//           <div className='flex sm:hidden mr-3'>
//             <img src={Notificaion} className='w-[50px]' />
//             <img src={Phone} className='w-[50px]' />
//           </div>
//         </div>
//         <hr className='mt-[28px]' />
//         <div className='flex justify-end mt-[23px] mb-[23px] sm:space-x-10 space-x-6'>
//           <div
//             className='ml-7 font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] cursor-pointer'
//             onClick={handleMarkAllAsRead}
//             style={{ backgroundColor: markAllReadClicked ? 'yellow' : 'transparent' }}
//           >
//             Mark all as read
//           </div>
//           <div
//             className='font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] mr-[57px] cursor-pointer'
//             onClick={handleClearAll}
//           >
//             Clear all
//           </div>
//           <h1 className='font-sans text-center sm:text-[18px] text-[11px] font-[400] text-[#4B465C] mr-[33px] opacity-[50%]'>
//             1-{notifications.length} of {notifications.length}
//           </h1>
//           <img src={rl} alt="rl" />
//         </div>
//         <hr />
//         {notifications.map((notification, index) => {
//           const dateObj = new Date(notification.createdAt || notification.date);
//           const formattedDate = dateObj.toLocaleDateString('en-GB', {
//             day: '2-digit', month: 'long', year: 'numeric'
//           });
//           const formattedTime = dateObj.toLocaleTimeString('en-GB', {
//             hour: '2-digit', minute: '2-digit'
//           });

//           return (
//             <div key={index} className='md:flex md:justify-between px-[14px] py-[20px]' onClick={() => handleNotificationClick(notification)}>
//               <div className='flex max-w-[500px]'>
//                 <img src={av1} alt="" className='rounded-full ml-[20px]' />
//                 <div className='ml-5'>
//                   <h2 className='font-Montserrat text-[16px] font-medium text-[#000000] mt-1'>
//                     {notification.message}
//                   </h2>
//                   {notification.serviceType && (
//                     <div className='text-xs text-[#E40443] font-semibold mt-1'>
//                       Service Type: {notification.serviceType}
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className='flex gap-3'>
//                 <h3 className='ml-[75px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
//                   {formattedDate}
//                 </h3>
//                 <h4 className='ml-[3px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
//                   {formattedTime}
//                 </h4>
//               </div>
//             </div>
//           );
//         })}
//         <hr />
//       </main>
//     </div>
//   );
// };

// export default Notifications;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import arr from '../assets/arrow left.png';
import rl from '../assets/rlarrow.png';
import av1 from '../assets/Avatar (1).png';
import { useAvailabilityContext } from '../AvailabilityContext';
import control from '../assets/icons8-back-50.png';
import Phone from '../assets/phone.png';
import Notificaion from '../assets/not.png';
import { io as socketIOClient } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:5000'; // Change if your backend runs elsewhere

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const { mobileNumber } = useAvailabilityContext();
  const [markAllReadClicked, setMarkAllReadClicked] = useState(false);
  const socketRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications/pharmacy/incoming', { params: { phoneNumber: mobileNumber } });
        if (response.data && response.data.notifications) {
          setNotifications(response.data.notifications);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchNotifications();
  }, [mobileNumber]);

  // Real-time notification setup
  useEffect(() => {
    if (!mobileNumber) return;
    // Connect to socket server
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      transports: ['websocket'],
      reconnection: true,
    });
    // Register pharmacy (join room)
    socketRef.current.emit('register', mobileNumber);
    // Listen for new notifications
    socketRef.current.on('newPharmacyNotification', (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });
    // Listen for booking status changes
    socketRef.current.on('bookingStatusChanged', ({ notificationId, newStatus }) => {
      if (newStatus === 'pending') {
        // Remove the notification from the state
        setNotifications((prev) => prev.filter((n) => n._id !== notificationId));
      }
    });
    // Cleanup
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [mobileNumber]);

  const handleClearAll = async () => {
    try {
      await axios.put('/api/alerts/clearAll', { phoneNumber: mobileNumber });
      setNotifications([]);
    } catch (error) {
      console.error('Error clearing notifications:', error);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await axios.put('/api/alerts', { phoneNumber: mobileNumber });
      const updatedNotifications = notifications.map(notification => ({ ...notification, status: 'read' }));
      setNotifications(updatedNotifications);
      setMarkAllReadClicked(true);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  const handleNotificationClick = async (notification) => {
    try {
      console.log('=== NOTIFICATION CLICK DEBUG ===');
      console.log('Notification clicked:', notification);
      console.log('Current mobileNumber:', mobileNumber);
      console.log('Navigate function available:', typeof navigate);
      
      // Test navigation first to make sure it works
      console.log('Testing navigation to /incoming...');
      navigate('/incoming');
      console.log('Navigation call completed');
      
      // Then handle the API call
      console.log('Making API call to update notification...');
      const response = await axios.put('/api/notifications/update-status', {
        notificationId: notification._id,
        newStatus: 'pending' // Change status to pending
      });
      
      console.log('API response:', response.data);
      
      // Remove the notification from the state
      setNotifications((prev) => prev.filter((n) => n._id !== notification._id));
      console.log('Notification removed from state');
      
    } catch (error) {
      console.error('Error handling notification click:', error);
      console.log('API call failed, but navigation should have worked');
    }
  };

  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <main className='sm:mx-[120px] pt-[24px] pb-[48px]'>
        <div className='flex justify-between'>
          <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] sm:w-[1077px] pb-[8px] mt-3'>
            <Link to="/myprofile">
              <img src={control} className='sm:hidden h-[18px] w-[20px] mt-1.5 mr-[10px] ml-[10px]' />
              <img src={arr} alt="arr" className='hidden sm:block h-[24px] sm:w-[24px] mt-1 mr-[8px]' />
            </Link>
            Notifications
          </div>
          <div className='flex sm:hidden mr-3'>
            <img src={Notificaion} className='w-[50px]' />
            <img src={Phone} className='w-[50px]' />
          </div>
        </div>
        <hr className='mt-[28px]' />
        <div className='flex justify-end mt-[23px] mb-[23px] sm:space-x-10 space-x-6'>
          <div
            className='ml-7 font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] cursor-pointer'
            onClick={handleMarkAllAsRead}
            style={{ backgroundColor: markAllReadClicked ? 'yellow' : 'transparent' }}
          >
            Mark all as read
          </div>
          <div
            className='font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] mr-[57px] cursor-pointer'
            onClick={handleClearAll}
          >
            Clear all
          </div>
          <div
            className='font-sans text-center sm:text-[18px] text-[11px] font-[600] underline text-[#E40443] mr-[20px] cursor-pointer'
            onClick={() => {
              console.log('Test navigation button clicked');
              navigate('/incoming');
            }}
          >
            Test Navigation
          </div>
          <h1 className='font-sans text-center sm:text-[18px] text-[11px] font-[400] text-[#4B465C] mr-[33px] opacity-[50%]'>
            1-{notifications.length} of {notifications.length}
          </h1>
          <img src={rl} alt="rl" />
        </div>
        <hr />
        {notifications.map((notification, index) => {
          const dateObj = new Date(notification.createdAt || notification.date);
          const formattedDate = dateObj.toLocaleDateString('en-GB', {
            day: '2-digit', month: 'long', year: 'numeric'
          });
          const formattedTime = dateObj.toLocaleTimeString('en-GB', {
            hour: '2-digit', minute: '2-digit'
          });

          return (
            <div 
              key={index} 
              className='md:flex md:justify-between px-[14px] py-[20px] cursor-pointer hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-[#E40443]' 
              onClick={() => handleNotificationClick(notification)}
              title="Click to view in incoming bookings"
            >
              <div className='flex max-w-[500px]'>
                <img src={av1} alt="" className='rounded-full ml-[20px]' />
                <div className='ml-5'>
                  <h2 className='font-Montserrat text-[16px] font-medium text-[#000000] mt-1'>
                  {notification.message}
                </h2>
                  {notification.serviceType && (
                    <div className='text-xs text-[#E40443] font-semibold mt-1'>
                      Service Type: {notification.serviceType}
                    </div>
                  )}
                </div>
              </div>
              <div className='flex gap-3'>
                <h3 className='ml-[75px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
                  {formattedDate}
                </h3>
                <h4 className='ml-[3px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>
                  {formattedTime}
                </h4>
              </div>
            </div>
          );
        })}
        <hr />
      </main>
    </div>
  );
};

export default Notifications;
