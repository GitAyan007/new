import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddFilePage = () => {
    const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle logic for file upload (e.g., send to server)
    console.log('Uploaded file:', file.name);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="bg-gray-700 p-8 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4">Decision Hub - Add File</h2>
        <label className="block mb-4 relative">
          <span className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer">
            Choose File
          </span>
          <input
            type="file"
            onChange={handleFileUpload}
            className="hidden" 
            required
          />
          <span className="text-white ml-2">
            No file chosen
          </span>
        </label>
        
        
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          onClick={()=> navigate('/home')}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AddFilePage;
