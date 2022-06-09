import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../services/authnService';
import SessionStorageService from '../../services/sessionStorage';
import './OidcRedirectGuard.css';

interface OidcRedirectGuardProps { }

const OidcRedirectGuard: FC<OidcRedirectGuardProps> = () => {
  const sessionStorage = SessionStorageService.getInstance()
  const navigate = useNavigate();

  useEffect(() => {
    getUser().then(res => {
      sessionStorage.storeUser(res.data)
      navigate("/")
    })
  })

  return null
}


export default OidcRedirectGuard;
