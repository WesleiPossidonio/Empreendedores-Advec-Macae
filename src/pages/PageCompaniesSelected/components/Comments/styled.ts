import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

export const ContainerComments = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 3rem;

  .mySwiper {
    width: 90%;
    height: 15rem;
  }

  @media (min-width: 1440px) {
    max-width: 80%;
    margin: 0 auto;
  }
`
export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
`

export const ContentComments = styled(SwiperSlide)`
  width: 40rem;
  height: 11rem;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 1rem;
  border-radius: 8px;
  margin-top: 3rem;

  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  background-color: ${({ theme }) => theme.colors['base-gray-100']};

  > h1 {
    align-self: flex-start;
    margin-top: 1rem;
  }
`

export const CommentsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`
