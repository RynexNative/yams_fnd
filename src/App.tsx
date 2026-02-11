import AppRouter from "./routes";
import { useEffect } from "react";
import Toast from "./components/ui/Toast";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import { ThemeProvider } from "@/contexts/ThemeContext";
import '@/styles/app.css'



function App() {
  return (
  <>
  <ThemeProvider>
  <AppRouter />
  <Toast />

  </ThemeProvider>
  </>

  )
}

export default App
