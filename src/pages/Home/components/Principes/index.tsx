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
  ContainerTextCard,
  ContainerTitle,
} from './styled'

export const Principes = () => {
  return (
    <ContainerAbout id="principes">
      <ContainerTitle>
        <TitleText color="theme">Lorem ipsum dolor</TitleText>
        <TextRegular color="gray" size="m">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          consequatur! Expedita eum commodi dolor eveniet, eaque ipsam
          doloremque voluptas possimus molestiae
        </TextRegular>
      </ContainerTitle>

      <ContainerCards>
        <div className="contentCardOne">
          <CardAbout>
            <Church size={55} weight="fill" />
            <ContainerTextCard>
              <TitleText size="m">Lorem ipsum dolor sit</TitleText>
              <TextRegular weight={600} size="s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                consectetur iure nisi nihil
              </TextRegular>
            </ContainerTextCard>
          </CardAbout>
          <CardAbout>
            <DesktopTower size={55} weight="fill" />
            <ContainerTextCard>
              <TitleText size="m">Lorem ipsum dolor sit</TitleText>
              <TextRegular weight={600} size="s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                consectetur iure nisi nihil
              </TextRegular>
            </ContainerTextCard>
          </CardAbout>
        </div>

        <div className="contentCardTwo">
          <CardAbout>
            <ClipboardText size={55} weight="fill" />
            <ContainerTextCard>
              <TitleText size="m">Lorem ipsum dolor sit</TitleText>
              <TextRegular weight={600} size="s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                consectetur iure nisi nihil
              </TextRegular>
            </ContainerTextCard>
          </CardAbout>
          <CardAbout>
            <Handshake size={55} weight="fill" />
            <ContainerTextCard>
              <TitleText size="m">Lorem ipsum dolor sit</TitleText>
              <TextRegular weight={600} size="s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                consectetur iure nisi nihil
              </TextRegular>
            </ContainerTextCard>
          </CardAbout>
        </div>
      </ContainerCards>
    </ContainerAbout>
  )
}
