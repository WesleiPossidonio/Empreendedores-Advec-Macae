import { TextRegular, TitleText } from '..'

import Logo from '../../assets/logo-advec2.webp'
import {
  ContainerFooter,
  ContentContact,
  ContentLink,
  HeaderFooter,
  NavLink,
} from './styled'

export const Footer = () => {
  return (
    <ContainerFooter>
      <HeaderFooter>
        <img src={Logo} alt="" />
        <div>
          <TextRegular color="black" weight={700}>
            Todos os Direitos Reservados
          </TextRegular>
          <TextRegular weight={500}>
            {' '}
            &copy; 2023 Desenvolvido por{' '}
            <a
              href="https://www.wesleifranca.com.br"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              Weslei França
            </a>
          </TextRegular>
        </div>
      </HeaderFooter>

      <ContentLink>
        <TitleText size="m">Navagação</TitleText>
        <div>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#principes">Nossos Valores</NavLink>
          <NavLink>Vagas</NavLink>

          <NavLink href="#companies">Empresas</NavLink>
          <NavLink href="#contact">Contatos</NavLink>
          <NavLink href="#home">Login</NavLink>
        </div>
      </ContentLink>

      <ContentContact>
        <TitleText size="m">Contatos</TitleText>
        <div>
          <TextRegular size="s" weight={500}>
            Email:
            <a href="mailto:advecempreendedores@gmail.com">
              advecempreendedores@gmail.com
            </a>
          </TextRegular>
          <TextRegular weight={500}>
            Tel: <a href="tel:+22222222222">22 22222 - 2222</a>
          </TextRegular>
        </div>
      </ContentContact>
    </ContainerFooter>
  )
}
