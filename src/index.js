import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
//import WebFont from 'webfontloader';
import './index.css';

// WebFont.load({
//   google: {
//     families: ['Montserrat', 'sans-serif'],
//   }
// })

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
 document.getElementById('root'));