export default function Login() {
  return (
    <section className="min-h-[calc(100vh-6rem)] bg-[radial-gradient(circle_at_top_left,_rgba(194,24,91,0.12),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#fff4fb_100%)] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#6A1B9A]/10 bg-white p-10 shadow-[0_28px_80px_-50px_rgba(194,24,91,0.25)]">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6A1B9A]/80">Login</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#6A1B9A] sm:text-4xl">Welcome back to ChamaConnect</h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
          Access your savings circle, review contributions, and track the next payout from your secure group dashboard.
        </p>
        <div className="mt-10 rounded-[1.75rem] border border-[#C2185B]/10 bg-[#F8BBD0]/80 p-7 text-sm leading-7 text-slate-700">
          <p className="font-semibold text-[#6A1B9A]">Note:</p>
          <p className="mt-3">This demo route is a placeholder for your login experience. Replace it with an authentication form when ready.</p>
        </div>
      </div>
    </section>
  )
}
