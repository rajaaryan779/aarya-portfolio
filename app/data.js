export const work = [
  {
    no: "01", title: "Jenna", year: "2026",
    blurb: "An AI financial coaching app I build at OyeLabs. I added a deterministic fast-path that answers read-only money questions with no LLM call, dropping response time from roughly 1,950ms to 115ms, about 17x. A fabrication guard then checks every dollar figure against real transaction data before it reaches you, so the assistant never invents a balance.",
    stack: ["FastAPI", "Amazon Bedrock", "PostgreSQL"], tag: "~17x faster reads",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "02", title: "WhatsCRM", year: "2026",
    blurb: "A WhatsApp CRM I build at OyeLabs. Every incoming message flows through OpenAI embeddings into a pgvector store, then surfaces the most relevant past context alongside an AI-drafted reply. Idempotent upserts hold it at zero message loss even under bursts of concurrent webhooks.",
    stack: ["FastAPI", "pgvector", "OpenAI"], tag: "Zero message loss",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "03", title: "Market Expansion Engine (MEE)", year: "2026",
    blurb: "A multi-tenant B2B lead-gen and AI outreach platform I build at OyeLabs. Converted it from single-tenant to a real SaaS: composite (owner_id, place_id) keys and Row-Level Security across all 8 tables, so tenant isolation is enforced by Postgres, not hopeful application code. A thin Next.js control plane hands scrape/crawl/LLM work to n8n, with a live dashboard over Supabase Realtime.",
    stack: ["Next.js", "Supabase RLS", "n8n", "Groq"], tag: "RLS across 8 tables",
    href: "https://github.com/rajaaryan779/MEE",
  },
  {
    no: "04", title: "Alianza Security Audit", year: "2026",
    blurb: "An independent security audit and agentic QA engagement on a 39-module NestJS/PostgreSQL real-estate SaaS. I surfaced 185 findings (66 entities, 56 REST controllers audited) and built an autonomous QA Testing Agent that boots the real app against a live database, writes Jest/Supertest integration tests, and reproduced 4 critical vulnerabilities as fail-first regression tests verified red-to-green.",
    stack: ["NestJS", "PostgreSQL", "Jest/Supertest"], tag: "185 findings, 4 verified",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "05", title: "Ultron", year: "2026",
    blurb: "Mission control for a crew of AI agents. An orchestrator plans each goal, specialist agents (research, writer, developer, librarian) do the work, and a person approves the plan. The Agentic City dashboard shows one building per agent with live status, history and chat. Text and voice chat with on-machine transcription, Telegram access, a task board and a searchable results library.",
    stack: ["Python", "Hermes agents", "Ollama", "Telegram"], tag: "Multi-agent mission control",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "06", title: "AI Receptionist", year: "2026",
    blurb: "A voice and text booking agent for a restaurant demo. Vapi takes the call, n8n runs the workflow, and Groq tool calling checks availability, creates and cancels reservations, and finds other venues through OpenStreetMap. Every request ends in a booking, a phone number or a taken message. The whole stack runs at $0 per month.",
    stack: ["Vapi", "n8n", "Groq"], tag: "Voice booking agent",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "07", title: "Ai-Prashashan", year: "2026",
    blurb: "A Marathi-language Android app for Maharashtra government employees, with a retrieval-grounded AI assistant over 440+ official Government Resolutions. It answers strictly from the retrieved GR text and cites the source PDF, and refuses rather than fabricates when nothing supports the question. I reverse-engineered the state GR portal to bulk-download 534 GRs and OCR'd them with Tesseract.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase"], tag: "534 GRs, grounded answers",
    href: "https://github.com/rajaaryan779/Ai-Prashashan",
  },
  {
    no: "08", title: "AutoStream Agent", year: "2026",
    blurb: "A social-to-lead qualification agent built for ServiceHive: a 4-node LangGraph state machine that detects intent, collects details, extracts the lead, and responds, with keyword-grounded retrieval over a local knowledge base and structured, typed output.",
    stack: ["LangGraph", "Gemini", "Python"], tag: "ServiceHive",
    href: "https://github.com/rajaaryan779/autostream_agent",
  },
  {
    no: "09", title: "AEO Diagnostic Tool", year: "2026",
    blurb: "A concurrent engine that queries three LLMs at once to score how visible a product is inside AI search, and returns a 0 to 100 grade with fixes. Built it for the Pixii.ai founding-engineer application; it put me in the top 25.",
    stack: ["FastAPI", "Gemini 2.5", "OpenRouter"], tag: "Top 25 at Pixii.ai",
    href: "https://github.com/rajaaryan779/aeo-diagnostic",
  },
  {
    no: "10", title: "Grid07", year: "2026",
    blurb: "A three-phase AI system: a FAISS persona router, a LangGraph content engine with JSON-enforced output, and a RAG layer hardened against prompt injection. The kind of thing that breaks in production if you cut corners, so I didn't.",
    stack: ["LangGraph", "FAISS", "Groq"], tag: "Adversarial-hardened RAG",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "11", title: "DreamHome", year: "2025",
    blurb: "A full-stack real-estate platform with interactive maps and JWT auth. Caching the token validation cut auth latency from 15ms to under 1ms, a 93% drop. Small detail, big difference at scale.",
    stack: ["FastAPI", "Next.js", "PostgreSQL"], tag: "<1ms auth",
    href: "https://github.com/rajaaryan779/Real-Estate-software",
  },
  {
    no: "12", title: "AI Automation Suite", year: "2026",
    blurb: "19 production n8n workflows: RAG pipelines (Google Drive to Pinecone to Gemini), multi-agent bots with per-user memory namespacing, WhatsApp & Telegram automations, and Whisper voice transcription. Plumbing that quietly saves people hours every day.",
    stack: ["n8n", "Pinecone", "Gemini"], tag: "19 live workflows",
    href: "https://github.com/rajaaryan779/n8n-workflows",
  },
  {
    no: "13", title: "Binance Futures Trading Bot", year: "2026",
    blurb: "A testnet order CLI built for PrimetradeAI with HMAC-SHA256 signed REST calls, input validation, structured logging, and modular market/limit order execution.",
    stack: ["Python", "Binance API", "REST"], tag: "PrimetradeAI",
    href: "https://github.com/rajaaryan779/trading_bot",
  },
  {
    no: "14", title: "Rlook", year: "2026",
    blurb: "An AI virtual try-on running fully in-browser, with real-time 3D body segmentation and clothes overlay using WebGL and body-pose tracking, no native app or plugin. Still in development.",
    stack: ["Next.js 15", "Three.js", "MediaPipe"], tag: "In development",
    href: "https://github.com/rajaaryan779",
  },
];

