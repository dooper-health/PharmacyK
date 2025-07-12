import React, { useState } from 'react';
import { useAvailabilityContext } from '../AvailabilityContext';

const MobileNumberDebug = () => {
  const { mobileNumber } = useAvailabilityContext();
  const [testNumber, setTestNumber] = useState('');
  const [normalizedNumber, setNormalizedNumber] = useState('');

  // Function to normalize mobile number format (same as backend)
  const normalizeMobileNumber = (mobileNumber) => {
    if (!mobileNumber) return null;
    
    // Convert to string and trim
    let mobile = String(mobileNumber).trim();
    
    // Remove any non-digit characters except +
    let cleaned = mobile.replace(/[^\d+]/g, '');
    
    // If it starts with +91, keep it as is
    if (cleaned.startsWith('+91')) {
      return cleaned;
    }
    // If it starts with 91 (without +), add +
    else if (cleaned.startsWith('91')) {
      return '+' + cleaned;
    }
    // If it's a 10-digit number, add +91
    else if (cleaned.length === 10) {
      return '+91' + cleaned;
    }
    // Otherwise, keep as is
    else {
      return cleaned;
    }
  };

  const handleTestNormalization = () => {
    const normalized = normalizeMobileNumber(testNumber);
    setNormalizedNumber(normalized);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg max-w-md mx-auto mt-4">
      <h3 className="text-lg font-bold mb-4">Mobile Number Debug</h3>
      
      <div className="mb-4">
        <p><strong>Context Mobile Number:</strong> {mobileNumber || 'Not set'}</p>
        <p><strong>LocalStorage Mobile Number:</strong> {localStorage.getItem('mobileNumber') || 'Not set'}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Test Mobile Number:</label>
        <input
          type="text"
          value={testNumber}
          onChange={(e) => setTestNumber(e.target.value)}
          placeholder="Enter mobile number to test"
          className="w-full px-3 py-2 border rounded"
        />
        <button
          onClick={handleTestNormalization}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Test Normalization
        </button>
      </div>

      {normalizedNumber && (
        <div className="mb-4">
          <p><strong>Normalized Result:</strong> {normalizedNumber}</p>
        </div>
      )}

      <div className="text-sm text-gray-600">
        <p><strong>Test Cases:</strong></p>
        <ul className="list-disc list-inside">
          <li>+919876543210 → +919876543210</li>
          <li>919876543210 → +919876543210</li>
          <li>9876543210 → +919876543210</li>
          <li>+91 98765 43210 → +919876543210</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNumberDebug; 