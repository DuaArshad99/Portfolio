import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">
          Skills <span className="path">// stack.config</span>
        </h2>

        <div className="skills__grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills__card card">
              <p className="skills__category">{category}</p>
              <div className="skills__tags">
                {items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .skills__card {
          padding: 22px 22px 24px;
        }
        .skills__category {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--signal);
          margin: 0 0 14px;
          letter-spacing: 0.02em;
        }
        .skills__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        @media (max-width: 720px) {
          .skills__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
