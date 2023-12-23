import { type ReactNode } from 'react'

import { ContainerButton } from './styled'

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ContainerButton {...props}>{children}</ContainerButton>
}
