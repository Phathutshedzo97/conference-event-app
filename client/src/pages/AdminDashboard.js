import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEvent } from "../context/EventContext";
import EventCard from "../components/EventCard";
import useEventActions from "../hooks/useEventActions";

const AdminDashboard = () => {
  const { events, loading, error } = useEvent();
  const { deleteEvent } = useEventActions();
  const [success, setSuccess] = useState("");

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      setSuccess("Event deleted successfully!");
      setTimeout(() => setSuccess(''), 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-4 px-4 lg:px-0">
      <div className="flex gap-3 justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link to="/dashboard/events/add">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Event
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.length > 0 ?
          events.map((event) => (
            <EventCard event={event} hasEdit={true} handleDelete={handleDelete} />
          ))
          :
          <div className="border p-4 rounded">
            <p>No Events yet.</p>
          </div>
        }
      </div>
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  );
};

export default AdminDashboard;
