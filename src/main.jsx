// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// UBAH DARI BrowserRouter KE HashRouter
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Gunakan HashRouter di sini */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)