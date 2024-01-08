import { Routes, Route } from 'react-router-dom'

import { Home, Login, PageVacancies, Register, Vacancies } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vagas" element={<PageVacancies />} />
      <Route path="/inscricão" element={<Vacancies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inscricao" element={<Register />} />
    </Routes>
  )
}
