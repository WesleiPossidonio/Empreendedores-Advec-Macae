import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { useListVocancies } from '../../contexts/companyContext'
import { FormVacancy } from '../FormVacancy'
import { CloseButton, ContentModal, Overlay } from './styled'

interface UpdateVacancyModalPrpps {
  vacancyId: string
}

export const UpdateVacancyModal = ({ vacancyId }: UpdateVacancyModalPrpps) => {
  const { listVacancy } = useListVocancies()

  const vacancySelected = listVacancy.find((vacancy) => {
    return vacancy.id === vacancyId
  })
  return (
    <Dialog.Portal>
      <Overlay />
      <ContentModal>
        <Dialog.Title>Atualizar Vaga</Dialog.Title>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>
        <FormVacancy vacancySelected={vacancySelected} />
      </ContentModal>
    </Dialog.Portal>
  )
}
