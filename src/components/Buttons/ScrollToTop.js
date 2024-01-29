import React, { useState } from "react";
import { FaArrowCircleUp as ArrowUpIcon } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);
  return (
    <div>
      {isVisible && (
        <button
          onClick={handleTop}
          className={`fixed bottom-10 right-10 lg:block hidden`}
        >
          <ArrowUpIcon size={35} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
