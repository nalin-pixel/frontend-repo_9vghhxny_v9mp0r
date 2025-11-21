import { Menu, X, Cpu, Rocket } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 grid place-items-center shadow-lg shadow-blue-500/30">
              <Cpu className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">NimbusTech</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow hover:opacity-90 transition">
              <Rocket className="h-4 w-4" />
              Start a project
            </a>
          </div>

          <button onClick={toggle} className="md:hidden text-white p-2">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="grid gap-4">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-white"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow hover:opacity-90 transition"
              >
                <Rocket className="h-4 w-4" />
                Start a project
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
