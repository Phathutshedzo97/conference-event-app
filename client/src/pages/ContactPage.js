import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSuccess("Your message submitted successfully!");
      console.log(form);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto py-4 px-4 lg:px-0">
      <div className="flex flex-col gap-4 bg-blue-500/30 my-10 rounded-lg py-10 px-5 md:p-10">
        <h1 className="text-2xl font-bold  text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <textarea
            name="message"
            placeholder="Enter Message"
            value={form.message}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
        {success && <p className="text-green-500 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Contact;
