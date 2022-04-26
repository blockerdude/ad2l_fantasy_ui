import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import { Link, Outlet } from "react-router-dom";

function App() {



  return (

    <div className="App">
      <Login />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/sub1">Expenses</Link>
      </nav>
      <Outlet />

    </div>
  );
}

export default App;
