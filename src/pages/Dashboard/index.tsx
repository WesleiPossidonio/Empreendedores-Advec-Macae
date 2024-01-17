import { User } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

import { FormSearch, TextRegular, TitleText } from '../../components'
import { useListVocancies } from '../../contexts/companyContext'
import { CurrentDate } from './components/CurrentDate'
import { FormVacancy } from './components/FormVacancy'
import { TableListVacancy } from './components/TableDashboard'
import {
  CardDataCompanies,
  CardDataDashboard,
  ContainerDashBoard,
  ContentDashboard,
  ContentDataDashboard,
  FormDashboard,
  HeaderCard,
  HeaderData,
  Line,
} from './styled'

export const DashBoard = () => {
  const { dataCompany } = useListVocancies()

  const navigate = useNavigate()

  const handleDeleteUser = () => {
    localStorage.removeItem('AdvecEmpreendedores:EmpreendedoresData1.0')

    navigate('/login')
  }

  return (
    <ContainerDashBoard>
      <ContentDashboard>
        <FormDashboard>
          <TitleText>Adicionar Vagas</TitleText>
          <FormVacancy />
        </FormDashboard>
        <ContentDataDashboard>
          <HeaderData>
            <CardDataDashboard>
              <CurrentDate />
            </CardDataDashboard>
            <CardDataCompanies>
              <HeaderCard>
                <User size={25} weight="duotone" />
                <Line />
                <TextRegular weight={600} size="s">
                  {dataCompany.name_companies}
                </TextRegular>
              </HeaderCard>

              <TextRegular weight={700} id="exit" onClick={handleDeleteUser}>
                Sair
              </TextRegular>
            </CardDataCompanies>
          </HeaderData>

          <FormSearch dashboard={true} />

          <TableListVacancy />
        </ContentDataDashboard>
      </ContentDashboard>
    </ContainerDashBoard>
  )
}
