import { Church, ClipboardText, DesktopTower } from '@phosphor-icons/react'

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
        <TextRegular color="gray" size="s" weight={600}>
          Unir corações, atender necessidades e transformar vidas é nossa visão.
          Buscamos construir uma comunidade onde a solidariedade floresça,
          proporcionando a cada membro um futuro próspero.
        </TextRegular>
      </ContainerTitle>

      <ContainerCards>
        <div className="contentCardOne">
          <CardAbout data-aos="zoom-in">
            <Church size={55} weight="fill" />
            <ContainerTextCard>
              <TitleText size="m">Nossa Missão</TitleText>
              <TextRegular weight={600} size="s">
                Transformar Vidas Através da Solidariedade
              </TextRegular>
            </ContainerTextCard>
          </CardAbout>

          <CardAbout data-aos="zoom-in">
            <ClipboardText size={55} weight="fill" />
            <ContainerTextCard>
              <TitleText size="m">Nossos Princípios</TitleText>
              <TextRegular weight={600} size="s">
                Cultivamos nossa comunidade a união como alicerce
              </TextRegular>
            </ContainerTextCard>
          </CardAbout>

          <CardAbout data-aos="zoom-in">
            <DesktopTower size={55} weight="fill" />
            <ContainerTextCard>
              <TitleText size="m">Nossos Valores</TitleText>
              <TextRegular weight={600} size="s">
                Solidariedade, respeito mútuo, empatia é a base dos nossos
                valores
              </TextRegular>
            </ContainerTextCard>
          </CardAbout>
        </div>
      </ContainerCards>
    </ContainerAbout>
  )
}
