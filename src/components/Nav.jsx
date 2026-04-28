import { NavLink } from 'react-router-dom';
import GlassFrame from './GlassFrame.jsx';

const links = [
  { to: '/',                 label: 'Inicio' },
  { to: '/emprendimientos',  label: 'Emprendimiento' },
  { to: '/ceiba',            label: 'CEIBA' },
  { to: '/studio',           label: 'Studio' },
  { to: '/ecos',             label: 'Ecos' },
];

export default function Nav() {
  return (
    <nav className="glass-nav">
      <div className="nav-inner">

        {/* Logo cell — left column */}
        <NavLink to="/" className="nav-logo-cell" aria-label="NaturaTech LAC Home">
          <GlassFrame
            cornerRadius={999}
            className="nav-logo-glass"
            displacementScale={50}
            blurAmount={0.07}
            saturation={140}
            aberrationIntensity={1.2}
            elasticity={0.25}
          >
            <div className="nav-logo-inner">
              <img src="/assets/images/logo.svg" alt="" width="30" height="27" />
            </div>
          </GlassFrame>
        </NavLink>

        {/* Pill cell — centered column */}
        <div className="nav-pill-cell">
          <GlassFrame
            cornerRadius={999}
            className="nav-pill-glass"
            displacementScale={26}
            blurAmount={1}
            saturation={130}
            aberrationIntensity={1.5}
            elasticity={0.2}
          >
            <div className="nav-pill">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                >
                  <span className="nav-icon" aria-hidden="true">
                    <img src="/assets/icons/Navbar.svg" alt="" />
                  </span>
                  <span className="nav-text">{l.label}</span>
                </NavLink>
              ))}
            </div>
          </GlassFrame>
        </div>

        <div className="nav-spacer-cell" />
      </div>
    </nav>
  );
}
