import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 90%;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  }
`

export const ContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  padding: 1rem;

  img {
    width: 16rem;
    border-radius: 6px;

    @media (max-width: 900px) {
      width: 11.5rem;
    }

    @media (max-width: 500px) {
      width: 9.5rem;
    }
  }

  .imgOne {
    margin-top: 15rem;
  }
`
