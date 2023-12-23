import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 7.5625rem;
  height: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors['base-blue']};
  border-radius: 5px;

  font-size: ${({ theme }) => theme.FontSises['base-text-m']};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors['base-white']};

  background-color: ${({ theme }) => theme.colors['base-blue']};
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
