import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { Button, Input, TextRegular, TitleText } from '../../../../components'
import { useListVocancies } from '../../../../contexts/companyContext'
import { Form } from './styled'

const loginCompaniesFormSchema = zod.object({
  email: zod.string().email('Favor digite seu email corretamente'),
  password: zod
    .string()
    .min(6, 'Favor digite sua senha corretamente')
    .max(6, 'Favor digite sua senha corretamente'),
})

type createLoginCompaniesFormInputs = zod.infer<typeof loginCompaniesFormSchema>

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createLoginCompaniesFormInputs>({
    resolver: zodResolver(loginCompaniesFormSchema),
  })

  const { HandleLoginCompanies } = useListVocancies()

  const handleLoginCompanies = (data: createLoginCompaniesFormInputs) => {
    void HandleLoginCompanies(data)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(handleLoginCompanies)}>
      <TitleText>Log In Please</TitleText>

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
      <TextRegular>Esqueceu senha?</TextRegular>
      <Button bg="theme">Entrar</Button>
    </Form>
  )
}
