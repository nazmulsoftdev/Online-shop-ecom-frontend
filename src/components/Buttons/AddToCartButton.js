import React from "react";

const AddToCartButton = ({ handleAddToCart }) => {
  return (
    <button
      onClick={handleAddToCart}
      className="btn bg-[#0a3d62] hover:bg-[#3c6382] hover:text-white rounded-md normal-case text-white btn-wide"
    >
      <lord-icon
        target="button"
        src="https://cdn.lordicon.com/hyhnpiza.json"
        trigger="hover"
        colors="primary:#ffffff"
        style={{ width: "25px", height: "25px" }}
      ></lord-icon>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
