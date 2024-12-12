import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Login from './Components/Login/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App