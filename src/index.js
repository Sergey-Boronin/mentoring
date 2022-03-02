import React from 'react';
import ReactDOM from 'react-dom';
import '../src/lesson-3/style.css'
import App from './tutorial-6-new/App'
import {  BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

