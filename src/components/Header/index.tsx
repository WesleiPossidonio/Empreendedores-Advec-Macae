import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      <h1>Logo</h1>

      {isOpen ? (
        <X size={35} weight="fill" onClick={handleStateMenuMobile} />
      ) : (
        <List size={35} weight="fill" onClick={handleStateMenuMobile} />
      )}
      <NavDesktop>
        <NavLink
          stateHeader={stateBackgroundHeader}
          to="home"
          smooth={true}
          onClick={handleNavigateToHome}
        >
          Home
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          to="about"
          smooth={true}
          onClick={handleNavigateToHome}
        >
          Sobre Nós
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          to="principes"
          smooth={true}
          onClick={handleNavigateToHome}
        >
          Nossos Valores
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          to="companies"
          smooth={true}
          onClick={handleNavigateToHome}
        >
          Empresas
        </NavLink>
        <NavLink
          stateHeader={stateBackgroundHeader}
          to="contact"
          smooth={true}
          onClick={handleNavigateToHome}
        >
          Contatos
        </NavLink>

        <ButtonLogin onClick={handleNavigateToLogin}>Login</ButtonLogin>
      </NavDesktop>

      <NavMobile isOpen={isOpen}>
        <NavLinkMobile to="" smooth={true} onClick={handleStateMenuMobile}>
          Home
        </NavLinkMobile>
        <NavLinkMobile to="" smooth={true} onClick={handleStateMenuMobile}>
          Nossos Valores
        </NavLinkMobile>
        <NavLinkMobile to="" smooth={true} onClick={handleStateMenuMobile}>
          Vagas
        </NavLinkMobile>
        <NavLink stateHeader={stateBackgroundHeader} to="" smooth={true}>
          Empresas
        </NavLink>
        <NavLinkMobile to="" smooth={true} onClick={handleStateMenuMobile}>
          Contatos
        </NavLinkMobile>

        <ButtonLogin onClick={handleNavigateToLogin}>Login</ButtonLogin>
      </NavMobile>
    </ContainerHeader>
  )
}
