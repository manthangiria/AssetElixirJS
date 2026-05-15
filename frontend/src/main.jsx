import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BlogContextProvider } from './context/BlogContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <BlogContextProvider>
        <App/>
      </BlogContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
