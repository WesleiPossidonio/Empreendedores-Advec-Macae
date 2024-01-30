import { type MouseEvent, type ReactNode } from 'react'

import { ContainerButton } from './styled'

interface ButtonProps {
  children: ReactNode
  search?: boolean
  bg: 'black' | 'theme'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ children, search, bg, onClick }: ButtonProps) => {
  return (
    <ContainerButton search={search} bg={bg} onClick={onClick}>
      {children}
    </ContainerButton>
  )
}
