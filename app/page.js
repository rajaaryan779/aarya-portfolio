import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const ParticleCanvas = dynamic(() => import('@/components/ParticleCanvas'), { ssr: false })
const CursorEffect = dynamic(() => import('@/components/CursorEffect'), { ssr: false })

export default function Home() {
  return (
    <>
      <CursorEffect />
      <ParticleCanvas />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Contact />
      </main>
      <footer style={{
        padding: '2rem 3rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(232,240,248,0.2)' }}>
          © 2026 Aarya Vaidya — AI/ML Engineer
        </span>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(232,240,248,0.2)' }}>
          Pune, India
        </span>
      </footer>
    </>
  )
}