import { type ReactNode } from 'react'

import { ContainerButton } from './styled'

interface ButtonProps {
  children: ReactNode
  search?: boolean
  bg: 'black' | 'theme'
}

export const Button = ({ children, search, bg }: ButtonProps) => {
  return (
    <ContainerButton search={search} bg={bg}>
      {children}
    </ContainerButton>
  )
}
