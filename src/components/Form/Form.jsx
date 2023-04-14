import React, { useState } from 'react';
import validation from '../../helpers/validation';

export const Form = ({ login }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation(
        { ...userData, [event.target.name]: event.target.value },
        event
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit} action=''>
      <label htmlFor='email'></label>
      <input
        onChange={handleChange}
        value={userData.email}
        type='text'
        name='email'
      />
      {errors.email && <span>{errors.email}</span>}

      <label htmlFor="'password'"></label>
      <input
        onChange={handleChange}
        type='text'
        name='password'
        value={userData.password}
      />
      {errors.password && <span>{errors.password}</span>}

      <button>Submit</button>
    </form>
  );
};
