import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const SessionContext = createContext();

export function useSession() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [sessionToken, setSessionToken] = useState(localStorage.getItem('sessionToken'));
  const [signupStep, setSignupStep] = useState(0);
  const [signupCompleted, setSignupCompleted] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(localStorage.getItem('mobileNumber'));
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Set axios default headers when session token changes
  useEffect(() => {
    if (sessionToken) {
      axios.defaults.headers.common['x-session-token'] = sessionToken;
      localStorage.setItem('sessionToken', sessionToken);
    } else {
      delete axios.defaults.headers.common['x-session-token'];
      localStorage.removeItem('sessionToken');
    }
  }, [sessionToken]);

  // Store mobile number in localStorage
  useEffect(() => {
    if (mobileNumber) {
      localStorage.setItem('mobileNumber', mobileNumber);
    } else {
      localStorage.removeItem('mobileNumber');
    }
  }, [mobileNumber]);

  // Mark as initialized after first render
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Create session after OTP verification
  const createSession = async (mobile, userId) => {
    try {
      setIsLoading(true);
      const response = await axios.post('/api/session/create', {
        mobile,
        userId
      });

      if (response.data.sessionToken) {
        setSessionToken(response.data.sessionToken);
        setSignupStep(response.data.signupStep || 0);
        setSignupCompleted(response.data.signupCompleted || false);
        setMobileNumber(mobile);
        return response.data;
      }
    } catch (error) {
      console.error('Error creating session:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Validate current session
  const validateSession = async () => {
    if (!sessionToken) return false;

    try {
      const response = await axios.get('/api/session/validate');
      if (response.data) {
        setSignupStep(response.data.signupStep || 0);
        setSignupCompleted(response.data.signupCompleted || false);
        setMobileNumber(response.data.mobile);
        return true;
      }
    } catch (error) {
      console.error('Session validation failed:', error);
      // Don't clear session on network errors, only on validation errors
      if (error.response && error.response.status === 401) {
        logout();
      }
      return false;
    }
    return false;
  };

  // Check if user has active session
  const checkActiveSession = async (mobile) => {
    try {
      const response = await axios.post('/api/session/check-active-session', {
        mobile
      });

      if (response.data.hasActiveSession) {
        setSessionToken(response.data.sessionToken);
        setSignupStep(response.data.signupStep || 0);
        setSignupCompleted(response.data.signupCompleted || false);
        setMobileNumber(mobile);
        return response.data;
      }
      return null;
    } catch (error) {
      console.error('Error checking active session:', error);
      return null;
    }
  };

  // Get signup progress for a mobile number
  const getSignupProgress = async (mobile) => {
    try {
      const response = await axios.post('/api/session/signup-progress', {
        mobile
      });
      return response.data.signupProgress;
    } catch (error) {
      console.error('Error getting signup progress:', error);
      return null;
    }
  };

  // Update session signup progress
  const updateSignupProgress = async (step, completed = false) => {
    if (!sessionToken) return;

    try {
      const response = await axios.put('/api/session/update-progress', {
        signupStep: step,
        signupCompleted: completed
      });

      if (response.data) {
        setSignupStep(response.data.signupStep);
        setSignupCompleted(response.data.signupCompleted);
      }
    } catch (error) {
      console.error('Error updating signup progress:', error);
    }
  };

  // Logout
  const logout = async () => {
    if (sessionToken) {
      try {
        await axios.post('/api/session/logout');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    }

    // Clear all session data
    setSessionToken(null);
    setSignupStep(0);
    setSignupCompleted(false);
    setMobileNumber(null);
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('mobileNumber');
    delete axios.defaults.headers.common['x-session-token'];
  };

  // Get the appropriate redirect path based on signup progress
  const getRedirectPath = () => {
    if (!mobileNumber) {
      return '/signup'; // No mobile number, start from signup
    }

    if (signupCompleted) {
      return '/dashboarddark'; // Signup completed, go to dashboard
    }

    // Determine which step to redirect to
    switch (signupStep) {
      case 0:
        return '/Kstep1'; // Basic details
      case 1:
        return '/Kstep2'; // Documents
      case 2:
        return '/Kstep3'; // Bank details
      case 3: // Login users are marked as step 3 (completed)
        return '/dashboarddark'; // Login users go directly to dashboard
      default:
        return '/Kstep1'; // Default to first step
    }
  };

  // Check if user should be redirected to complete signup
  const shouldRedirectToSignup = () => {
    return mobileNumber && !signupCompleted;
  };

  const value = {
    sessionToken,
    signupStep,
    signupCompleted,
    mobileNumber,
    isLoading,
    isInitialized,
    createSession,
    validateSession,
    checkActiveSession,
    getSignupProgress,
    updateSignupProgress,
    logout,
    getRedirectPath,
    shouldRedirectToSignup,
    setMobileNumber
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
} 