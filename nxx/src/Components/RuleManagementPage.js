import React from 'react';
import { useNavigate } from 'react-router-dom';

const RuleManagementPage = () => {
  // Dummy data for previously added rules
  const rules = ['Rule 1', 'Rule 2', 'Rule 3'];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-700 p-8 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4">Decision Hub - Rule Management</h2>
        {rules.map((rule, index) => (
          <div key={index} className="mb-4 flex items-center">
            <span className="mr-2 text-gray-100">{rule}</span>
            <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600">
              Edit
            </button>
          </div>
        ))}
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

export default RuleManagementPage;
