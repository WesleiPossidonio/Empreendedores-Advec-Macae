import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  height: max-content;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors['base-gray-100']};

  @media (max-width: 680px) {
    justify-content: flex-start;
    gap: 2em;
  }
`
export const HeaderFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  > img {
    width: 16rem;
    margin-bottom: 1rem;
  }
`

export const ContentLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;

    p {
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors['base-theme']};
      }
    }
  }
`

export const ContentContact = styled(ContentLink)`
  p {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors['base-gray']};

      &:hover {
        color: ${({ theme }) => theme.colors['base-theme']};
      }
    }
  }
`
