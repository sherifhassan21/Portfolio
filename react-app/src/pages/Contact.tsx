import { ArrowUpRight, Code2, BriefcaseBusiness, Mail, MapPin } from 'lucide-react'

const links=[
{label:'LinkedIn',value:'Connect professionally',href:'https://www.linkedin.com/in/sherifhassanm',icon:BriefcaseBusiness},
{label:'GitHub',value:'Explore code and repositories',href:'https://github.com/sherifhassan21',icon:Code2},
{label:'Email',value:'Send an email',href:'mailto:sherifhassan21@gmail.com',icon:Mail},
]
export default function Contact(){
return <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
<p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Get in touch</p><h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">Let’s Connect.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">I’m happy to connect about IT leadership, digital transformation, infrastructure operations and meaningful technology projects.</p>
<div className="mt-12 grid gap-5 md:grid-cols-3">{links.map(x=><a key={x.label} href={x.href} target={x.href.startsWith('http')?'_blank':undefined} rel={x.href.startsWith('http')?'noopener noreferrer':undefined} className="group rounded-3xl border border-white/10 bg-white/[.05] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/50"><div className="flex items-center justify-between"><x.icon className="text-blue-300" size={30}/><ArrowUpRight size={19} className="text-slate-400 transition group-hover:text-blue-300"/></div><h2 className="mt-6 text-xl font-semibold text-white">{x.label}</h2><p className="mt-3 text-sm text-slate-300">{x.value}</p></a>)}</div>
<div className="mt-12 flex items-center gap-3 text-sm text-slate-400"><MapPin size={18} className="text-blue-300"/> Based in Egypt · Experience across Egypt and Saudi Arabia</div>
</main>
}