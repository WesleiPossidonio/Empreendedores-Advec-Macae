import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/logo-advec2.webp'
import {
  ButtonLogin,
  ContainerHeader,
  NavDesktop,
  NavLink,
  NavLinkMobile,
  NavMobile,
} from './styles'

interface HeaderProps {
  navigatePage: boolean
}

export const Header = ({ navigatePage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  const Navigate = useNavigate()

  const handleStateMenuMobile = () => {
    setIsOpen((open: boolean) => !open)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 50) {
        setStateBackgroundHeader(true)
      } else {
        setStateBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavigateToHome = () => {
    navigatePage && Navigate('/')
  }

  const handleNavigateToLogin = () => {
    Navigate('/login')
  }

  return (
    <ContainerHeader stateHeader={stateBackgroundHeader}>
      <img src={Logo} alt="" onClick={handleNavigateToHome} />
      {isOpen ? (
        <X size={35} weight="fill" onClick={handleStateMenuMobile} />
      ) : (
        <List size={35} weight="fill" onClick={handleStateMenuMobile} />
      )}
      <NavDesktop>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#home"
          onClick={handleNavigateToHome}
        >
          Home
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#about"
          onClick={handleNavigateToHome}
        >
          Sobre Nós
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#principes"
          onClick={handleNavigateToHome}
        >
          Nossos Valores
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#companies"
          onClick={handleNavigateToHome}
        >
          Empresas
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          href="#contact"
          onClick={handleNavigateToHome}
        >
          Contatos
        </NavLink>

        <ButtonLogin onClick={handleNavigateToLogin}>Login</ButtonLogin>
      </NavDesktop>

      <NavMobile isOpen={isOpen}>
        <NavLinkMobile href="#home" onClick={handleStateMenuMobile}>
          Home
        </NavLinkMobile>
        <NavLinkMobile href="#about" onClick={handleStateMenuMobile}>
          Nossos Valores
        </NavLinkMobile>
        <NavLinkMobile href="#principes" onClick={handleStateMenuMobile}>
          Vagas
        </NavLinkMobile>
        <NavLinkMobile href="#companies" onClick={handleStateMenuMobile}>
          Empresas
        </NavLinkMobile>
        <NavLinkMobile href="#Contatos" onClick={handleStateMenuMobile}>
          Contatos
        </NavLinkMobile>

        <ButtonLogin onClick={handleNavigateToLogin}>Login</ButtonLogin>
      </NavMobile>
    </ContainerHeader>
  )
}
