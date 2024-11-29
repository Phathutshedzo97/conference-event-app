import axios from "axios";

const useEventActions = () => {
  const addEvent = async (eventData) => {
    try {
      const token = localStorage.getItem("user") 
        ? JSON.parse(localStorage.getItem("user")).token 
        : null;
      
      const response = await axios.post(
        `http://localhost:5000/api/events`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in the Authorization header
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to add event");
    }
  };

  const updateEvent = async (eventId, eventData) => {
    try {
      const token = localStorage.getItem("user") 
        ? JSON.parse(localStorage.getItem("user")).token 
        : null;
      
      const response = await axios.put(
        `http://localhost:5000/api/events/${eventId}`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in the Authorization header
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to update event");
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      const token = localStorage.getItem("user") 
        ? JSON.parse(localStorage.getItem("user")).token 
        : null;
      
      const response = await axios.delete(
        `http://localhost:5000/api/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in the Authorization header
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Failed to delete event");
    }
  };

  return { addEvent, updateEvent, deleteEvent };
};

export default useEventActions;
