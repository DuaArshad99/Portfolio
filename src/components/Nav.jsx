import { useEffect, useState } from 'react'

const ROUTES = [
  { id: 'home', label: '/home' },
  { id: 'about', label: '/about' },
  { id: 'skills', label: '/skills' },
  { id: 'projects', label: '/projects' },
  { id: 'experience', label: '/experience' },
  { id: 'contact', label: '/contact' },
]

export default function Nav() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ROUTES.map((r) => document.getElementById(r.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand">
          <span className="nav__dot" />
          dua@portfolio<span className="nav__cursor">:~$</span>
        </a>
        <ul className="nav__routes">
          {ROUTES.map((r) => (
            <li key={r.id}>
              <a href={`#${r.id}`} className={active === r.id ? 'is-active' : ''}>
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid transparent;
          background: rgba(9, 13, 17, 0.7);
          backdrop-filter: blur(10px);
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .nav--scrolled {
          border-color: var(--border);
          background: rgba(9, 13, 17, 0.92);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
        }
        .nav__brand {
          font-family: var(--mono);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 10px var(--signal);
        }
        .nav__cursor {
          color: var(--signal);
          animation: blink 1.1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .nav__routes {
          list-style: none;
          display: flex;
          gap: 26px;
          margin: 0;
          padding: 0;
          font-family: var(--mono);
          font-size: 13px;
        }
        .nav__routes a {
          text-decoration: none;
          color: var(--text-faint);
          transition: color 0.15s ease;
        }
        .nav__routes a:hover,
        .nav__routes a.is-active {
          color: var(--signal);
        }
        @media (max-width: 720px) {
          .nav__routes { display: none; }
        }
      `}</style>
    </nav>
  )
}
