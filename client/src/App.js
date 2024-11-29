import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { EventProvider } from "./context/EventContext";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminDashboard from "./pages/AdminDashboard";
import AddEventPage from "./pages/AddEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import ProtectedRoute from "./middleware/ProtectedRoutes";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Contact from "./pages/ContactPage";

function App() {
  return (
      <AuthProvider>
        <EventProvider>
          <Navbar/>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={
                  <LoginPage />
              } />
              <Route path="/signup" element={
                  <SignUpPage />
              } />
              <Route path="/contact" element={
                  <Contact />
              } />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute role="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/events/add"
                element={
                  <ProtectedRoute role="admin">
                    <AddEventPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/events/edit/:id"
                element={
                  <ProtectedRoute role="admin">
                    <EditEventPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/events/:id"
                element={
                  <ProtectedRoute>
                    <EventDetailsPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Router>
          <Footer />
        </EventProvider>
      </AuthProvider>
  );
}

export default App;
