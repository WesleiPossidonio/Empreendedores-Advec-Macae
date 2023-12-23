import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5625rem;

  padding: 4rem 1rem;

  h1,
  p {
    text-align: center;
  }
`

export const ContainerCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 18.75rem));
  justify-content: center;
  gap: 2rem;

  margin-top: 1.3125rem;
`

export const CardAbout = styled.div`
  width: 100%;
  height: 12rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2375rem;

  padding: 1rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors['base-white']};

  box-shadow:
    rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-6px);
  }

  svg {
    color: ${({ theme }) => theme.colors['base-blue']};
  }
`
