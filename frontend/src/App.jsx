import { useState } from 'react'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    
  return (
    <>
    <AuthProvider>
      <Router>
        <div className="antialiased text-gray-200">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
    </>
  )
}

export default App
