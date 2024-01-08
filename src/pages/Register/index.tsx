import {
  Button,
  Footer,
  Header,
  Input,
  TextRegular,
  TitleText,
} from '../../components'
import { TextArea } from '../Home/components/Contact/styled'
import {
  ContainerForm,
  ContainerHeader,
  ContainerInputImage,
  ContainerRegister,
  ContentInput,
  Form,
  InputFile,
  Label,
} from './styled'

export const Register = () => {
  return (
    <ContainerRegister>
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

          <Input placeholder="Digite o nome da empresa" />
          <Input placeholder="Digite o email da empresa" />
          <Input placeholder="Digite sua senha" />
          <TextArea placeholder="Descreva a sua empresa" />

          <ContainerInputImage>
            <TextRegular weight={700}>Adicione a Logo e o Banner</TextRegular>
            <ContentInput>
              <Label htmlFor="logo">Logo</Label>
              <InputFile type="file" id="logo" />
              <Label htmlFor="Banner">Banner</Label>
              <InputFile type="file" id="Banner" />
            </ContentInput>
          </ContainerInputImage>
          <Button>Cadastrar</Button>
        </Form>

        <TextRegular>
          Don’t have an account? <span>SIGN UP</span>{' '}
        </TextRegular>
      </ContainerForm>

      <Footer />
    </ContainerRegister>
  )
}
