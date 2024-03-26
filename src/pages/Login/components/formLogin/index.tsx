import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { Button, Input, TextRegular, TitleText } from '../../../../components'
import { useListVocancies } from '../../../../contexts/companyContext'
import { Form } from './styled'

const loginCompaniesFormSchema = zod.object({
  email: zod.string().email('Favor digite seu email corretamente'),
  password: zod.string().min(6, 'Favor digite sua senha corretamente'),
})

type createLoginCompaniesFormInputs = zod.infer<typeof loginCompaniesFormSchema>

export const FormLogin = () => {
  const [captcha, setCaptcha] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createLoginCompaniesFormInputs>({
    resolver: zodResolver(loginCompaniesFormSchema),
  })

  const { HandleLoginCompanies } = useListVocancies()

  const handleCapcha = (token: string | null) => {
    if (token !== null) {
      setCaptcha(token)
    }
  }

  const handleLoginCompanies = (data: createLoginCompaniesFormInputs) => {
    if (captcha !== '') {
      void HandleLoginCompanies(data)
      reset()
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleLoginCompanies)}>
      <TitleText>Login</TitleText>

      <Input
        type="text"
        placeholder="Digite seu E-mail"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        type="password"
        placeholder="Digite sua senha"
        {...register('password')}
        error={errors.password?.message}
      />
      <ReCAPTCHA
        className="ReCAPTCHA"
        sitekey="6LdmsKQpAAAAABUDbKwwG4084CSbsLgbFfeP-RKv"
        onChange={handleCapcha}
      />
      <TextRegular>Esqueceu senha?</TextRegular>
      <Button bg="theme">Entrar</Button>
    </Form>
  )
}
