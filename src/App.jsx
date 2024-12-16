import { Routes, Route, Navigate } from "react-router-dom";
import { LoginUser } from "./routes/LoginUser";


export default function App() {
  return (
    <Routes>
      <Route path="/loginUser" element={<LoginUser />} />
      <Route path="/*" element={<Navigate to='/' />}></Route>
    </Routes>
  )
}