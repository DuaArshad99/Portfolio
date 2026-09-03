import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'

const RESPONSE_LINES = [
  `{`,
  `  "name": "${profile.name}",`,
  `  "title": "${profile.title}",`,
  `  "location": "${profile.location}",`,
  `  "gpa": 3.96,`,
  `  "status": "open_to_opportunities"`,
  `}`,
]

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [showResponse, setShowResponse] = useState(false)
  const command = 'GET /dua-arshad HTTP/1.1'

  useEffect(() => {
    let i = 0
    const type = setInterval(() => {
      i += 1
      setTyped(command.slice(0, i))
      if (i >= command.length) {
        clearInterval(type)
        setTimeout(() => setShowResponse(true), 250)
      }
    }, 38)
    return () => clearInterval(type)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">portfolio.init()</p>
          <h1 className="hero__title">
            Building systems
            <br />
            that hold under load.
          </h1>
          <p className="hero__sub">{profile.summary}</p>
          <div className="hero__cta">
            <a href="#projects" className="btn primary">
              View projects
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
        </div>

        <div className="terminal card">
          <div className="terminal__bar">
            <span className="dot red" />
            <span className="dot amber" />
            <span className="dot green" />
            <span className="terminal__title">request.sh</span>
          </div>
          <div className="terminal__body">
            <div className="terminal__line">
              <span className="prompt">$</span> {typed}
              {!showResponse && <span className="caret" />}
            </div>
            {showResponse && (
              <pre className="terminal__response">
                {RESPONSE_LINES.map((line, idx) => (
                  <div
                    key={idx}
                    className="terminal__response-line"
                    style={{ animationDelay: `${idx * 55}ms` }}
                  >
                    {line}
                  </div>
                ))}
              </pre>
            )}
            {showResponse && (
              <div className="terminal__status">
                <span className="pill">200 OK</span>
                <span className="terminal__ms">42ms</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 88px;
        }
        .hero__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }
        .hero__title {
          font-size: clamp(32px, 4.6vw, 50px);
          line-height: 1.15;
          color: var(--text);
          margin-bottom: 22px;
        }
        .hero__sub {
          max-width: 480px;
          font-size: 16px;
          margin-bottom: 32px;
        }
        .hero__cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .terminal {
          overflow: hidden;
          box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.6);
        }
        .terminal__bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--surface-raised);
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot.red { background: #e0685a; }
        .dot.amber { background: #f2a65a; }
        .dot.green { background: #4fd1c5; }
        .terminal__title {
          margin-left: 8px;
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-faint);
        }
        .terminal__body {
          padding: 22px 20px 26px;
          font-family: var(--mono);
          font-size: 13.5px;
          min-height: 220px;
        }
        .terminal__line {
          color: var(--text);
        }
        .prompt {
          color: var(--signal);
        }
        .caret {
          display: inline-block;
          width: 7px;
          height: 14px;
          background: var(--signal);
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          vertical-align: text-bottom;
        }
        .terminal__response {
          margin: 16px 0 0;
          color: var(--text-dim);
          font-family: var(--mono);
          white-space: pre-wrap;
        }
        .terminal__response-line {
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .terminal__status {
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .terminal__ms {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-faint);
        }
        @media (max-width: 860px) {
          .hero__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
