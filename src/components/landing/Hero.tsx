import { ArrowRight, Sparkles } from 'lucide-react'

// const stats = [
//   { label: 'Active Groups', value: '98+' },
//   { label: 'Members', value: '1.2K' },
//   { label: 'Monthly Savings', value: '₦3.4M' },
//   { label: 'Successful Payouts', value: '720' },
// ]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-10">
      <div className="mx-auto grid h-full items-center max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F8BBD0]/80 px-4 py-2 text-sm font-semibold text-[#6A1B9A] shadow-sm shadow-[#C2185B]/10">
            <Sparkles size={16} />
            Trusted by modern chamas
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#6A1B9A] sm:text-5xl">
              Empowering Women’s Savings Groups Through Digital Innovation
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Manage monthly contributions, track payouts, and organize group activities in one beautiful platform built for trust, transparency, and financial empowerment.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-[#C2185B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C2185B]/20 transition hover:-translate-y-0.5 hover:bg-[#AD1457]"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-[#C2185B] bg-white px-6 py-3 text-sm font-semibold text-[#6A1B9A] transition hover:bg-[#F8BBD0]/90"
            >
              Learn More
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>

          {/* <div className="grid gap-4 sm:grid-cols-2">
            {stats.map(item => (
              <div key={item.label} className="rounded-[1.75rem] border border-[#6A1B9A]/10 bg-white/90 p-5 shadow-sm shadow-[#C2185B]/5 transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-3xl font-semibold text-[#6A1B9A]">{item.value}</p>
                <p className="mt-2 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div> */}
        </div>

        <div className="relative">
          <div className="absolute -right-8 top-8 hidden h-24 w-24 rounded-full bg-[#F8BBD0]/70 blur-3xl md:block" />
          <div className="rounded-[2rem] border border-white/80 bg-white/95 p-6 shadow-[0_32px_90px_-45px_rgba(106,27,154,0.4)] sm:p-8">
            <div className="mb-7 rounded-[1.75rem] bg-gradient-to-br from-[#F8BBD0] via-white to-[#D81B60] p-6 text-white shadow-lg shadow-[#C2185B]/20">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6A1B9A]">Chama dashboard</p>
              <p className="mt-4 text-3xl text-[#6A1B9A] font-semibold">Financial Circle Snapshot</p>
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.75rem] bg-slate-100 p-5 text-slate-900 shadow-lg shadow-[#6A1B9A]/10">
                <div className="flex items-center justify-between text-sm font-semibold text-[#6A1B9A]">
                  <span>Monthly Contributions</span>
                  <span>92%</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-5/6 rounded-full bg-[#C2185B] transition-all duration-500" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-[#6A1B9A]/10 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Payout this month</p>
                  <p className="mt-3 text-2xl font-semibold text-[#6A1B9A]">Ksh 24,000</p>
                </div>
                <div className="rounded-[1.75rem] border border-[#6A1B9A]/10 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Upcoming meeting</p>
                  <p className="mt-3 text-2xl font-semibold text-[#C2185B]">Thu, Jun 26</p>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-slate-500">
                  <span>Chama Balance</span>
                  <span className="text-[#6A1B9A] font-semibold">Ksh 32,000 </span>
                </div>
                <p className="mt-3 text-sm text-slate-500">Updated today with real-time member contributions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
