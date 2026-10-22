import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowUpRight, CalendarDays, Building2, BriefcaseBusiness } from 'lucide-react'
import { projects } from '../data/portfolioProjects'
import { projectMetadata } from '../data/projectMetadata'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-3xl font-bold text-white">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-blue-400"><ArrowLeft size={18}/> Back to projects</Link>
    </section>
  )

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
  const summaryFields = fields.slice(0, 10)
  const detailFields = fields.slice(10)
  const timeRange = [meta?.startDate, meta?.endDate].filter(Boolean).join(' — ')

  return (
    <article className="mx-auto max-w-6xl px-6 py-12 md:py-20">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-white">
        <ArrowLeft size={17}/> Back to all projects
      </Link>

      <header className="mt-9 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#172a48] via-[#111e35] to-[#0b1528] p-5 shadow-2xl sm:p-7 lg:p-9">
        <div className="grid gap-7 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-10">
          {project.image ? (
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#172840]">
              <img src={project.image} alt={`Illustration for ${project.title}`} className="aspect-[4/3] h-full w-full object-cover object-top md:aspect-square" />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/10 bg-[#172840] text-5xl font-bold text-blue-400/70 md:aspect-square" aria-hidden="true">SM.</div>
          )}
          <div className="min-w-0 self-center">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">{project.category}</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><Building2 size={17} className="text-blue-400"/>{project.company}</span>
              {meta?.role && <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={17} className="text-blue-400"/>{meta.role}</span>}
              {timeRange && <span className="inline-flex items-center gap-2"><CalendarDays size={17} className="text-blue-400"/>{timeRange}</span>}
            </div>
          </div>
        </div>
      </header>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Project overview</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Project information</h2>
        </div>
        <span className="text-xs text-slate-500">Original fields from the portfolio</span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
        {summaryFields.map(([label, value], i) => (
          <div key={label} className={`grid gap-2 px-5 py-4 sm:grid-cols-[230px_minmax(0,1fr)] sm:gap-6 sm:px-7 ${i ? 'border-t border-white/10' : ''}`}>
            <h3 className="text-sm font-medium text-blue-300">{label}</h3>
            <p className="min-h-5 whitespace-pre-line break-words text-sm leading-7 text-slate-200">{value || ''}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Behind the project</p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Challenge, approach & impact</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {detailFields.map(([label, value]) => (
            <section key={label} className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
              <h3 className="text-sm font-semibold text-blue-300">{label}</h3>
              <p className="mt-3 min-h-7 whitespace-pre-line break-words leading-7 text-slate-200">{value || ''}</p>
            </section>
          ))}
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-8">
        <Link to="/projects" className="inline-flex items-center gap-2 font-medium text-blue-300 transition hover:text-white">Explore other projects <ArrowUpRight size={17}/></Link>
      </div>
    </article>
  )
}
