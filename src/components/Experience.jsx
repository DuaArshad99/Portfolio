import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">
          Experience <span className="path">// log --oneline</span>
        </h2>

        <div className="timeline">
          {experience.map((job) => (
            <div key={job.company} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__content card">
                <div className="timeline__top">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{job.period}</span>
                    <span className="timeline__location">{job.location}</span>
                  </div>
                </div>
                <ul className="timeline__points">
                  {job.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          padding-left: 22px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 3px;
          top: 6px;
          bottom: 6px;
          width: 1px;
          background: var(--border);
        }
        .timeline__item {
          position: relative;
          margin-bottom: 24px;
        }
        .timeline__item:last-child { margin-bottom: 0; }
        .timeline__marker {
          position: absolute;
          left: -22px;
          top: 22px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 0 4px var(--ink);
        }
        .timeline__content {
          padding: 22px 24px;
        }
        .timeline__top {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .timeline__role {
          font-size: 17px;
          color: var(--text);
          margin-bottom: 4px;
        }
        .timeline__company {
          font-family: var(--mono);
          color: var(--signal);
          font-size: 13px;
          margin: 0;
        }
        .timeline__meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-faint);
          gap: 2px;
          white-space: nowrap;
        }
        .timeline__points {
          margin: 0;
          padding-left: 18px;
          color: var(--text-dim);
        }
        .timeline__points li {
          margin-bottom: 6px;
          font-size: 14px;
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}
