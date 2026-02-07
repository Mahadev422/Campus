import { FiRefreshCw } from "react-icons/fi";
import { useState } from 'react';

const RefreshPage = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Refresh</h1>
        <p className="text-gray-600">Click the button below to reload</p>
      </div>
      
      <button
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="group relative inline-flex items-center gap-2 px-10 py-5 bg-linear-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <FiRefreshCw 
          size={24} 
          className={`transition-transform duration-500 ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180'}`} 
        />
        <span>Refresh Now</span>
      </button>
    </div>
  );
};

export default RefreshPage;