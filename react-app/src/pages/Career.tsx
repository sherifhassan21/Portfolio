import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, BriefcaseBusiness, MapPin, ArrowUpRight, CheckCircle2, Users, Server, TrendingUp } from 'lucide-react'
import { Link } from 'react-router'
import { careerRoles } from '../data/careerData'
import type { AchievementGroup } from '../data/careerData'

const categoryStyles = [
  { icon: Users, accent: 'text-cyan-300', border: 'border-cyan-400/20', bg: 'bg-cyan-400/5' },
  { icon: Server, accent: 'text-blue-300', border: 'border-blue-400/20', bg: 'bg-blue-400/5' },
  { icon: TrendingUp, accent: 'text-indigo-300', border: 'border-indigo-400/20', bg: 'bg-indigo-400/5' },
]

function AchievementSection({ group, index }: { group: AchievementGroup; index: number }) {
  const style = categoryStyles[index % categoryStyles.length]
  const Icon = style.icon
  return <section className={`rounded-2xl border ${style.border} ${style.bg} p-5 sm:p-6`}>
    <h4 className={`flex items-center gap-2.5 text-sm font-bold leading-6 ${style.accent}`}><Icon size={18} className="shrink-0"/>{group.title}</h4>
    <ul className="mt-5 space-y-4">{group.items.map((item,i) => {
      const colon = item.indexOf(':')
      const label = colon > -1 ? item.slice(0,colon) : ''
      const detail = colon > -1 ? item.slice(colon+1).trim() : item
      return <li key={i} className="flex gap-3 text-sm leading-7 text-slate-300">
        <CheckCircle2 size={16} className="mt-1.5 shrink-0 text-blue-300"/>
        <span>{label && <strong className="font-semibold text-white">{label}: </strong>}{detail}</span>
      </li>
    })}</ul>
  </section>
}

export function CareerTimeline({ compact = false }: { compact?: boolean }) {
  const [expanded, setExpanded] = useState<string | null>(compact ? null : careerRoles[0].id)
  const visible = compact ? careerRoles.slice(0,3) : careerRoles
  return <div className="relative mx-auto max-w-6xl">
    <div className="absolute bottom-8 left-[15px] top-5 w-px bg-gradient-to-b from-blue-400 via-cyan-500/40 to-transparent md:left-[23px]" aria-hidden="true"/>
    <div className="space-y-6">{visible.map((role,index) => {
      const open = expanded === role.id
      return <motion.article key={role.id} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.42,delay:index*.035}} className="relative pl-11 md:pl-16">
        <span className="absolute left-[8px] top-8 h-4 w-4 rounded-full border-[3px] border-[#0b1528] bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,.65)] md:left-[16px]" aria-hidden="true"/>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.045] shadow-xl backdrop-blur-xl transition-colors hover:border-blue-400/40">
          <button type="button" aria-expanded={open} aria-controls={`career-details-${role.id}`} onClick={()=>setExpanded(open?null:role.id)} className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-7">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">{role.period}</p>
              <h3 className="mt-2 text-xl font-bold leading-tight text-white md:text-2xl">{role.title}</h3>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={16} className="shrink-0 text-blue-300"/>{role.company}</span>
                <span className="inline-flex items-center gap-2"><MapPin size={16} className="shrink-0 text-blue-300"/>{role.location}</span>
              </div>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">{role.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">{role.focus.map(tag=><span key={tag} className="rounded-full border border-blue-300/15 bg-blue-300/[.08] px-3 py-1 text-xs text-blue-100">{tag}</span>)}</div>
              <span className="mt-4 block text-xs font-semibold text-blue-300">{open?'Hide achievements':`View all ${role.groups.reduce((count,g)=>count+g.items.length,0)} achievements`}</span>
            </div>
            <ChevronDown size={22} className={`mt-1 shrink-0 text-blue-300 transition-transform duration-300 ${open?'rotate-180':''}`}/>
          </button>
          <AnimatePresence initial={false}>{open && <motion.div id={`career-details-${role.id}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}} className="overflow-hidden">
            <div className="space-y-4 border-t border-white/10 p-4 sm:p-7">{role.groups.map((g,i)=><AchievementSection key={g.title} group={g} index={i}/>)}</div>
          </motion.div>}</AnimatePresence>
        </div>
      </motion.article>
    })}</div>
    {compact && <Link to="/career" className="ml-11 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white md:ml-16">Explore the complete career journey <ArrowUpRight size={17}/></Link>}
  </div>
}

export default function Career() {
  return <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
    <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Professional journey</p>
    <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">From technology operations to <span className="text-blue-400">IT leadership.</span></h1>
    <p className="mb-14 mt-6 max-w-3xl text-lg leading-8 text-slate-300">Over 13 years of IT operations, infrastructure management, digital transformation and team leadership across Egypt and Saudi Arabia. Explore each role to see the complete achievements from my latest CV.</p>
    <CareerTimeline/>
  </main>
}
