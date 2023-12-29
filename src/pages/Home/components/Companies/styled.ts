import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

export const ContainerCompanies = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  .mySwiper {
    width: 90%;
    height: 15rem;
    margin: 4.125rem;
  }
`
export const CardSwiper = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: ${({ theme }) => theme.colors['base-gray-100']};

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;

  position: relative;
  cursor: pointer;

  > img {
    width: 21rem;
    object-fit: cover;
  }

  &:hover {
    a {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
`
