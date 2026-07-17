import { useMemo } from 'react'

export default function Dashboard() {
  const userLabel = useMemo(() => localStorage.getItem('auth_full_name') || localStorage.getItem('auth_user') || 'member', [])

  return (
    <section className="min-h-[calc(100vh-6rem)] bg-[radial-gradient(circle_at_top_left,_rgba(194,24,91,0.12),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#fff4fb_100%)] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-[#6A1B9A]/10 bg-white p-8 shadow-[0_28px_80px_-50px_rgba(194,24,91,0.25)] sm:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6A1B9A]/80">Chama dashboard</p>
              <h1 className="mt-3 text-3xl font-semibold text-[#6A1B9A] sm:text-4xl">Welcome back, {userLabel}</h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                Manage your savings groups, invite members, and keep your chama operations on track from one place.
              </p>
            </div>
            <div className="rounded-2xl border border-[#F8BBD0] bg-[#FFF8FB] px-4 py-3 text-sm text-[#AD1457]">
              Ready to create or join a chama
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-semibold text-slate-900">Create chama</h2>
              <p className="mt-2 text-sm text-slate-600">Start a new savings circle with your own rules and invite code.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-semibold text-slate-900">Join chama</h2>
              <p className="mt-2 text-sm text-slate-600">Use an invite link or code to request membership to an existing group.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-semibold text-slate-900">My groups</h2>
              <p className="mt-2 text-sm text-slate-600">Track your active chama memberships and pending approvals in one view.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
