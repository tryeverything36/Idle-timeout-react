import WithIdleTimeout from '../components/WithIdleTimeout'

function AboutPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Page</h1>
      <p>This page now has idle timeout protection 🎯</p>
    </div>
  )
}

export default function About() {
  return (
    <WithIdleTimeout>
      <AboutPage />
    </WithIdleTimeout>
  )
}
