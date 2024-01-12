import styled from 'styled-components'

export const Form = styled.form`
  width: min(30rem, 90%);
  height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors['base-gray-100']};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  > h1 {
    margin-bottom: 2rem;
  }

  > button {
    margin-top: 0.5rem;
  }

  > p {
    align-self: flex-end;
    cursor: pointer;
  }
`
