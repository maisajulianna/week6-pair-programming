import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = function (setIsAuthenticated) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    };
};

export default useLogin;

/* import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const useLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your login logic here
      const response = await login(formData.email, formData.password);
      const token = response.token; // Assuming the token is returned from the backend
      login(token); // Call the login function provided by useAuth to store the token
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default useLogin;
*/