const steps = [
  {
    number: "01",
    title: "Connect your models",
    description:
      "Add your API keys or use NeuralKit's managed endpoints. Connect to any LLM provider in under 2 minutes with our guided setup.",
    detail: "GPT-4o, Claude 4, Gemini 2, Llama 3, Mistral, and 35+ more",
  },
  {
    number: "02",
    title: "Build your pipeline",
    description:
      "Use our visual builder or SDK to compose prompts, tools, RAG retrievers, and agents into robust AI workflows.",
    detail: "Templates for RAG, agents, summarization, classification & more",
  },
  {
    number: "03",
    title: "Deploy & monitor",
    description:
      "Ship to production with one click. Get real-time metrics, cost tracking, and automatic fallbacks if a model goes down.",
    detail: "Auto-scaling, edge deployment, 99.9% uptime SLA",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            How it works
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From idea to production in 3 steps
          </h2>
          <p className="mx-auto max-w-xl text-lg text-white/50">
            We handle the complexity so your team can focus on building great AI experiences.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-violet-600/60 via-indigo-600/40 to-transparent lg:left-1/2 lg:block" />

          <div className="flex flex-col gap-12">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className={`${idx % 2 === 1 ? "lg:text-right" : ""}`}>
                    <span className="mb-3 block text-sm font-bold tracking-widest text-violet-500">
                      STEP {step.number}
                    </span>
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-sm text-white/40 italic">{step.detail}</p>
                  </div>
                </div>

                {/* Number bubble (center) */}
                <div className="relative z-10 mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-violet-500/50 bg-violet-600/20 text-xl font-extrabold text-violet-300 lg:mx-0">
                  {step.number}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
