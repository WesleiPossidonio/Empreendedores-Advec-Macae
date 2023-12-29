import { Button, TextRegular, TitleText } from '../../../../components'
import { Input } from '../../../../components/Input'
import { ContainerContact, Form, TextArea } from './styled'

export const Contact = () => {
  return (
    <ContainerContact>
      <TitleText>Lorem ipsuariatur!</TitleText>
      <TextRegular>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vero
      </TextRegular>

      <Form>
        <Input placeholder="Nome" type="text" />
        <Input placeholder="E-mail" />
        <Input placeholder="Telefone" />
        <TextArea placeholder="Digite sua dúvida" />
        <Button search>Enviar</Button>
      </Form>
    </ContainerContact>
  )
}
