import React, { createContext, useContext } from "react";
import useFetchEvents from "../hooks/useFetchEvents";

const EventContext = createContext();

export const useEvent = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const { events, loading, error } = useFetchEvents();
  return (
    <EventContext.Provider value={{ events, loading, error }}>
      {children}
    </EventContext.Provider>
  );
};
