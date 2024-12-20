import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import DashboardAdmin from './pages/DashboardAdmin'
import LoginAdmin from './pages/LoginAdmin'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/loginAdmin" element={<LoginAdmin />} />
      <Route path="/" element={<DashboardAdmin />}></Route>
      <Route path="/*" element={<Navigate to="/" />}></Route>
    </Routes>
  )
}
