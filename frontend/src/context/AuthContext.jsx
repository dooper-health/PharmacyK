import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import firebaseOtpService from "../services/firebaseOtpService";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

  // Initialize reCAPTCHA
  const initializeRecaptcha = (containerId) => {
    try {
      // Validate containerId
      if (!containerId || typeof containerId !== 'string') {
        throw new Error('Invalid container ID provided');
      }

      // Check if container exists
      const container = document.getElementById(containerId);
      if (!container) {
        throw new Error(`Container with ID '${containerId}' not found`);
      }

      // Clear any existing reCAPTCHA
      if (recaptchaVerifier) {
        try {
          recaptchaVerifier.clear();
        } catch (clearError) {
          console.warn('Error clearing previous reCAPTCHA:', clearError);
        }
      }

      // Create new reCAPTCHA verifier
      const verifier = new RecaptchaVerifier(auth, containerId, {
        size: "normal",
        callback: () => {
          console.log("reCAPTCHA solved");
        },
        "expired-callback": () => {
          console.log("reCAPTCHA expired");
        },
      });

      setRecaptchaVerifier(verifier);
      return verifier;
    } catch (error) {
      console.error("Error initializing reCAPTCHA:", error);
      throw error;
    }
  };

  // Send OTP using Firebase OTP Service
  const sendOTP = async (phoneNumber, containerId) => {
    try {
      // Validate phone number
      if (!phoneNumber || typeof phoneNumber !== 'string') {
        throw new Error('Invalid phone number provided');
      }

      // Ensure phone number is in E.164 format
      const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
      
      // Validate E.164 format
      if (!/^\+[1-9]\d{1,14}$/.test(formattedNumber)) {
        throw new Error('Invalid phone number format. Please use international format (e.g., +1234567890)');
      }
      
      console.log('Sending OTP to:', formattedNumber);
      
      // Use the Firebase OTP Service
      const result = await firebaseOtpService.sendOtp(formattedNumber, containerId);
      
      if (result.success) {
      console.log('OTP sent successfully');
        return result.confirmationResult;
      } else {
        throw new Error(result.message || 'Failed to send OTP');
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      
      // Handle specific Firebase errors
      if (error.code === 'auth/invalid-phone-number') {
        throw new Error('Invalid phone number format. Please check and try again.');
      } else if (error.code === 'auth/invalid-app-credential') {
        throw new Error('reCAPTCHA verification failed. Please try again.');
      } else if (error.code === 'auth/too-many-requests') {
        throw new Error('Too many requests. Please wait a few minutes before trying again.');
      } else if (error.code === 'auth/quota-exceeded') {
        throw new Error('SMS quota exceeded. Please try again later.');
      } else if (error.message && error.message.includes('500')) {
        throw new Error('Firebase service temporarily unavailable. Please try again in a few minutes.');
      } else if (error.message && error.message.includes('timeout')) {
        throw new Error('Request timed out. Please check your internet connection and try again.');
      } else {
        throw new Error(error.message || 'Failed to send OTP. Please try again.');
      }
    }
  };

  // Verify OTP using Firebase OTP Service
  const verifyOTP = async (confirmationResult, otp) => {
    try {
      // Validate confirmationResult
      if (!confirmationResult || typeof confirmationResult.confirm !== 'function') {
        throw new Error('Invalid confirmation result provided');
      }

      // Validate OTP
      if (!otp || typeof otp !== 'string' || otp.length < 4) {
        throw new Error('Invalid OTP provided');
      }

      console.log('Verifying OTP...');
      
      // Use the confirmation result to verify OTP
      const result = await confirmationResult.confirm(otp);
      
      if (result.user) {
        console.log('OTP verified successfully');
      return result;
      } else {
        throw new Error('OTP verification failed');
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      
      // Handle specific Firebase errors
      if (error.code === 'auth/invalid-verification-code') {
        throw new Error('Invalid OTP code');
      } else if (error.code === 'auth/code-expired') {
        throw new Error('OTP code has expired. Please request a new one');
      } else if (error.code === 'auth/too-many-requests') {
        throw new Error('Too many attempts. Please try again later');
      } else {
        throw new Error(error.message || 'Failed to verify OTP');
      }
    }
  };

  // Email/Password Sign Up
  const signUpWithEmail = async (email, password) => {
    try {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
      
      console.log('Creating account with email:', email);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.error("Error signing up with email:", error);
      throw error;
    }
  };

  // Email/Password Sign In
  const signInWithEmail = async (email, password) => {
    try {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
      
      console.log('Signing in with email:', email);
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.error("Error signing in with email:", error);
      throw error;
    }
  };

  // Sign out
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser ? 'User logged in' : 'User logged out');
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    sendOTP,
    verifyOTP,
    logout,
    initializeRecaptcha,
    signUpWithEmail,
    signInWithEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}