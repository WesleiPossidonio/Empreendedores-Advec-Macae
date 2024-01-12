import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  const companies = localStorage.getItem(
    'AdvecEmpreendedores:EmpreendedoresData1.0',
  )

  return companies !== null ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="login" />
  )
}
