import { useEffect, useState } from 'react'

import { Clock } from '../Clock'
import { ContainerCurrentDate, ContentDate } from './styled'

export const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState<string>(getCurrentDate())
  const [currentDay, setCurrentDay] = useState<string>(getCurrentDay())

  useEffect(() => {
    setCurrentDay(getCurrentDay())
    setCurrentDate(getCurrentDate())
  }, [])

  function getCurrentDate(): string {
    const now = new Date()
    const day = now.getDate().toString()
    const monthNames = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ]
    const month = monthNames[now.getMonth()]
    const year = now.getFullYear().toString()

    return `${day} de ${month} ${year}`
  }

  function getCurrentDay(): string {
    const now = new Date()

    const dayOfWeekNames = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ]
    const dayOfWeek = dayOfWeekNames[now.getDay()]

    return `${dayOfWeek}`
  }
  return (
    <ContainerCurrentDate>
      <ContentDate>
        <p>{currentDay}</p>
        <h1>{currentDate}</h1>
      </ContentDate>

      <Clock />
    </ContainerCurrentDate>
  )
}
