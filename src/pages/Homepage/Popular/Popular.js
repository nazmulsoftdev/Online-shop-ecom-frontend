import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/textstyles.css";
import ProductCard from "../../../components/Cards/ProductCard";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState(null);
  useEffect(() => {
    fetch("https://online-shop-ecom-server.onrender.com/products/popular")
      .then((res) => res.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <section>
      <div className="mb-8">
        <div className="flex items-center">
          <lord-icon
            src="https://cdn.lordicon.com/xhbsnkyp.json"
            trigger="loop"
            colors="outline:#545454,primary:#c7166f,secondary:#fad1e6"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h2 className="font-bold text-2xl textGradient">Popular Items</h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {popularProducts?.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
      <div className="flex items-center justify-end mt-8">
        <Link to="/products" className="cursor-pointer flex items-center gap-2">
          <h2 className="text-[#0081B4] font-bold text-md hover:text-[#344D67]">
            See More
          </h2>
          <lord-icon
            target="a"
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="hover"
            colors="primary:#0081B4"
            style={{ width: "18px", height: "18px" }}
          ></lord-icon>
        </Link>
      </div>
    </section>
  );
};

export default Popular;
