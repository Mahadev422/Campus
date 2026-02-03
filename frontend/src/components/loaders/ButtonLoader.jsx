import React from "react";
import { FaSpinner } from "react-icons/fa";

const ButtonLoader = () => {
  return (
    <div disabled className="flex items-center justify-center">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-blue-800 border-t-transparent" />
    </div>
  );
};

export default ButtonLoader;
