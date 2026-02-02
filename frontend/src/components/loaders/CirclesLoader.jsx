import React from 'react';
import { FaCircle } from 'react-icons/fa';

const CirclesLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative w-20 h-20">
        <FaCircle className="absolute top-0 left-1/2 transform -translate-x-1/2 text-blue-500 animate-orbit" />
        <FaCircle className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-400 animate-orbit" style={{ animationDelay: '0.2s' }} />
        <FaCircle className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-blue-300 animate-orbit" style={{ animationDelay: '0.4s' }} />
        <FaCircle className="absolute top-1/2 left-0 transform -translate-y-1/2 text-blue-200 animate-orbit" style={{ animationDelay: '0.6s' }} />
      </div>
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CirclesLoader;