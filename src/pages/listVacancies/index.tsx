import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import ImageError from '../../assets/ImageErrorVacancy.svg'
import { Button, Input } from '../../components'
import { TextRegular, TitleText } from '../../components/typograph'
import {
  useListVocancies,
  type ListVacanciesProps,
} from '../../contexts/companyContext'
import {
  CardVacancies,
  ContainerListVacancies,
  ContainerVacancies,
  ContentCard,
  ContentData,
  ContentDataVacancies,
  ContentVacancies,
  FooterCard,
  HeaderCard,
  HeaderVacancies,
} from './styled'

interface LocationProps {
  state: ListVacanciesProps[]
}

const listVacanciesFormSchema = zod.object({
  vacancy: zod.string().min(1, 'Por gentileza digite a vaga'),
})

type listVacancyFormInput = zod.infer<typeof listVacanciesFormSchema>

export const PageVacancies = () => {
  const { state } = useLocation() as unknown as LocationProps
  const { searchVacancy, handleGetListVacancies } = useListVocancies()

  const [listVacancies, setListVacancies] = useState<ListVacanciesProps[]>([])

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<listVacancyFormInput>({
    resolver: zodResolver(listVacanciesFormSchema),
  })

  const handleGetVacancies = async (ListVacancy: listVacancyFormInput) => {
    const { vacancy } = ListVacancy
    await handleGetListVacancies(vacancy)
    reset()
  }

  useEffect(() => {
    const addLocalStorage = async () => {
      if (state !== null) {
        localStorage.setItem('Vacancies:Vacancies1.0', JSON.stringify(state))
      }
    }

    const dataVacancy = localStorage.getItem('Vacancies:Vacancies1.0')
    const parsedData: ListVacanciesProps[] =
      dataVacancy !== null ? JSON.parse(dataVacancy) : addLocalStorage()

    if (state === null) {
      setListVacancies(parsedData)
    } else if (state !== parsedData) {
      setListVacancies(state)
      void addLocalStorage()
    } else {
      setListVacancies(state)
    }
  }, [state])

  const handleSelectedVacancies = (id: number) => {
    const listSelected = listVacancies.filter((list) => list.id === id)

    console.log('cheguei')
    navigate('/inscricão', {
      state: listSelected,
    })
  }

  const handleToGoBackHome = () => {
    navigate('/')
  }

  console.log(searchVacancy)

  return (
    <ContainerVacancies>
      <HeaderVacancies>
        <TitleText>Logo</TitleText>
        <TextRegular weight={600} onClick={handleToGoBackHome}>
          Voltar a Home
        </TextRegular>
      </HeaderVacancies>

      {listVacancies.length < 1 ? (
        <ContentData>
          <ContentDataVacancies>
            <ContentVacancies>
              <TitleText>{searchVacancy}</TitleText>
              <TextRegular color="black" weight={700} size="s">
                Vaga Não Encontrada
              </TextRegular>
            </ContentVacancies>

            <form onSubmit={handleSubmit(handleGetVacancies)}>
              <Input
                type="search"
                placeholder="Buscar Vagas"
                {...register('vacancy')}
                error={errors.vacancy?.message}
              />
              <Button bg="theme" search>
                Buscar
              </Button>
            </form>
          </ContentDataVacancies>

          <img src={ImageError} alt="" />
        </ContentData>
      ) : (
        <ContentData>
          <ContentDataVacancies>
            <ContentVacancies>
              <TitleText>{searchVacancy}</TitleText>
              <TextRegular>
                {listVacancies.length} Vagas Encontradas
              </TextRegular>
            </ContentVacancies>

            <form onSubmit={handleSubmit(handleGetVacancies)}>
              <Input
                type="search"
                placeholder="Buscar Vagas"
                {...register('vacancy')}
                error={errors.vacancy?.message}
              />
              <Button bg="theme">Buscar</Button>
            </form>
          </ContentDataVacancies>

          <ContainerListVacancies>
            {listVacancies.map((list) => {
              return (
                <CardVacancies
                  key={list.id}
                  onClick={() => {
                    handleSelectedVacancies(list.id)
                  }}
                >
                  <HeaderCard>
                    <img src={list.vacancies.urlImage} alt="" />
                    <TextRegular size="m" color="black" weight={700}>
                      {list.vacancies.name_companies}
                    </TextRegular>
                  </HeaderCard>

                  <ContentCard>
                    <TextRegular size="s" weight={600}>
                      {list.name_vacancies}
                    </TextRegular>
                    <div>
                      <TextRegular color="theme" weight={600}>
                        {list.number_of_vacancies} Vagas
                      </TextRegular>
                      <TextRegular weight={600}>Macaé-RJ</TextRegular>
                    </div>
                  </ContentCard>

                  <FooterCard>
                    <TextRegular>Pubicada há 10 dias</TextRegular>
                  </FooterCard>
                </CardVacancies>
              )
            })}
          </ContainerListVacancies>
        </ContentData>
      )}
    </ContainerVacancies>
  )
}
