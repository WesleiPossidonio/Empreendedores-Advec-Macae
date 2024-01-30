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
        <TitleText size="l">Faça Parte desse Projeto</TitleText>
        <TextRegular color="black" weight={700}>
          Inscreva-se Agora!
        </TextRegular>
      </ContainerHeader>

      <ContainerForm>
        <FormRegister />
        <TextRegular>
          Já possuo conta?{' '}
          <span onClick={handleNavigateToLogin}>Fazer Login</span>{' '}
        </TextRegular>
      </ContainerForm>

      <Footer />
    </ContainerRegister>
  )
}
