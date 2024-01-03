import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './Landing.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IntroCard from './Components/IntroCard/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} >
          <Route path="Profile" element={<IntroCard />} />
          <Route path="Resume" element={<h1>About</h1>} />
          <Route path="Projects" element={<h1>Projects</h1>} />
          <Route path="Contact" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
