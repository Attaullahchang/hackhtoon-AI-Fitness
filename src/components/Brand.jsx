import { Dumbbell } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Brand({ admin = false }) {
  return (
    <Link to={admin ? '/admin' : '/'} className="brand">
      <span className={`brand-mark ${admin ? 'purple' : ''}`}>
        {admin ? '⚙' : <Dumbbell size={20} strokeWidth={2.4} />}
      </span>
      <span>
        <strong>{admin ? 'Admin Console' : 'AI Fitness Coach'}</strong>
        {admin && <small>Platform control</small>}
      </span>
    </Link>
  )
}
