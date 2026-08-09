import { Bell, Menu, Sun } from 'lucide-react'

export default function Topbar({ title, subtitle, onMenu }) {
  return (
    <header className="topbar">
      <div className="topbar-title">
        <button className="icon-btn mobile-only" onClick={onMenu} aria-label="Open menu"><Menu size={19} /></button>
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      <div className="top-actions">
        <span className="live-pill"><i /> Live</span>
        <button className="icon-btn" aria-label="Theme"><Sun size={18} /></button>
        <button className="icon-btn bell" aria-label="Notifications"><Bell size={18} /><b>2</b></button>
        <div className="avatar">Ay</div>
      </div>
    </header>
  )
}
