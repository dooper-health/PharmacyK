import React, { useState } from 'react';
import { auth, signInWithPhoneNumber } from '../utils/firebase';
import { RecaptchaVerifier } from 'firebase/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAvailabilityContext } from '../AvailabilityContext';

const COUNTRY_CODES = [
  { code: '+91', label: 'India (+91)' },
  { code: '+1', label: 'USA (+1)' },
  // Add more as needed
];

const LoginWithOtp = () => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [step, setStep] = useState(1); // 1: enter phone, 2: enter OTP
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setMobileNumber } = useAvailabilityContext();

  // Setup invisible reCAPTCHA
  const setupRecaptcha = () => {
    if (!auth) return;
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      { size: 'invisible' },
      auth
    );
  };

  // Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (!phone || phone.length < 6) {
      setError('Enter a valid phone number');
      setLoading(false);
      return;
    }
    try {
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const fullPhone = countryCode + phone;
      console.log('Sending OTP to:', fullPhone, appVerifier, auth);
      const result = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmationResult(result);
      setStep(2);
    } catch (err) {
      console.error('OTP send error:', err);
      setError(err.message || 'Failed to send OTP');
    }
    setLoading(false);
  };

  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (!otp || otp.length !== 6) {
      setError('Enter a valid 6-digit OTP');
      setLoading(false);
      return;
    }
    try {
      const res = await confirmationResult.confirm(otp);
      // Remove country code for backend check
      const phoneNumber = res.user.phoneNumber.replace(countryCode, '');
      setMobileNumber(phoneNumber);
      // Call backend to check user existence and log in
      const response = await axios.post('/api/auth/login/checkuserexistance2', { phoneNumber: countryCode + phoneNumber });
      if (response.data && response.data.message === 'Login successful') {
        navigate('/success-login');
      } else {
        setError('User not found. Please sign up.');
      }
    } catch (err) {
      setError(err.message || 'Invalid OTP');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-center text-xl font-bold mb-4">Login with OTP</h2>
      {error && <div className="bg-red-100 text-red-700 p-2 mb-2 rounded">{error}</div>}
      {step === 1 && (
        <form onSubmit={handleSendOtp}>
          <div className="flex mb-2">
            <select
              value={countryCode}
              onChange={e => setCountryCode(e.target.value)}
              className="border rounded-l px-2 py-2 bg-gray-100"
              disabled={loading}
            >
              {COUNTRY_CODES.map(opt => (
                <option key={opt.code} value={opt.code}>{opt.label}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className="w-full px-4 py-2 border rounded-r"
              disabled={loading}
              style={{ borderLeft: 'none' }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded mb-2"
            disabled={loading}
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleVerifyOtp}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            className="w-full px-4 py-2 border mb-2 rounded"
            maxLength={6}
            disabled={loading}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded mb-2"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          <button
            type="button"
            className="w-full bg-gray-400 text-white py-2 rounded"
            onClick={() => setStep(1)}
            disabled={loading}
          >
            Back
          </button>
        </form>
      )}
      {/* Invisible Recaptcha */}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default LoginWithOtp; 