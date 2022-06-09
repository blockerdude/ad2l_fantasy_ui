import { FC } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoginRedirectURL, logoutUser, getSignupUserRedirectURL } from '../../services/authnService';
import SessionStorageService from '../../services/sessionStorage';
import { RootState } from '../../store/store';
import './Header.css';

interface HeaderProps {
}
const sessionStorage = SessionStorageService.getInstance()
const Header: FC<HeaderProps> = () => {
  const curUser = sessionStorage.getUser()
  const count = useSelector((state: RootState) => state.counter.value)
  const navigate = useNavigate()

  const doLogin = () => {
    getLoginRedirectURL().then(res => {
      window.location.href = res.data
      return false
    })
    // window.location.href = 'https://www.cnn.com'
    return false
  }

  const logout = () => {
    logoutUser().then(res => {
      sessionStorage.clearUser()
      navigate("/")

    })
  }

  const signup = () => {
    getSignupUserRedirectURL().then(res => {
      window.location.href = res.data
      return false
    })
  }

  function getUserActions() {

    if (curUser) {
      return (
        <div>
          <Navbar.Text>{curUser.email} | {curUser.displayName}</Navbar.Text>

          <Button className="right-btn" variant='outline-light' onClick={logout} type="reset">
            logout
          </Button>

        </div>
      )
    }
    return (<div>
      <Button variant='outline-light' onClick={signup} type="reset">
        Sign Up
      </Button>
      {count}

      <Button className="right-btn" variant='outline-light' onClick={doLogin}>
        Login
      </Button>
    </div>)
  }

  return (
    <div className="Header" data-testid="Header">
      <Navbar bg="dark" variant="dark">

        <Navbar.Brand className="title" href="home">Dota2 Fantasy</Navbar.Brand>
        <Nav>
          <Nav.Link href="conferences">Conferences</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="seasons">Seasons</Nav.Link>
          <Nav.Link href="leagues">Leauges</Nav.Link>
          {/* <Nav.Link href="teams">Teams</Nav.Link> */}
        </Nav>


        {getUserActions()}


      </Navbar>

    </div>
  )
};

export default Header;
