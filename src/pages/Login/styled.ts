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
  height: 25rem;

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
