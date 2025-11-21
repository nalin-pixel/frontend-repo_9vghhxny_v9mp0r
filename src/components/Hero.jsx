import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-200 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Now accepting Q1 engagements
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            We build delightful products with modern web tech
          </h1>
          <p className="mt-6 text-slate-200/80 text-lg">
            From concept to launch — design, engineering, and growth. We craft fast, secure, and scalable apps your users will love.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow hover:opacity-90 transition">
              Get a proposal
            </a>
            <a href="#work" className="px-5 py-3 rounded-lg bg-white/10 text-white backdrop-blur hover:bg-white/20 transition">
              See our work
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}
