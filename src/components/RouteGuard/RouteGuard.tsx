import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Controller from '../../services/controller';
import './RouteGuard.css';

interface RouteGuardProps {
  login: boolean
  admin?: boolean
  children?: any
}

console.log('when am I run?')

// Children is a reserved word, and must be named as such
const RouteGuard: FC<RouteGuardProps> = ({ login, children }) => {
  console.log('here1')

  const instance = Controller.getInstance()
  instance.doThing('in route')

  // const { name } = React.useContext(userContext)
  // console.log(name)
  //  = 'a new value'
  // setName('asd')


  if (!login) {
    return <Navigate to="/" replace />
  }
  return children ? children : <Outlet />

};

export default RouteGuard;
