'use client'
import { useState, useEffect, useRef } from 'react'

const TRACKS = [
  { t: 'Lo-fi Study Beats', a: 'Chill Mode',  freq: [261, 330, 392, 523] },
  { t: 'Rainy Cafe Vibes',  a: 'Ambient',      freq: [220, 277, 330, 440] },
  { t: 'Deep Focus Flow',   a: 'Dev Mode',     freq: [196, 247, 294, 392] },
  { t: 'Midnight Coding',   a: 'Lo-fi Lab',    freq: [174, 220, 261, 349] },
]
const HH = [4, 8, 12, 6, 10]

export default function MusicPlayer() {
  const [cur, setCur] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [pg, setPg] = useState(25)
  const acRef = useRef(null)
  const nodesRef = useRef({ oscs: [], beatIv: null })

  useEffect(() => {
    if (!playing) return
    const iv = setInterval(() => setPg(p => (p + 0.4) % 100), 500)
    return () => clearInterval(iv)
  }, [playing])

  const stopAudio = () => {
    nodesRef.current.oscs.forEach(o => { try { o.stop() } catch(_) {} })
    nodesRef.current.oscs = []
    clearInterval(nodesRef.current.beatIv)
    nodesRef.current.beatIv = null
  }

  const startAudio = (trackIdx) => {
    try {
      if (!acRef.current) acRef.current = new (window.AudioContext || window.webkitAudioContext)()
      const ac = acRef.current
      if (ac.state === 'suspended') ac.resume()
      const master = ac.createGain()
      master.gain.setValueAtTime(0.07, ac.currentTime)
      master.connect(ac.destination)

      const freqs = TRACKS[trackIdx ?? cur].freq
      const oscs = freqs.map((freq, i) => {
        const osc = ac.createOscillator()
        const gain = ac.createGain()
        const filter = ac.createBiquadFilter()
        filter.type = 'lowpass'
        filter.frequency.value = 900
        filter.Q.value = 0.5
        osc.type = i % 2 === 0 ? 'sine' : 'triangle'
        osc.frequency.setValueAtTime(freq, ac.currentTime)
        osc.frequency.setTargetAtTime(freq * 1.0015, ac.currentTime + 0.5, 1 + i * 0.4)
        gain.gain.setValueAtTime(0.18 - i * 0.025, ac.currentTime)
        osc.connect(filter); filter.connect(gain); gain.connect(master)
        osc.start()
        return osc
      })

      // Subtle hi-hat click for rhythm
      const beatIv = setInterval(() => {
        try {
          const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.012), ac.sampleRate)
          const d = buf.getChannelData(0)
          for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * 0.25 * (1 - i / d.length)
          const src = ac.createBufferSource()
          const g = ac.createGain()
          g.gain.value = 0.035
          src.buffer = buf; src.connect(g); g.connect(master); src.start()
        } catch(_) {}
      }, 480)

      nodesRef.current = { oscs, beatIv }
    } catch (e) { console.warn('Audio error:', e) }
  }

  const togglePlay = () => {
    if (playing) { stopAudio() } else { startAudio() }
    setPlaying(p => !p)
  }

  const nextTrack = () => {
    stopAudio()
    const n = (cur + 1) % TRACKS.length
    setCur(n); setPg(0)
    if (playing) setTimeout(() => startAudio(n), 60)
  }

  const prevTrack = () => {
    stopAudio()
    const n = (cur - 1 + TRACKS.length) % TRACKS.length
    setCur(n); setPg(0)
    if (playing) setTimeout(() => startAudio(n), 60)
  }

  useEffect(() => () => stopAudio(), [])

  return (
    <div className="mp">
      <div className="mp-viz">
        {HH.map((h, i) => (
          <div key={i} className="mp-bar" style={{
            height: h + 'px',
            animation: playing ? `vizP 1s ${i * .12}s ease-in-out infinite` : 'none',
          }} />
        ))}
      </div>
      <style>{`@keyframes vizP{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.2)}}`}</style>
      <div className="mp-inf">
        <div className="mp-ti">{TRACKS[cur].t}</div>
        <div className="mp-ar">🎵 {TRACKS[cur].a}</div>
        <div className="mp-pb"><div className="mp-pf" style={{ width: pg + '%' }} /></div>
      </div>
      <div className="mp-ct">
        <button className="mp-c" onClick={prevTrack}>⏮</button>
        <button className="mp-c" onClick={togglePlay}>{playing ? '⏸' : '▶'}</button>
        <button className="mp-c" onClick={nextTrack}>⏭</button>
      </div>
    </div>
  )
}
