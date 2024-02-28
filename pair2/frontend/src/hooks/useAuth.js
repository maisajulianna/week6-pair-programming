import { useState } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  const login = (token) => {
    sessionStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    setToken(null);
  };

  const getToken = () => {
    return sessionStorage.getItem('token');
  };

  return { token, login, logout, getToken };
};

export default useAuth;
