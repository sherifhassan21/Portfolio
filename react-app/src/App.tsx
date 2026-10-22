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
