import { Star } from 'lucide-react'

const projects = [
  {
    name: 'Nova CRM',
    summary: 'Multi-tenant SaaS with role-based access and real-time analytics.',
  },
  {
    name: 'Orbit Commerce',
    summary: 'Headless e-commerce with edge rendering and AI-assisted merchandising.',
  },
  {
    name: 'Pulse Analytics',
    summary: 'Data platform blending streams, batch, and LLM-powered insights.',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected work</h2>
          <p className="mt-3 text-slate-300/80">A few recent collaborations. Detailed case studies available on request.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-blue-500/40 transition">
              <div className="flex items-center gap-2 text-amber-300">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-xs uppercase tracking-wider">Case study</span>
              </div>
              <h3 className="mt-3 font-semibold text-white">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{p.summary}</p>
              <div className="mt-4">
                <button className="text-sm text-blue-300 hover:text-blue-200">Read more →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
