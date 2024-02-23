import { useNavigate } from 'react-router-dom'

import ImageError from '../../assets/ImageErrorVacancy.svg'
import { FormSearch, TextRegular, TitleText } from '../../components'
import { useListVocancies } from '../../contexts/companyContext'
import {
  CardVacancies,
  ContainerListVacancies,
  ContainerVacancies,
  ContentData,
  ContentDataVacancies,
  ContentVacancies,
  FooterCard,
  HeaderCard,
  HeaderVacancies,
} from './styles'

export const AllCompanies = () => {
  const {
    filteredAllListCompanies,
    pageStatusJobSearch,
    listCompanies,
    searchVacancy,
  } = useListVocancies()

  const navigate = useNavigate()

  const handleToGoBackHome = () => {
    navigate('/')
  }
  return (
    <ContainerVacancies>
      <HeaderVacancies>
        <TitleText>Logo</TitleText>
        <TextRegular weight={600} onClick={handleToGoBackHome}>
          Voltar a Home
        </TextRegular>
      </HeaderVacancies>

      {pageStatusJobSearch === 'PageCompanies' && (
        <ContentData>
          <ContentDataVacancies>
            <ContentVacancies>
              <TitleText>Todas Empresas</TitleText>
            </ContentVacancies>
            <div>
              <FormSearch selectedPage="searchCompanies" formDashboard />
            </div>
          </ContentDataVacancies>
          {listCompanies.length < 1 ? (
            <img src={ImageError} alt="" />
          ) : (
            <ContainerListVacancies>
              {listCompanies.map((list) => {
                return (
                  <CardVacancies key={list.id}>
                    <HeaderCard>
                      <img src={list.urlImage} alt="" />
                      <TextRegular size="m" color="black" weight={700}>
                        {list.name_companies}
                      </TextRegular>
                    </HeaderCard>

                    <FooterCard>
                      <TextRegular weight={500}>
                        {list.branch_of_activity}
                      </TextRegular>
                    </FooterCard>
                  </CardVacancies>
                )
              })}
            </ContainerListVacancies>
          )}
        </ContentData>
      )}

      {pageStatusJobSearch === 'searchCompanies' && (
        <ContentData>
          <ContentDataVacancies>
            <ContentVacancies>
              <TitleText weight={400}>{searchVacancy}</TitleText>
              <TitleText color="black">
                {filteredAllListCompanies.length < 1
                  ? 'Empresa Não Encontrada'
                  : `${filteredAllListCompanies.length} Vagas Encontradas`}
              </TitleText>
            </ContentVacancies>
            <div>
              <FormSearch selectedPage="searchCompanies" formDashboard />
            </div>
          </ContentDataVacancies>
          {filteredAllListCompanies.length < 1 ? (
            <img src={ImageError} alt="" />
          ) : (
            <ContainerListVacancies>
              {filteredAllListCompanies.map((list) => {
                return (
                  <CardVacancies key={list.id}>
                    <HeaderCard>
                      <img src={list.urlImage} alt="" />
                      <TextRegular size="m" color="black" weight={700}>
                        {list.name_companies}
                      </TextRegular>
                    </HeaderCard>

                    <FooterCard>
                      <TextRegular weight={500}>
                        {list.branch_of_activity}
                      </TextRegular>
                    </FooterCard>
                  </CardVacancies>
                )
              })}
            </ContainerListVacancies>
          )}
        </ContentData>
      )}
    </ContainerVacancies>
  )
}
