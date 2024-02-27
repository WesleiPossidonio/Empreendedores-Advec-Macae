import Aos from 'aos'
import { useEffect } from 'react'

import { Footer, Header } from '../../components'
import {
  Principes,
  Companies,
  Explanation,
  Hero,
  About,
  FormContact,
} from './components'
import { ContainerHome } from './styled'

import 'aos/dist/aos.css'

export const Home = () => {
  useEffect(function () {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <Header navigatePage={false} />
      <Hero />
      <ContainerHome>
        <About />
        <Principes />
        <Explanation />
        <Companies />
        <FormContact />
      </ContainerHome>
      <Footer />
    </>
  )
}
