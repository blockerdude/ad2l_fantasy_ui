import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import RouteGuard from './components/RouteGuard/RouteGuard';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import OidcRedirectGuard from './components/OidcRedirectGuard/OidcRedirectGuard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<App />}>

            <Route path="home" element={<Home user="home" />} />
          </Route>

          <Route path="oidcRedirect" element={<OidcRedirectGuard></OidcRedirectGuard>} />


          <Route
            path="please"
            element={
              <RouteGuard login={true} admin={false}>
                <Home user="please" />
              </RouteGuard>
            }
          />

          <Route element={<RouteGuard login={true} />}>
            <Route path="sub1" element={<Home user="sub1" />} />
            <Route path="sub2" element={<Home user="sub2" />} />
          </Route>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter >
    </Provider>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
