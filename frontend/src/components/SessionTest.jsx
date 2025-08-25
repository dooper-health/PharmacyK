import React from 'react';
import { useSession } from '../context/SessionContext.jsx';

const SessionTest = () => {
  const { 
    sessionToken, 
    mobileNumber, 
    signupStep, 
    signupCompleted, 
    getRedirectPath 
  } = useSession();

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Session Test Component</h2>
      <div className="space-y-2">
        <p><strong>Session Token:</strong> {sessionToken ? 'Present' : 'Not present'}</p>
        <p><strong>Mobile Number:</strong> {mobileNumber || 'Not set'}</p>
        <p><strong>Signup Step:</strong> {signupStep}</p>
        <p><strong>Signup Completed:</strong> {signupCompleted ? 'Yes' : 'No'}</p>
        <p><strong>Redirect Path:</strong> {getRedirectPath()}</p>
      </div>
    </div>
  );
};

export default SessionTest; 