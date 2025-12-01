import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.js'
import AppLayout from "./components/layouts/AppLayout.js"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout title="Student Management">
    <App />

    </AppLayout>
  </StrictMode>,
)