export const stack = [
  { group: "AI / LLMs",   items: ["LangChain", "LangGraph", "RAG", "Grounded Generation", "Claude", "Gemini", "Groq LLaMA", "FAISS", "Pinecone", "pgvector", "Sentence-Transformers", "Amazon Bedrock"] },
  { group: "Backend",     items: ["FastAPI", "Flask", "PostgreSQL", "SQLAlchemy", "Alembic", "REST", "JWT", "asyncio"] },
  { group: "Mobile",      items: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore"] },
  { group: "Automation",  items: ["n8n", "WhatsApp API", "Telegram API", "Webhooks", "Supabase", "Cloudflare R2"] },
  { group: "Security",    items: ["Security audits", "IDOR / mass-assignment testing", "Row-Level Security", "Burp Suite", "OWASP Juice Shop"] },
  { group: "Languages",   items: ["Python", "TypeScript", "JavaScript", "Kotlin", "SQL"] },
  { group: "Workflow",    items: ["Cursor", "Claude Code", "Git", "GitHub Actions", "Vercel", "Docker", "AWS"] },
  { group: "DevOps (coursework)", items: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins"] },
];

export const certs = [
  { name: "Connect and Protect: Networks and Network Security", org: "Google · Coursera", year: "2026", href: "https://coursera.org/verify/9F4V0Y41V98N" },
  { name: "Play It Safe: Manage Security Risks", org: "Google · Coursera", year: "2026", href: "https://coursera.org/verify/BZQGDISOU8UX" },
  { name: "Foundations of Cybersecurity", org: "Google · Coursera", year: "2025", href: "https://coursera.org/verify/MGIHIZWCAA54" },
  { name: "Claude with Amazon Bedrock", org: "Anthropic", year: "2026", href: "https://verify.skilljar.com/c/mi62wwe5n6hi" },
  { name: "Develop Generative AI Applications: Get Started", org: "IBM · Coursera", year: "2026", href: "https://coursera.org/verify/KTAVNVHE8H6H" },
  { name: "AI Automation: Build LLM Apps & AI-Agents with n8n & APIs", org: "Udemy · 14.5 hours", year: "2026", href: "https://ude.my/UC-a4b3ffef-4132-4c9f-8844-925c734229cd" },
  { name: "Python & Gen AI Basics", org: "Udemy · 17 hours", year: "2026", href: "https://ude.my/UC-aeb9daa5-fc8d-4cc5-8d90-ed7952a161c7" },
  { name: "DevOps Mastery Specialization (Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, Python)", org: "KodeKloud · Coursera", year: "2026", href: null },
  { name: "Red Hat OpenStack Administration I (CL110)", org: "Red Hat", year: "2026", href: "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914" },
  { name: "Django Web Framework", org: "Meta · Coursera", year: "2025", href: "https://coursera.org/verify/2Z1HXMQV496N" },
  { name: "Building REST APIs with Flask and Python", org: "Udemy · 9.5 hours", year: "2025", href: "https://ude.my/UC-e954de43-f9ab-4971-bf19-522511a1fbaf" },
  { name: "PCU InnovateX: 2nd Prize", org: "Pimpri Chinchwad University", year: "2025", href: null },
];
export const moreCerts = "Also completed: Python (University of Michigan), Data Visualization with R (IBM) and Tableau, Java (IIT Bombay Spoken Tutorial), Deep Learning CNN image classification, C and C++.";

export const journey = [
  { year: "2026", role: "AI Engineering Intern", org: "OyeLabs Technologies", note: "Jenna, WhatsCRM, MEE, Ultron & security audit" },
  { year: "2025", role: "AI Intern", org: "Elevate Labs", note: "LSTM stock-price forecasting" },
  { year: "2024", role: "B.Tech CSE (AI/ML)", org: "Pimpri Chinchwad University", note: "Final year · 2nd prize, PCU InnovateX" },
  { year: "2021", role: "Diploma in AI/ML", org: "K.K. Wagh Polytechnic", note: "Where it started" },
];
