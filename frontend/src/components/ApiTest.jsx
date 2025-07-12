import React, { useState } from 'react';
import axios from 'axios';

const ApiTest = () => {
  const [testResult, setTestResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testApiConnection = async () => {
    setLoading(true);
    setTestResult('Testing...');
    
    try {
      // Test the root endpoint
      const response = await axios.get('/api/test-db');
      setTestResult(`✅ API Connection Successful: ${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      console.error('API Test Error:', error);
      setTestResult(`❌ API Connection Failed: ${error.message}`);
      
      if (error.response) {
        setTestResult(`❌ Server Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        setTestResult(`❌ Network Error: No response received. Check if backend is running on port 5000`);
      } else {
        setTestResult(`❌ Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const testSignupEndpoint = async () => {
    setLoading(true);
    setTestResult('Testing signup endpoint...');
    
    try {
      // Test the signup endpoint with minimal data
      const response = await axios.post('/api/auth/signup/checkuserexistance', {
        phoneNumber: '1234567890'
      });
      setTestResult(`✅ Signup Endpoint Test: ${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      console.error('Signup Test Error:', error);
      setTestResult(`❌ Signup Endpoint Failed: ${error.message}`);
      
      if (error.response) {
        setTestResult(`❌ Server Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        setTestResult(`❌ Network Error: No response received`);
      } else {
        setTestResult(`❌ Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">API Connection Test</h2>
      
      <div className="space-y-4">
        <button
          onClick={testApiConnection}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
        >
          {loading ? 'Testing...' : 'Test API Connection'}
        </button>
        
        <button
          onClick={testSignupEndpoint}
          disabled={loading}
          className="w-full bg-green-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
        >
          {loading ? 'Testing...' : 'Test Signup Endpoint'}
        </button>
        
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Test Result:</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto max-h-40">
            {testResult}
          </pre>
        </div>
        
        <div className="text-sm text-gray-600">
          <p><strong>Expected:</strong></p>
          <ul className="list-disc list-inside">
            <li>Backend running on port 5000</li>
            <li>Proxy configured in vite.config.js</li>
            <li>API endpoints accessible via /api/*</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApiTest; 