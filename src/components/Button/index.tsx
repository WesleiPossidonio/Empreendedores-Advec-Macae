import { type ReactNode } from 'react'

import { ContainerButton } from './styled'

interface ButtonProps {
  children: ReactNode
  search?: boolean
}

export const Button = ({ children, search, ...props }: ButtonProps) => {
  return (
    <ContainerButton {...props} search={search}>
      {children}
    </ContainerButton>
  )
}
