import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PhoenixSocketProvider } from './PhoenixSocketContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhoenixSocketProvider>
      <App />
    </PhoenixSocketProvider>
  </StrictMode>,
)
