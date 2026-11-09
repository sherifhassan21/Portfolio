import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolioProjects'

const selected = ['P001','P002','P005','P012','P010','P007']
export default function CaseStudies() {
  const studies = selected.map(id=>projects.find(p=>p.id===id)).filter((p):p is (typeof projects)[number]=>Boolean(p))
  return <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
    <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Selected work in depth</p>
    <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">Case Studies</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Behind every infrastructure upgrade or transformation is a business challenge, a set of decisions and a team delivering the work. Explore selected projects through that lens.</p>
    <div className="mt-12 grid gap-6 md:grid-cols-2">{studies.map(p=><Link to={`/projects/${p.slug}`} key={p.id} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.05] transition hover:border-blue-400/50 hover:bg-white/[.075]">{p.image&&<img src={p.image} alt="" className="aspect-[16/8] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy"/>}<div className="p-7"><p className="text-xs font-semibold uppercase tracking-wider text-blue-300">{p.category} · {p.company}</p><h2 className="mt-3 text-2xl font-semibold text-white">{p.title}</h2><p className="mt-4 text-sm leading-7 text-slate-300">{p.challenge}</p>{p.impact&&<p className="mt-4 border-l-2 border-blue-400 pl-4 text-sm leading-7 text-slate-200">{p.impact}</p>}<span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">Read project profile <ArrowUpRight size={17}/></span></div></Link>)}</div>
  </main>
}