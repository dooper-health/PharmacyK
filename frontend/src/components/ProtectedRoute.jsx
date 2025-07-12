import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAvailabilityContext } from '../AvailabilityContext';

const ProtectedRoute = ({ children }) => {
  const { mobileNumber } = useAvailabilityContext();

  if (!mobileNumber) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
