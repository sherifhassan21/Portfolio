import { GraduationCap, BookOpenCheck, BadgeCheck } from 'lucide-react'

const courses = [
  {name:'Professional Diploma in Project Management',org:'Cairo University — Faculty of Graduate Studies for Statistical Research',status:'In progress'},
  {name:'ITIL Training',org:'IT Service Management',status:'Completed · 2025'},
  {name:'PMP Preparation Training',org:'Project Management Professional preparation',status:'Training completed'},
]
export default function Education() {
  return <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
    <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Continuous development</p><h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">Education & Learning</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Learning is part of how I lead: strengthening technical foundations while continuing to develop project management and business skills.</p>
    <section className="mt-12 rounded-3xl border border-white/10 bg-white/[.05] p-7 md:p-10"><GraduationCap className="text-blue-300" size={34}/><p className="mt-5 text-xs font-semibold uppercase tracking-wide text-blue-300">Academic background</p><h2 className="mt-3 text-2xl font-bold text-white">Bachelor of Information Technology</h2><p className="mt-2 text-slate-300">Future Academy, Cairo · 2008–2012</p><p className="mt-4 text-sm text-slate-400">Graduated with Excellent (91.2%), ranked 4th.</p></section>
    <h2 className="mt-16 text-2xl font-bold text-white">Professional development</h2><div className="mt-6 grid gap-4">{courses.map(c=><article key={c.name} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[.04] p-6"><BookOpenCheck size={25} className="mt-1 shrink-0 text-blue-300"/><div><h3 className="text-lg font-semibold text-white">{c.name}</h3><p className="mt-2 text-sm text-slate-300">{c.org}</p><p className="mt-3 inline-flex items-center gap-2 text-sm text-blue-300"><BadgeCheck size={16}/>{c.status}</p></div></article>)}</div>
    <p className="mt-8 text-sm text-slate-400">Training and preparation are listed as such; they are not presented as awarded professional certifications.</p>
  </main>
}