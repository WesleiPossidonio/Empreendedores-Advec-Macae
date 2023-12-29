import ImageOne from '../../../../assets/ImageOne.svg'
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
        <TitleText>How It Works</TitleText>
        <TextRegular>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </TextRegular>
      </ContentTitle>

      <ContainerExpanation>
        <Content>
          <Image src={ImageOne} alt="" />
          <ContainerText>
            <div>
              <span>1º Passo</span>
              <TitleText size="l">Copy Share your review</TitleText>
            </div>

            <TextRegular size="s" weight={400}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </TextRegular>
          </ContainerText>
        </Content>

        <Content>
          <ContainerText>
            <div>
              <span>2º Passo</span>
              <TitleText size="l">Copy Share your review</TitleText>
            </div>
            <TextRegular size="s" weight={400}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </TextRegular>
          </ContainerText>
          <Image src={ImageOne} alt="" />
        </Content>

        <Content>
          <Image src={ImageOne} alt="" />
          <ContainerText>
            <div>
              <span>3º Passo</span>
              <TitleText size="l">Copy Share your review</TitleText>
            </div>
            <TextRegular size="s" weight={400}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </TextRegular>
          </ContainerText>
        </Content>

        <Button search>Buscar Vagas</Button>
      </ContainerExpanation>
    </ContainerExplanation>
  )
}
