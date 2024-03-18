import styled from 'styled-components'

export const ContainerClock = styled.h1`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors['base-theme']};
  align-self: center;
`

export const Span = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors['base-black']};
`
