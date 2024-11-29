import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const useAuth = () => {
  const { user, login, logout, loading } = useAuthContext();

  const loginWithAPI = async ({ email, password }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        { email, password }
      );
      const userData = response.data;
      login(userData); // Use login from AuthContext to set user
    } catch (error) {
      throw new Error(error.response?.data?.error || "Invalid credentials");
    }
  };

  const signup = async ({ name, email, password }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/signup`,
        { name, email, password }
      );
      return response.data; // Return success message or data
    } catch (error) {
      console.log(error.response?.data?.error);
      throw new Error(
        error.response?.data?.error || "Failed to create account"
      );
    }
  };

  return { user, login: loginWithAPI, signup, logout, loading };
};

export default useAuth;
