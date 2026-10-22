import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, BriefcaseBusiness } from 'lucide-react'

const stats = [
  { value: '13+', label: 'Years of Experience' },
  { value: 'SAR 120K+', label: 'Annual Telecom Savings' },
  { value: '60%', label: 'Reduction in Manual Operations' },
  { value: '57%', label: 'Faster Retail IT Deployment' },
]

export default function Home() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            IT Operations & Digital Transformation Leader
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Turning Technology into
            <span className="block text-blue-400">
              Business Value.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            I'm Sherif Mohamed, an IT leader with 13+ years of experience
            driving digital transformation, operational excellence,
            enterprise technology strategy, and people development
            across Egypt and Saudi Arabia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Explore My Work <ArrowRight size={18} />
            </Link>

            <Link
              to="/career"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-blue-400"
            >
              <BriefcaseBusiness size={18} /> My Career
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
