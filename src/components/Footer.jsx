export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Dua Arshad</span>
        <span className="footer__status">
          <span className="footer__dot" /> systems operational
        </span>
      </div>

      <style>{`
        .footer {
          padding: 28px 0;
        }
        .footer__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-faint);
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer__status {
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .footer__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 6px var(--signal);
        }
      `}</style>
    </footer>
  )
}
