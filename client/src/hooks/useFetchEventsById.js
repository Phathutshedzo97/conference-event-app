import { useState, useEffect } from "react";
import axios from "axios";

const useFetchEventById = (eventId) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `https://conference-event-app.onrender.com/api/events/${eventId}`
        );
        setEvent(response.data);
      } catch (err) {
        setError("Failed to load event details");
      } finally {
        setLoading(false);
      }
    };

    if (eventId) fetchEvent();
  }, [eventId]);

  return { event, loading, error };
};

export default useFetchEventById;
