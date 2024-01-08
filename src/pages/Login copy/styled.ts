import styled from 'styled-components'

import ImageBanner from '../../assets/BannerLogin.jpg'

export const ContainerLogin = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const ContainerHeader = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  background-image: url(${ImageBanner});
  background-size: cover;
  background-repeat: none;
  background-position: center;
`

export const ContainerForm = styled.div`
  width: 100%;
  height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors['base-theme']};
    font-weight: 700;
    cursor: pointer;
  }
`

export const Form = styled.form`
  width: min(30rem, 90%);
  height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors['base-gray-100']};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  > h1 {
    margin-bottom: 2rem;
  }

  > button {
    margin-top: 0.5rem;
  }

  > p {
    align-self: flex-end;
    cursor: pointer;
  }
`
