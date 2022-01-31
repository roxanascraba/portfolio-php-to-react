import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AboutMePage from './components/AboutMe';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AboutMePage />
  </React.StrictMode>,
  document.getElementById('content_root')
);

// For measuring performance in this app
reportWebVitals(console.log);
