import { useLocation, useNavigate } from 'react-router-dom'

import { TextRegular, TitleText } from '../../components/typograph'
import { type ListVacanciesProps } from '../../contexts/companyContext'
import {
  ButtonLink,
  ContainerAboutVacancies,
  ContainerVacancies,
  ContentVacancies,
  HeaderVacancies,
  ImgBanner,
} from './styles'

interface LocationProps {
  state: ListVacanciesProps[]
}

export const Vacancies = () => {
  const { state } = useLocation() as unknown as LocationProps

  const navigate = useNavigate()

  const handleToGoBack = () => {
    navigate('/vagas')
  }

  const handleToGoBackHome = () => {
    navigate('/')
  }

  return (
    <>
      {state.map((data) => {
        return (
          <ContainerVacancies key={data.id}>
            <HeaderVacancies>
              <TitleText>Logo</TitleText>
              <div>
                <TextRegular weight={600} onClick={handleToGoBackHome}>
                  Voltar a Home
                </TextRegular>
                <TextRegular weight={600} onClick={handleToGoBack}>
                  Voltar
                </TextRegular>
              </div>
            </HeaderVacancies>
            <ContainerAboutVacancies>
              <ImgBanner src={data.vacancies.urlBanner} />

              <ContentVacancies>
                <div>
                  <TitleText size="l" weight={700}>
                    Sobre a Empresa
                  </TitleText>
                  <TextRegular>
                    {data.vacancies.company_description}
                  </TextRegular>
                </div>

                <div>
                  <TitleText size="l" weight={700}>
                    Sobre a Vaga
                  </TitleText>
                  <TextRegular>{data.job_description}</TextRegular>
                </div>

                <div>
                  <TitleText size="l" weight={700}>
                    Requisitos da Vaga
                  </TitleText>
                  <TextRegular>{data.vacancy_requirements}</TextRegular>
                </div>

                <div>
                  <TitleText size="l" weight={700}>
                    Benefícios da Vaga
                  </TitleText>
                  <TextRegular>{data.additional_information}</TextRegular>
                </div>

                <ButtonLink href={`mailto:${data.vacancies.email}`}>
                  Candidatar-se
                </ButtonLink>
              </ContentVacancies>
            </ContainerAboutVacancies>
          </ContainerVacancies>
        )
      })}
    </>
  )
}
