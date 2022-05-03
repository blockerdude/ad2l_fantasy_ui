import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import { baseCall, conference, getOIDCRedirectURL } from '../../services/authn';
import './Header.css';

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {

  const [confs, setConfs] = useState([] as conference[]);

  function Test() {

    if (confs.length === 0) {
      return <div>Press test to load</div>
    }

    return (<div>
      {confs.map(conf => (<div key={conf.name}>{conf.name}:{conf.description}</div>))}
    </div>)
  }


  const doLogin = () => {
    console.log('calling')
    getOIDCRedirectURL().then(res => {
      console.log('got results', res.data)
      window.location.href = res.data
      return false
    })
    // window.location.href = 'https://www.cnn.com'
    return false
  }

  const secondCall = () => {
    console.log('calling')
    baseCall().then(res => {
      console.log('got results', res.data)
      setConfs(res.data)
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
      <Test></Test>
    </div>
  )
};

export default Header;
