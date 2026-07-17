import { useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isLoggedIn = useMemo(() => Boolean(localStorage.getItem('access_token')), [location.pathname])
  const userLabel = useMemo(() => localStorage.getItem('auth_full_name') || localStorage.getItem('auth_user') || 'Member', [location.pathname])

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('auth_user')
    localStorage.removeItem('auth_full_name')
    navigate('/login')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/80 bg-white/90 backdrop-blur-xl shadow-sm shadow-pink-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-[#6A1B9A]">
          ChamaConnect
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map(item => (
            <a key={item.label} href={item.href} className="transition hover:text-[#C2185B]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="rounded-full border border-[#C2185B] px-4 py-2 text-sm font-semibold text-[#6A1B9A] transition hover:bg-[#F8BBD0]/80">
                {userLabel}
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full border border-[#C2185B] px-4 py-2 text-sm font-semibold text-[#6A1B9A] transition hover:bg-[#F8BBD0]/80"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-[#C2185B] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#C2185B]/20 transition hover:-translate-y-0.5 hover:bg-[#AD1457]"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
