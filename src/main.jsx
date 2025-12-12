import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext.jsx'
import { PopupProvider } from './popup/PopupContext.jsx'
import { ContactProvider } from './context/ContactContext.jsx'
import { UpdatePopProvider } from './popup/UpdatePopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <PopupProvider>
          <ContactProvider>
            <UpdatePopProvider>
              <App />
            </UpdatePopProvider>
          </ContactProvider>
        </PopupProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
