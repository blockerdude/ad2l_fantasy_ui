import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import { conference, startLogin } from '../../services/authn';
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
      {confs.map(conf => (<div>{conf.name}:{conf.description}</div>))}
    </div>)
  }

  const doLogin = () => {
    console.log('calling')
    startLogin().then(res => {
      console.log('got results', res.data)
      setConfs(res.data)
    })
  }


  return (
    <div className="Header" data-testid="Header">

      <Button variant='primary' onClick={doLogin}>
        Test button
      </Button>
      <Test></Test>
    </div>
  )
};

export default Header;
