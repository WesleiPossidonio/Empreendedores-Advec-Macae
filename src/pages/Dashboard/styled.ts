import styled from 'styled-components'

export const ContainerDashBoard = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.colors['base-gray-200']};

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`

export const MenuDashboard = styled.div`
  width: 6%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  align-self: flex-start;
  gap: 1.2rem;

  padding: 1rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors['base-white']};
  z-index: 20;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 700px) {
    flex-direction: row;
    width: 10rem;

    height: max-content;
    align-self: center;
    padding: 0.7rem;

    position: absolute;
    bottom: 2%;
  }
`

export const MenLinkListVacancy = styled.div`
  cursor: pointer;

  p {
    width: 8rem;
    display: none;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 6rem;
    left: 13rem;
    padding: 0.5rem;

    border-radius: 6px;

    font-size: ${({ theme }) => theme.FontSizes['text-regular-sm']};
    font-weight: 700;

    z-index: 10;
    background-color: ${({ theme }) => theme.colors['base-white']};

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 999;
  }

  &:hover {
    p {
      display: flex;
    }
  }
`

export const MenuLinkAddVacancy = styled.div`
  cursor: pointer;
  z-index: 12;
  p {
    width: 8rem;
    display: none;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 10rem;
    left: 13rem;
    padding: 0.5rem;

    border-radius: 6px;

    font-size: ${({ theme }) => theme.FontSizes['text-regular-sm']};
    font-weight: 700;

    z-index: 10;
    background-color: ${({ theme }) => theme.colors['base-white']};

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  &:hover {
    p {
      display: flex;
    }
  }
`

export const ContentDashboard = styled.section`
  width: 85%;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: 8px;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors['base-white']};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: max-content;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
    padding: 1rem;
  }
`

export const ContentDataDashboard = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  border-radius: 8px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const HeaderData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    gap: 4rem;
  }
`

export const CardDataDashboard = styled.div`
  width: 50%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors['base-gray-100']};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 700px) {
    width: 100%;
  }
`
export const CardDataCompanies = styled.div`
  width: 50%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  #exit {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    width: 100%;
    align-items: flex-start;
    height: 0;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`
export const Line = styled.div`
  height: 1.8rem;
  border-left: 2px solid ${({ theme }) => theme.colors['base-theme']};
`
