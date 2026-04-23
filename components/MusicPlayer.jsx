'use client'
import { useState, useEffect } from 'react'

const tracks = [
  { title: 'Lo-fi Study Beats', artist: 'Chill Mode' },
  { title: 'Rainy Cafe Vibes', artist: 'Ambient Studio' },
  { title: 'Deep Focus Flow', artist: 'Productivity Mix' },
  { title: 'Midnight Coding', artist: 'Dev Lounge' },
]

const VIZ_DELAYS = [0, .1, .2, .3, .4]
const VIZ_HEIGHTS = [4, 8, 12, 6, 10]

export default function MusicPlayer() {
  const [cur, setCur] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [prog, setProg] = useState(30)

  useEffect(() => {
    if (!playing) return
    const iv = setInterval(() => setProg(p => (p + .5) % 100), 500)
    return () => clearInterval(iv)
  }, [playing])

  const next = () => { setCur(c => (c + 1) % tracks.length); setProg(0) }
  const prev = () => { setCur(c => (c - 1 + tracks.length) % tracks.length); setProg(0) }

  return (
    <div className="music-player">
      <div className="music-viz">
        {VIZ_HEIGHTS.map((h, i) => (
          <div key={i} className="viz-bar" style={{
            height: h + 'px',
            animation: playing ? `visPulse 1s ${VIZ_DELAYS[i]}s ease-in-out infinite` : 'none',
          }} />
        ))}
        <style>{`@keyframes visPulse{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.25)}}`}</style>
      </div>
      <div className="music-info">
        <div className="music-title">{tracks[cur].title}</div>
        <div className="music-artist">🎵 {tracks[cur].artist}</div>
        <div className="music-bar">
          <div className="music-progress" style={{ width: prog + '%' }} />
        </div>
      </div>
      <div className="music-controls">
        <button className="mctrl" onClick={prev}>⏮</button>
        <button className="mctrl" onClick={() => setPlaying(p => !p)}>{playing ? '⏸' : '▶'}</button>
        <button className="mctrl" onClick={next}>⏭</button>
      </div>
    </div>
  )
}
