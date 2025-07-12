import React, { useState } from 'react';

const Prescription = ({ prescription, onClose }) => {
  const { type, source } = prescription;
  const [errorLoading, setErrorLoading] = useState(false);

  const handleImageError = () => {
    setErrorLoading(true);
  };

  const renderContent = () => {
    if (type === 'image') {
      if (errorLoading) {
        return <p className="text-red-500">Failed to load prescription image.</p>;
      }
      return <img src={source} alt="Prescription" className="max-w-full max-h-full" onError={handleImageError} />;
    } else if (type === 'pdf') {
      return <embed src={source} type="application/pdf" width="100%" height="500px" />;
    }
    return null;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-[90%] max-h-[90%] overflow-auto">
      <button onClick={onClose} className="float-right -mt-7  bg-[#E40443] text-white px-4 py-2 rounded-md hover:bg-red-600">Close</button>
        <h2 className="text-lg font-semibold mb-4">Prescription</h2>
        {renderContent()}
        
      </div>
    </div>
  );
};

export default Prescription;