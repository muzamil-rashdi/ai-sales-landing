import React from 'react';

const StyledLabel = ({ text }) => {
  return (
    <div className="inline-block bg-[#FE6037] text-white font-medium px-4 py-2 rounded-md text-sm mb-8">
      {text}
    </div>
  );
};

export default StyledLabel;