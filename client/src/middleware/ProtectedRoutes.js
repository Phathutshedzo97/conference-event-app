import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, role , route }) => {
  const { user, loading } = useAuthContext();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />; // Redirect to login if not authenticated

  if (role && user?.user?.role !== role) return <Navigate to="/" />; // Redirect if role mismatch
  
  if (route && user) return <Navigate to="/" />; // Redirect if already logged in mismatch

  return children;
};

export default ProtectedRoute;
