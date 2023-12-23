import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { Button } from '..'

import { ContainerHeader, NavDesktop, NavLink, NavMobile } from './styles'

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
        <NavLink to="" smooth={true}>
          Home
        </NavLink>
        <NavLink to="" smooth={true}>
          Nossos Valores
        </NavLink>
        <NavLink to="" smooth={true}>
          Vagas
        </NavLink>
        <NavLink to="" smooth={true}>
          Contatos
        </NavLink>

        <Button>Login</Button>
      </NavDesktop>

      <NavMobile isOpen={isOpen}>
        <NavLink to="" smooth={true} onClick={handleStateMenuMobile}>
          Home
        </NavLink>
        <NavLink to="" smooth={true} onClick={handleStateMenuMobile}>
          Nossos Valores
        </NavLink>
        <NavLink to="" smooth={true} onClick={handleStateMenuMobile}>
          Vagas
        </NavLink>
        <NavLink to="" smooth={true} onClick={handleStateMenuMobile}>
          Contatos
        </NavLink>

        <Button>Login</Button>
      </NavMobile>
    </ContainerHeader>
  )
}
