import { useEffect, useState } from 'react'
import './IdleModal.css'

export default function IdleModal({ visible, onContinue, onLogout }) {
  const [secondsLeft, setSecondsLeft] = useState(10)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    if (!visible) return

    setSecondsLeft(10)
    setExpired(false)

    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [visible])

  useEffect(() => {
    if (secondsLeft === 0) {
      setExpired(true)
    }
  }, [secondsLeft])

  if (!visible) return null

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{expired ? 'Session Expired' : 'Are you still there?'}</h2>
        {!expired && (
          <>
            <p>You’ve been inactive for a while.</p>
            <p className="timer">Logging out in <strong>{secondsLeft}</strong> seconds...</p>
            <div className="modal-actions">
              <button onClick={onContinue}>Continue Session</button>
              <button className="danger" onClick={onLogout}>Logout Now</button>
            </div>
          </>
        )}
        {expired && (
          <>
            <p>Your session has expired.</p>
            <div className="modal-actions">
              <button className="danger" onClick={onLogout}>Log in Again</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
