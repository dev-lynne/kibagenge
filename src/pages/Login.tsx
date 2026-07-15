import { useState } from 'react'
import { loginUser } from '../api/auth'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setMessage('')

    try {
      const response = await loginUser({ username, password })
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('refresh_token', response.data.refresh_token)
      setMessage('Login successful')
    } catch (err: any) {
      setError(err?.response?.data?.detail || 'Login failed')
    }
  }

  return (
    <section className="min-h-[calc(100vh-6rem)] bg-[radial-gradient(circle_at_top_left,_rgba(194,24,91,0.12),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#fff4fb_100%)] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#6A1B9A]/10 bg-white p-10 shadow-[0_28px_80px_-50px_rgba(194,24,91,0.25)]">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6A1B9A]/80">Login</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#6A1B9A] sm:text-4xl">Welcome back to ChamaConnect</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email or phone" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
          <button type="submit" className="rounded-xl bg-[#6A1B9A] px-6 py-3 font-medium text-white">Sign in</button>
        </form>

        {message ? <p className="mt-4 text-sm text-emerald-600">{message}</p> : null}
        {error ? <p className="mt-4 text-sm text-rose-600">{error}</p> : null}
      </div>
    </section>
  )
}
