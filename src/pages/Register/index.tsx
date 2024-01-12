import { useNavigate } from 'react-router-dom'

import { Footer, Header, TextRegular, TitleText } from '../../components'
import { FormRegister } from './components/formRegister'
import { ContainerForm, ContainerHeader, ContainerRegister } from './styled'

export const Register = () => {
  const navigate = useNavigate()

  const handleNavigateToLogin = () => {
    navigate('/login')
  }
  return (
    <ContainerRegister>
      <Header navigatePage />
      <ContainerHeader>
        <TitleText>Nice to See You Again</TitleText>
        <TextRegular color="black" weight={700}>
          Welcome back
        </TextRegular>
      </ContainerHeader>

      <ContainerForm>
        <FormRegister />
        <TextRegular>
          Don’t have an account?{' '}
          <span onClick={handleNavigateToLogin}>SIGN IN</span>{' '}
        </TextRegular>
      </ContainerForm>

      <Footer />
    </ContainerRegister>
  )
}
