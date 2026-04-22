import './globals.css'

export const metadata = {
  title: 'Aarya Vaidya — AI/ML Engineer',
  description: 'AI/ML Engineer building production-grade AI systems, automation workflows, and full-stack applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
