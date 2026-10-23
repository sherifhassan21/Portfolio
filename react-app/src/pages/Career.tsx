import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, BriefcaseBusiness, MapPin, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

const roles = [
  { title:'IT & Digital Transformation Manager', company:'Shadwan International Co.', period:'Aug 2025 – Aug 2026', place:'Jeddah, Saudi Arabia', intro:'Led infrastructure, cybersecurity, enterprise systems and digital transformation across a multi-business organization.', achievements:['Led the Odoo ERP transformation supporting 92 users and reducing manual operations by 60%.','Delivered SAR 120K+ in annual telecommunications savings through 3CX.','Established centralized IT service management and developed a four-member IT team.'], focus:['IT Strategy','Business Transformation','People Leadership'] },
  { title:'Country IT Operations Coordinator', company:'Majid Al Futtaim', period:'Jan 2024 – Aug 2025', place:'Cairo, Egypt', intro:'Coordinated IT operations and continuity across nine entertainment locations and three business units.', achievements:['Led E-Invoicing delivery for Magic Planet in line with Egyptian Tax Authority requirements.','Standardized service delivery practices, improving operational efficiency by 35% year-over-year.','Supported team development, vendor coordination and operational governance.'], focus:['Governance','Multi-site Operations','Stakeholders'] },
  { title:'Senior IT', company:'LC WAIKIKI', period:'Jan 2019 – Jan 2024', place:'Cairo, Egypt', intro:'Supported 20 stores and 370+ users while helping deliver technology-enabled retail expansion.', achievements:['Coordinated 21+ store opening and IT integration projects.','Reduced store IT setup time from seven days to three (57% faster).','Created 29 troubleshooting guides to strengthen user self-service.'], focus:['Retail Technology','Service Delivery','Cloud'] },
  { title:'IT Specialist', company:'Future Academy', period:'Jun 2016 – Dec 2018', place:'Cairo, Egypt', intro:'Managed the academy’s infrastructure, digital learning environments and end-user technology.', achievements:['Implemented wired-network improvements that reduced system failures by 60%.','Introduced desktop virtualization across 35+ lab desktops.','Improved asset tracking and supported training for IT team members.'], focus:['Infrastructure','Virtualization','Training'] },
  { title:'IT Support → IT Team Lead', company:'ITDATA', period:'Sep 2013 – Mar 2016', place:'Cairo, Egypt', intro:'Built a technical foundation in support and grew into a team leadership role.', achievements:['Progressed from IT support specialist to team lead.','Improved team productivity through structured coaching and knowledge-sharing.','Designed network and equipment allocation plans for a new head office.'], focus:['IT Support','Team Development','Service Quality'] },
]

export function CareerTimeline({ compact = false }: { compact?: boolean }) {
  const [expanded, setExpanded] = useState<number | null>(0)
  const visible = compact ? roles.slice(0, 3) : roles
  return <div className="relative mx-auto max-w-5xl">
    <div className="absolute bottom-8 left-[15px] top-5 w-px bg-gradient-to-b from-blue-400 via-cyan-500/40 to-transparent md:left-[23px]" aria-hidden="true"/>
    <div className="space-y-5">{visible.map((role,i) => <motion.div key={role.company} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.4,delay:i*.05}} className="relative pl-11 md:pl-16">
      <span className="absolute left-[8px] top-8 h-4 w-4 rounded-full border-[3px] border-[#0b1528] bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,.65)] md:left-[16px]" aria-hidden="true"/>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.05] shadow-lg backdrop-blur-xl transition hover:border-blue-400/40">
        <button type="button" aria-expanded={expanded===i} onClick={()=>setExpanded(expanded===i?null:i)} className="flex w-full items-start justify-between gap-3 p-5 text-left sm:p-7">
          <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-wider text-blue-300">{role.period}</p><h3 className="mt-2 text-xl font-bold text-white md:text-2xl">{role.title}</h3><div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300"><span className="inline-flex items-center gap-2"><BriefcaseBusiness size={15}/>{role.company}</span><span className="inline-flex items-center gap-2"><MapPin size={15}/>{role.place}</span></div><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{role.intro}</p></div>
          <ChevronDown className={`mt-2 shrink-0 text-blue-300 transition-transform ${expanded===i?'rotate-180':''}`} size={21}/>
        </button>
        <AnimatePresence initial={false}>{expanded===i && <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-7"><h4 className="mb-3 text-sm font-semibold text-white">Selected achievements</h4><ul className="space-y-3">{role.achievements.map(x=><li key={x} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"/>{x}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{role.focus.map(x=><span key={x} className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-xs text-blue-200">{x}</span>)}</div></div></motion.div>}</AnimatePresence>
      </div>
    </motion.div>)}</div>
    {compact && <Link to="/career" className="ml-11 mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white md:ml-16">Explore the full career journey <ArrowUpRight size={17}/></Link>}
  </div>
}

export default function Career() {
  return <section className="mx-auto max-w-7xl px-6 py-16 md:py-24"><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Professional journey</p><h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">From technology operations to <span className="text-blue-400">IT leadership.</span></h1><p className="mb-14 mt-6 max-w-3xl text-lg leading-8 text-slate-300">A career shaped by delivering reliable technology, enabling teams and connecting IT decisions to business priorities. Select a role to see its achievements.</p><CareerTimeline/></section>
}
