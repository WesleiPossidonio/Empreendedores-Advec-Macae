import styled from 'styled-components'

interface RegularTextProps {
  size?: 'sm' | 'm' | 's'
  color?: 'gray' | 'white' | 'red' | 'theme' | 'black'
  weight?: string | number
}

interface TitleTextProps {
  size?: 'm' | 's' | 'l'
  color?: 'gray' | 'white' | 'red' | 'theme' | 'black'
  weight?: string | number
}

export const TextRegular = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'gray'}`]};
  font-size: ${({ theme, size }) =>
    theme.FontSizes[`text-regular-${size ?? 's'}`]};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`
export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'theme'}`]};
  font-size: ${({ theme, size }) =>
    theme.FontSizes[`title-regular-${size ?? 'm'}`]};
  line-height: normal;
  font-weight: ${({ weight }) => weight ?? 700};
`
