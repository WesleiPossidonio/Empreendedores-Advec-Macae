import { FormSearch, TextRegular, TitleText } from '../../../../components'
import { useListVocancies } from '../../../../contexts/companyContext'
import {
  CardVacancies,
  ContainerListVacancies,
  ContentCard,
  ContentData,
  ContentDataVacancies,
  ContentVacancies,
  FooterCard,
  HeaderCard,
} from '../../styled'

interface PageAllVacanciesProps {
  handleSelectedVacancies: (data: number) => void
}

export const PageAllVacancies = ({
  handleSelectedVacancies,
}: PageAllVacanciesProps) => {
  const { listVacancy } = useListVocancies()
  return (
    <ContentData>
      <ContentDataVacancies>
        <ContentVacancies>
          <TitleText>Todas as Vagas</TitleText>
        </ContentVacancies>
        <div>
          <FormSearch selectedPage="pageJob" formDashboard />
        </div>
      </ContentDataVacancies>

      <ContainerListVacancies>
        {listVacancy.map((list) => {
          return (
            <CardVacancies
              key={list.vacancies_id}
              onClick={() => {
                handleSelectedVacancies(list.vacancies_id)
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
  )
}
