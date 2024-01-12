import { FormSearch, TitleText } from '../../components'
import { CurrentDate } from './components/CurrentDate'
import { FormVacancy } from './components/FormVacancy'
import { TableListVacancy } from './components/TableDashboard'
import {
  CardDataDashboard,
  ContainerDashBoard,
  ContentDashboard,
  ContentDataDashboard,
  FormDashboard,
  HeaderData,
} from './styled'

export const DashBoard = () => {
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
            <CardDataDashboard>Heloo</CardDataDashboard>
          </HeaderData>

          <FormSearch dashboard={true} />

          <TableListVacancy />
        </ContentDataDashboard>
      </ContentDashboard>
    </ContainerDashBoard>
  )
}
