import styled from 'styled-components'

interface RegularTextProps {
  size?: 'l' | 'm' | 's'
  color?: 'gray' | 'white' | 'red'
  weight?: string | number
}

interface TitleTextProps {
  size?: 'l' | 'm' | 's' | 'sm'
  color?: 'gray' | 'white' | 'red' | 'blue'
  weight?: string | number
}

export const TextRegular = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'gray'}`]};
  font-size: ${({ theme, size }) =>
    theme.fontSizes[`text-regular-${size ?? 's'}`]};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`
export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'blue'}`]};
  font-size: ${({ theme, size }) =>
    theme.fontSizes[`title-regular-${size ?? 's'}`]};
  line-height: normal;
  font-weight: ${({ weight }) => weight ?? 700};
`
