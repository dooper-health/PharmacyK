import React, { createContext,useContext, useState, useEffect } from 'react';
export const AvailabilityContext = createContext();
export const AvailabilityProvider = ({ children }) => {
  const [isAvailable, setIsAvailable] = useState("Urgent");
  const [mobileNumber, setMobileNumber] = useState(() => {
    return localStorage.getItem('mobileNumber') || '';
  });
  useEffect(() => {
    localStorage.setItem('mobileNumber', mobileNumber);
  }, [mobileNumber]);
  return (
    <AvailabilityContext.Provider value={{ isAvailable, setIsAvailable, mobileNumber, setMobileNumber }}>
      {children}
    </AvailabilityContext.Provider>
  );
};
export function useAvailabilityContext() {
  return useContext(AvailabilityContext);
}
