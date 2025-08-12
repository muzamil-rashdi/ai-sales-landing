import React from 'react';

const StyledLabel = ({ text }) => {
  return (
    <div className="inline-block bg-[#FE6037] text-white font-medium px-3 py-1 rounded-md text-sm mb-8 hover:bg-[#FE6055]  ">
      {text}
    </div>
  );
};

export default StyledLabel;