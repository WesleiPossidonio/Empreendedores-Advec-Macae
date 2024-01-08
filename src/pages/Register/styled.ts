import styled from 'styled-components'

import ImageBanner from '../../assets/BannerLogin.jpg'

export const ContainerRegister = styled.section`
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
  height: 60rem;

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
  width: min(45rem, 90%);
  height: 45rem;

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
    margin-top: 1.5rem;
  }

  > p {
    align-self: flex-end;
    cursor: pointer;
  }
`

export const ContainerInputImage = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;
`

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Label = styled.label`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 2px solid ${({ theme }) => theme.colors['base-white']};
  border-radius: 4px;
  padding: 0.7rem;

  font-size: 1rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors['base-black']};

  background-color: ${({ theme }) => theme.colors['base-white']};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors['base-theme']};
  }
`

export const InputFile = styled.input`
  display: none;
`
