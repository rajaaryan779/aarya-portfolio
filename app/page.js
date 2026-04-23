import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Timeline from '@/components/Timeline'
import Blog from '@/components/Blog'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const Loader = dynamic(() => import('@/components/Loader'), { ssr: false })
const CursorEffect = dynamic(() => import('@/components/CursorEffect'), { ssr: false })
const ParticleCanvas = dynamic(() => import('@/components/ParticleCanvas'), { ssr: false })
const Terminal = dynamic(() => import('@/components/Terminal'), { ssr: false })
const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'), { ssr: false })
const ChatBot = dynamic(() => import('@/components/ChatBot'), { ssr: false })
const EasterEgg = dynamic(() => import('@/components/EasterEgg'), { ssr: false })
const VisitorBadge = dynamic(() => import('@/components/VisitorBadge'), { ssr: false })

export default function Home() {
  return (
    <>
      <Loader />
      <CursorEffect />
      <ParticleCanvas />
      <Terminal />
      <MusicPlayer />
      <ChatBot />
      <EasterEgg />
      <VisitorBadge />
      <div id="kflash" />
      <div id="sprogress" />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Timeline />
        <div className="divider" />
        <Blog />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Contact />
      </main>
      <footer>
        <span className="foot-txt">© 2026 Aarya Vaidya — AI/ML Engineer</span>
        <span className="foot-txt">Built with Next.js · Pune, India</span>
        <span className="foot-txt foot-hint">↑↑↓↓←→←→BA ✦</span>
      </footer>
    </>
  )
}
