import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
/* eslint-disable @typescript-eslint/naming-convention */

import { Button, Input, TextArea } from '../../../../components'
import { ContainerForm } from './styled'

const AddVacancyFormSchema = zod.object({
  name_vacancies: zod.string().min(1, 'Por Favor, descreva o Nome da Vaga'),
  number_of_vacancies: zod
    .string()
    .min(1, 'Por Favor, descreva o Nome da Vaga'),
  job_description: zod.string().min(1, 'Por Favor, descreva o Nome da Vaga'),
  vacancy_requirements: zod
    .string()
    .min(1, 'Por Favor, descreva o Nome da Vaga'),
})

type createVacancyFormInputs = zod.infer<typeof AddVacancyFormSchema>

export const FormVacancy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createVacancyFormInputs>({
    resolver: zodResolver(AddVacancyFormSchema),
  })

  const handleCreateVacancy = (data: createVacancyFormInputs) => {
    const {
      job_description,
      name_vacancies,
      number_of_vacancies,
      vacancy_requirements,
    } = data

    console.log({
      job_description,
      name_vacancies,
      number_of_vacancies,
      vacancy_requirements,
    })

    reset()
  }
  return (
    <ContainerForm onSubmit={handleSubmit(handleCreateVacancy)}>
      <Input
        placeholder="Nome da vaga"
        {...register('name_vacancies')}
        error={errors.name_vacancies?.message}
      />
      <Input
        placeholder="Nº de vagas"
        {...register('number_of_vacancies')}
        error={errors.name_vacancies?.message}
      />
      <TextArea
        placeholder="Descrição sobre a vaga"
        {...register('job_description')}
        error={errors.job_description?.message}
      />
      <TextArea
        placeholder="Requisitos e Qualificações"
        {...register('vacancy_requirements')}
        error={errors.vacancy_requirements?.message}
      />
      <Button>Cadastrar</Button>
    </ContainerForm>
  )
}
