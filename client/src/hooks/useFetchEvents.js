import { useState, useEffect } from "react";
import axios from "axios";

const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`https://conference-event-app.onrender.com/api/events`);
        setEvents(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [events]);

  return { events, loading, error };
};

export default useFetchEvents;
