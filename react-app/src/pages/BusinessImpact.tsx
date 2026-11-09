import { Link } from 'react-router'
import { ArrowUpRight, TrendingUp, Building2, Clock3, Users } from 'lucide-react'
const outcomes=[
{value:'SAR 120K+',label:'Annual telecom savings',detail:'Telecommunications modernisation through 3CX.',href:'/projects/3cx-telecommunications-cost-optimization'},
{value:'57%',label:'Faster retail IT setup',detail:'Reduced average store IT deployment from seven days to three.',href:'/projects/store-openings'},
{value:'35%',label:'Operational efficiency improvement',detail:'Standardised IT processes across multiple business units.',href:'/projects/it-process-standardization-across-business-units'},
{value:'92',label:'ERP users supported',detail:'Enterprise Odoo transformation and cross-functional rollout.',href:'/projects/enterprise-odoo-erp-transformation'},
]
export default function BusinessImpact(){
return <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Beyond the technology</p>
<h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">Business Impact</h1>
<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Technology matters most when it delivers a better result for the people and businesses using it. These selected outcomes come from projects across my career.</p>
<div className="mt-12 grid gap-5 sm:grid-cols-2">{outcomes.map(x=><Link to={x.href} key={x.label} className="group rounded-3xl border border-white/10 bg-white/[.05] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/50"><div className="flex items-start justify-between gap-4"><p className="text-4xl font-bold text-white md:text-5xl">{x.value}</p><ArrowUpRight className="text-blue-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" size={21}/></div><h2 className="mt-5 text-xl font-semibold text-blue-300">{x.label}</h2><p className="mt-3 leading-7 text-slate-300">{x.detail}</p></Link>)}</div>
<section className="mt-16"><h2 className="text-2xl font-bold text-white">Where I focus</h2><div className="mt-7 grid gap-5 md:grid-cols-3">{[{icon:TrendingUp,title:'Efficiency',detail:'Simplifying workflows and reducing avoidable manual tasks.'},{icon:Building2,title:'Reliability',detail:'Improving the availability, governance and resilience of business-critical systems.'},{icon:Users,title:'People and adoption',detail:'Ensuring teams understand, own and successfully use technology changes.'}].map(x=><article className="rounded-2xl border border-white/10 p-6" key={x.title}><x.icon className="text-blue-300" size={28}/><h3 className="mt-4 text-lg font-semibold text-white">{x.title}</h3><p className="mt-3 leading-7 text-slate-300">{x.detail}</p></article>)}</div></section>
<div className="mt-12 flex flex-wrap gap-4"><Link className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500" to="/projects">Explore all projects <ArrowUpRight size={17}/></Link><Link className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10" to="/case-studies"><Clock3 size={17}/> View case studies</Link></div>
</main>
}