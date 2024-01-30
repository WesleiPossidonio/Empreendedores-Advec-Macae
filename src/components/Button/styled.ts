import styled from 'styled-components'

interface ButtonProps {
  search?: boolean
  bg: 'black' | 'theme'
}

export const ContainerButton = styled.button<ButtonProps>`
  width: ${({ search }) => (search === true ? '12.5rem' : '7.5625rem')};
  height: ${({ search }) => (search === true ? '3.3rem' : '2.9rem')};

  border: 1px solid ${({ theme }) => theme.colors['base-theme']};
  border-radius: 5px;

  font-size: ${({ theme }) => theme.FontSizes['text-regular-m']};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors['base-white']};

  background-color: ${({ theme, bg }) => theme.colors[`base-${bg}`]};
  box-shadow: 0px 5px 15px -3px rgba(15, 179, 175, 0.18);

  transition: 0.2s ease-in;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`
