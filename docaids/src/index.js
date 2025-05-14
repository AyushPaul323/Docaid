import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import LoginForm from './main/loginform';
import App from './App';
import Sidenav from './main/Sidenav';
// import Formm from './main/from';
const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <AnimationOnScroll animateIn="animate__fadeIn">
  <React.StrictMode>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </AnimationOnScroll>

 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
