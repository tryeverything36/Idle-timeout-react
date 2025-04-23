import { useEffect, useState } from 'react'
import './IdleModal.css'

export default function IdleModal({ visible, onContinue, onLogout }) {
  const [secondsLeft, setSecondsLeft] = useState(10)

  useEffect(() => {
    if (!visible) return

    setSecondsLeft(10) // Reset when modal appears

    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [visible])

  useEffect(() => {
    if (secondsLeft === 0) {
      onLogout()
    }
  }, [secondsLeft, onLogout])

  if (!visible) return null

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Are you still there?</h2>
        <p>You’ve been inactive for a while.</p>
        <p className="timer">Logging out in <strong>{secondsLeft}</strong> seconds...</p>
        <div className="modal-actions">
          <button onClick={onContinue}>Continue Session</button>
          <button className="danger" onClick={onLogout}>Logout Now</button>
        </div>
      </div>
    </div>
  )
}
