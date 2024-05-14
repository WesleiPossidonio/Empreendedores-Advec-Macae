import styled from 'styled-components'

export const ContainerContact = styled.section`
  width: 90%;
  height: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 3.75rem 1rem;
  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors['base-theme']};

  > h1 {
    text-align: center;
    margin-bottom: 0.2rem;
  }
`
export const Form = styled.form`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 4.5rem;

  > button {
    align-self: flex-start;
  }

  @media (max-width: 720px) {
    width: 90%;
  }
`

export const ContentTextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`

interface TextAreaProps {
  error?: string
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 8rem;

  padding: 0.5rem;
  border: 2px solid
    ${({ theme, error }) =>
      error !== undefined
        ? theme.colors['base-red']
        : theme.colors['base-white']};
  border-radius: 8px;

  font-size: 0.8835125rem;
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  background: ${({ theme }) => theme.colors['base-white']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-black']};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['base-black']};
    border-radius: 8px;
  }
`
