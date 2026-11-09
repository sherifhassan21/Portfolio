import { Link } from 'react-router'
import { ArrowUpRight, Users, Server, TrendingUp } from 'lucide-react'

const pillars = [
  { icon: Users, title: 'People first', description: 'Teams thrive when ownership is clear, skills are developed and communication stays honest.' },
  { icon: Server, title: 'Technology that works', description: 'Reliable infrastructure, secure systems and thoughtful automation are the foundation of great operations.' },
  { icon: TrendingUp, title: 'Business value', description: 'The purpose of IT is to solve meaningful problems, enable growth and improve the way a business runs.' },
]

export default function About() {
  return <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
    <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-400">About me</p>
    <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">The best technology decisions start with <span className="text-blue-400">people and business needs.</span></h1>
    <div className="mt-10 grid gap-10 lg:grid-cols-[1.45fr_1fr]">
      <div className="space-y-5 text-lg leading-9 text-slate-300">
        <p>I'm Sherif Mohamed, an IT operations and digital transformation professional with more than 13 years of experience supporting and leading technology across Egypt and Saudi Arabia.</p>
        <p>My career has taken me from hands-on IT support to managing multi-site operations, improving infrastructure and cybersecurity, rolling out ERP systems and supporting the people who depend on technology every day.</p>
        <p>I enjoy bridging the gap between technical teams and business stakeholders: understanding the problem first, setting clear priorities and helping a team deliver outcomes that can actually be measured.</p>
      </div>
      <aside className="self-start rounded-3xl border border-white/10 bg-white/[.05] p-7 backdrop-blur-xl">
        <p className="text-sm font-medium text-blue-300">At a glance</p>
        <dl className="mt-5 space-y-5 text-sm">
          <div><dt className="text-slate-400">Experience</dt><dd className="mt-1 font-semibold text-white">13+ years</dd></div>
          <div><dt className="text-slate-400">Industries</dt><dd className="mt-1 text-slate-200">Automotive, entertainment, retail, logistics and IT services</dd></div>
          <div><dt className="text-slate-400">Geographies</dt><dd className="mt-1 text-slate-200">Egypt and Saudi Arabia</dd></div>
          <div><dt className="text-slate-400">Focus</dt><dd className="mt-1 text-slate-200">IT leadership, infrastructure, governance, transformation and people development</dd></div>
        </dl>
      </aside>
    </div>
    <section className="mt-20"><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-400">My approach</p><h2 className="mt-3 text-3xl font-bold text-white">People First — Technology — Business</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{pillars.map(p=><article key={p.title} className="rounded-2xl border border-white/10 bg-white/[.04] p-7"><p.icon size={29} className="text-blue-300"/><h3 className="mt-5 text-xl font-semibold text-white">{p.title}</h3><p className="mt-3 leading-7 text-slate-300">{p.description}</p></article>)}</div></section>
    <div className="mt-12 flex flex-wrap gap-4"><Link to="/career" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">Explore my career <ArrowUpRight size={17}/></Link><Link to="/projects" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">See my projects <ArrowUpRight size={17}/></Link></div>
  </main>
}