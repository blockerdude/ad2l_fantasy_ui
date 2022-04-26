import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import './RouteGuard.css';

interface RouteGuardProps {
  login: boolean
  admin?: boolean
  children?: any
}

// Children is a reserved word, and must be named as such
const RouteGuard: FC<RouteGuardProps> = ({ login, children }) => {


  if (!login) {
    return <Navigate to="/" replace />
  }
  return children ? children : <Outlet />

};

export default RouteGuard;
