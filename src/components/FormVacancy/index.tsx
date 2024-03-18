import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

/* eslint-disable @typescript-eslint/naming-convention */

import {
  type ListVacanciesProps,
  useListVocancies,
} from '../../contexts/companyContext'
// import { TextArea } from '../../../Home/components/Contact/styled'
import { TextArea } from '../../pages/Home/components/Contact/styled'
import { Form } from './styled'

import { Button, Input } from '..'

const AddVacancyFormSchema = zod.object({
  name_vacancies: zod.string().min(1, 'Por Favor, descreva o Nome da Vaga'),
  number_of_vacancies: zod
    .string()
    .min(1, 'Por Favor, descreva  a quantidade de vagas'),
  job_description: zod.string().min(1, 'Por Favor, descreva o Nome da Vaga'),
  vacancy_requirements: zod
    .string()
    .min(1, 'Por Favor, descreva o Nome da Vaga'),
})

interface FormVacancyProps {
  vacancySelected?: ListVacanciesProps
}

type createVacancyFormInputs = zod.infer<typeof AddVacancyFormSchema>

export const FormVacancy = ({ vacancySelected }: FormVacancyProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createVacancyFormInputs>({
    resolver: zodResolver(AddVacancyFormSchema),
  })

  const { createNewVacancies } = useListVocancies()

  const handleCreateVacancy = (data: createVacancyFormInputs) => {
    void createNewVacancies(data)
    reset()
  }

  return (
    <>
      {vacancySelected !== undefined ? (
        <Form onSubmit={handleSubmit(handleCreateVacancy)}>
          <Input
            placeholder="Digite o nome da vaga"
            {...register('name_vacancies')}
            error={errors.name_vacancies?.message}
            defaultValue={vacancySelected.name_vacancies}
          />
          <Input
            placeholder="Nº de vagas"
            {...register('number_of_vacancies')}
            error={errors.number_of_vacancies?.message}
            defaultValue={vacancySelected.number_of_vacancies}
          />
          <TextArea
            placeholder="Descrição sobre a vaga"
            {...register('job_description')}
            error={errors.job_description?.message}
            defaultValue={vacancySelected.job_description}
          />
          <TextArea
            placeholder="Requisitos e Qualificações"
            {...register('vacancy_requirements')}
            error={errors.vacancy_requirements?.message}
            defaultValue={vacancySelected.vacancy_requirements}
          />
          <Button bg="theme">Atualizar</Button>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit(handleCreateVacancy)}>
          <Input
            placeholder="Digite o nome da vaga"
            {...register('name_vacancies')}
            error={errors.name_vacancies?.message}
          />
          <Input
            placeholder="Nº de vagas"
            {...register('number_of_vacancies')}
            error={errors.number_of_vacancies?.message}
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
          <Button bg="theme">Cadastrar</Button>
        </Form>
      )}
    </>
  )
}
