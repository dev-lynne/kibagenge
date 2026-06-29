import { ClipboardList, Repeat, ShieldCheck, Bell } from 'lucide-react'

const features = [
  {
    icon: ClipboardList,
    title: 'Contributions',
    description: 'Record member contributions quickly and monitor group totals in one place.',
  },
  {
    icon: Repeat,
    title: 'Rotation',
    description: 'Let the app determine the next payout recipient with fair, transparent scheduling.',
  },
  {
    icon: ShieldCheck,
    title: 'Tracking',
    description: 'Stay on top of payments, balances, and payout history without extra paperwork.',
  },
  {
    icon: Bell,
    title: 'Reminders',
    description: 'Send group reminders for contributions and meetings so everyone stays aligned.',
  },
]

export function Features() {
  return (
    <section id="features" className="space-y-10 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6A1B9A]/80">
          Simple tools
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[#6A1B9A] sm:text-4xl">
          Everything your chama needs in a clean, calm dashboard.
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {features.map(feature => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="rounded-[2rem] border border-[#6A1B9A]/10 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(194,24,91,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F8BBD0] text-[#6A1B9A] shadow-sm">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#6A1B9A]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
