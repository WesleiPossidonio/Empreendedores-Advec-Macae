import { zodResolver } from '@hookform/resolvers/zod'
import AOS from 'aos'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { Button, TextRegular, TitleText } from '../../../../components'
import { Input } from '../../../../components/Input'
import { useListVocancies } from '../../../../contexts/companyContext'
import { ContainerContact, ContentTextArea, Form, TextArea } from './styled'

const sendEmailFormSchema = zod.object({
  name: zod.string().min(1, 'Por gentileza, digite o seu Nome'),
  email: zod.string().email('Por gentileza, digite o seu email corretamente'),
  phone: zod
    .string()
    .min(11, 'Por gentileza, digite o nemuro de telefone corretamente')
    .max(11, 'Por gentileza, digite o numero sem caractere'),
  subject: zod.string().min(1, 'Digite sua dúvida'),
})

type createSendEmailFormInputs = zod.infer<typeof sendEmailFormSchema>

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createSendEmailFormInputs>({
    resolver: zodResolver(sendEmailFormSchema),
  })

  useEffect(() => {
    AOS.init()
  }, [])

  const { handleSendEmail } = useListVocancies()

  const handleAddSendEmail = (data: createSendEmailFormInputs) => {
    handleSendEmail(data)
    reset()
  }

  return (
    <ContainerContact id="contact" data-aos="zoom-in">
      <TitleText color="black" size="l">
        Entre em contato Conosco!
      </TitleText>
      <TextRegular weight={600}>
        Tire sua duvida sobre o nosso projeto
      </TextRegular>

      <Form onSubmit={handleSubmit(handleAddSendEmail)}>
        <Input
          placeholder="Nome"
          type="text"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          placeholder="E-mail"
          type="text"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          placeholder="Telefone"
          type="text"
          {...register('phone')}
          error={errors.phone?.message}
        />

        <ContentTextArea>
          <TextArea
            placeholder="Descreva a sua dúvida"
            {...register('subject')}
            error={errors.subject?.message}
          />
          {errors.subject != null && (
            <TextRegular color="red">{errors.subject?.message}</TextRegular>
          )}
        </ContentTextArea>

        <Button bg="black" search>
          Enviar
        </Button>
      </Form>
    </ContainerContact>
  )
}
