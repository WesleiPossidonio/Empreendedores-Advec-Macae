import { Link } from 'react-scroll'
import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;

  > svg {
    display: none;
    z-index: 9999;
  }

  @media (max-width: 768px) {
    > svg {
      display: block;
      color: ${({ theme }) => theme.colors['base-blue']};
    }
  }
`

export const NavDesktop = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`

interface NavMobileProps {
  isOpen: boolean
}

export const NavMobile = styled.nav<NavMobileProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`

export const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.FontSises['base-text-m']};
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: ${({ theme }) => theme.colors['base-gray']};
  cursor: pointer;

  transition: 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors['base-blue']};
  }
`
