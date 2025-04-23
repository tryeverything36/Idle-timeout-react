import './IdleModal.css'

export default function IdleModal({ visible, onClose }) {
  if (!visible) return null

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Are you still there?</h2>
        <p>You’ve been inactive for a while.</p>
        <button onClick={onClose}>Continue</button>
      </div>
    </div>
  )
}
