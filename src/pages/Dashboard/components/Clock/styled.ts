import styled from 'styled-components'

export const ContainerClock = styled.h1`
  font-size: min(3.2rem, 3.5vw);
  color: ${({ theme }) => theme.colors['base-theme']};
  align-self: center;
`

export const Span = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors['base-black']};
`
