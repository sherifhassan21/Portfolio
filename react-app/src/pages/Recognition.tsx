import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Award, GraduationCap, ArrowUpRight, CalendarDays, Building2, Trophy, Star } from 'lucide-react'

const recognitions = [
  { title: 'Certificate of Appreciation', organization: 'Shadwan International Co.', date: '06 Mar 2026', year: '2026' },
  { title: 'Be a Positive Catalyst Award', organization: 'Majid Al Futtaim', date: '12 Nov 2024', year: '2024' },
  { title: 'Role Model Citizenship', organization: 'Majid Al Futtaim', date: '21 Aug 2024', year: '2024' },
  { title: 'Passionate Persevere', organization: 'Majid Al Futtaim', date: '08 Aug 2024', year: '2024' },
  { title: 'Initiative Recognition', organization: 'LCWAIKIKI', date: '24 Jun 2022', year: '2022' },
  { title: 'Best Employee of the Year 2018', organization: 'Future Academy', date: '15 May 2018', year: '2018' },
]

export default function Recognition() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <motion.header initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Achievements & recognition</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">Recognition & <span className="text-blue-400">Milestones</span></h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I value recognition because it reflects the work, commitment and collaboration behind each achievement.
          These milestones represent the people I have worked with and the experiences that have shaped my career.
        </p>
      </motion.header>

      <section className="mt-16" aria-labelledby="career-recognitions">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-3"><Trophy className="text-blue-300" size={24}/></span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.17em] text-blue-400">Professional recognition</p>
            <h2 id="career-recognitions" className="mt-1 text-2xl font-bold text-white md:text-3xl">Career Recognitions & Awards</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recognitions.map((award,index) => (
            <motion.article
              key={award.title}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true,amount:.12}}
              transition={{duration:.4,delay:(index%3)*.08}}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[.05] p-6 shadow-xl backdrop-blur-xl transition-colors hover:border-blue-400/40 hover:bg-white/[.07] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-2xl border border-blue-300/20 bg-blue-300/10 p-3"><Award className="text-blue-300" size={25}/></span>
                <span className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1 text-xs font-semibold text-blue-200">{award.year}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-7 text-white">{award.title}</h3>
              <div className="mt-auto space-y-3 pt-6 text-sm text-slate-300">
                <p className="flex items-start gap-2.5"><Building2 size={16} className="mt-0.5 shrink-0 text-blue-300"/>{award.organization}</p>
                <p className="flex items-center gap-2.5"><CalendarDays size={16} className="shrink-0 text-blue-300"/>{award.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-20" aria-labelledby="academic-achievement">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-3"><GraduationCap className="text-blue-300" size={24}/></span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.17em] text-blue-400">Education milestone</p>
            <h2 id="academic-achievement" className="mt-1 text-2xl font-bold text-white md:text-3xl">Academic Achievement</h2>
          </div>
        </div>
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-400/[.10] via-white/[.05] to-transparent p-7 backdrop-blur-xl lg:grid-cols-[240px_1fr] lg:items-center md:p-10">
          <div className="rounded-2xl border border-blue-300/20 bg-[#132744]/70 p-7 text-center">
            <Star className="mx-auto text-blue-300" size={28}/>
            <p className="mt-4 text-5xl font-bold text-white">4th</p>
            <p className="mt-2 text-sm font-semibold text-blue-200">Graduating rank</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-3xl font-bold text-white">91.2%</p>
              <p className="mt-1 text-xs text-slate-300">Overall result · Excellent</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-blue-300">Future Academy · Cairo · 2008–2012</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Bachelor of Information Technology</h3>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Graduating fourth in my class was especially meaningful to me because it reflected four years of consistent effort, rather than a single exam or semester. I maintained an Excellent grade in each academic year, and finished my degree with an overall result of 91.2%. It remains a milestone I’m proud of and a reminder of the value of discipline, persistence and continuous learning.
            </p>
            <Link to="/education" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white">
              Explore education & professional development <ArrowUpRight size={17}/>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
