'use client'
import { useEffect, useState } from 'react'

export default function VisitorBadge() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    let v = parseInt(localStorage.getItem('av_visitors') || '247')
    v += Math.floor(Math.random() * 3) + 1
    localStorage.setItem('av_visitors', v)
    setCount(v.toLocaleString())
  }, [])

  if (!count) return null

  return (
    <div className="visitor-badge">
      👁 VISITOR #{count}
    </div>
  )
}
