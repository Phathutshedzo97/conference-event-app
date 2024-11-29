import React from 'react';
import { Link } from 'react-router-dom';
import { useEvent } from '../context/EventContext';
import EventCard from '../components/EventCard';

const HomePage = () => {
  const { events, loading, error } = useEvent();

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-4 px-4 lg:px-0">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.length > 0 ?
          events.map((event) => (
            <EventCard event={event}/>
          ))
          :
          <div className="border p-4 rounded">
            <p>No Events yet.</p>
          </div>
            
        }
      </div>
    </div>
  );
};

export default HomePage;
