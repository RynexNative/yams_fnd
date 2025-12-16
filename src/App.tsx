import AppRouter from "./routes";
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth.store";
import { testAuth } from "@/test/test";


function App() {
  const login = useAuthStore((s) => s.login);

  useEffect(() => {
    login(testAuth); // Hard-coded login
  }, [login]);
  return <AppRouter />
}

export default App
