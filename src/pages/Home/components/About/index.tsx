import ImageAbout from '../../../../assets/ImageAboutOne.avif'
import { TextRegular, TitleText } from '../../../../components'
import { ContainerAbout, ContentImg, ContentText } from './styled'

export const About = () => {
  return (
    <ContainerAbout>
      <ContentText>
        <TitleText size="m">
          O que é <br /> Vagas advec?
        </TitleText>
        <div>
          <TextRegular>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur unde earum ad facilis debitis porro voluptate quaerat
            cupiditate placeat neque recusandae reprehenderit, ab dolor
            doloribus atque qui. Autem, facilis et?
          </TextRegular>
          <TextRegular>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur unde earum ad facilis debitis porro voluptate quaerat
            cupiditate placeat neque recusandae reprehenderit, ab dolor
            doloribus
          </TextRegular>
        </div>
      </ContentText>

      <ContentImg>
        <img className="imgOne" src={ImageAbout} alt="" />
        <img src={ImageAbout} alt="" />
      </ContentImg>
    </ContainerAbout>
  )
}
