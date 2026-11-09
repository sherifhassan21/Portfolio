import { useState } from 'react'
import { motion } from 'motion/react'
import { BookOpen, CalendarDays, ExternalLink, GraduationCap, MapPin, ShieldCheck } from 'lucide-react'
import { academicBackground, trainingGroups } from '../data/educationData'
import type { EducationEntry } from '../data/educationData'

function InstitutionLogo({ entry }: { entry: EducationEntry }) {
  const [failed, setFailed] = useState(false)
  const monogram = entry.institution.split(/\s+/).filter(w => /[A-Za-z]/.test(w)).slice(0, 2).map(w => w[0]).join('').toUpperCase()
  return <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-sm font-bold text-blue-200" aria-label={entry.institution}>
    {entry.logoUrl && !failed ?
      <img src={entry.logoUrl} alt={`${entry.institution} website icon`} loading="lazy" className="h-10 w-10 object-contain" onError={() => setFailed(true)} /> :
      <span aria-hidden="true">{monogram || 'ED'}</span>}
  </div>
}

function CertificateLink({ entry }: { entry: EducationEntry }) {
  if (!entry.certificateUrl) return null
  return <a href={entry.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-lg border border-blue-300/30 bg-blue-400/10 px-3 py-2 text-xs font-semibold text-blue-200 transition hover:bg-blue-400/20">
    <ExternalLink size={14} /> View Certificate
  </a>
}

export default function Education() {
  const [activeGroup, setActiveGroup] = useState('all')
  const selectedGroups = activeGroup === 'all' ? trainingGroups : trainingGroups.filter(g => g.id === activeGroup)
  const totalTraining = trainingGroups.reduce((count, group) => count + group.entries.length, 0)
  return <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
    <motion.header initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">My learning journey</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">Education & <span className="text-blue-400">Professional Development</span></h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A foundation in information technology, strengthened by continuous learning in leadership, project management, cloud, data, cybersecurity and AI.</p>
      <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-200">
        <span className="rounded-full border border-white/10 bg-white/[.06] px-4 py-2">2 academic programs</span>
        <span className="rounded-full border border-white/10 bg-white/[.06] px-4 py-2">{totalTraining} training records</span>
        <span className="rounded-full border border-white/10 bg-white/[.06] px-4 py-2">4 professional focus areas</span>
      </div>
    </motion.header>

    <section className="mt-20" aria-labelledby="academic-heading">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl border border-blue-300/20 bg-blue-300/10 p-3"><GraduationCap size={24} className="text-blue-300" /></div>
        <div><p className="text-xs font-semibold uppercase tracking-[.17em] text-blue-400">Academic qualifications</p><h2 id="academic-heading" className="mt-1 text-2xl font-bold text-white md:text-3xl">Academic Background</h2></div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {academicBackground.map((entry, index) => <motion.article key={entry.id} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4,delay:index*.08}} className="rounded-3xl border border-white/10 bg-white/[.055] p-6 shadow-xl backdrop-blur-xl md:p-8">
          <div className="flex items-start gap-5">
            <InstitutionLogo entry={entry} />
            <div className="min-w-0">
              <h3 className="text-xl font-bold leading-7 text-white">{entry.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{entry.institution}</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
                {entry.location && <span className="inline-flex items-center gap-1.5"><MapPin size={14}/>{entry.location}</span>}
                <span className="inline-flex items-center gap-1.5"><CalendarDays size={14}/>{entry.period}</span>
              </div>
              {entry.status && <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200">{entry.status}</p>}
              {entry.detail && <p className="mt-4 text-sm leading-7 text-slate-300">{entry.detail}</p>}
              <div className="mt-5"><CertificateLink entry={entry}/></div>
            </div>
          </div>
        </motion.article>)}
      </div>
    </section>

    <section className="mt-20" aria-labelledby="training-heading">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl border border-blue-300/20 bg-blue-300/10 p-3"><BookOpen size={24} className="text-blue-300"/></div>
        <div><p className="text-xs font-semibold uppercase tracking-[.17em] text-blue-400">Continuous learning</p><h2 id="training-heading" className="mt-1 text-2xl font-bold text-white md:text-3xl">Professional Certifications & Training</h2></div>
      </div>
      <div className="mb-9 flex flex-wrap gap-2" role="group" aria-label="Filter training areas">
        {[{id:'all',title:'All areas'},...trainingGroups].map(g => <button key={g.id} type="button" onClick={()=>setActiveGroup(g.id)} aria-pressed={activeGroup===g.id} className={`rounded-full border px-4 py-2 text-xs font-medium transition sm:text-sm ${activeGroup===g.id?'border-blue-400 bg-blue-600 text-white':'border-white/15 bg-white/[.04] text-slate-300 hover:border-blue-400/50 hover:text-white'}`}>{g.title}</button>)}
      </div>
      <div className="space-y-12">
        {selectedGroups.map(group => <section key={group.id} aria-labelledby={`group-${group.id}`}>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <h3 id={`group-${group.id}`} className="text-xl font-semibold text-white md:text-2xl">{group.title}</h3>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-400">{group.entries.length}</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {group.entries.map(entry => <article key={entry.id} className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[.045] p-5 transition hover:border-blue-400/40 hover:bg-white/[.07] sm:p-6">
              <InstitutionLogo entry={entry} />
              <div className="flex min-w-0 flex-1 flex-col">
                <h4 className="text-base font-semibold leading-6 text-white sm:text-lg">{entry.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{entry.institution}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400"><CalendarDays size={14} className="shrink-0"/>{entry.period}</p>
                {entry.detail && <p className="mt-2 text-xs text-slate-300">{entry.detail}</p>}
                {entry.status && <p className="mt-3 inline-flex items-center gap-2 text-xs text-blue-300"><ShieldCheck size={14}/>{entry.status}</p>}
                {entry.certificateUrl && <div className="mt-5"><CertificateLink entry={entry}/></div>}
              </div>
            </article>)}
          </div>
        </section>)}
      </div>
      <p className="mt-12 max-w-4xl text-sm leading-7 text-slate-400">Programs are listed as education or training records. Their inclusion does not imply that a vendor exam certification was awarded. Certificate links appear only when a verified document or credential URL is supplied.</p>
    </section>
  </main>
}
