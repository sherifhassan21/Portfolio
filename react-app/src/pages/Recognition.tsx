import { Link } from 'react-router'
import { Award, GraduationCap, ArrowUpRight } from 'lucide-react'
export default function Recognition(){
return <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
<p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Professional development</p>
<h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">Recognition & Milestones</h1>
<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Career progress, learning and meaningful projects are milestones worth reflecting on. Formal awards and recognitions will be added here when supporting details are available.</p>
<div className="mt-12 grid gap-5 md:grid-cols-2"><article className="rounded-3xl border border-white/10 bg-white/[.05] p-8"><Award className="text-blue-300" size={32}/><h2 className="mt-5 text-xl font-semibold text-white">Career progression</h2><p className="mt-3 leading-8 text-slate-300">From technical support and team leadership to multi-site IT operations and digital transformation management.</p><Link to="/career" className="mt-6 inline-flex items-center gap-2 text-blue-300 hover:text-white">See career journey <ArrowUpRight size={17}/></Link></article>
<article className="rounded-3xl border border-white/10 bg-white/[.05] p-8"><GraduationCap className="text-blue-300" size={32}/><h2 className="mt-5 text-xl font-semibold text-white">Academic achievement</h2><p className="mt-3 leading-8 text-slate-300">Graduated from Future Academy with an Excellent result (91.2%), ranked fourth.</p><Link to="/education" className="mt-6 inline-flex items-center gap-2 text-blue-300 hover:text-white">Education and learning <ArrowUpRight size={17}/></Link></article></div>
</main>
}