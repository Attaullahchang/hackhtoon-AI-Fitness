import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, BarChart3, Cpu, Bot, ScrollText, Image, Dumbbell, Bell, Settings, ArrowLeft, X } from 'lucide-react'
import Brand from './Brand'
import Topbar from './Topbar'

const items = [
  ['/admin', 'Overview', LayoutDashboard],
  ['/admin/users', 'Users', Users],
  ['/admin/analytics', 'Analytics', BarChart3],
  ['/admin/ai-usage', 'AI Usage', Cpu],
  ['/admin/ai-logs', 'AI Logs', Bot],
  ['/admin/system-logs', 'System Logs', ScrollText],
  ['/admin/moderation', 'Image Moderation', Image],
  ['/admin/workouts', 'Workouts', Dumbbell],
  ['/admin/notifications', 'Notifications', Bell],
  ['/admin/settings', 'Settings', Settings]
]

export default function AdminShell({ title, subtitle='Feature flags, limits and AI configuration.', children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="app-shell admin-shell">
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-head"><Brand admin/><button className="icon-btn mobile-only" onClick={() => setOpen(false)}><X size={19}/></button></div>
        <span className="side-group">Management</span>
        <nav>{items.map(([path,label,Icon]) => <NavLink end={path==='/admin'} key={path} to={path} onClick={()=>setOpen(false)} className={({isActive})=>`side-link admin-nav ${isActive?'active':''}`}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>
        <div className="sidebar-spacer"/>
        <NavLink to="/dashboard" className="side-link"><ArrowLeft size={18}/><span>Back to app</span></NavLink>
      </aside>
      <main className="main-area">
        <Topbar title={title} subtitle={subtitle} onMenu={()=>setOpen(true)}/>
        <div className="page-content">{children}</div>
      </main>
    </div>
  )
}
