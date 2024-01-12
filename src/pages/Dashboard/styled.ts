import styled from 'styled-components'

export const ContainerDashBoard = styled.main`
  width: 100%;
  padding: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['base-gray-200']};
`

export const ContentDashboard = styled.section`
  width: 100%;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: 8px;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors['base-white']};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const FormDashboard = styled.form`
  width: 50%;
  height: 90%;
  padding: 3rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors['base-gray-100']};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const ContentDataDashboard = styled.div`
  width: 50%;
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
`

export const HeaderData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const CardDataDashboard = styled.div`
  width: 50%;
  height: 10rem;

  border-radius: 8px;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors['base-gray-100']};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
