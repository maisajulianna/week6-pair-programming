import React from 'react';
import useSignup from './useSignup1';
import useField from './pair2/frontend/src/hooks/useField';

const SignupComponent = () => {
  const { formData, handleChange, handleSubmit } = useSignup();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
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
      <input
        type="password2"
        name="password2"
        value={formData.password}
        onChange={handleChange}
        placeholder="Confirm Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupComponent;
