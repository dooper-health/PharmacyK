import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSession } from '../context/SessionContext.jsx';

const SessionInitializer = ({ children }) => {
  const { 
    sessionToken, 
    mobileNumber, 
    signupCompleted, 
    validateSession, 
    getRedirectPath 
  } = useSession();
  const navigate = useNavigate();
  const location = useLocation();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeSession = async () => {
      try {
        // If we have a session token, validate it
        if (sessionToken) {
          const isValid = await validateSession();
          if (!isValid) {
            // Invalid session, redirect to login
            navigate('/login');
            setIsInitialized(true);
            return;
          }
        }

        // Check if user should be redirected to complete signup
        if (mobileNumber && !signupCompleted) {
          const currentPath = location.pathname;
          const redirectPath = getRedirectPath();
          
          // Only redirect if not already on the correct path
          if (currentPath !== redirectPath && 
              !currentPath.startsWith('/Kstep') && 
              currentPath !== '/signup' && 
              currentPath !== '/success-signup' &&
              currentPath !== '/profileunderreview') {
            navigate(redirectPath);
          }
        }

        // If user is completed and on signup pages, redirect to dashboard
        if (mobileNumber && signupCompleted) {
          const currentPath = location.pathname;
          if (currentPath.startsWith('/Kstep') || 
              currentPath === '/signup' || 
              currentPath === '/success-signup') {
            navigate('/dashboarddark');
          }
        }

        setIsInitialized(true);
      } catch (error) {
        console.error('Error initializing session:', error);
        setIsInitialized(true);
      }
    };

    initializeSession();
  }, [sessionToken, mobileNumber, signupCompleted, validateSession, getRedirectPath, navigate, location.pathname]);

  if (!isInitialized) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

  return children;
};

export default SessionInitializer; 