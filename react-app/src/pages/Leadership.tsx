import { Link } from 'react-router'
import { ArrowUpRight, Users, Cpu, Target, HeartHandshake } from 'lucide-react'

const pillars=[
  {icon:Users,title:'People first',copy:'Build trust, develop practical skills and make expectations clear. A strong IT team should understand the people behind every request.'},
  {icon:Cpu,title:'Technology with purpose',copy:'Choose stable, secure and maintainable solutions that fit the organisation’s capabilities and priorities.'},
  {icon:Target,title:'Business outcomes',copy:'Translate technical improvements into service quality, operational efficiency, cost management and measurable results.'},
]
export default function Leadership(){
  return <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
    <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">My leadership approach</p>
    <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">People First <span className="text-blue-400">—</span> Technology <span className="text-blue-400">—</span> Business</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">I believe IT leadership means helping people do their best work, building dependable technology and showing clearly how those decisions support the business.</p>
    <div className="mt-12 grid gap-5 md:grid-cols-3">{pillars.map(x=><article key={x.title} className="rounded-3xl border border-white/10 bg-white/[.05] p-8 backdrop-blur-xl"><x.icon size={31} className="text-blue-300"/><h2 className="mt-6 text-2xl font-semibold text-white">{x.title}</h2><p className="mt-4 leading-8 text-slate-300">{x.copy}</p></article>)}</div>
    <section className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/[.04] p-8 md:grid-cols-[auto_1fr] md:p-10"><HeartHandshake className="text-blue-300" size={38}/><div><h2 className="text-2xl font-bold text-white">What this looks like in practice</h2><p className="mt-4 leading-8 text-slate-300">I focus on coaching and knowledge sharing, defining responsibilities, introducing meaningful performance indicators and giving technical teams room to contribute to decisions. Across multi-site environments, I have coordinated with business units, vendors and colleagues to keep priorities aligned.</p><p className="mt-4 leading-8 text-slate-300">My goal is to move beyond fixing incidents: establish repeatable processes, remove avoidable friction and build an IT function that people can rely on.</p></div></section>
    <Link to="/career" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">Explore my career <ArrowUpRight size={17}/></Link>
  </main>
}