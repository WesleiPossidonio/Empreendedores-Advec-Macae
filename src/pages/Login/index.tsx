import { useNavigate } from 'react-router-dom'

import { Footer, Header, TextRegular, TitleText } from '../../components'
import { FormLogin } from './components/formLogin'
import { ContainerForm, ContainerHeader, ContainerLogin } from './styled'

export const Login = () => {
  const navigate = useNavigate()

  const handleNavigateToRegister = () => {
    navigate('/inscricao')
  }

  return (
    <ContainerLogin>
      <Header navigatePage />
      <ContainerHeader>
        <TitleText size="l">Seja Bem vindo!</TitleText>
        <TextRegular color="black" weight={700}>
          Entre Agora!
        </TextRegular>
      </ContainerHeader>

      <ContainerForm>
        <FormLogin />
        <TextRegular>
          Não possuo conta?{' '}
          <span onClick={handleNavigateToRegister}>Inscreva-se</span>{' '}
        </TextRegular>
      </ContainerForm>

      <Footer />
    </ContainerLogin>
  )
}
