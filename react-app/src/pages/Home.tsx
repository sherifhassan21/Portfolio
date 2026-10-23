import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Compass, Users, TrendingUp, Mail } from 'lucide-react'
import { projects } from '../data/portfolioProjects'
import { CareerTimeline } from './Career'

const stats = [
  { value: '13+', label: 'Years in IT & operations' },
  { value: 'SAR 120K+', label: 'Annual telecom savings' },
  { value: '60%', label: 'Less manual ERP work' },
  { value: '57%', label: 'Faster retail IT deployments' },
]
const focus = [
  { icon: Compass, title: 'Technology strategy', copy: 'Building resilient systems that support business priorities, not technology for its own sake.' },
  { icon: TrendingUp, title: 'Business transformation', copy: 'Improving processes, controlling costs and creating measurable value from technology investments.' },
  { icon: Users, title: 'People leadership', copy: 'Helping teams grow through clear ownership, practical coaching and a culture of continuous improvement.' },
]
const featuredIds = ['P001', 'P002', 'P005']

export default function Home() {
  const featured = featuredIds.map(id => projects.find(p => p.id===id)).filter((p): p is (typeof projects)[number] => Boolean(p))
  return <div className="overflow-hidden">
    <section className="relative isolate px-6 pb-24 pt-20 md:pb-28 md:pt-28">
      <div className="pointer-events-none absolute -right-20 -top-36 -z-10 h-[540px] w-[540px] rounded-full bg-blue-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute -left-44 top-36 -z-10 h-[430px] w-[430px] rounded-full bg-cyan-400/10 blur-[110px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.35fr_.65fr]">
        <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-200 backdrop-blur-xl">IT OPERATIONS · DIGITAL TRANSFORMATION · LEADERSHIP</p>
          <p className="text-lg font-semibold text-slate-200">Hello, I'm</p>
          <h1 className="mt-2 bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-5xl font-extrabold leading-[1.12] tracking-tight text-transparent sm:text-6xl lg:text-7xl">Sherif Mohamed<span className="text-blue-400">.</span></h1>
          <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35,duration:.8}} className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">Turning technology into <span className="text-blue-400">business value.</span></motion.h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">An IT and digital transformation leader with 13+ years of experience across Egypt and Saudi Arabia. I connect enterprise technology, operational excellence and people leadership to measurable business outcomes.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link to="/projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">Explore my work <ArrowRight size={18}/></Link><Link to="/career" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"><BriefcaseBusiness size={18}/> My career</Link></div>
        </motion.div>
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.7}} className="relative mx-auto w-full max-w-[390px] self-end lg:max-w-[460px]">
          <img
            src="https://raw.githubusercontent.com/sherifhassan21/Portfolio/main/sherifmohamed.png"
            alt="Sherif Mohamed"
            className="block h-auto w-full object-contain"
            fetchPriority="high"
          />
        </motion.div>
      </div>
      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">{stats.map((s,i)=><motion.div key={s.label} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} className="rounded-2xl border border-white/10 bg-white/[.05] p-5 backdrop-blur-xl md:p-6"><p className="text-2xl font-bold text-white sm:text-3xl">{s.value}</p><p className="mt-3 text-sm text-slate-400">{s.label}</p></motion.div>)}</div>
    </section>
    <section className="border-y border-white/10 bg-white/[.025] px-6 py-20 md:py-24"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">What drives my work</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Technology. Business. People.</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{focus.map(x=><div key={x.title} className="rounded-2xl border border-white/10 bg-white/[.045] p-7 shadow-lg backdrop-blur-xl"><x.icon size={28} className="text-blue-300"/><h3 className="mt-5 text-xl font-semibold">{x.title}</h3><p className="mt-3 leading-7 text-slate-300">{x.copy}</p></div>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Selected work</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Projects that delivered value</h2></div><Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white">View all projects <ArrowUpRight size={17}/></Link></div><div className="mt-9 grid gap-6 md:grid-cols-3">{featured.map(p=><Link key={p.id} to={`/projects/${p.slug}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.05] backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/40">{p.image&&<img src={p.image} alt={`Illustration for ${p.title}`} loading="lazy" className="aspect-video w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"/>}<div className="p-6"><p className="text-xs font-semibold uppercase text-blue-300">{p.category}</p><h3 className="mt-3 text-xl font-semibold">{p.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{p.summary}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">View project <ArrowUpRight size={16}/></span></div></Link>)}</div></section>
    <section className="border-y border-white/10 bg-white/[.025] px-6 py-20 md:py-24"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">My journey</p><h2 className="mb-10 mt-3 text-3xl font-bold md:text-4xl">Experience built over time</h2><CareerTimeline compact/></div></section>
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24"><div className="rounded-3xl border border-blue-300/20 bg-gradient-to-br from-blue-600/20 via-white/[.06] to-cyan-400/10 p-8 backdrop-blur-2xl md:p-12"><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Let's connect</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Let's make technology work better for business.</h2><p className="mt-5 max-w-2xl leading-8 text-slate-300">Open to conversations about IT leadership, business transformation and meaningful technology projects.</p><Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"><Mail size={18}/> Get in touch <ArrowUpRight size={17}/></Link></div></section>
  </div>
}
