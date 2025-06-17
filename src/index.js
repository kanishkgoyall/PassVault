import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();
