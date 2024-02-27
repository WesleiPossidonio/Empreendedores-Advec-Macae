import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import {
  FormSearch,
  SelectBranchFilter,
  TextRegular,
  TitleText,
} from '../../../../components'
import { useListVocancies } from '../../../../contexts/companyContext'
import {
  CardVacancies,
  ContainerFormSelect,
  ContainerListVacancies,
  ContentCard,
  ContentData,
  ContentDataVacancies,
  ContentVacancies,
  FooterCard,
  HeaderCard,
} from '../../styled'

interface PageAllVacanciesProps {
  handleSelectedVacancies: (data: string) => void
}

export const PageAllVacancies = ({
  handleSelectedVacancies,
}: PageAllVacanciesProps) => {
  const { listVacancy, companyBranchFilter } = useListVocancies()

  const listVacancyFiltered = listVacancy.filter(
    (list) => list.vacancies.branch_of_activity === companyBranchFilter,
  )

  return (
    <ContentData>
      <ContentDataVacancies>
        <ContentVacancies>
          <TitleText>Todas as Vagas</TitleText>
        </ContentVacancies>

        <ContainerFormSelect>
          <FormSearch selectedPage="pageJob" formDashboard />
          <SelectBranchFilter />
        </ContainerFormSelect>
      </ContentDataVacancies>

      <ContainerListVacancies>
        {companyBranchFilter === '' ? (
          listVacancy.map((list) => {
            return (
              <CardVacancies
                key={list.id}
                onClick={() => {
                  handleSelectedVacancies(list.id)
                }}
              >
                <HeaderCard>
                  <img src={list.vacancies.path_img} alt="" />
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
                  <TextRegular size="sm">
                    Publicada{' '}
                    {formatDistanceToNow(new Date(list.createdAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </TextRegular>
                </FooterCard>
              </CardVacancies>
            )
          })
        ) : listVacancyFiltered.length < 1 ? (
          <TextRegular>Vaga não Encontrada!</TextRegular>
        ) : (
          listVacancyFiltered.map((list) => {
            return (
              <CardVacancies
                key={list.id}
                onClick={() => {
                  handleSelectedVacancies(list.id)
                }}
              >
                <HeaderCard>
                  <img src={list.vacancies.path_img} alt="" />
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
                  <TextRegular size="sm">
                    Publicada{' '}
                    {formatDistanceToNow(new Date(list.createdAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </TextRegular>
                </FooterCard>
              </CardVacancies>
            )
          })
        )}
      </ContainerListVacancies>
    </ContentData>
  )
}
