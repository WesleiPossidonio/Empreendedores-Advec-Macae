import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 90%;
  min-height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5625rem;

  padding: 4rem 0;
`

export const ContainerTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.1875rem;

  margin-bottom: 3.4375rem;

  > p {
    max-width: 70%;

    @media (max-width: 760px) {
      max-width: 100%;
    }
  }
`

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    div {
      padding: 0;
      flex-wrap: wrap;
    }
  }
`

export const CardAbout = styled.div`
  width: 100%;
  height: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors['base-gray-100']};

  box-shadow:
    rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  cursor: pointer;
  transition: 0.2s ease-in-out;

  svg {
    color: ${({ theme }) => theme.colors['base-theme']};
  }

  &:hover {
    transform: translateY(-6px);
    background-color: ${({ theme }) => theme.colors['base-theme']};

    svg {
      color: ${({ theme }) => theme.colors['base-black']};
    }

    h1 {
      color: ${({ theme }) => theme.colors['base-black']};
    }
  }
`

export const ContainerTextCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  margin-top: 1rem;
`
