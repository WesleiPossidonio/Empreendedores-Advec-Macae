import ImageError from '../../../../assets/ImageErrorVacancy.svg'
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

interface PageFilteredVacanciesProps {
  handleSelectedVacancies: (data: string) => void
}

export const PageFilteredVacancies = ({
  handleSelectedVacancies,
}: PageFilteredVacanciesProps) => {
  const { searchVacancy, listOfFilteredVacancies, companyBranchFilter } =
    useListVocancies()

  const branchFilterCompany = listOfFilteredVacancies.filter(
    (list) => list.vacancies.branch_of_activity === companyBranchFilter,
  )
  return (
    <ContentData>
      <ContentDataVacancies>
        <ContentVacancies>
          <TitleText weight={400}>{searchVacancy}</TitleText>
          <TextRegular color="black" weight={700} size="s">
            {listOfFilteredVacancies.length < 1 ||
            branchFilterCompany.length < 1
              ? 'Vaga Não Encontrada'
              : `${listOfFilteredVacancies.length} Vagas Encontradas`}
          </TextRegular>
        </ContentVacancies>
        <ContainerFormSelect>
          <FormSearch selectedPage="pageJob" formDashboard />
          <SelectBranchFilter />
        </ContainerFormSelect>
      </ContentDataVacancies>

      {listOfFilteredVacancies.length < 1 || branchFilterCompany.length < 1 ? (
        <img src={ImageError} alt="" />
      ) : (
        <ContainerListVacancies>
          {branchFilterCompany.length <= 1
            ? branchFilterCompany.map((list) => {
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
                      <TextRegular>Pubicada há 10 dias</TextRegular>
                    </FooterCard>
                  </CardVacancies>
                )
              })
            : listOfFilteredVacancies.map((list) => {
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
                      <TextRegular>Pubicada há 10 dias</TextRegular>
                    </FooterCard>
                  </CardVacancies>
                )
              })}
        </ContainerListVacancies>
      )}
    </ContentData>
  )
}
