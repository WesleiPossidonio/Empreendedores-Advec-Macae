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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: none;
  border-radius: 6px;

  position: relative;
  cursor: pointer;

  transition: 0.2s ease-in;

  > img {
    width: min(8rem, 6vw);

    padding: 0.5rem;
    object-fit: cover;
    border: 4px solid ${({ theme }) => theme.colors['base-theme']};
    border-radius: 8px;

    transition: 0.2s ease-in;
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-theme']};
    img {
      border: 4px solid ${({ theme }) => theme.colors['base-black']};
    }
  }
`
