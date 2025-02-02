import { useState } from "react"
import AuthPage from "./components/auth/AuthPage"
import Dashboard from "./Dashboard"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuth = () => {
    setIsAuthenticated(true)
  }

  if (!isAuthenticated) {
    return <AuthPage onAuth={handleAuth} />
  }

  return <Dashboard />
}

export default App

