export default function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <div className="section-tag">Contact</div>
      <h2 className="section-title">LET&apos;S WORK<br />TOGETHER</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          <a href="mailto:aaryasharadvaidya.10@gmail.com" style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: 'clamp(1.5rem,3vw,2.5rem)',
            letterSpacing: '.04em',
            color: '#00ffe0',
            textDecoration: 'none',
            display: 'block',
            marginBottom: '2rem',
            lineHeight: 1.2,
            transition: 'opacity .2s',
            cursor: 'none',
          }}
          onMouseEnter={e => e.target.style.opacity = '.7'}
          onMouseLeave={e => e.target.style.opacity = '1'}
          >
            aaryasharadvaidya<br />.10@gmail.com
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'GitHub — rajaaryan779', href: 'https://github.com/rajaaryan779' },
              { label: 'LinkedIn — aarya-vaidya', href: 'https://linkedin.com/in/aarya-vaidya' },
              { label: '+91 8149904590', href: 'tel:+918149904590' },
              { label: 'Pune, Maharashtra, India', href: '#' },
            ].map(link => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: '.65rem', letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(232,240,248,.4)',
                  textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '.8rem',
                  transition: 'color .2s',
                  cursor: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#00ffe0'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,240,248,.4)'}
              >
                <span style={{ color: '#00ffe0' }}>→</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: 'clamp(3rem,6vw,5.5rem)',
          lineHeight: '.9', letterSpacing: '.04em',
          color: 'rgba(255,255,255,.05)',
        }}>
          OPEN<br />TO<br />WORK
        </div>
      </div>
    </section>
  )
}
