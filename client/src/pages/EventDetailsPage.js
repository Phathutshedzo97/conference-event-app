// frontend/src/pages/EventDetailsPage.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchEventById from "../hooks/useFetchEventsById";

const EventDetailsPage = () => {
  const { id } = useParams();
  const { event, loading, error } = useFetchEventById(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-4 px-4 lg:px-0">
      <Link to={`/`} className="text-sm">
        back
      </Link>
      <h1 className="font-bold text-2xl my-4 ">Event Details</h1>
      <div key={event._id} className="border p-4 rounded">
        <div className="flex flex-col gap-3">
          <p className="text-xl font-medium">
            Title: <strong>{event.name}</strong>
          </p>
          <p className="text-xl font-medium">
            Date: <strong>{event.date.toLocaleString()}</strong>
          </p>
          <p className="text-xl font-medium">
            Location: <strong>{event.location}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
