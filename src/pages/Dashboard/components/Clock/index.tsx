import { useEffect, useState } from 'react'

import { ContainerClock, Span } from './styled'

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime())
  const [currentSecconds, setCurrentSecconds] =
    useState<string>(getCurrentSecconds())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime())

      setCurrentSecconds(getCurrentSecconds())
    }, 1000) // Atualizar a cada minuto

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function getCurrentTime(): string {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')

    return `${hours}:${minutes}`
  }

  function getCurrentSecconds(): string {
    const now = new Date()
    const seconds = now.getSeconds().toString().padStart(2, '0')

    return `${seconds}`
  }

  return (
    <ContainerClock>
      {currentTime}
      <Span>{currentSecconds}</Span>
    </ContainerClock>
  )
}
