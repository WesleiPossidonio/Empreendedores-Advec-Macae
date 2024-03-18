import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { FormVacancy } from '../FormVacancy'
import { CloseButton, ContentModal, Overlay } from './styled'

export const AddVacancyModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <ContentModal>
        <Dialog.Title>Adicionar Vagas</Dialog.Title>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>
        <FormVacancy />
      </ContentModal>
    </Dialog.Portal>
  )
}
