import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts/Montserrat-Black.ttf';
import './fonts/Montserrat-Bold.ttf'
import './fonts/Montserrat-Regular.ttf'
import './index.css';


ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
 document.getElementById('root'));