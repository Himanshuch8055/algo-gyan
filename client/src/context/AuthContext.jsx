import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // const checkAuth = async () => {
  //   //   try {
  //   //     const response = await api.get('/auth/check-auth');
  //   //     if (response.data.isAuthenticated) {
  //   //       setUser(response.data.user);
  //   //     }
  //   //   } catch (error) {
  //   //     console.error('Auth check failed:', error);
  //   //   } finally {
  //   //     setLoading(false);
  //   //   }
  //   // };

  //   checkAuth();
  // }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      throw error.response?.data?.message || 'Login failed';
    }
  };

  const signup = async (fullName, email, password) => {
    try {
      console.log("hello bhaiya  ");
      console.log("hello bhaiya  ");
      console.log("hello bhaiya  ");
      console.log("hello bhaiya  ");
      console.log("hello bhaiya  ");
      console.log("hello bhaiya  ");
      console.log("hello bhaiya  ");
      const response = await api.post('/auth/signup', { fullName, email, password });
      console.log("teri me ki chewt");
      console.log("teri me ki chewt");
      console.log("teri me ki chewt");
      console.log("teri me ki chewt");
      console.log("teri me ki chewt");
      console.log("teri me ki chewt");
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      throw error.response?.data?.message || 'Signup failed';
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);