import React, { useRef, useState } from 'react'
import { IdleTimerProvider } from 'react-idle-timer'
import './App.css'

function App() {
  const [isIdle, setIsIdle] = useState(false)
  const [lastActive, setLastActive] = useState(null)
  const idleTimer = useRef(null)

  const handleOnIdle = () => {
    setIsIdle(true)
    console.log('User is idle')
  }

  const handleOnActive = () => {
    setIsIdle(false)
    setLastActive(new Date().toLocaleTimeString())
    console.log('User is active')
  }

  return (
    <IdleTimerProvider
      ref={idleTimer}
      timeout={10000} // 10 seconds
      onIdle={handleOnIdle}
      onActive={handleOnActive}
      debounce={500}
    >
      <div className="app-container">
        <div className={`status-card ${isIdle ? 'idle' : 'active'}`}>
          <h1>Idle Timer Tracker</h1>
          <p className="status">
            Status: <strong>{isIdle ? 'Idle ⛔' : 'Active ✅'}</strong>
          </p>
          {lastActive && (
            <p className="last-active">
              Last Active: <span>{lastActive}</span>
            </p>
          )}
          <p className="note">
            (You will be marked idle after 10 seconds of no activity)
          </p>
        </div>
      </div>
    </IdleTimerProvider>
  )
}

export default App
