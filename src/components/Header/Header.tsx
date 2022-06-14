import { AccountCircle } from '@mui/icons-material';
import { AppBar, Box, IconButton, MenuItem, Toolbar, Typography, Menu } from '@mui/material';
import React from 'react';
import { FC } from 'react';
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
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleOpenUserMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={logout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      )
    }
    return (

      <Box sx={{ display: 'flex', flexDirection: "row" }}>
        <MenuItem onClick={signup}>
          Sign Up
        </MenuItem>

        <MenuItem onClick={doLogin}>
          Login
        </MenuItem>
      </Box>
    )
  }

  return (
    <div className="Header" data-testid="Header">

      <AppBar position="static" >
        <Toolbar sx={{ justifyContent: "space-between" }}>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <MenuItem>
              <Typography variant="h5">Dota2 Fantasy</Typography>
            </MenuItem>

            <MenuItem >
              <Typography textAlign="center">Confrerences</Typography>
            </MenuItem>

            <MenuItem>
              <Typography textAlign="center">Seasons</Typography>
            </MenuItem>

            <MenuItem>
              <Typography textAlign="center">Leagues</Typography>
            </MenuItem>

          </Box>

          {getUserActions()}

        </Toolbar>


      </AppBar>



    </div >
  )
};

export default Header;
