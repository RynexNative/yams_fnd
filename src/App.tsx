import AppRouter from "./routes";
import { useEffect } from "react";
import Toast from "./components/ui/Toast";
import LoadingOverlay from "./components/ui/LoadingOverlay";



function App() {
  return (
  <>
  <AppRouter />
  <Toast />
  </>

  )
}

export default App
