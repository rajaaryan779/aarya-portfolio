'use client'
import { useEffect, useRef, useState } from 'react'

export default function VoiceWelcome() {
  const [spoken, setSpoken] = useState(false)
  const [visible, setVisible] = useState(true)
  const [waveActive, setWaveActive] = useState(false)

  useEffect(() => {
    // Wait for loader to finish (~2.5s), then speak
    const timer = setTimeout(() => {
      speak()
    }, 2600)
    return () => clearTimeout(timer)
  }, [])

  const speak = () => {
    if (!window.speechSynthesis || spoken) return

    // Cancel anything already speaking
    window.speechSynthesis.cancel()

    const lines = [
      "Welcome to Aarya Vaidya's Portfolio.",
      "Aarya is an AI and ML engineer from Pune, India.",
      "Feel free to explore his projects, skills, and get in touch.",
    ]

    const fullText = lines.join(' ')
    const utterance = new SpeechSynthesisUtterance(fullText)

    // Pick a good voice
    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices()
      const preferred = voices.find(v =>
        v.name.includes('Google') || v.name.includes('Samantha') ||
        v.name.includes('Daniel') || v.name.includes('Alex') ||
        (v.lang === 'en-US' && !v.name.includes('compact'))
      )
      if (preferred) utterance.voice = preferred
    }

    if (window.speechSynthesis.getVoices().length > 0) {
      setVoice()
    } else {
      window.speechSynthesis.onvoiceschanged = setVoice
    }

    utterance.rate = 0.92
    utterance.pitch = 1.05
    utterance.volume = 1

    utterance.onstart = () => setWaveActive(true)
    utterance.onend = () => {
      setWaveActive(false)
      setSpoken(true)
      // Auto-hide after 1.5s
      setTimeout(() => setVisible(false), 1500)
    }
    utterance.onerror = () => { setWaveActive(false); setVisible(false) }

    window.speechSynthesis.speak(utterance)
    setSpoken(true)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        .vw-wrap {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1500;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          animation: vwFadeIn .5s ease both;
        }
        @keyframes vwFadeIn { from { opacity:0; transform:translateX(-50%) translateY(20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
        @keyframes vwFadeOut { from { opacity:1; } to { opacity:0; } }
        .vw-wrap.hiding { animation: vwFadeOut .5s ease forwards; }

        .vw-card {
          background: rgba(6,0,24,.92);
          border: 1px solid rgba(99,102,241,.3);
          backdrop-filter: blur(24px);
          padding: 1.1rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          box-shadow: 0 0 40px rgba(99,102,241,.15);
          min-width: 320px;
        }

        .vw-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          color: #fff;
          flex-shrink: 0;
          position: relative;
        }

        .vw-avatar-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(99,102,241,.5);
          animation: vwRing 1.5s ease-in-out infinite;
        }
        @keyframes vwRing { 0%,100%{transform:scale(1);opacity:.5} 50%{transform:scale(1.1);opacity:1} }

        .vw-text {
          flex: 1;
        }
        .vw-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: .85rem;
          color: #f1f5f9;
          margin-bottom: .15rem;
        }
        .vw-status {
          font-family: 'JetBrains Mono', monospace;
          font-size: .52rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: rgba(99,102,241,.7);
        }

        /* Sound wave bars */
        .vw-wave {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 24px;
        }
        .vw-wave-bar {
          width: 3px;
          background: linear-gradient(180deg, #6366f1, #ec4899);
          border-radius: 2px;
          transition: height .1s;
        }
        .vw-wave.active .vw-wave-bar:nth-child(1) { animation: wb 0.8s 0.0s ease-in-out infinite; }
        .vw-wave.active .vw-wave-bar:nth-child(2) { animation: wb 0.8s 0.1s ease-in-out infinite; }
        .vw-wave.active .vw-wave-bar:nth-child(3) { animation: wb 0.8s 0.2s ease-in-out infinite; }
        .vw-wave.active .vw-wave-bar:nth-child(4) { animation: wb 0.8s 0.15s ease-in-out infinite; }
        .vw-wave.active .vw-wave-bar:nth-child(5) { animation: wb 0.8s 0.05s ease-in-out infinite; }
        .vw-wave.active .vw-wave-bar:nth-child(6) { animation: wb 0.8s 0.25s ease-in-out infinite; }
        .vw-wave.active .vw-wave-bar:nth-child(7) { animation: wb 0.8s 0.1s ease-in-out infinite; }
        @keyframes wb {
          0%,100% { height: 4px; }
          50% { height: 20px; }
        }
        .vw-wave:not(.active) .vw-wave-bar { height: 4px; }

        .vw-close {
          background: transparent;
          border: none;
          color: rgba(241,245,249,.3);
          font-size: .8rem;
          cursor: none;
          transition: color .2s;
          padding: .2rem;
          line-height: 1;
        }
        .vw-close:hover { color: rgba(241,245,249,.8); }
      `}</style>

      <div className="vw-wrap">
        <div className="vw-card">
          <div className="vw-avatar">
            <div className="vw-avatar-ring" />
            A
          </div>
          <div className="vw-text">
            <div className="vw-name">Aarya Vaidya</div>
            <div className="vw-status">
              {waveActive ? '● Speaking...' : spoken ? '✓ Welcome!' : '● Loading...'}
            </div>
          </div>
          <div className={`vw-wave ${waveActive ? 'active' : ''}`}>
            {[16,10,20,14,22,8,18].map((h, i) => (
              <div key={i} className="vw-wave-bar" style={{ height: waveActive ? undefined : '4px' }} />
            ))}
          </div>
          <button className="vw-close" onClick={() => {
            window.speechSynthesis?.cancel()
            setVisible(false)
          }}>✕</button>
        </div>
      </div>
    </>
  )
}
