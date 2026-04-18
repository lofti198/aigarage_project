const meetings = [
  { num: 1, title: "Kickoff", desc: "Pick a problem, form teams, define scope." },
  { num: 2, title: "Prototype", desc: "Build the first working version in one session." },
  { num: 3, title: "Iterate", desc: "User feedback, pivots, quick improvements." },
  { num: 4, title: "Ship", desc: "Deploy, demo, and collect real-world data." },
  { num: 5, title: "New Round", desc: "Fresh problem, fresh team, fresh start." },
  { num: 6, title: "Deep Dive", desc: "Go harder — more complex AI integrations." },
  { num: 7, title: "Polish", desc: "UI, performance, and the finishing touches." },
  { num: 8, title: "Final Demo", desc: "Present all projects, celebrate what you built." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-zinc-950 text-white font-sans">

      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
        <span className="text-lg font-bold tracking-tight">AI Garage</span>
        <a
          href="#meetings"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Sessions →
        </a>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 md:py-48">
        <span className="mb-6 inline-block rounded-full border border-zinc-700 px-4 py-1 text-xs uppercase tracking-widest text-zinc-400">
          8 Meetings · 8 Projects
        </span>
        <h1 className="max-w-3xl text-5xl font-black tracking-tighter leading-none md:text-7xl lg:text-8xl">
          Build something real <br className="hidden sm:block" />
          <span className="text-zinc-500">with AI. Every time.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-zinc-400 leading-relaxed">
          AI Garage is a series of hands-on meetups where each session starts
          from zero — a new idea, a new project, shipped by the end of the night.
        </p>
        <a
          href="#meetings"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-zinc-200 transition-colors"
        >
          See the sessions
        </a>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-800 px-8 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 text-center">
          {[
            { value: "8", label: "Meetings" },
            { value: "8", label: "Projects shipped" },
            { value: "∞", label: "Ideas explored" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Meetings grid */}
      <section id="meetings" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-black tracking-tight md:text-4xl">
            Every session, a new project
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {meetings.map((m) => (
              <div
                key={m.num}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col gap-3 hover:border-zinc-600 transition-colors"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">
                  Meeting {m.num}
                </span>
                <h3 className="text-xl font-bold">{m.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center text-center px-6 py-24 border-t border-zinc-800">
        <h2 className="text-3xl font-black tracking-tight md:text-5xl">
          Ready to build?
        </h2>
        <p className="mt-4 text-zinc-400 max-w-md">
          Join the next AI Garage session and ship a project from idea to demo in one night.
        </p>
        <a
          href="mailto:isolar2005@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-zinc-200 transition-colors"
        >
          Get in touch
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-8 py-6 text-center text-xs text-zinc-600">
        AI Garage · {new Date().getFullYear()}
      </footer>

    </div>
  );
}
