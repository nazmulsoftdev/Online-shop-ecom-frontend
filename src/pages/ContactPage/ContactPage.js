import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <React.Fragment>
      <div className="mt-14">
        <section className="flex lg:flex-row lg:gap-14 gap-6 flex-col">
          <div className="lg:w-[35%]" data-aos="fade-right">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnOnOVPzbsemkgOVe8aJuDXqhO7Nn2_PBfw&usqp=CAU"
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
          <div className="lg:w-[65%]" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full mb-2"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full mb-2"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="textarea textarea-bordered w-full h-60"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="btn bg-[#0a3d62] normal-case text-white mt-8 lg:mx-0 mx-auto flex items-center gap-2">
                Send Message
                <lord-icon
                  target="button"
                  src="https://cdn.lordicon.com/zmkotitn.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  style={{ width: "20px", height: "20px" }}
                ></lord-icon>
              </button>
            </form>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
