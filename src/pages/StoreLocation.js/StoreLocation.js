import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";

const StoreLocation = () => {
  useTitle("Stores");
  const [selectedTab, setSelectedTab] = useState(1);
  const storesData = [
    {
      name: "City Center",
      location: " Dhaka, Bangladesh",
      shop: "Fourth Floor, Shop No: 52 B",
      img: "https://4.imimg.com/data4/MW/VK/MY-2937612/clothes-display-rack.jpg",
      mapImg:
        "https://4.bp.blogspot.com/-S1vuSidYX2Q/Tsvn7jQq1AI/AAAAAAAAAYM/tYqy69sraRI/w1200-h630-p-k-no-nu/savar.GIF",
      phone: "+8801935615775",
      duration: "9.00pm - 10.00pm",
      onDay: "Monday - Saturday",
    },
    {
      name: "Mirpur 10",
      location: " Dhaka, Bangladesh",
      shop: "Third Floor, Shop No: 86/2 A",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/5/310544946/NQ/KY/ZV/153876537/jeans-display-rack-500x500.jpg",
      mapImg:
        "https://4.bp.blogspot.com/-S1vuSidYX2Q/Tsvn7jQq1AI/AAAAAAAAAYM/tYqy69sraRI/w1200-h630-p-k-no-nu/savar.GIF",
      phone: "+8801935615775",
      duration: "9.00pm - 10.00pm",
      onDay: "Monday - Saturday",
    },
  ];
  return (
    <section className="flex lg:gap-16 gap-8 lg:flex-row flex-col">
      <div className="lg:w-1/3">
        {/* SIDE MENU */}
        <div className="sticky top-20 bg-white py-8 px-4 rounded-xl shadow-lg">
          <h1 className="text-xl font-bold mb-5 pl-8">Shop Location</h1>
          <div className="flex lg:flex-col lg:gap-10 lg:flex-no-wrap flex-row flex-wrap gap-1 text-[#bbb]">
            {storesData?.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedTab(index + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`cursor-pointer ${
                  selectedTab === index + 1 && "text-colorGreen"
                }`}
              >
                <span className="flex lg:items-start md:items-start items-center gap-1">
                  <lord-icon
                    target="span"
                    src="https://cdn.lordicon.com/fihkmkwt.json"
                    trigger="hover"
                    colors={
                      selectedTab === index + 1
                        ? "#0a3d62,secondary:#16c79e"
                        : "#0a3d62"
                    }
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                  <div>
                    <h2 className="font-bold lg:text-md md:tex-md text-sm">
                      {item.name}
                    </h2>
                    <p className="lg:text-md md:text-sm text-xs lg:block md:block hidden">
                      {item.location}
                    </p>
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-2/3">
        {storesData?.map(
          (item, index) =>
            selectedTab === index + 1 && (
              <div key={index}>
                <div data-aos="fade-left">
                  <img
                    src={item.img}
                    alt=""
                    className="h-[300px] w-[500px] object-cover"
                  />
                  <h1 className="mt-6 text-3xl font-bold">{item.name}</h1>
                  <p className="mt-2">{item.location}</p>
                </div>
                <div data-aos="fade-up">
                  <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-2">
                    <div className="p-5 rounded-lg bg-white hover:shadow-lg flex flex-col gap-2">
                      <lord-icon
                        target="div"
                        src="https://cdn.lordicon.com/slduhdil.json"
                        trigger="hover"
                        colors="#0a3d62"
                        style={{ width: "35px", height: "35px" }}
                      ></lord-icon>
                      {item.shop}
                    </div>
                    <div className="p-5 rounded-lg bg-white hover:shadow-lg flex flex-col gap-2">
                      <lord-icon
                        target="div"
                        src="https://cdn.lordicon.com/tftaqjwp.json"
                        trigger="hover"
                        colors="#0a3d62"
                        style={{ width: "35px", height: "35px" }}
                      ></lord-icon>
                      {item.phone}
                    </div>
                    <div className="p-5 rounded-lg bg-white hover:shadow-lg flex flex-col gap-2">
                      <lord-icon
                        target="div"
                        src="https://cdn.lordicon.com/qmuwmmnl.json"
                        trigger="hover"
                        colors="#0a3d62"
                        style={{ width: "35px", height: "35px" }}
                      ></lord-icon>
                      {item.duration}
                    </div>
                    <div className="p-5 rounded-lg bg-white hover:shadow-lg flex flex-col gap-2">
                      <lord-icon
                        target="div"
                        src="https://cdn.lordicon.com/qtxqkhzr.json"
                        trigger="hover"
                        colors="#0a3d62"
                        style={{ width: "35px", height: "35px" }}
                      ></lord-icon>
                      {item.onDay}
                    </div>
                  </div>

                  <div className="mt-12">
                    <iframe
                      title="google map location"
                      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58387.473505415546!2d90.24050330764601!3d23.84642361222867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scity%20center!5e0!3m2!1sen!2sbd!4v1706544857737!5m2!1sen!2sbd"
                      width="100%"
                      height="450"
                      className="rounded-md"
                      allowFullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default StoreLocation;
