import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../../store/counterSlice';
import { RootState } from '../../store/store';
import './Login.css';


interface LoginProps { }

const Login: FC<LoginProps> = () => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="Login" data-testid="Login">
      Login Component
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount(3))}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )

};

export default Login;
