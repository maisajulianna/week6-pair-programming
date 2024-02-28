import { useState } from 'react';

const useSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your signup logic here using formData
    console.log('Signing up with:', formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default useSignup;
