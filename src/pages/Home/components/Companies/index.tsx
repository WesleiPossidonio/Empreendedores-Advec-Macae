import { useNavigate } from 'react-router-dom'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import { Button, TextRegular, TitleText } from '../../../../components'
import {
  type DataCompany,
  useListVocancies,
} from '../../../../contexts/companyContext'
import { CardSwiper, ContainerCompanies } from './styled'
import 'swiper/css'
import 'swiper/css/pagination'

export const Companies = () => {
  const { listCompanies, setPageStatusJobSearch } = useListVocancies()
  console.log(listCompanies)

  const navigate = useNavigate()

  const handleNavigateAllCompanies = () => {
    navigate('/empresas')
    setPageStatusJobSearch('PageCompanies')
  }

  const handleNavigateCompanies = (data: DataCompany) => {
    navigate('/empresa-selecionada', {
      state: data,
    })
  }
  return (
    <ContainerCompanies id="companies">
      <TitleText color="theme" size="l">
        Empresas Participantes
      </TitleText>
      <TextRegular weight={600}>
        Mais de 10 empresas cadastradas, faça parte dessa familía!
      </TextRegular>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          980: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {listCompanies.map((list) => {
          return (
            <CardSwiper
              key={list.id}
              onClick={() => {
                handleNavigateCompanies(list)
              }}
            >
              <img src={list.path_img} alt="" />
              <TitleText color="black">{list.name_companies}</TitleText>
            </CardSwiper>
          )
        })}
      </Swiper>
      <Button search bg="theme" onClick={handleNavigateAllCompanies}>
        Buscar Empresas
      </Button>
    </ContainerCompanies>
  )
}
