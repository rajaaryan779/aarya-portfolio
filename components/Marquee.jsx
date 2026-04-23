'use client'
const items = ['Python','LangGraph','Groq','RAG Pipelines','TensorFlow','n8n Automation','REST APIs','Binance API','LangChain','OpenAI','Flask','LLaMA 3.3','Pinecone','NLTK','Keras','Git']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {doubled.map((item, i) => (
          <span key={i} className="m-item">
            <span className="m-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
