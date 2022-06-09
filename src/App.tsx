import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import { Link, Outlet } from "react-router-dom";
import Header from './components/Header/Header';

// const [language, setLanguage] = useState("en");

function App() {
  // const instance = SessionStorageService.getInstance()

  // instance.doThing('from app')

  // localStorage.setItem('test', 'value')

  return (


    <div className="App">
      <Header></Header>
      <Login />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> | {" "}
        <Link to="/sub1">Expenses</Link>
      </nav>
      <Outlet />
    </div>

  );
}

export default App;
