import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/landing/Navbar'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
