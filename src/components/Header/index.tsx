import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { Button } from '..'

import {
  ContainerHeader,
  NavDesktop,
  NavLink,
  NavLinkMobile,
  NavMobile,
} from './styles'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

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

  return (
    <ContainerHeader stateHeader={stateBackgroundHeader}>
      <h1>Logo</h1>

      {isOpen ? (
        <X size={35} weight="fill" onClick={handleStateMenuMobile} />
      ) : (
        <List size={35} weight="fill" onClick={handleStateMenuMobile} />
      )}
      <NavDesktop>
        <NavLink stateHeader={stateBackgroundHeader} to="" smooth={true}>
          Home
        </NavLink>
        <NavLink stateHeader={stateBackgroundHeader} to="" smooth={true}>
          Nossos Valores
        </NavLink>
        <NavLink stateHeader={stateBackgroundHeader} to="" smooth={true}>
          Vagas
        </NavLink>
        <NavLink stateHeader={stateBackgroundHeader} to="" smooth={true}>
          Empresas
        </NavLink>
        <NavLink stateHeader={stateBackgroundHeader} to="" smooth={true}>
          Contatos
        </NavLink>

        <Button>Login</Button>
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

        <Button>Login</Button>
      </NavMobile>
    </ContainerHeader>
  )
}
