import { TextRegular, TitleText } from '../../../../components'
import { FormSearch } from '../../../../components/FormSearch'
import { ContainerHero, ContentTitle } from './styled'

export const Hero = () => {
  return (
    <ContainerHero id="home">
      <ContentTitle>
        <TitleText size="l" color="white">
          Descubra Oportunidades Incríveis!
        </TitleText>
        <TextRegular weight={600} color="black">
          Encontre Sua Próxima Jornada Profissional Aqui!
        </TextRegular>

        <FormSearch dashboard={false} />
      </ContentTitle>
    </ContainerHero>
  )
}
