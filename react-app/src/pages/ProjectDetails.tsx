import { Link, useParams } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/portfolioProjects'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <section className="mx-auto max-w-5xl px-6 py-24"><h1 className="text-4xl font-bold">Project not found</h1><Link to="/projects" className="mt-6 inline-block text-blue-400">Back to projects</Link></section>
  const sections = [
    ['The challenge', project.challenge],
    ['My approach', project.approach],
    ['Business outcome', project.impact],
  ]
  return <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
    <Link to="/projects" className="inline-flex items-center gap-2 text-blue-300"><ArrowLeft size={17}/> All projects</Link>
    <p className="mt-12 text-xs font-semibold uppercase tracking-[.2em] text-blue-400">{project.category}</p>
    <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">{project.title}</h1>
    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>
    {project.image && <img src={project.image} alt={`Illustration for ${project.title}`} className="mt-10 w-full rounded-2xl border border-white/10 object-cover" />}
    <div className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-sm sm:grid-cols-2">
      <div><span className="text-slate-400">Company:</span> {project.company}</div>
      <div><span className="text-slate-400">Technology:</span> {project.technologies}</div>
    </div>
    <div className="mt-12 grid gap-6 md:grid-cols-2">{sections.map(([title,body])=><section key={title} className="rounded-xl border border-white/10 bg-white/[.03] p-6"><h2 className="text-xl font-semibold text-white">{title}</h2><p className="mt-4 leading-7 text-slate-300">{body}</p></section>)}</div>
  </article>
}
