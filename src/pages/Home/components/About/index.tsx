import { useNavigate } from 'react-router-dom'

import ImageAboutOne from '../../../../assets/imgAboutOne.jpg'
import ImageAbout from '../../../../assets/imgAboutTwo.jpg'
import { Button, TextRegular, TitleText } from '../../../../components'
import { ContainerAbout, ContentImg, ContentText } from './styled'

export const About = () => {
  const navigate = useNavigate()
  const handleNavigateToRegister = () => {
    navigate('/inscricao')
  }
  return (
    <ContainerAbout id="about">
      <ContentText data-aos="fade-right">
        <TitleText size="l">
          O que é <br /> Vagas advec?
        </TitleText>
        <div>
          <TextRegular size="s" color="black">
            Em busca de um propósito maior, criamos este site para unir empresas
            locais a membros da igreja em busca de oportunidades. Aqui, cada
            vaga é mais do que um trabalho é uma chance de crescimento e
            realização. Empresas podem cadastrar vagas, enquanto membros da
            igreja encontram empregos locais que ressoam com seus valores.
          </TextRegular>
          <TextRegular size="s" color="black">
            Uma comunidade que se apoia, cresce e prospera junto. Seja um
            empresário visionário ou alguém em busca de novas oportunidades.
            Cadastre-se hoje e junte-se a nós na construção de um futuro onde
            cada emprego é uma porta aberta para sonhos realizados.
          </TextRegular>
          <Button bg="theme" search={true} onClick={handleNavigateToRegister}>
            Cadastrar Agora!
          </Button>
        </div>
      </ContentText>

      <ContentImg>
        <img
          className="imgOne"
          src={ImageAboutOne}
          alt=""
          data-aos="fade-down"
        />
        <img src={ImageAbout} alt="" data-aos="fade-up" />
      </ContentImg>
    </ContainerAbout>
  )
}
