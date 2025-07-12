import React, { useState } from 'react';
import EnhancedFirebaseOtpCard from './EnhancedFirebaseOtpCard';

const FirebaseOtpExample = () => {
  const [showOtpCard, setShowOtpCard] = useState(false);
  const [bookingData, setBookingData] = useState({
    bookingId: '',
    phoneNumber: '',
    serviceType: 'medicine'
  });

  const handleStartOtpVerification = () => {
    if (!bookingData.bookingId || !bookingData.phoneNumber) {
      alert('Please enter booking ID and phone number');
      return;
    }
    setShowOtpCard(true);
  };

  const handleOtpSuccess = (user) => {
    console.log('OTP verification successful:', user);
    setShowOtpCard(false);
    // Handle success - maybe redirect or show success message
    alert('OTP verified successfully! Service completed.');
  };

  const handleOtpError = (error) => {
    console.error('OTP verification failed:', error);
    // Handle error - maybe show error message
    alert('OTP verification failed. Please try again.');
  };

  const handleCloseOtpCard = () => {
    setShowOtpCard(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Firebase OTP Verification Example
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Booking ID
          </label>
          <input
            type="text"
            value={bookingData.bookingId}
            onChange={(e) => setBookingData({
              ...bookingData,
              bookingId: e.target.value
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E40443]"
            placeholder="Enter booking ID"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={bookingData.phoneNumber}
            onChange={(e) => setBookingData({
              ...bookingData,
              phoneNumber: e.target.value
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E40443]"
            placeholder="+919876543210"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <select
            value={bookingData.serviceType}
            onChange={(e) => setBookingData({
              ...bookingData,
              serviceType: e.target.value
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E40443]"
          >
            <option value="medicine">Medicine</option>
            <option value="vaccine">Vaccine</option>
          </select>
        </div>

        <button
          onClick={handleStartOtpVerification}
          className="w-full bg-[#E40443] text-white py-2 px-4 rounded-md hover:bg-[#c4043a] transition-colors"
        >
          Start OTP Verification
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h3 className="font-medium text-gray-800 mb-2">Instructions:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Enter a valid booking ID</li>
          <li>• Enter phone number with country code (+91 for India)</li>
          <li>• Select service type (medicine or vaccine)</li>
          <li>• Click "Start OTP Verification"</li>
          <li>• Complete the reCAPTCHA verification</li>
          <li>• Enter the 6-digit OTP sent to your phone</li>
        </ul>
      </div>

      {/* Firebase OTP Card */}
      {showOtpCard && (
        <EnhancedFirebaseOtpCard
          bookingId={bookingData.bookingId}
          phoneNumber={bookingData.phoneNumber}
          serviceType={bookingData.serviceType}
          onSuccess={handleOtpSuccess}
          onError={handleOtpError}
        />
      )}
    </div>
  );
};

export default FirebaseOtpExample; 