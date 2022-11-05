import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={user? <Home /> : <Navigate to="/login"/>}/>
        <Route path="/login" element={user? <Navigate to="/"/> : <Login />}/>
        <Route path="/register" element={user? <Navigate to="/"/> : <Register />}/>
        <Route path="/profile/:username" element={<Profile />}/>
      </Routes>
    </Router>
  )

}

export default App;