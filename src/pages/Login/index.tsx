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
        <TitleText>Nice to See You Again</TitleText>
        <TextRegular color="black" weight={700}>
          Welcome back
        </TextRegular>
      </ContainerHeader>

      <ContainerForm>
        <FormLogin />
        <TextRegular>
          Don’t have an account?{' '}
          <span onClick={handleNavigateToRegister}>SIGN UP</span>{' '}
        </TextRegular>
      </ContainerForm>

      <Footer />
    </ContainerLogin>
  )
}
