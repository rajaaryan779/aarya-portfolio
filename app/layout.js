import './globals.css'
export const metadata = {
  title: 'Aarya Vaidya — AI/ML Engineer | Pune, India',
  description: 'AI/ML Engineer specializing in LangGraph, RAG, trading bots, and production AI systems.',
  themeColor: '#6366f1',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
