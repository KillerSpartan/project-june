import { NavLink } from 'react-router-dom';

const social = [
  { id: 'instagram', label: 'Instagram', href: '#', svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
  ) },
  { id: 'facebook', label: 'Facebook', href: '#', svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
  ) },
  { id: 'linkedin', label: 'LinkedIn', href: '#', svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
  ) },
  { id: 'youtube', label: 'YouTube', href: '#', svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#101511"/></svg>
  ) },
  { id: 'whatsapp', label: 'WhatsApp', href: '#', svg: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
  ) },
];

const footerLinks = [
  { to: '/',                label: 'INICIO' },
  { to: '/emprendimientos', label: 'EMPRENDIMIENTOS' },
  { to: '/ceiba',           label: 'CEIBA' },
  { to: '/studio',          label: 'PORTAFOLIO' },
  { to: '/ecos',            label: 'PUBLICACIONES' },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/assets/images/logo.svg" alt="NaturaTech LAC" width="46" height="42" />
          </div>
          <p className="footer-description">
            At NaturaTech LAC we are driven by a commitment to discover and explore de roots
            that emerge from the territories their stories, and above all, their innovation.
          </p>
          <div className="footer-socials">
            {social.map((s) => (
              <a key={s.id} href={s.href} aria-label={s.label} className="social-icon css-glass">
                {s.svg}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            {footerLinks.map((l) => (
              <NavLink 
                key={l.to} 
                to={l.to} 
                className={({ isActive }) => `footer-link ${isActive ? 'active' : ''}`}
                end={l.to === '/'}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
