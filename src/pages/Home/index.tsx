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

export const Home = () => {
  return (
    <ContainerHome>
      <Header />
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
