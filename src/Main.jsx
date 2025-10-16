import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProyectContextProvider } from './context/ProyectContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProyectContextProvider>
      <App />
    </ProyectContextProvider>
  </StrictMode>,
)