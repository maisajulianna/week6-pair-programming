import React from 'react';
import useLogin from '../hooks/useLogin';

const LoginComponent = () => {
  const { formData, handleChange, handleSubmit } = useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginComponent;
