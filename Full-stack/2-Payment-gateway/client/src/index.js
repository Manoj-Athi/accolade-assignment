import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Success from './components/Success'
import Cancel from './components/Cancel'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="/cancel" element={<Cancel />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
