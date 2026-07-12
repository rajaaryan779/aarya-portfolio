"use client";

const items = [
  "LangChain", "n8n Automation", "FAISS Vector Search", "Claude API",
  "Gemini Pro", "LangGraph", "Pinecone", "RAG Pipelines", "FastAPI",
  "Supabase", "Telegram Bot", "WhatsApp API", "Amazon Bedrock", "Groq LLaMA",
  "LangChain", "n8n Automation", "FAISS Vector Search", "Claude API",
  "Gemini Pro", "LangGraph", "Pinecone", "RAG Pipelines", "FastAPI",
  "Supabase", "Telegram Bot", "WhatsApp API", "Amazon Bedrock", "Groq LLaMA",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-5 border-y border-white/[0.05] bg-white/[0.01]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08080f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08080f] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium">
            <span className="text-[#35355a] hover:text-[#70708a] transition-colors duration-300">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600/40 inline-block flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
