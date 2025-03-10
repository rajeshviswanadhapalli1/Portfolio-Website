import emailjs from "emailjs-com";
import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        "service_y8cei9w",    // Replace with your EmailJS Service ID
        "template_3qbbql7",   // Replace with your EmailJS Template ID
        formData,
        "gKMY46M19j2JuIg3x"     // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          
          toast.success('Email sent successfully!');
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.log(error,'error');
          alert("Failed to send email. Try again.");
        }
      );
  };
  // service_6auwv68
  // template_dwqk44v
  // gKMY46M19j2JuIg3x
  return(
    <section
      id="contact"
      className="h-screen bg-gray-800 text-white flex flex-col justify-center items-center px-8"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <div className="w-full max-w-2xl">
        <p className="text-lg mb-4">Email: rajesh6v6@gmail.com</p>
        <p className="text-lg mb-4">Phone: 9966305528</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name} onChange={handleChange}
            className="w-full mb-4 p-3 bg-gray-700 text-white rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email} onChange={handleChange}
            className="w-full mb-4 p-3 bg-gray-700 text-white rounded"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message} onChange={handleChange}
            className="w-full mb-4 p-3 bg-gray-700 text-white rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
};
  
  export default Contact;