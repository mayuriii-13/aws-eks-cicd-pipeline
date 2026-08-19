import { useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Not checked')
  const [loading, setLoading] = useState(false)

  const checkBackend = async () => {
    setLoading(true)

    try {
      const response = await fetch('http://localhost:3000/health')
      const data = await response.json()

      if (response.ok) {
        setStatus(`Backend: ${data.status}`)
      } else {
        setStatus('Backend: DOWN')
      }
    } catch (error) {
      setStatus('Backend: DOWN')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1>CI/CD Pipeline Demo</h1>

      <p>React Frontend</p>

      <button onClick={checkBackend} disabled={loading}>
        {loading ? 'Checking...' : 'Check Backend'}
      </button>

      <h2>{status}</h2>
    </div>
  )
}

export default App