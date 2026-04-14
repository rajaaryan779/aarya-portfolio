import "./globals.css";

export const metadata = {
  title: "Aarya Vaidya — AI/ML Engineer",
  description:
    "Portfolio of Aarya Vaidya — AI/ML Engineer, building intelligent systems, automation workflows, and full-stack applications.",
  openGraph: {
    title: "Aarya Vaidya — AI/ML Engineer",
    description:
      "Building intelligent systems, automation workflows, and full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
