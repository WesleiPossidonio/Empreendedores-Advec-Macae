import styled from 'styled-components'

export const ContainerContact = styled.section`
  width: 90%;
  height: 45rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 3.75rem 1rem;
  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors['base-gray-100']};
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

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;

  padding: 0.5rem;

  border: 2px solid ${({ theme }) => theme.colors['base-gray-200']};
  border-radius: 8px;

  font-size: ${({ theme }) => theme.FontSizes['text-regular-s']};
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;

  background: ${({ theme }) => theme.colors['base-gray-200']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-white']};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['base-blue']};
    border-radius: 8px;
  }
`
