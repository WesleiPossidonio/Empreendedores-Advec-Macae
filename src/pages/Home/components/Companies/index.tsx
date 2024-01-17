import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import { Button, TextRegular, TitleText } from '../../../../components'
import { CardSwiper, ContainerCompanies } from './styled'
import 'swiper/css'
import 'swiper/css/pagination'
import { useListVocancies } from '../../../../contexts/companyContext'

export const Companies = () => {
  const { listCompanies } = useListVocancies()
  return (
    <ContainerCompanies id="companies">
      <TitleText color="theme" size="l">
        Empresas Participantes
      </TitleText>
      <TextRegular>
        More then 10000 clients who are happy with Us. Are You Next One?
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
            <CardSwiper key={list.id}>
              <img src={list.urlImage} alt="" />
              <TitleText color="black">{list.name_companies}</TitleText>
            </CardSwiper>
          )
        })}
      </Swiper>
      <Button search bg="theme">
        Buscar Empresas
      </Button>
    </ContainerCompanies>
  )
}
