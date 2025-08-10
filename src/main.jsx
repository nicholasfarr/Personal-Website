import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css'; // built by the CLI watcher

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);