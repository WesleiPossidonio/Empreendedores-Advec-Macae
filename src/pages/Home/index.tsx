import Aos from 'aos'
import { useEffect } from 'react'

import { Footer, Header } from '../../components'
import {
  Principes,
  Companies,
  Contact,
  Explanation,
  Hero,
  About,
} from './components'
import { ContainerHome } from './styled'

import 'aos/dist/aos.css'

export const Home = () => {
  useEffect(function () {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <ContainerHome>
      <Header navigatePage={false} />
      <Hero />
      <About />
      <Principes />
      <Explanation />
      <Companies />
      <Contact />
      <Footer />
    </ContainerHome>
  )
}
