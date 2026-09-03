import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          Projects <span className="path">// GET /projects</span>
        </h2>

        <div className="projects__list">
          {projects.map((p) => (
            <article key={p.id} className="project card">
              <div className="project__head">
                <div className="project__route">
                  <span className={`method-badge ${p.method}`}>{p.method}</span>
                  <span className="project__path">{p.route}</span>
                </div>
                <span className={`pill ${p.status >= 400 ? 'amber' : ''}`}>
                  {p.status} {p.status_label}
                </span>
              </div>

              <h3 className="project__name">{p.name}</h3>
              <p className="project__tagline">{p.tagline}</p>
              <p className="project__desc">{p.description}</p>

              <div className="project__stack">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              <div className="project__links">
                {p.live_url && (
                  <a className="btn primary" href={p.live_url} target="_blank" rel="noreferrer">
                    Live ↗
                  </a>
                )}
                {p.play_store_url && (
                  <a className="btn" href={p.play_store_url} target="_blank" rel="noreferrer">
                    Play Store ↗
                  </a>
                )}
                {p.github_url && (
                  <a className="btn" href={p.github_url} target="_blank" rel="noreferrer">
                    Source ↗
                  </a>
                )}
                {!p.live_url && !p.play_store_url && !p.github_url && (
                  <span className="project__nolink">add a url in src/data/projects.js →</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects__list {
          display: grid;
          gap: 18px;
        }
        .project {
          padding: 26px 26px 24px;
        }
        .project__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .project__route {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .project__path {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--text-dim);
        }
        .project__name {
          font-size: 20px;
          color: var(--text);
          margin-bottom: 8px;
        }
        .project__tagline {
          color: var(--text);
          font-weight: 500;
          margin: 0 0 10px;
          font-size: 15px;
        }
        .project__desc {
          font-size: 14.5px;
          margin-bottom: 18px;
        }
        .project__stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .project__links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }
        .project__nolink {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-faint);
        }
      `}</style>
    </section>
  )
}
