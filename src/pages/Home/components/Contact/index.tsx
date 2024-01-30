import {
  Button,
  TextArea,
  TextRegular,
  TitleText,
} from '../../../../components'
import { Input } from '../../../../components/Input'
import { ContainerContact, Form } from './styled'

export const Contact = () => {
  return (
    <ContainerContact id="contact" data-aos="zoom-in">
      <TitleText color="black" size="l">
        Entre em contato Conosco!
      </TitleText>
      <TextRegular weight={600}>
        Tire sua duvida sobre o nosso projeto
      </TextRegular>

      <Form>
        <Input placeholder="Nome" type="text" />
        <Input placeholder="E-mail" type="text" />
        <Input placeholder="Telefone" type="text" />
        <TextArea placeholder="Digite sua dúvida" />
        <Button bg="black" search>
          Enviar
        </Button>
      </Form>
    </ContainerContact>
  )
}
