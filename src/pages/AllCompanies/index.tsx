import { useNavigate } from 'react-router-dom'

import { TextRegular, TitleText } from '../../components'
import { useListVocancies } from '../../contexts/companyContext'
import { AllListCompany } from './AllListcompany'
import { SearchAllKistCompanies } from './SearchAlllListCompany'
import { ContainerVacancies, HeaderVacancies } from './styles'

export const AllCompanies = () => {
  const { pageStatusJobSearch, listCompanies } = useListVocancies()

  const navigate = useNavigate()

  const handleToGoBackHome = () => {
    navigate('/')
  }

  const handleNavigateToCompany = (data: number) => {
    const listSelected = listCompanies.find((list) => list.id === data)
    navigate('/empresa-selecionada', {
      state: listSelected,
    })
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
        <AllListCompany handleNavigateToCompany={handleNavigateToCompany} />
      )}

      {pageStatusJobSearch === 'searchCompanies' && (
        <SearchAllKistCompanies
          handleNavigateToCompany={handleNavigateToCompany}
        />
      )}
    </ContainerVacancies>
  )
}
