import { Routes, Route } from 'react-router-dom'

import {
  DashBoard,
  Home,
  Login,
  PageVacancies,
  Register,
  Vacancies,
} from '../pages'
import { PrivateRoutes } from './PrivateRoutes'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vagas" element={<PageVacancies />} />
      <Route path="/inscricão" element={<Vacancies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inscricao" element={<Register />} />

      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
    </Routes>
  )
}
