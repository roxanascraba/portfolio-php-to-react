import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

import HomePage from './components/HomePage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('content_root')
);

// For measuring performance in this app
reportWebVitals(console.log);
