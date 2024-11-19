import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import animationData from "../assets/Contact.json";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ybpu4kl",
        "template_6wn3blp",
        form.current,
        "9wpbFms6oMvQie86I"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", { autoClose: 2000 });
          setFormData({ user_name: "", user_email: "", message: "" }); // Clear form after submission
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`, {
            autoClose: 2000,
          });
        }
      );
  };

  return (
    <section className="flex flex-col justify-center items-center bg-slate-900 md:w-[65%] md:ml-[370px] md:mt-3 rounded-3xl md:h-[90vh]">
      <h1 className="text-4xl w-[300px] font-bold text-white mb-8 text-center rounded-3xl">
        CONTACT ME
      </h1>
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-[500px]"
      />

      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-navy-800 p-6 rounded-lg">
        {/* Left Section - Animated Text */}
        <div className="flex-1 flex flex-col justify-center items-start animate-fadeIn md:ml-28">
          <h2 className="text-white text-4xl font-bold">Ankit Kumar</h2>
          <p className="text-white">Email: erankitkr011@gmail.com</p>
          <p className="text-white">Mobile: 9453699626</p>
          <p className="text-white">Address: Bihar Sharif, Bihar, 822114</p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 md:mr-20">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-2 rounded-lg"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-2 rounded-lg"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-2 rounded-lg"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="p-2 bg-emerald-400 text-white rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;

