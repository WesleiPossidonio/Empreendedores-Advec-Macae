import styled from 'styled-components'

export const Form = styled.form`
  width: min(45rem, 90%);
  height: 58rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors['base-gray-100']};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  > h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  > button {
    margin-top: 1.5rem;
    padding: 0.6rem;
  }

  > p {
    align-self: flex-end;
    cursor: pointer;
  }
`

export const ContainerInputImage = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;

  #ImgCompany {
    width: 100%;
  }
`

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

interface LabelProps {
  fileState: boolean
}

export const Label = styled.label<LabelProps>`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 2px solid ${({ theme }) => theme.colors['base-white']};
  border-radius: 4px;
  padding: 0.7rem;

  font-size: 1rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors['base-black']};

  background-color: ${({ theme, fileState }) =>
    fileState ? theme.colors['base-theme'] : theme.colors['base-white']};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors['base-theme']};
  }
`

export const InputFile = styled.input`
  display: none;
`

export const LabelSelect = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`

export const Select = styled.select`
  width: 100%;
  padding: 0.8rem;

  border: none;
  border-radius: 8px;

  font-size: 0.8835125rem;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['base-theme']};
    border-radius: 8px;
  }
`
