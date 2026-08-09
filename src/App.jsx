import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import { Login, Register } from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { Coach, WorkoutGenerator, Nutrition, Library, Progress, Photos, Notifications, Profile } from './pages/UserPages'
import { AdminOverview, AdminUsers, AdminAnalytics, AIUsage, AILogs, SystemLogs, Moderation, AdminWorkouts, AdminNotifications, AdminSettings } from './pages/AdminPages'

export default function App(){
  return <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/coach" element={<Coach/>}/>
    <Route path="/workout-generator" element={<WorkoutGenerator/>}/>
    <Route path="/nutrition" element={<Nutrition/>}/>
    <Route path="/library" element={<Library/>}/>
    <Route path="/progress" element={<Progress/>}/>
    <Route path="/photos" element={<Photos/>}/>
    <Route path="/notifications" element={<Notifications/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/admin" element={<AdminOverview/>}/>
    <Route path="/admin/users" element={<AdminUsers/>}/>
    <Route path="/admin/analytics" element={<AdminAnalytics/>}/>
    <Route path="/admin/ai-usage" element={<AIUsage/>}/>
    <Route path="/admin/ai-logs" element={<AILogs/>}/>
    <Route path="/admin/system-logs" element={<SystemLogs/>}/>
    <Route path="/admin/moderation" element={<Moderation/>}/>
    <Route path="/admin/workouts" element={<AdminWorkouts/>}/>
    <Route path="/admin/notifications" element={<AdminNotifications/>}/>
    <Route path="/admin/settings" element={<AdminSettings/>}/>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>
}
