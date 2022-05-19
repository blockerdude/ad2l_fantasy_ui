import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getUser, conference, getOIDCRedirectURL, logoutUser } from '../../services/authnService';
import SessionStorageService from '../../services/sessionStorage';
import './Header.css';

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {

  const [confs, setConfs] = useState([] as conference[]);

  const sessionStorage = SessionStorageService.getInstance()

  function Test() {

    if (confs.length === 0) {
      return <div>Press test to load</div>
    }

    return (<div>
      {confs.map(conf => (<div key={conf.name}>{conf.name}:{conf.description}</div>))}
    </div>)
  }


  const doLogin = () => {
    getOIDCRedirectURL().then(res => {
      window.location.href = res.data
      return false
    })
    // window.location.href = 'https://www.cnn.com'
    return false
  }

  const secondCall = () => {
    getUser().then(res => {
      console.log(res.data)
      sessionStorage.storeUser(res.data)
      // setConfs(res.data)
    })
  }

  const logout = () => {
    logoutUser().then(res => {
      console.log('logged out user')
    })
  }


  return (
    <div className="Header" data-testid="Header">

      <Button variant='primary' onClick={doLogin} type="reset">
        Login
      </Button>

      <Button variant='secondary' onClick={secondCall}>
        Get Confs
      </Button>

      <Button variant='secondary' onClick={logout}>
        Logout user
      </Button>
      <Test></Test>
    </div>
  )
};

export default Header;
