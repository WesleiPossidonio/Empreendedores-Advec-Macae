import { FormSearch } from '../../../../components/FormSearch'
import { TextRegular, TitleText } from '../../../../components/typograph'
import { ContainerHero, ContentTitle } from './styled'

export const Hero = () => {
  return (
    <ContainerHero>
      <ContentTitle>
        <TitleText size="m" color="gray">
          Descubra Oportunidades Incríveis!
        </TitleText>
        <TextRegular weight={600}>
          Encontre Sua Próxima Jornada Profissional Aqui!
        </TextRegular>

        <FormSearch />
      </ContentTitle>
    </ContainerHero>
  )
}
