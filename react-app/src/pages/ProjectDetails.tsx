import { Link, useParams } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/portfolioProjects'
import { projectMetadata } from '../data/projectMetadata'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <section className="mx-auto max-w-5xl px-6 py-24"><h1 className="text-4xl font-bold">Project not found</h1><Link to="/projects" className="mt-6 inline-block text-blue-400">Back to projects</Link></section>
  const meta = projectMetadata[project.id]
  const fields = [
    ['Project ID', project.id],
    ['Project Name', project.title],
    ['Short Description (1–2 lines)', project.summary],
    ['Company / Organization', project.company],
    ['Business Unit / Location', meta?.businessUnit],
    ['Start Date', meta?.startDate],
    ['End Date', meta?.endDate],
    ['Status', meta?.status],
    ['Category', meta?.originalCategory || project.category],
    ['My Role / Title', meta?.role],
    ['My Responsibilities & Decisions', project.responsibilities],
    ['Business Problem / Challenge', project.challenge],
    ['Project Objective', project.objective],
    ['Solution / Approach', project.approach],
    ['Project Scope & Deliverables', project.scope],
    ['Technology / Tools', project.technologies],
    ['Team & Stakeholders', project.stakeholders],
    ['Business Value / ROI', project.highlights || project.impact],
    ['Outcome / Results Summary', project.impact],
    ['Key Lessons Learned', project.lessons],
  ]
  return <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
    <Link to="/projects" className="inline-flex items-center gap-2 text-blue-300"><ArrowLeft size={17}/> All projects</Link>
    <p className="mt-12 text-xs font-semibold uppercase tracking-[.2em] text-blue-400">{project.category}</p>
    <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">{project.title}</h1>
    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>
    {project.image && <img src={project.image} alt={`Illustration for ${project.title}`} className="mt-10 w-full rounded-2xl border border-white/10 object-cover" />}
    <h2 className="mt-12 text-2xl font-bold">Complete project profile</h2>
    <p className="mt-2 text-sm text-slate-400">All available project information is displayed below. Fields without source data remain empty.</p>
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {fields.map(([label,value]) => <section key={label} className="rounded-xl border border-white/10 bg-white/[.04] p-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-300">{label}</h3>
        <p className={`mt-3 whitespace-pre-line leading-7 ${value ? 'text-slate-200' : 'text-slate-400'}`}>{value || ''}</p>
      </section>)}
    </div>
  </article>
}
