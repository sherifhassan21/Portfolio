import { Link } from 'react-router'
import { ArrowUpRight, BookOpen, Lightbulb, MessageCircle } from 'lucide-react'
const topics=[
{title:'IT operations & service delivery',desc:'How structured workflows, clear ownership and practical service management help teams perform consistently.',icon:BookOpen},
{title:'Technology decisions & business value',desc:'Thinking about cost, reliability, change management and long-term maintainability before investing.',icon:Lightbulb},
{title:'AI, automation & open source',desc:'Exploring where practical automation can remove repetitive work without adding unnecessary complexity.',icon:MessageCircle},
]
export default function Insights(){
 return <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
 <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Ideas and perspectives</p><h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">Insights</h1>
 <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">This space brings together the topics I work on and care about. Rather than presenting unpublished articles as finished content, here are the themes I plan to write about.</p>
 <div className="mt-12 grid gap-6 md:grid-cols-3">{topics.map(t=><article key={t.title} className="rounded-3xl border border-white/10 bg-white/[.05] p-7"><t.icon size={30} className="text-blue-300"/><h2 className="mt-5 text-xl font-semibold text-white">{t.title}</h2><p className="mt-4 text-sm leading-7 text-slate-300">{t.desc}</p></article>)}</div>
 <section className="mt-14 rounded-3xl border border-blue-400/20 bg-blue-400/[.07] p-8"><h2 className="text-2xl font-semibold text-white">Explore the work behind these ideas</h2><p className="mt-3 max-w-2xl leading-8 text-slate-300">My project profiles show the technologies, choices and business challenges behind real implementations.</p><Link className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-300 hover:text-white" to="/projects">Browse projects <ArrowUpRight size={17}/></Link></section>
 </main>
}