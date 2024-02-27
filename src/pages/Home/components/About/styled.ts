import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 90%;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  button {
    margin-top: 1rem;
  }

  @media (min-width: 1441px) {
    gap: 15rem;
  }

  @media (max-width: 870px) {
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
    width: min(16rem, 20vw);
    border-radius: 6px;

    @media (max-width: 900px) {
      width: min(16rem, 40vw);
    }
  }

  .imgOne {
    margin-top: 15rem;
  }
`
