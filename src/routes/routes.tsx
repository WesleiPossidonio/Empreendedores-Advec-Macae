import { Routes, Route } from 'react-router-dom'

import { Home, PageVacancies, Vacancies } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vagas" element={<PageVacancies />} />
      <Route path="/inscricão" element={<Vacancies />} />
    </Routes>
  )
}
