import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SignUpPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      setSuccess("Account created successfully!");
      setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto py-4 px-4 lg:px-0">
      <div className="flex flex-col gap-4 bg-blue-500/30 my-10 rounded-lg py-10 px-5 md:p-10">
        <h1 className="text-2xl font-bold  text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Sign Up
          </button>
        </form>
        <div className="flex gap-3 flex-col ">
          <p>
            Already have an account?
            <span>
              <Link to="/login" className="text-black ml-2">
                Signin
              </Link>
            </span>
          </p>
        </div>
        {success && <p className="text-green-500 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
