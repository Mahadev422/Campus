import React from 'react';
import { FaSpinner, FaCircleNotch } from 'react-icons/fa';

const WebLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <FaSpinner className="text-5xl text-blue-500 animate-spin" />
          <FaCircleNotch className="text-3xl text-blue-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-reverse" />
        </div>
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default WebLoader;