import React from "react";

const PrimaryButton = ({ children, eventHandler }) => {
  return (
    <button
      onClick={eventHandler}
      className="btn lg:btn-md md:btn-md btn-sm text-white normal-case lg:px-8 md:px-8 px-5 rounded-md border-none"
      style={{ backgroundColor: "#0a3d62", border: "1px solid white" }}
    >
      {children} &nbsp;
      <lord-icon
        target="button"
        src="https://cdn.lordicon.com/zmkotitn.json"
        trigger="hover"
        colors="primary:#ffffff"
        style={{ width: "20px", height: "20px" }}
      ></lord-icon>
    </button>
  );
};

export default PrimaryButton;
