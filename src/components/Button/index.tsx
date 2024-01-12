import { type ReactNode } from 'react'

import { ContainerButton } from './styled'

interface ButtonProps {
  children: ReactNode
  search?: boolean
}

export const Button = ({ children, search }: ButtonProps) => {
  return <ContainerButton search={search}>{children}</ContainerButton>
}
