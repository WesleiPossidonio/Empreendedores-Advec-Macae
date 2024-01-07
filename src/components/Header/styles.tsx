import { Link } from 'react-scroll'
import styled from 'styled-components'

interface HeaderProps {
  stateHeader?: boolean
}

export const ContainerHeader = styled.header<HeaderProps>`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;

  position: fixed;
  z-index: 99;

  background: ${({ theme, stateHeader }) =>
    stateHeader === true ? theme.colors['base-white'] : 'transparent'};

  > svg {
    display: none;
    z-index: 9999;
  }

  @media (max-width: 768px) {
    > svg {
      display: block;
      color: ${({ theme }) => theme.colors['base-theme']};
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
  width: 100%;
  height: 100vh;

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

  z-index: 99;

  background-color: ${({ theme }) => theme.colors['base-white']};
`

export const NavLink = styled(Link)<HeaderProps>`
  font-size: ${({ theme }) => theme.FontSizes['text-regular-m']};
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  color: ${({ theme, stateHeader }) =>
    stateHeader === true
      ? theme.colors['base-gray']
      : theme.colors['base-white']};
  cursor: pointer;

  transition: 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors['base-theme']};
  }
`

export const NavLinkMobile = styled(NavLink)`
  color: ${({ theme }) => theme.colors['base-gray']};
`
