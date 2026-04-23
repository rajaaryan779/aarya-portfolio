import './globals.css'

export const metadata = {
  title: 'Aarya Vaidya — AI/ML Engineer | Pune, India',
  description: 'Aarya Vaidya — AI/ML Engineer specializing in LangGraph, RAG pipelines, trading bots, and production AI systems. Based in Pune, India.',
  keywords: 'Aarya Vaidya, AI Engineer, ML Engineer, LangGraph, RAG, Python, Pune, India',
  openGraph: {
    title: 'Aarya Vaidya — AI/ML Engineer',
    description: 'Building production-grade AI systems. LangGraph · RAG · Automation · Trading Bots.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  themeColor: '#00ffe0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}
