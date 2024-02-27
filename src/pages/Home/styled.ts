import styled from 'styled-components'

export const ContainerHome = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  margin-top: 5rem;

  @media (min-width: 1857px) {
    max-width: 80%;
    margin: 0 auto;
    gap: 10rem;

    margin-top: 8rem;
  }
`
