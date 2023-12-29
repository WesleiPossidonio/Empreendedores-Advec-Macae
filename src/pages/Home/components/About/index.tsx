import {
  Church,
  ClipboardText,
  DesktopTower,
  Handshake,
} from '@phosphor-icons/react'

import { TextRegular, TitleText } from '../../../../components'
import {
  CardAbout,
  ContainerAbout,
  ContainerCards,
  ContainerTitle,
} from './styled'

export const About = () => {
  return (
    <ContainerAbout>
      <ContainerTitle>
        <TitleText>Lorem ipsum dolor sit amet, consectetur</TitleText>
        <TextRegular color="gray" size="m">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          consequatur! Expedita eum commodi dolor eveniet, eaque ipsam
          doloremque voluptas possimus molestiae odio in recusandae vel ea
          reprehenderit ratione repellat! Illo.
        </TextRegular>
      </ContainerTitle>

      <ContainerCards>
        <CardAbout>
          <Church size={55} weight="fill" />
          <TextRegular>
            Share relevant infomation with other students
          </TextRegular>
        </CardAbout>
        <CardAbout>
          <DesktopTower size={55} weight="fill" />
          <TextRegular>
            Share relevant infomation with other students
          </TextRegular>
        </CardAbout>
        <CardAbout>
          <ClipboardText size={55} weight="fill" />
          <TextRegular>
            Share relevant infomation with other students
          </TextRegular>
        </CardAbout>
        <CardAbout>
          <Handshake size={55} weight="fill" />
          <TextRegular>
            Share relevant infomation with other students
          </TextRegular>
        </CardAbout>
      </ContainerCards>
    </ContainerAbout>
  )
}
