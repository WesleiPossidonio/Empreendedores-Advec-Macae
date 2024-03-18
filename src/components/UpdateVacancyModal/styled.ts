import * as Dialog from '@radix-ui/react-dialog'
import { styled } from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`
export const ContentModal = styled(Dialog.Content)`
  z-index: 12;
  width: 65%;
  height: 90%;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #f2f3ee;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['base-theme']};
`
