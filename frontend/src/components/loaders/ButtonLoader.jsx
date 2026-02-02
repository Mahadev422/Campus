import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const ButtonLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      <FaSpinner className="text-6xl text-blue-500 animate-spin" />
    </div>
  );
};

export default ButtonLoader;