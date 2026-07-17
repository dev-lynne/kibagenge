import { useState } from 'react'
import { registerUser } from '../api/auth'

export default function Signup() {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setMessage('')

    try {
      const response = await registerUser({ full_name: fullName, phone, email, password })
      setMessage(response.data.message || 'Account created successfully.')
      window.location.href = '/login'
    } catch (err: any) {
      setError(err?.response?.data?.detail || 'Registration failed')
    }
  }

  return (
    <section className="min-h-[calc(100vh-6rem)] bg-[radial-gradient(circle_at_top_left,_rgba(194,24,91,0.12),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#fff4fb_100%)] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#6A1B9A]/10 bg-white p-10 shadow-[0_28px_80px_-50px_rgba(194,24,91,0.25)]">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6A1B9A]/80">Create your chama</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#6A1B9A] sm:text-4xl">Start empowering your savings community</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="w-full rounded-xl border border-slate-200 px-4 py-3" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
          <button type="submit" className="rounded-xl bg-[#6A1B9A] px-6 py-3 font-medium text-white">Create account</button>
        </form>

        {message ? <p className="mt-4 text-sm text-emerald-600">{message}</p> : null}
        {error ? <p className="mt-4 text-sm text-rose-600">{error}</p> : null}
      </div>
    </section>
  )
}
