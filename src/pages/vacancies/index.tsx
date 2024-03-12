import { useLocation, useNavigate } from 'react-router-dom'

import { DisqusComments } from '../../components'
import { TextRegular, TitleText } from '../../components/typograph'
import { type ListVacanciesProps } from '../../contexts/companyContext'
import {
  ButtonLink,
  ContainerAboutVacancies,
  ContainerBanner,
  ContainerVacancies,
  ContentImgLogo,
  ContentVacancies,
  HeaderVacancies,
  ImageLogo,
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
              <ContainerBanner>
                <ImgBanner src={data.vacancies.path_banner} />
                <div>
                  <ContentImgLogo>
                    <ImageLogo src={data.vacancies.path_img} />
                  </ContentImgLogo>
                  <TitleText size="s" color="black">
                    {data.vacancies.name_companies}
                  </TitleText>
                </div>
              </ContainerBanner>

              <ContentVacancies>
                <div>
                  <TitleText size="s" weight={700}>
                    Sobre a Empresa
                  </TitleText>
                  <TextRegular size="sm">
                    {data.vacancies.company_description}
                  </TextRegular>
                </div>

                <div>
                  <TitleText size="s" weight={700}>
                    Sobre a Vaga
                  </TitleText>
                  <TextRegular size="sm">{data.job_description}</TextRegular>
                </div>

                <div>
                  <TitleText size="s" weight={700}>
                    Requisitos da Vaga
                  </TitleText>
                  <TextRegular size="sm">
                    {data.vacancy_requirements}
                  </TextRegular>
                </div>

                <div>
                  <TitleText size="s" weight={700}>
                    Benefícios da Vaga
                  </TitleText>
                  <TextRegular size="sm">
                    {data.additional_information}
                  </TextRegular>
                </div>

                <ButtonLink href={`mailto:${data.vacancies.email}`}>
                  Candidatar-se
                </ButtonLink>
              </ContentVacancies>
            </ContainerAboutVacancies>
            <DisqusComments identifier={data.id} title={data.name_vacancies} />
          </ContainerVacancies>
        )
      })}
    </>
  )
}
