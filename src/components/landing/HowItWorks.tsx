const steps = [
  {
    number: '1',
    title: 'Create or Join',
    description: 'Start your savings circle and invite members in one easy flow.',
  },
  {
    number: '2',
    title: 'Contribute',
    description: 'Log contributions and keep every member updated instantly.',
  },
  {
    number: '3',
    title: 'Track Payouts',
    description: 'See who receives funds next and follow the group’s progress clearly.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6A1B9A]/80">
          How it works
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[#6A1B9A] sm:text-4xl">
          Run your chama in three clear steps.
        </h2>
      </div>

      <div className="mx-auto mt-12 grid gap-6 lg:max-w-5xl lg:grid-cols-3">
        {steps.map(step => (
          <div key={step.number} className="group rounded-[2rem] border border-[#6A1B9A]/10 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(194,24,91,0.35)] transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F8BBD0] text-2xl font-semibold text-[#6A1B9A]">
              {step.number}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#6A1B9A]">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
