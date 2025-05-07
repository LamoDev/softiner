import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './welcome/Welcome'
import Home from './home/Home'

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
