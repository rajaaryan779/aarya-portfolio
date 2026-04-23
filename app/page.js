import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Timeline from '@/components/Timeline'
import Blog from '@/components/Blog'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const Aurora       = dynamic(() => import('@/components/Aurora'),        { ssr: false })
const Loader       = dynamic(() => import('@/components/Loader'),        { ssr: false })
const Cursor       = dynamic(() => import('@/components/Cursor'),        { ssr: false })
const Particles    = dynamic(() => import('@/components/Particles'),     { ssr: false })
const Terminal     = dynamic(() => import('@/components/Terminal'),      { ssr: false })
const MusicPlayer  = dynamic(() => import('@/components/MusicPlayer'),   { ssr: false })
const ChatBot      = dynamic(() => import('@/components/ChatBot'),       { ssr: false })
const EasterEgg    = dynamic(() => import('@/components/EasterEgg'),     { ssr: false })
const VisitorBadge = dynamic(() => import('@/components/VisitorBadge'),  { ssr: false })
const Marquee      = dynamic(() => import('@/components/Marquee'),       { ssr: false })
const VoiceWelcome = dynamic(() => import('@/components/VoiceWelcome'),  { ssr: false })

export default function Home() {
  return (
    <>
      <Loader />
      <VoiceWelcome />
      <Cursor />
      <Aurora />
      <Particles />
      <Terminal />
      <MusicPlayer />
      <ChatBot />
      <EasterEgg />
      <VisitorBadge />
      <div id="kf" />
      <div id="prog" />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Marquee />
        <div className="div" />
        <Projects />
        <div className="div" />
        <Timeline />
        <div className="div" />
        <Blog />
        <div className="div" />
        <Skills />
        <div className="div" />
        <Contact />
      </main>
      <footer style={{ padding:'1.75rem 3rem', borderTop:'1px solid rgba(255,255,255,.06)', display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:'1200px', margin:'0 auto', position:'relative', zIndex:1, flexWrap:'wrap', gap:'1rem' }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.5rem', letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(241,245,249,.15)' }}>
          © 2026 Aarya Vaidya — AI/ML Engineer
        </span>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.5rem', letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(241,245,249,.15)', animation:'eKPulse 6s ease-in-out infinite' }}>
          ↑↑↓↓←→←→BA ✦
        </span>
        <style>{`@keyframes eKPulse{0%,80%,100%{color:rgba(241,245,249,.15)}85%{color:rgba(99,102,241,.5)}}`}</style>
      </footer>
    </>
  )
}
