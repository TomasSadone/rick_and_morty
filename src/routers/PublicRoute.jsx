import React from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ access, children }) => {
  return !access ? children : <Navigate to='/home' />;
};
