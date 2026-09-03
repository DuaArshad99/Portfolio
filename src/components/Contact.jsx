import { profile } from '../data/profile.js'

export default function Contact() {
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Let's work together"
  )}`

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          Contact <span className="path">// contact.json</span>
        </h2>

        <div className="contact card">
          <p className="contact__intro">
            Have a role, project, or question in mind? Reach out — always happy to talk backend
            systems, AI, or anything in between.
          </p>

          <div className="contact__rows">
            <div className="contact__row">
              <span className="contact__label">email</span>
              <a href={mailtoHref}>{profile.email}</a>
            </div>
            <div className="contact__row">
              <span className="contact__label">phone</span>
              <span>{profile.phone}</span>
            </div>
            <div className="contact__row">
              <span className="contact__label">location</span>
              <span>{profile.location}</span>
            </div>
          </div>

          <a className="btn primary contact__cta" href={mailtoHref}>
            Send an email ↗
          </a>
        </div>
      </div>

      <style>{`
        .contact {
          padding: 32px 32px 34px;
          max-width: 560px;
        }
        .contact__intro {
          font-size: 15px;
          margin-bottom: 26px;
        }
        .contact__rows {
          margin-bottom: 26px;
        }
        .contact__row {
          display: flex;
          gap: 14px;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          font-size: 14.5px;
        }
        .contact__row:last-child {
          border-bottom: none;
        }
        .contact__row a {
          color: var(--signal);
          text-decoration: none;
        }
        .contact__label {
          font-family: var(--mono);
          color: var(--text-faint);
          width: 76px;
          flex-shrink: 0;
          font-size: 13px;
        }
        .contact__cta {
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
