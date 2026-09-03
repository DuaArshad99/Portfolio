import { education, honors } from '../data/profile.js'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="path">// education & honors</span>
        </h2>

        <div className="about__grid">
          <div>
            <p className="label">Education</p>
            <ul className="edu-list">
              {education.map((e) => (
                <li key={e.school} className="edu-item">
                  <div className="edu-item__top">
                    <span className="edu-item__school">{e.school}</span>
                    <span className="edu-item__period">{e.period}</span>
                  </div>
                  <div className="edu-item__degree">{e.degree}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label">Honors & Achievements</p>
            <ul className="honor-list">
              {honors.map((h) => (
                <li key={h}>
                  <span className="honor-marker">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 56px;
        }
        .label {
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-faint);
          margin-bottom: 18px;
        }
        .edu-list, .honor-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .edu-item {
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
        }
        .edu-item:first-child { padding-top: 0; }
        .edu-item__top {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 4px;
        }
        .edu-item__school {
          font-weight: 600;
          color: var(--text);
        }
        .edu-item__period {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-faint);
          white-space: nowrap;
        }
        .edu-item__degree {
          color: var(--text-dim);
          font-size: 14.5px;
        }
        .honor-list li {
          display: flex;
          gap: 10px;
          color: var(--text-dim);
          padding: 10px 0;
          font-size: 14.5px;
          line-height: 1.5;
        }
        .honor-marker {
          color: var(--signal);
          flex-shrink: 0;
        }
        @media (max-width: 780px) {
          .about__grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
