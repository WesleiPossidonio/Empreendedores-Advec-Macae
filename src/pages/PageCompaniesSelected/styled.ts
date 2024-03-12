import styled from 'styled-components'

export const ContainerCompanies = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors['base-white']};

  #ErrorCommentText {
    align-self: center;
  }
`

export const HeaderCompanies = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  z-index: 99;

  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.colors['base-theme']};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    p {
      cursor: pointer;
    }
  }
`

export const ContainerAboutCompanies = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContainerBanner = styled.div`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > div {
    margin-top: -2.9rem;
    margin-left: 8.5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const ImgBanner = styled.img`
  width: 100%;
  height: max-content;
  margin-top: 4rem;
  object-fit: cover;

  @media (min-width: 1700px) {
    height: 37rem;
    object-fit: cover;
  }

  @media (max-width: 500px) {
    height: 12.5rem;
    object-fit: cover;
  }
`

export const ContentImgLogo = styled.div`
  width: min(6.2rem, 16vw);
  border: 3px solid ${({ theme }) => theme.colors['base-theme']};
  border-radius: 6px;

  @media (min-width: 1700px) {
    width: 8rem;
    object-fit: cover;
  }
`

export const ImageLogo = styled.img`
  width: 100%;
  border-radius: 6px;
  padding: 0.5rem;
`

export const ButtonLink = styled.a`
  width: 15rem;
  height: 3rem;

  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 6rem;
  border-radius: 8px;

  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  color: ${({ theme }) => theme.colors['base-white']};

  cursor: pointer;

  background-color: ${({ theme }) => theme.colors['base-black']};
`

export const ContentCompanies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  padding: 5rem 3rem;

  @media (min-width: 1440px) {
    max-width: 80%;
    margin: 0 auto;
  }
`

export const AboutCompanies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`

export const ContentVacancies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h1 {
    align-self: flex-start;
  }
`

export const ListVacancies = styled.ul`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0.6rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors['base-gray-100']};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    cursor: pointer;

    p {
      font-size: ${({ theme }) => theme.FontSizes['text-regular-sm']};
    }
  }
`

export const ImageAboutCompanies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem 3rem;
  margin-top: 5rem;
`

export const ImageOneAboutCompany = styled.img`
  width: min(45.1rem, 52vw);
  object-fit: cover;
  border-radius: 6px;
`

export const ContainerImageAboutCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const TwoImagesCompany = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ImagesAboutCompany = styled.img`
  width: min(15rem, 17vw);
  object-fit: cover;
  border-radius: 6px;
`

export const FourthImage = styled.img`
  width: min(30.5rem, 35vw);
  object-fit: cover;
  border-radius: 6px;
`
