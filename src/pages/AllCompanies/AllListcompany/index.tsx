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

interface AllListCompanyProps {
  handleNavigateToCompany: (data: number) => void
}

export const AllListCompany = ({
  handleNavigateToCompany,
}: AllListCompanyProps) => {
  const { listCompanies, companyBranchFilter } = useListVocancies()

  const allCompanyBrachFiltered = listCompanies.filter(
    (list) => list.branch_of_activity === companyBranchFilter,
  )

  return (
    <ContentData>
      <ContentDataVacancies>
        <ContentVacancies>
          <TitleText>Todas Empresas</TitleText>
        </ContentVacancies>

        <ContainerFormSelect>
          <FormSearch selectedPage="searchCompanies" formDashboard />
        </ContainerFormSelect>
      </ContentDataVacancies>

      <SelectBranchFilter />
      {listCompanies.length < 1 ? (
        <Img src={ImageError} alt="" />
      ) : (
        <ContainerListVacancies>
          {companyBranchFilter === '' ? (
            listCompanies.map((list) => {
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
          ) : allCompanyBrachFiltered.length < 1 ? (
            <Img src={ImageError} alt="" />
          ) : (
            allCompanyBrachFiltered.map((list) => {
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
        </ContainerListVacancies>
      )}
    </ContentData>
  )
}
