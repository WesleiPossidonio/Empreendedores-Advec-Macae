import { TableCell, TableContainer, TableRow } from '@mui/material'
import { styled as muiStyled } from '@mui/material/styles'
import styled from 'styled-components'

export const ListRequerimentTable = styled(TableContainer)`
  width: 100% !important;
  height: max-content;
  max-height: 550px;

  display: flex;
  justify-content: center;

  margin-top: 2.5rem;

  background: red;
  border: none;
  border-radius: 6px;
  margin-bottom: 1rem;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

  div {
    color: ${({ theme }) => theme};
  }

  > div {
    background-color: ${({ theme }) => theme.colors['base-gray-100']};
  }

  > div td {
    border-bottom-color: ${({ theme }) => theme.colors['base-gray-100']};
  }

  @media (max-width: 600px) {
    table th {
      font-size: 13px;
    }
  }
`

export const TableHeader2 = muiStyled(TableCell)({
  fontSize: '1rem',
  fontWeight: '600',
  border: 'none',
  color: '#000',
}) as typeof TableCell

export const TableRowContentList = muiStyled(TableRow)({
  '&:hover': {
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    cursor: 'pointer',
  },
}) as typeof TableRow

export const TableContentList = muiStyled(TableCell)({
  color: '#000',
  marginBottom: '2rem',
}) as typeof TableCell
