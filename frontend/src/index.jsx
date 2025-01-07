// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Using 'react-dom/client' in Vite
import './index.css';  // Global styles (including Tailwind)
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";


// Rendering the app into the 'root' div
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
