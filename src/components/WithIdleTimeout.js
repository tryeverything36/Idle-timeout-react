import { useIdleTimer } from 'react-idle-timer'
import { useState } from 'react'
import IdleModal from './IdleModal'

export default function WithIdleTimeout({ children }) {
  const [showModal, setShowModal] = useState(false)

  const handleOnIdle = () => {
    setShowModal(true)
  }

  const handleLogout = () => {
    // alert('Logging out due to inactivity...')
    // window.location.href = '/login'
    setShowModal(false)
    reset()
    // Perform logout logic here, e.g., clear session, redirect to login page, etc.
  }

  const { reset } = useIdleTimer({
    timeout: 10000,
    onIdle: handleOnIdle,
    debounce: 500
  })

  const handleContinue = () => {
    setShowModal(false)
    reset()
  }

  return (
    <>
      {children}
      <IdleModal
        visible={showModal}
        onContinue={handleContinue}
        onLogout={handleLogout}
      />
    </>
  )
}
