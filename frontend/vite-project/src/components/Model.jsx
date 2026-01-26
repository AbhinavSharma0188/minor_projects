import { useState } from 'react'

function Model({ onClose }) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleAuth = async (e) => {
    e.preventDefault()
    setError('')
    
    // Using port 3000 as found in your .env file
    const endpoint = isLogin ? '/api/login' : '/api/signUp'
    
    try {
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      // Success!
      console.log('Success:', data)
      if (data.token) {
        localStorage.setItem('token', data.token)
      }
      alert(`${isLogin ? 'Login' : 'Sign Up'} successful!`)
      onClose()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className='backdrop' onClick={onClose}>
        <dialog 
          className='modal' 
          open 
          onClick={(e) => e.stopPropagation()}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
            {isLogin ? 'Login' : 'Create Account'}
          </h2>
          
          {error && <p style={{ color: 'red', fontSize: '0.8rem', textAlign: 'center' }}>{error}</p>}
          
          <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '0.5rem' }}
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '0.5rem' }}
            />
            <button 
              type="submit" 
              style={{ padding: '0.6rem', background: '#333', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => {
                setIsLogin(!isLogin)
                setError('')
              }}
            >
              {isLogin ? 'Create new account' : 'Login here'}
            </span>
          </p>
        </dialog>
      </div>
    </>
  )
}

export default Model