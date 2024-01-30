import { TextRegular, TitleText } from '..'

import Logo from '../../assets/logo-advec2.webp'
import {
  ContainerFooter,
  ContentContact,
  ContentLink,
  HeaderFooter,
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
          <TextRegular weight={500}>Home</TextRegular>
          <TextRegular weight={500}>Nossos Valores</TextRegular>
          <TextRegular weight={500}>Vagas</TextRegular>
          <TextRegular weight={500}>Empresas</TextRegular>
          <TextRegular weight={500}>Contatos</TextRegular>
          <TextRegular weight={500}>Login</TextRegular>
        </div>
      </ContentLink>

      <ContentContact>
        <TitleText size="m">Contatos</TitleText>
        <div>
          <TextRegular weight={500}>
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
