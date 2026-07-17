import { useMemo, useState } from 'react'
import { createChama } from '../api/chama'
import { joinChama } from '../api/join'

export default function Dashboard() {
  const userLabel = useMemo(() => localStorage.getItem('auth_full_name') || localStorage.getItem('auth_user') || 'member', [])
  const [form, setForm] = useState({
    name: '',
    description: '',
    contribution_amount: '',
    currency: 'KES',
    contribution_frequency: 'monthly',
    cycle_start_date: '',
    max_members: '20',
    rotation_method: 'manual',
  })
  const [inviteCode, setInviteCode] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setMessage('')

    try {
      const response = await createChama({
        ...form,
        contribution_amount: Number(form.contribution_amount),
        max_members: Number(form.max_members),
      })
      setMessage(`${response.data.message || 'Chama created successfully.'} Invite code: ${response.data.invite_code || 'N/A'}`)
      setForm({
        name: '',
        description: '',
        contribution_amount: '',
        currency: 'KES',
        contribution_frequency: 'monthly',
        cycle_start_date: '',
        max_members: '20',
        rotation_method: 'manual',
      })
    } catch (err: any) {
      setError(err?.response?.data?.detail || 'Unable to create chama')
    }
  }

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

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">Create a new chama</h2>
              <p className="mt-2 text-sm text-slate-600">Set your group details and generate an invite code automatically.</p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700">Chama name</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Mombasa Savings Circle" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Contribution amount</label>
                  <input value={form.contribution_amount} onChange={(e) => setForm({ ...form, contribution_amount: e.target.value })} type="number" placeholder="e.g. 500" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Currency</label>
                  <input value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value })} placeholder="e.g. KES" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
                </div>

                <div>
                  <label className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-700">
                    Contribution frequency
                    <span title="How often members contribute, such as weekly, bi-weekly, or monthly." className="inline-flex h-5 w-5 cursor-help items-center justify-center rounded-full bg-[#F8BBD0] text-[11px] font-semibold text-[#AD1457]">i</span>
                  </label>
                  <select value={form.contribution_frequency} onChange={(e) => setForm({ ...form, contribution_frequency: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-3">
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Cycle start date</label>
                  <input value={form.cycle_start_date} onChange={(e) => setForm({ ...form, cycle_start_date: e.target.value })} type="date" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Max members</label>
                  <input value={form.max_members} onChange={(e) => setForm({ ...form, max_members: e.target.value })} type="number" placeholder="e.g. 20" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-700">
                    Rotation method
                    <span title="Choose whether turns are assigned manually or by a random draw." className="inline-flex h-5 w-5 cursor-help items-center justify-center rounded-full bg-[#F8BBD0] text-[11px] font-semibold text-[#AD1457]">i</span>
                  </label>
                  <select value={form.rotation_method} onChange={(e) => setForm({ ...form, rotation_method: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-3">
                    <option value="manual">Manual order</option>
                    <option value="random">Random draw</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700">Description</label>
                  <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Describe the goal of your chama" className="w-full rounded-xl border border-slate-200 px-4 py-3" rows={3} />
                </div>
              </div>

              <button type="submit" className="mt-5 rounded-xl bg-[#6A1B9A] px-6 py-3 font-medium text-white">Create chama</button>
              {message ? <p className="mt-4 text-sm text-emerald-600">{message}</p> : null}
              {error ? <p className="mt-4 text-sm text-rose-600">{error}</p> : null}
            </form>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="font-semibold text-slate-900">Join chama</h2>
                <p className="mt-2 text-sm text-slate-600">Use an invite code to request membership to an existing group.</p>
                <form
                  onSubmit={async (event) => {
                    event.preventDefault()
                    setError('')
                    setMessage('')
                    try {
                      const response = await joinChama({ invite_code: inviteCode })
                      setMessage(response.data.message || 'Join request submitted.')
                      setInviteCode('')
                    } catch (err: any) {
                      setError(err?.response?.data?.detail || 'Unable to join chama')
                    }
                  }}
                  className="mt-4 space-y-3"
                >
                  <input value={inviteCode} onChange={(e) => setInviteCode(e.target.value)} placeholder="Enter invite code" className="w-full rounded-xl border border-slate-200 px-4 py-3" required />
                  <button type="submit" className="rounded-xl border border-[#C2185B] px-4 py-2 text-sm font-semibold text-[#6A1B9A]">Request to join</button>
                </form>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="font-semibold text-slate-900">My groups</h2>
                <p className="mt-2 text-sm text-slate-600">Track your active chama memberships and pending approvals in one view.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
