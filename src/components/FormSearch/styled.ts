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
