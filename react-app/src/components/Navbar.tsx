import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import {
  Menu, X, ChevronDown, ArrowUpRight,
  FolderKanban, BookOpen, ChartNoAxesCombined,
  BriefcaseBusiness, GraduationCap, Users, Award
} from 'lucide-react'

const groups = [
  {
    title: 'Work',
    items: [
      { label: 'Projects', path: '/projects', icon: FolderKanban },
      { label: 'Case Studies', path: '/case-studies', icon: BookOpen },
      { label: 'Business Impact', path: '/business-impact', icon: ChartNoAxesCombined },
    ],
  },
  {
    title: 'My Journey',
    items: [
      { label: 'Career', path: '/career', icon: BriefcaseBusiness },
      { label: 'Education & Development', path: '/education', icon: GraduationCap },
      { label: 'Leadership', path: '/leadership', icon: Users },
      { label: 'Recognition & Awards', path: '/recognition', icon: Award },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const { pathname } = useLocation()

  const closeMenus = () => {
    setMobileOpen(false)
    setActiveMenu(null)
  }

  const basicLink = (path: string, label: string) => (
    <NavLink
      to={path}
      onClick={closeMenus}
      className={({ isActive }) =>
        `text-sm font-medium transition ${
          isActive ? 'text-blue-400' : 'text-slate-300 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1528]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" onClick={closeMenus} className="text-2xl font-bold text-white">
          SM<span className="text-blue-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {basicLink('/', 'Home')}
          {basicLink('/about', 'About')}

          {groups.map((group) => {
            const expanded = activeMenu === group.title
            const selected = group.items.some((item) => pathname === item.path)

            return (
              <div
                key={group.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(group.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveMenu(expanded ? null : group.title)}
                  aria-expanded={expanded}
                  className={`flex items-center gap-1 py-3 text-sm font-medium transition ${
                    selected || expanded ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {group.title}
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>

                {expanded && (
                  <div className="absolute left-0 top-full w-72 rounded-xl border border-white/10 bg-[#14223A] p-2 shadow-2xl">
                    {group.items.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={closeMenus}
                          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10 hover:text-blue-400"
                        >
                          <Icon size={18} />
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}

          {basicLink('/insights', 'Insights')}

          <Link
            to="/contact"
            onClick={closeMenus}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Let's Connect <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => {
            setMobileOpen(!mobileOpen)
            setActiveMenu(null)
          }}
          className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-75px)] overflow-y-auto border-t border-white/10 bg-[#0B1528] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {basicLink('/', 'Home')}
            {basicLink('/about', 'About')}

            {groups.map((group) => (
              <div key={group.title}>
                <button
                  type="button"
                  onClick={() => setActiveMenu(activeMenu === group.title ? null : group.title)}
                  aria-expanded={activeMenu === group.title}
                  className="flex w-full items-center justify-between text-sm font-semibold text-white"
                >
                  {group.title}
                  <ChevronDown size={17} />
                </button>

                {activeMenu === group.title && (
                  <div className="mt-3 flex flex-col gap-1 border-l border-blue-500/30 pl-4">
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMenus}
                        className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {basicLink('/insights', 'Insights')}
            {basicLink('/contact', "Let's Connect")}
          </div>
        </div>
      )}
    </header>
  )
}
