import { useNavigate } from 'react-router-dom'

import ImageOne from '../../../../assets/ImgPassoOne.svg'
import ImageTree from '../../../../assets/ImgPassoThree3.svg'
import ImageTwo from '../../../../assets/ImgPassoTwo.svg'
import { Button, TextRegular, TitleText } from '../../../../components'
import {
  ContainerExpanation,
  ContainerExplanation,
  ContainerText,
  Content,
  ContentTitle,
  Image,
} from './styled'

export const Explanation = () => {
  const navigate = useNavigate()

  const handreNagigateToVacancies = () => {
    navigate('/vagas')
  }
  return (
    <ContainerExplanation>
      <ContentTitle>
        <TitleText color="black" size="l">
          Como buscar uma Vaga?
        </TitleText>
        <TextRegular weight={600}>
          Segue esse passo a passo para garantir sua vaga!
        </TextRegular>
      </ContentTitle>

      <ContainerExpanation>
        <Content>
          <Image src={ImageOne} alt="" data-aos="zoom-in" />
          <ContainerText data-aos="fade-left">
            <div>
              <span>1º Passo</span>
              <TitleText size="m" color="black">
                Pesquise sua Vaga!
              </TitleText>
            </div>

            <TextRegular size="s" weight={500} color="black">
              Digite o cargo ou área em que deseja se candidatar na barra de
              pesquisa. Explore as diversas oportunidades disponíveis e encontre
              aquela que mais se alinha com seus objetivos profissionais.
            </TextRegular>
          </ContainerText>
        </Content>

        <Content>
          <ContainerText data-aos="fade-right">
            <div>
              <span>2º Passo</span>
              <TitleText size="m" color="black">
                Analíse a vaga Escolhida!
              </TitleText>
            </div>
            <TextRegular size="s" weight={500} color="black">
              Avalie cuidadosamente os requisitos e expectativas da vaga,
              comparando-os com suas habilidades, experiências e valores. Este
              passo crítico garante que você esteja escolhendo oportunidades
              alinhadas com seu perfil, maximizando suas chances de sucesso.
            </TextRegular>
          </ContainerText>
          <Image src={ImageTwo} alt="" data-aos="zoom-in" />
        </Content>

        <Content>
          <Image src={ImageTree} alt="" data-aos="zoom-in" />
          <ContainerText data-aos="fade-left">
            <div>
              <span>3º Passo</span>
              <TitleText size="m" color="black">
                Se inscreva a Vaga!
              </TitleText>
            </div>
            <TextRegular size="s" weight={500} color="black">
              Ao encontrar a oportunidade perfeita, é o momento de agir. Clique
              no botão Candidatar-se, descreva uma carta de apresentação no
              corpo do email e envie o currículo como anexo para iniciar sua
              jornada profissional.
            </TextRegular>
          </ContainerText>
        </Content>

        <Button bg="black" search onClick={handreNagigateToVacancies}>
          Buscar Vagas
        </Button>
      </ContainerExpanation>
    </ContainerExplanation>
  )
}
