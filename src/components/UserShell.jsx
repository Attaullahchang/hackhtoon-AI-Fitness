import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bot, Dumbbell, Apple, BookOpen, Activity, Camera, Bell, User, LayoutDashboard, ShieldCheck, X } from 'lucide-react'
import Brand from './Brand'
import Topbar from './Topbar'

const train = [
  ['/dashboard', 'Dashboard', LayoutDashboard],
  ['/coach', 'AI Coach', Bot],
  ['/workout-generator', 'Workout Generator', Dumbbell],
  ['/nutrition', 'Nutrition Plan', Apple],
  ['/library', 'Workout Library', BookOpen]
]
const track = [
  ['/progress', 'Progress', Activity],
  ['/photos', 'Progress Photos', Camera],
  ['/notifications', 'Notifications', Bell],
  ['/profile', 'Profile', User]
]

function SidebarLink({ item, onClick }) {
  const [path, label, Icon] = item
  return <NavLink to={path} onClick={onClick} className={({isActive}) => `side-link ${isActive ? 'active' : ''}`}><Icon size={18}/><span>{label}</span></NavLink>
}

export default function UserShell({ title, subtitle, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="app-shell">
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-head"><Brand/><button className="icon-btn mobile-only" onClick={() => setOpen(false)}><X size={19}/></button></div>
        <span className="side-group">Train</span>
        <nav>{train.map(i => <SidebarLink key={i[0]} item={i} onClick={() => setOpen(false)} />)}</nav>
        <span className="side-group">Track</span>
        <nav>{track.map(i => <SidebarLink key={i[0]} item={i} onClick={() => setOpen(false)} />)}</nav>
        <div className="sidebar-spacer" />
        <NavLink to="/admin" className="side-link admin-link"><ShieldCheck size={18}/><span>Admin Console</span><em>Admin</em></NavLink>
      </aside>
      <main className="main-area">
        <Topbar title={title} subtitle={subtitle} onMenu={() => setOpen(true)} />
        <div className="page-content">{children}</div>
      </main>
    </div>
  )
}
