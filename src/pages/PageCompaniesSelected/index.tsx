import { Pagination } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { DisqusComments, TextRegular, TitleText } from '../../components'
import {
  type CompaniesProps,
  useListVocancies,
} from '../../contexts/companyContext'
import { Comments } from './components/Comments'
import {
  AboutCompanies,
  ContainerAboutCompanies,
  ContainerBanner,
  ContainerCompanies,
  ContainerImageAboutCompany,
  ContentCompanies,
  ContentImgLogo,
  ContentVacancies,
  FourthImage,
  HeaderCompanies,
  ImageAboutCompanies,
  ImageLogo,
  ImageOneAboutCompany,
  ImagesAboutCompany,
  ImgBanner,
  ListVacancies,
  TwoImagesCompany,
} from './styled'

interface LocationProps {
  state: CompaniesProps
}

export const PageCompaniesSelected = () => {
  const { state } = useLocation() as unknown as LocationProps

  const { listVacancy, allListComments } = useListVocancies()

  const filteredCommentList = allListComments.filter((list) => {
    return list.comments_id === state.id
  })

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredListVacancy = listVacancy.filter((list) => {
    return list.vacancies_id === state.id
  })

  const totalItems = filteredListVacancy.length
  const pageCount = Math.ceil(totalItems / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentVacancies = filteredListVacancy.slice(startIndex, endIndex)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }

  const navigate = useNavigate()

  const handleToGoBack = () => {
    navigate('/empresas')
  }

  const handleToGoBackHome = () => {
    navigate('/')
  }
  const handleNavigateVacancy = (data: string) => {
    const vacancySelected = listVacancy.filter((vacancy) => vacancy.id === data)

    navigate('/inscricão', {
      state: vacancySelected,
    })
  }

  return (
    <>
      <ContainerCompanies>
        <HeaderCompanies>
          <TitleText>Logo</TitleText>
          <div>
            <TextRegular weight={600} onClick={handleToGoBackHome}>
              Voltar a Home
            </TextRegular>
            <TextRegular weight={600} onClick={handleToGoBack}>
              Voltar
            </TextRegular>
          </div>
        </HeaderCompanies>
        <ContainerAboutCompanies>
          <ContainerBanner>
            <ImgBanner src={state.path_banner} />
            <div>
              <ContentImgLogo>
                <ImageLogo src={state.path_img} />
              </ContentImgLogo>
              <TitleText color="black">{state.name_companies}</TitleText>
            </div>
          </ContainerBanner>

          <ContentCompanies>
            <AboutCompanies>
              <TitleText size="m" weight={700}>
                Sobre a Empresa
              </TitleText>
              <TextRegular>{state.company_description}</TextRegular>
            </AboutCompanies>

            <ContentVacancies>
              <TitleText size="m" weight={700}>
                Nossas Vagas
              </TitleText>

              <ListVacancies>
                {currentVacancies.length <= 0 ? (
                  <TextRegular>Não há Vagas Cadastradas!</TextRegular>
                ) : (
                  currentVacancies.map((list) => {
                    return (
                      <li
                        key={list.id}
                        onClick={() => {
                          handleNavigateVacancy(list.id)
                        }}
                      >
                        <p>{list.name_vacancies}</p>
                        <p>{list.number_of_vacancies} Vagas</p>
                      </li>
                    )
                  })
                )}
              </ListVacancies>

              <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handleChange}
              />

              <ImageAboutCompanies>
                <div>
                  <ImageOneAboutCompany
                    src={state.path_companies_img.imageOne}
                    alt=""
                  />
                </div>

                <ContainerImageAboutCompany>
                  <TwoImagesCompany>
                    <ImagesAboutCompany
                      src={state.path_companies_img.imageTwo}
                      alt=""
                    />
                    <ImagesAboutCompany
                      src={state.path_companies_img.imageThree}
                      alt=""
                    />
                  </TwoImagesCompany>

                  <div>
                    <FourthImage
                      src={state.path_companies_img.imageFour}
                      alt=""
                    />
                  </div>
                </ContainerImageAboutCompany>
              </ImageAboutCompanies>
            </ContentVacancies>
          </ContentCompanies>
          {filteredCommentList !== null ? (
            <Comments company={state} commentsList={filteredCommentList} />
          ) : (
            <TextRegular>Ops.: Não há Avaliações</TextRegular>
          )}
        </ContainerAboutCompanies>
        <DisqusComments
          identifier={String(state.id)}
          title={state.name_companies}
        />
      </ContainerCompanies>
    </>
  )
}
