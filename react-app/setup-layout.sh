#!/usr/bin/env bash
set -e

mkdir -p src/components src/layouts src/pages

cat > src/components/Navbar.tsx <<'END'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X, ChevronDown } from 'lucide-react'

const links = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Career', to: '/career' },
  { title: 'Projects', to: '/projects' },
  { title: 'Case Studies', to: '/case-studies' },
  { title: 'Leadership', to: '/leadership' },
  { title: 'Business Impact', to: '/business-impact' },
  { title: 'Education', to: '/education' },
  { title: 'Insights', to: '/insights' },
  { title: 'Recognition', to: '/recognition' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1528]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold tracking-tight text-white">
          SM<span className="text-blue-400">.</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-xs font-medium transition-colors hover:text-blue-400 ${
                  isActive ? 'text-blue-400' : 'text-slate-300'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Let's Connect
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0B1528] px-6 py-4 lg:hidden">
          {[...links, { title: 'Contact', to: '/contact' }].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/10"
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
END

cat > src/components/Footer.tsx <<'END'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#081120] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
        <div>
          <p className="font-semibold text-white">Sherif Mohamed</p>
          <p className="mt-1 text-sm text-slate-400">
            IT Operations & Digital Transformation Leader
          </p>
        </div>

        <div className="flex gap-5 text-slate-400">
          <a href="https://github.com/sherifhassan21" aria-label="GitHub" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/sherifhassanm" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="mailto:sherifhassan21@gmail.com" aria-label="Email"><Mail /></a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Sherif Mohamed.
        </p>
      </div>
    </footer>
  )
}
END

cat > src/layouts/MainLayout.tsx <<'END'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B1528] text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
END

for PAGE in Home About Career Projects CaseStudies Education Leadership BusinessImpact Insights Recognition Contact NotFound; do
  case "$PAGE" in
    CaseStudies) TITLE="Case Studies" ;;
    BusinessImpact) TITLE="Business Impact" ;;
    NotFound) TITLE="Page Not Found" ;;
    *) TITLE="$PAGE" ;;
  esac

  cat > "src/pages/$PAGE.tsx" <<END
export default function $PAGE() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
        Sherif Mohamed / Portfolio
      </p>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        $TITLE
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-400">
        This section is currently being developed.
      </p>
    </section>
  )
}
END
done

cat > src/App.tsx <<'END'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Projects from './pages/Projects'
import CaseStudies from './pages/CaseStudies'
import Education from './pages/Education'
import Leadership from './pages/Leadership'
import BusinessImpact from './pages/BusinessImpact'
import Insights from './pages/Insights'
import Recognition from './pages/Recognition'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/education" element={<Education />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/business-impact" element={<BusinessImpact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
END

cat > src/index.css <<'END'
@import "tailwindcss";

:root {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
}
END

npm run build
