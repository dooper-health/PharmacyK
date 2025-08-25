import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSession } from '../context/SessionContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { sessionToken, mobileNumber, signupCompleted, validateSession, getRedirectPath, isInitialized } = useSession();
  const [isValidating, setIsValidating] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        if (sessionToken) {
          const valid = await validateSession();
          setIsValid(valid);
        } else {
          setIsValid(false);
        }
      } catch (error) {
        console.error('Session validation error:', error);
        setIsValid(false);
      } finally {
        setIsValidating(false);
      }
    };

    if (isInitialized) {
      checkSession();
    }
  }, [sessionToken, validateSession, isInitialized]);

  if (!isInitialized || isValidating) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isValid) {
    return <Navigate to="/" replace />;
  }

  // If user is not signed up completely, redirect to appropriate signup step
  if (mobileNumber && !signupCompleted) {
    const redirectPath = getRedirectPath();
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
