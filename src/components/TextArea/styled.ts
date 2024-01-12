import styled from 'styled-components'

interface TextAreaProps {
  error: boolean
}

export const ContainerTextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 6rem;

  padding: 0.5rem;

  border: 2px solid
    ${({ theme, error }) =>
      error ? theme.colors['base-red'] : theme.colors['base-white']};
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
    border: 2px solid ${({ theme }) => theme.colors['base-theme']};
    border-radius: 8px;
  }
`
