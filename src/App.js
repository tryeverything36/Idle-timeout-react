import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { IdleTimerProvider } from 'react-idle-timer'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import IdleModal from './components/IdleModal'

function App() {
  const idleTimer = useRef(null)
  const [showModal, setShowModal] = useState(false)

  const handleOnIdle = () => {
    setShowModal(true)
  }

  const handleOnActive = () => {
    setShowModal(false)
  }

  return (
    <IdleTimerProvider
      ref={idleTimer}
      timeout={10000}
      onIdle={handleOnIdle}
      onActive={handleOnActive}
      debounce={500}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <IdleModal visible={showModal} onClose={() => setShowModal(false)} />
      </Router>
    </IdleTimerProvider>
  )
}

export default App
