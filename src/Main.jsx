import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProyectContextProvider } from './context/ProyectContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ProyectContextProvider>
        <App />
      </ProyectContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)