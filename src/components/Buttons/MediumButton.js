import React from "react";

const MediumButton = ({ children, btnSpecially }) => {
  return (
    <button
      className={`px-4 py-[6px] rounded-md hover:bg-[#3c6382] transition duration-300 bg-[#0a3d62] text-white`}
    >
      {children}
    </button>
  );
};

export default MediumButton;
