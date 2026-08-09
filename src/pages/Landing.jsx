import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Dumbbell, Apple, Activity, Camera, ShieldCheck, Waves } from 'lucide-react'
import Brand from '../components/Brand'

const features = [
  [Bot, 'AI Coach Chat', 'Ask anything about training, recovery or nutrition and get structured, RAG-grounded answers.'],
  [Dumbbell, 'Workout Generator', 'Goal, equipment and schedule in — a complete periodised plan out, in seconds.'],
  [Apple, 'Nutrition Plans', 'Macro-accurate meal plans that respect your diet preferences and allergies.'],
  [Activity, 'Progress Analytics', 'Weight, body fat, streaks and calories rendered in beautiful interactive charts.'],
  [Camera, 'Progress Photos', 'Drag-and-drop uploads with AI moderation states before anything goes public.'],
  [ShieldCheck, 'Admin Console', 'User management, AI usage analytics, system logs and image moderation.']
]

export default function Landing(){
  return <div className="landing">
    <header className="landing-nav"><Brand/><div><Link to="/login" className="text-link">Sign in</Link><Link to="/register" className="btn btn-sm">Get started</Link></div></header>
    <section className="hero">
      <span className="eyebrow">Powered by LLM + RAG</span>
      <h1>Your personal <span>AI fitness<br className="desktop-break"/> coach</span>, always on</h1>
      <p>Adaptive workout plans, macro-perfect nutrition and progress analytics — built for people who want results, not spreadsheets.</p>
      <div className="hero-actions"><Link to="/register" className="btn">Start training free <ArrowRight size={16}/></Link><Link to="/dashboard" className="btn btn-ghost">View live demo</Link></div>
      <div className="stats-row">
        <div><strong>12.4k</strong><small>Athletes</small></div><div><strong>58k</strong><small>AI plans</small></div><div><strong>9.3k</strong><small>Workouts</small></div><div><strong>4.9★</strong><small>Rating</small></div>
      </div>
    </section>
    <section className="features-section"><h2>Everything a modern fitness platform needs</h2><div className="feature-grid">{features.map(([Icon,title,text])=><article className="feature-card" key={title}><span className="feature-icon"><Icon size={20}/></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="cta"><Waves size={30}/><h2>Train smarter starting today</h2><p>Join thousands of athletes using AI to plan, track and hit their goals faster.</p><Link to="/register" className="btn btn-dark">Create your account</Link></section>
    <footer>© 2026 AI Fitness Coach. Frontend demo with mock data — MERN + AI ready.</footer>
  </div>
}
