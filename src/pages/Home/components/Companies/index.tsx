import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import { Button, TextRegular, TitleText } from '../../../../components'
import { CardSwiper, ContainerCompanies } from './styled'
import 'swiper/css'
import 'swiper/css/pagination'

export const Companies = () => {
  return (
    <ContainerCompanies>
      <TitleText color="theme">Recently Reviewed</TitleText>
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
        <CardSwiper>Heloo</CardSwiper>
        <CardSwiper>Heloo</CardSwiper>
        <CardSwiper>Heloo</CardSwiper>
        <CardSwiper>Heloo</CardSwiper>
      </Swiper>
      <Button search>Buscar Empresas</Button>
    </ContainerCompanies>
  )
}
