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
        <TitleText size="l" color="theme">
          Nossa Visão
        </TitleText>
        <TextRegular color="gray" size="m">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          consequatur! Expedita eum commodi dolor eveniet, eaque ipsam
          doloremque voluptas possimus molestiae
        </TextRegular>
      </ContainerTitle>

      <ContainerCards>
        <div className="contentCardOne">
          <CardAbout data-aos="zoom-in">
            <Church size={55} weight="fill" />
            <ContainerTextCard>
              <TitleText size="m">Lorem ipsum dolor sit</TitleText>
              <TextRegular weight={600} size="s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                consectetur iure nisi nihil
              </TextRegular>
            </ContainerTextCard>
          </CardAbout>

          <CardAbout data-aos="zoom-in">
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
          <CardAbout data-aos="zoom-in">
            <ClipboardText size={55} weight="fill" />
            <ContainerTextCard>
              <TitleText size="m">Lorem ipsum dolor sit</TitleText>
              <TextRegular weight={600} size="s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                consectetur iure nisi nihil
              </TextRegular>
            </ContainerTextCard>
          </CardAbout>
          <CardAbout data-aos="zoom-in">
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
