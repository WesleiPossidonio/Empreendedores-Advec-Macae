import { useNavigate } from 'react-router-dom'

import { TextRegular, TitleText } from '../../components/typograph'
import { useListVocancies } from '../../contexts/companyContext'
import { PageAllVacancies } from './components/PageAllVacancies'
import { PageFilteredVacancies } from './components/PageFilteredVacancies'
import { ContainerVacancies, HeaderVacancies } from './styled'

export const PageVacancies = () => {
  const { listVacancy, pageStatusJobSearch } = useListVocancies()

  const navigate = useNavigate()

  const handleSelectedVacancies = (id: number) => {
    const listSelected = listVacancy.filter((list) => list.vacancies_id === id)

    navigate('/inscricão', {
      state: listSelected,
    })
  }

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

      {pageStatusJobSearch === 'homePage' ||
      pageStatusJobSearch === 'pageJob' ? (
        <PageFilteredVacancies
          handleSelectedVacancies={handleSelectedVacancies}
        />
      ) : (
        <PageAllVacancies handleSelectedVacancies={handleSelectedVacancies} />
      )}
    </ContainerVacancies>
  )
}
