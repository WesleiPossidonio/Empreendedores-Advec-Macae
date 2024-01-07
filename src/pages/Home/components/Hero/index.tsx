import { TextRegular, TitleText } from '../../../../components'
import { FormSearch } from '../../../../components/FormSearch'
import { ContainerHero, ContentTitle } from './styled'

export const Hero = () => {
  return (
    <ContainerHero>
      <ContentTitle>
        <TitleText size="m" color="white">
          Descubra Oportunidades Incríveis!
        </TitleText>
        <TextRegular weight={600} color="black">
          Encontre Sua Próxima Jornada Profissional Aqui!
        </TextRegular>

        <FormSearch />
      </ContentTitle>
    </ContainerHero>
  )
}
