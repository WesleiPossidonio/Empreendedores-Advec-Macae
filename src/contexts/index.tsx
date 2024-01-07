import { type ReactNode } from 'react'

import { ListCompanyProvider } from './companyContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ListCompanyProvider>{children}</ListCompanyProvider>
}
