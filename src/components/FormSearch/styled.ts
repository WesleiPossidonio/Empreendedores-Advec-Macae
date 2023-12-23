import styled from 'styled-components'

export const ContainerForm = styled.form`
  width: 100%;
  max-width: 37.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 2.5rem;

  z-index: 1;

  > p {
    align-self: flex-start;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

interface InputSearchProps {
  error?: string
}

export const InputSearch = styled.input<InputSearchProps>`
  height: 3rem;
  flex: 1;

  border: 1px solid ${({ theme }) => theme.colors['base-gray']};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['base-white']};

  padding: 1rem;

  font-size: ${({ theme }) => theme.FontSizes['text-regular-s']};
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-gray-100']};
  }
`
