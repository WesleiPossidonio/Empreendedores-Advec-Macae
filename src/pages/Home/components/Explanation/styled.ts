import styled from 'styled-components'

export const ContainerExplanation = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 3.75rem 1rem;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors['base-theme']};
`

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 3.1875rem;
`

export const ContainerExpanation = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 720px) {
    width: 95%;
    gap: 5rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const Image = styled.img`
  width: 20rem;
  height: 18.65625rem;

  @media (max-width: 768px) {
    width: 17rem;
  }

  @media (max-width: 720px) {
    order: 2;
    width: 14rem;
  }

  @media (max-width: 500px) {
    order: 2;
    width: 12rem;
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.875rem;

  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.3rem;

    span {
      width: 7rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid ${({ theme }) => theme.colors['base-black']};
      border-radius: 3px;

      font-size: 0.875rem;
      font-weight: 600;

      color: ${({ theme }) => theme.colors['base-white']};
      background-color: ${({ theme }) => theme.colors['base-black']};
    }
  }
`
