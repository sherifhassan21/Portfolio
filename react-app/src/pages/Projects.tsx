import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, Search, FolderKanban } from 'lucide-react'
import { motion } from 'motion/react'
import { projects } from '../data/portfolioProjects'

export default function Projects() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filtered = useMemo(() => projects.filter(p =>
    (category === 'All' || p.category === category) &&
    `${p.title} ${p.summary} ${p.company} ${p.technologies}`.toLowerCase().includes(query.toLowerCase())
  ), [query, category])
  return <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
    <span className="text-sm font-semibold uppercase tracking-[.2em] text-blue-400">Selected work</span>
    <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">Projects & Initiatives</h1>
    <p className="mt-5 max-w-3xl text-lg text-slate-300">Technology initiatives shaped around business needs — from infrastructure and cybersecurity to transformation, efficiency and team development.</p>
    <div className="mt-9 flex flex-col gap-4 md:flex-row">
      <label className="flex flex-1 items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4">
        <Search size={18} className="text-slate-400"/>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects, technologies or companies" aria-label="Search projects" className="w-full bg-transparent py-3 text-white outline-none placeholder:text-slate-400" />
      </label>
      <select aria-label="Filter projects by category" value={category} onChange={e=>setCategory(e.target.value)} className="max-w-full rounded-xl border border-white/15 bg-[#15223a] px-4 py-3 text-white md:max-w-sm">{categories.map(c=><option key={c}>{c}</option>)}</select>
    </div>
    <p className="mt-5 text-sm text-slate-400">{filtered.length} projects</p>
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map(p=><Link to={`/projects/${p.slug}`} key={p.id} className="group flex overflow-hidden rounded-3xl border border-white/10 bg-white/[.045] shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-white/[.08]">
      <motion.article initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.4}} className="flex w-full flex-col">
        <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-[#203b65] to-[#0c162b]">{p.image ? <img src={p.image} alt={`Illustration for ${p.title}`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" /> : <FolderKanban size={48} className="text-blue-300"/>}</div>
        <div className="flex flex-1 flex-col p-6"><div className="mb-2 text-xs text-slate-500">{p.id}</div>
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">{p.category}</span>
          <h2 className="mt-3 text-xl font-semibold text-white">{p.title}</h2>
          <p className="mt-2 text-sm text-slate-400">{p.company}</p>
          <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">{p.summary}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">View project <ArrowUpRight size={17}/></span>
        </div>
      </motion.article>
    </Link>)}</div>
    {!filtered.length && <p className="py-14 text-center text-slate-300">No projects match your search.</p>}
  </section>
}
