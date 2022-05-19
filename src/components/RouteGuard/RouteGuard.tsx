import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import SessionStorageService from '../../services/sessionStorage';
import './RouteGuard.css';

interface RouteGuardProps {
  login: boolean
  admin?: boolean
  children?: any
}


// Children is a reserved word, and must be named as such
const RouteGuard: FC<RouteGuardProps> = ({ login, admin, children }) => {


  const sessionStorage = SessionStorageService.getInstance()
  const user = sessionStorage.getUser()
  if (!user) {

    return <Navigate to="/" replace />

  }
  return children ? children : <Outlet />




  // const { name } = React.useContext(userContext)
  // console.log(name)
  //  = 'a new value'
  // setName('asd')




  // if (!login) {
  //   return <Navigate to="/" replace />
  // }
  // return children ? children : <Outlet />

};

export default RouteGuard;
