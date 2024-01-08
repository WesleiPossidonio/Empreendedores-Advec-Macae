import {
  Button,
  Footer,
  Header,
  Input,
  TextRegular,
  TitleText,
} from '../../components'
import { ContainerForm, ContainerHeader, ContainerLogin, Form } from './styled'

export const Login = () => {
  return (
    <ContainerLogin>
      <Header />
      <ContainerHeader>
        <TitleText>Nice to See You Again</TitleText>
        <TextRegular color="black" weight={700}>
          Welcome back
        </TextRegular>
      </ContainerHeader>

      <ContainerForm>
        <Form>
          <TitleText>Log In Please</TitleText>

          <Input placeholder="Digite seu E-mail" />
          <Input placeholder="Digite sua senha" />
          <TextRegular>Esqueceu senha?</TextRegular>
          <Button>Entrar</Button>
        </Form>

        <TextRegular>
          Don’t have an account? <span>SIGN UP</span>{' '}
        </TextRegular>
      </ContainerForm>

      <Footer />
    </ContainerLogin>
  )
}
