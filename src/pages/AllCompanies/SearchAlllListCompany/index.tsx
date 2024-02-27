import ImageError from '../../../assets/ImageErrorVacancy.svg'
import {
  FormSearch,
  SelectBranchFilter,
  TextRegular,
  TitleText,
} from '../../../components'
import { useListVocancies } from '../../../contexts/companyContext'
import {
  CardAllVacancies,
  ContainerFormSelect,
  ContainerListVacancies,
  ContentData,
  ContentDataVacancies,
  ContentVacancies,
  FooterCard,
  HeaderCard,
  Img,
} from '../styles'

interface SearchAllKistCompany {
  handleNavigateToCompany: (data: number) => void
}

export const SearchAllKistCompanies = ({
  handleNavigateToCompany,
}: SearchAllKistCompany) => {
  const { filteredAllListCompanies, searchVacancy, companyBranchFilter } =
    useListVocancies()

  const companyBrachSearchFiltered = filteredAllListCompanies.filter(
    (list) => list.branch_of_activity === companyBranchFilter,
  )

  return (
    <ContentData>
      <ContentDataVacancies>
        <ContentVacancies>
          <TitleText weight={400}>{searchVacancy}</TitleText>
          <TitleText color="black">
            {filteredAllListCompanies.length < 1
              ? 'Empresa Não Encontrada'
              : `${filteredAllListCompanies.length} Empresas Encontradas`}
          </TitleText>
        </ContentVacancies>

        <ContainerFormSelect>
          <FormSearch selectedPage="searchCompanies" formDashboard />
        </ContainerFormSelect>
      </ContentDataVacancies>
      <SelectBranchFilter />
      {filteredAllListCompanies.length < 1 ? (
        <Img src={ImageError} alt="" />
      ) : (
        <ContainerListVacancies>
          {companyBranchFilter === '' ? (
            filteredAllListCompanies.map((list) => {
              return (
                <CardAllVacancies
                  key={list.id}
                  onClick={() => {
                    handleNavigateToCompany(list.id)
                  }}
                >
                  <HeaderCard>
                    <img src={list.path_img} alt="" />
                    <TextRegular size="m" color="black" weight={700}>
                      {list.name_companies}
                    </TextRegular>
                  </HeaderCard>

                  <FooterCard>
                    <TextRegular weight={500}>
                      {list.branch_of_activity}
                    </TextRegular>
                  </FooterCard>
                </CardAllVacancies>
              )
            })
          ) : companyBrachSearchFiltered.length < 1 ? (
            <Img src={ImageError} alt="" />
          ) : (
            companyBrachSearchFiltered.map((list) => {
              return (
                <CardAllVacancies
                  key={list.id}
                  onClick={() => {
                    handleNavigateToCompany(list.id)
                  }}
                >
                  <HeaderCard>
                    <img src={list.path_img} alt="" />
                    <TextRegular size="m" color="black" weight={700}>
                      {list.name_companies}
                    </TextRegular>
                  </HeaderCard>

                  <FooterCard>
                    <TextRegular weight={500}>
                      {list.branch_of_activity}
                    </TextRegular>
                  </FooterCard>
                </CardAllVacancies>
              )
            })
          )}

          {}
        </ContainerListVacancies>
      )}
    </ContentData>
  )
}
