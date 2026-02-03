import React from "react";

const Error = ({ error }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="rounded-xl bg-amber-100 px-6 py-4 text-amber-900 shadow-lg">
        {error}
      </div>
    </div>
  );
};

export default Error;
