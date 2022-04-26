import React, { FC } from 'react';
import './Login.css';

interface LoginProps {}

const Login: FC<LoginProps> = () => (
  <div className="Login" data-testid="Login">
    Login Component
  </div>
);

export default Login;
