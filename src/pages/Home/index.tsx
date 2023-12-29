import { Footer, Header } from '../../components'
import { About, Companies, Contact, Explanation, Hero } from './components'
import { ContainerHome } from './styled'

export const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Hero />
      <About />
      <Explanation />
      <Companies />
      <Contact />
      <Footer />
    </ContainerHome>
  )
}
