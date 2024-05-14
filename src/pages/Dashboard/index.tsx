import { ListMagnifyingGlass, PlusCircle, User } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useNavigate } from 'react-router-dom'

import { AddVacancyModal, FormSearch, TextRegular } from '../../components'
import { useListVocancies } from '../../contexts/companyContext'
import { TableListVacancy } from './components/TableDashboard'
import {
  ContainerDashBoard,
  ContentDashboard,
  ContentDataDashboard,
  HeaderCard,
  HeaderData,
  Line,
  MenLinkListVacancy,
  MenuDashboard,
  MenuLinkAddVacancy,
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
      <MenuDashboard>
        <MenLinkListVacancy>
          <ListMagnifyingGlass size={32} />
          <p>Minhas Vagas</p>
        </MenLinkListVacancy>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <MenuLinkAddVacancy>
              <PlusCircle size={32} />
              <p>Add Vagas</p>
            </MenuLinkAddVacancy>
          </Dialog.Trigger>
          <AddVacancyModal />
        </Dialog.Root>
      </MenuDashboard>

      <ContentDashboard>
        <ContentDataDashboard>
          <HeaderData>
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
          </HeaderData>

          <FormSearch selectedPage="dashboard" formDashboard />

          <TableListVacancy />
        </ContentDataDashboard>
      </ContentDashboard>
    </ContainerDashBoard>
  )
}
