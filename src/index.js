import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./css/style.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  About,
  Contact,
  Abilities,
  Projects
} from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/abilities" element={<Abilities />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("content_root")
);

serviceWorker.unregister();

// For measuring performance in this app
reportWebVitals(console.log); 
