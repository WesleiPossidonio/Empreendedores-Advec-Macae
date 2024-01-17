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
  return (
    <ContainerExplanation>
      <ContentTitle>
        <TitleText color="black" size="l">
          Como buscar uma Vaga?
        </TitleText>
        <TextRegular>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </TextRegular>
      </ContentTitle>

      <ContainerExpanation>
        <Content>
          <Image src={ImageOne} alt="" data-aos="zoom-in" />
          <ContainerText data-aos="fade-left">
            <div>
              <span>1º Passo</span>
              <TitleText size="m" color="black">
                Pesquise sua Vaga
              </TitleText>
            </div>

            <TextRegular size="s" weight={400} color="black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </TextRegular>
          </ContainerText>
        </Content>

        <Content>
          <ContainerText data-aos="fade-right">
            <div>
              <span>2º Passo</span>
              <TitleText size="m" color="black">
                Analíse a vaga Escolhida
              </TitleText>
            </div>
            <TextRegular size="s" weight={400} color="black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
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
                Se inscreva a Vaga
              </TitleText>
            </div>
            <TextRegular size="s" weight={400} color="black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </TextRegular>
          </ContainerText>
        </Content>

        <Button bg="black" search>
          Buscar Vagas
        </Button>
      </ContainerExpanation>
    </ContainerExplanation>
  )
}
