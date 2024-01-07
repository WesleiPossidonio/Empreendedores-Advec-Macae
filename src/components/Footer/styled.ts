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
`

export const ContentLink = styled.div``

export const ContentContact = styled.div``
