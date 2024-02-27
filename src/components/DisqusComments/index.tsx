import { DiscussionEmbed } from 'disqus-react'

import { ContainerDiqus } from './styled'

interface DisqusCommentsProps {
  identifier: string
  title: string
}

export const DisqusComments = ({ identifier, title }: DisqusCommentsProps) => {
  const disqusShortname = 'empreendedores-advec'
  const identifierId = identifier.replace(/\s+/g, '-').toLowerCase()

  const disqusConfig = {
    url: `https://empreendedores-advec.disqus.com/embed.js?id=${identifierId}`,
    identifier,
    title,
    language: 'pt_BR',
  }

  return (
    <ContainerDiqus>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </ContainerDiqus>
  )
}
