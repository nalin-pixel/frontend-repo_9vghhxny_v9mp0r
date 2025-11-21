import { Code2, Cloud, ShieldCheck, Zap } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Next.js, TypeScript, and edge-ready architectures for high performance web apps.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'CI/CD, observability, and autoscaling on AWS, Vercel, and Cloudflare.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Security-first builds with auth, RBAC, audits, and compliance best practices.'
  },
  {
    icon: Zap,
    title: 'AI Enablement',
    desc: 'Integrations with LLMs, vector stores, and workflow automation.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-300/80">End-to-end delivery you can trust. Built with modern tooling and proven delivery practices.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-blue-500/40 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/80 to-violet-500/80 grid place-items-center text-white shadow-md shadow-blue-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-24 bg-gradient-to-b from-blue-500/10 to-transparent" />
    </section>
  )
}
