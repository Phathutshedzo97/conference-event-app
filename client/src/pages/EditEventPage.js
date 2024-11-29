import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useEventActions from "../hooks/useEventActions";
import axios from "axios";

const EditEventPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { updateEvent } = useEventActions();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/events/${id}`
        );
        setForm(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch event details");
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(id, form);
      setSuccess("Event updated successfully!");
      setTimeout(() => navigate('/dashboard'), 2000); // Redirect to dashboard after 2 seconds

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto py-4 px-4 lg:px-0">
      <div className='flex flex-col gap-4 bg-blue-500/30 my-10 rounded-lg py-10 px-5 md:p-10'>
        <h1 className="text-2xl font-bold text-center">Edit Event</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={form.name}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Event
          </button>
        </form>
        {success && <p className="text-green-500 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default EditEventPage;
