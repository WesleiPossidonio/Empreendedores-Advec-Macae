import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input } from '..'

import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { useListVocancies } from '../../contexts/companyContext'
import { TextRegular } from '../typograph'
import { ContainerForm } from './styled'

const listVacanciesFormSchema = zod.object({
  vacancy: zod.string().min(1, 'Por gentileza digite a vaga'),
})

type listVacancyFormInput = zod.infer<typeof listVacanciesFormSchema>

interface FormSearshProps {
  dashboard: boolean
}

export const FormSearch = ({ dashboard }: FormSearshProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<listVacancyFormInput>({
    resolver: zodResolver(listVacanciesFormSchema),
  })

  const { handleGetListVacancies } = useListVocancies()

  const handleGetVacancies = async (ListVacancy: listVacancyFormInput) => {
    const { vacancy } = ListVacancy

    const searchState = {
      vacancy,
      dashboard,
    }
    await handleGetListVacancies(searchState)
    reset()
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <ContainerForm onSubmit={handleSubmit(handleGetVacancies)}>
      <div>
        <Input
          placeholder="Buscar Vagas"
          {...register('vacancy')}
          id="vacancy"
        />

        <Button search>Buscar</Button>
      </div>
      {errors.vacancy !== null && (
        <TextRegular color="red">{errors.vacancy?.message}</TextRegular>
      )}
    </ContainerForm>
  )
}
