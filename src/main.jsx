import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/styles/main.css'
import '/styles/font.css'
import '/styles/header.css'
import '/styles/hero.css'
import '/styles/products.css'
import '/styles/contato.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
