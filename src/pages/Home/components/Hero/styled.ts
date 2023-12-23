import styled from 'styled-components'

import BgHero from '../../../../assets/HeroBg.webp'

export const ContainerHero = styled.section`
  width: 100%;
  height: 40.625rem;

  background-image: url(${BgHero});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  h1 {
    text-align: center;
  }

  @media (max-width: 780px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`
export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
