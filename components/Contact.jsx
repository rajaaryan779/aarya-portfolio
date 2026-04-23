'use client'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', msg: '' })
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setResult('ok')
      setFormState({ name: '', email: '', msg: '' })
      setTimeout(() => setResult(null), 4000)
    }, 1500)
  }

  return (
    <section className="sec-wrap" id="contact">
      <div className="sec-tag reveal">Contact</div>
      <h2 className="sec-title reveal">LET&apos;S WORK<br />TOGETHER</h2>
      <div className="contact-grid">
        <div className="reveal-l">
          <a href="mailto:aaryasharadvaidya.10@gmail.com" className="contact-email">
            aaryasharadvaidya<br />.10@gmail.com
          </a>
          <div className="contact-links">
            {[
              { label: 'GitHub — rajaaryan779', href: 'https://github.com/rajaaryan779' },
              { label: 'LinkedIn — aarya-vaidya', href: 'https://linkedin.com/in/aarya-vaidya' },
              { label: '+91 8149904590', href: 'tel:+918149904590' },
              { label: 'Pune, Maharashtra, India', href: '#' },
            ].map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" className="contact-link">
                {l.label}
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-group">
              <input className="form-input" type="text" id="fname" placeholder=" "
                value={formState.name} onChange={e => setFormState(s => ({ ...s, name: e.target.value }))} required />
              <label className="form-label" htmlFor="fname">Your Name</label>
            </div>
            <div className="form-group">
              <input className="form-input" type="email" id="femail" placeholder=" "
                value={formState.email} onChange={e => setFormState(s => ({ ...s, email: e.target.value }))} required />
              <label className="form-label" htmlFor="femail">Email Address</label>
            </div>
            <div className="form-group">
              <textarea className="form-input" id="fmsg" placeholder=" "
                value={formState.msg} onChange={e => setFormState(s => ({ ...s, msg: e.target.value }))} required />
              <label className="form-label" htmlFor="fmsg">Message</label>
            </div>
            <button type="submit" className="form-submit">
              <span className="form-submit-inner">
                {submitting ? 'Sending...' : 'Send Message →'}
              </span>
            </button>
            {result === 'ok' && <div className="form-msg ok">✓ Message sent! Aarya will reply soon.</div>}
          </form>
        </div>
        <div className="reveal">
          <div className="open-text">OPEN<br />TO<br />WORK</div>
        </div>
      </div>
    </section>
  )
}
