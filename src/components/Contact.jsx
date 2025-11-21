import { Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s build together</h2>
          <p className="mt-3 text-slate-300/80">Tell us about your goals. We’ll reply within one business day.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input required type="email" placeholder="Work email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <input placeholder="Company (optional)" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <textarea required placeholder="What are you building?" rows={5} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <button type="submit" className="inline-flex items-center gap-2 w-fit px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow hover:opacity-90 transition">
            <Send className="h-4 w-4" />
            {sent ? 'Sent!' : 'Request proposal'}
          </button>
        </form>
      </div>
    </section>
  )
}
