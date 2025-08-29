import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

// Import custom CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)