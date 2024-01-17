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
          <TextRegular>
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
        <TextRegular>Home</TextRegular>
        <TextRegular>Nossos Valores</TextRegular>
        <TextRegular>Vagas</TextRegular>
        <TextRegular>Empresas</TextRegular>
        <TextRegular>Contatos</TextRegular>
        <TextRegular>Login</TextRegular>
      </ContentLink>

      <ContentContact>
        <TitleText size="m">Contatos</TitleText>
        <TextRegular>
          Email:
          <a href="mailto:advecempreendedores@gmail.com">
            advecempreendedores@gmail.com
          </a>
        </TextRegular>
        <TextRegular>
          Tel: <a href="tel:+22222222222">22 22222 - 2222</a>
        </TextRegular>
      </ContentContact>
    </ContainerFooter>
  )
}
