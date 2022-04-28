import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { Link, Outlet } from "react-router-dom";
import Controller from './services/controller';

// const [language, setLanguage] = useState("en");

function App() {
  const instance = Controller.getInstance()

  instance.doThing('from app')

  localStorage.setItem('test', 'value')


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
