import { Code2, BriefcaseBusiness, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#081120] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
        <div>
          <p className="font-semibold text-white">Sherif Mohamed</p>
          <p className="mt-1 text-sm text-slate-400">
            IT Operations & Digital Transformation Leader
          </p>
        </div>

        <div className="flex gap-5 text-slate-400">
          <a href="https://github.com/sherifhassan21" aria-label="GitHub" target="_blank" rel="noreferrer"><Code2 /></a>
          <a href="https://www.linkedin.com/in/sherifhassanm" aria-label="LinkedIn" target="_blank" rel="noreferrer"><BriefcaseBusiness /></a>
          <a href="mailto:sherifhassan21@gmail.com" aria-label="Email"><Mail /></a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Sherif Mohamed.
        </p>
      </div>
    </footer>
  )
}
