import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import { TrashSimple } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { type ChangeEvent, useState } from 'react'

import { UpdateVacancyModal } from '../../../../components'
import {
  useListVocancies,
  // type ListVacancyProps,
} from '../../../../contexts/companyContext'
import {
  ListRequerimentTable,
  TableContentList,
  TableHeader2,
  TableRowContentList,
} from './styled'

export const TableListVacancy = () => {
  const { listVacancy, dataCompany } = useListVocancies()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const jobFilterCompany = listVacancy.filter((vacancy) => {
    return vacancy.vacancies_id === dataCompany.id
  })

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 5))
    setPage(0)
  }

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, jobFilterCompany.length - page * rowsPerPage)

  const handleDeleteVacancy = (id: string) => {
    console.log('Fui Clidado =>', id)
  }

  return (
    <ListRequerimentTable>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableHeader2>Nome da Vaga</TableHeader2>
              <TableHeader2>Nº Vagas</TableHeader2>
              <TableHeader2>Descrição da Vaga</TableHeader2>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              (rowsPerPage > 0
                ? jobFilterCompany.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )
                : jobFilterCompany,
              jobFilterCompany.map((data) => {
                return (
                  <TableRowContentList key={data.vacancies_id}>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <TableContentList>
                          {data.name_vacancies}
                        </TableContentList>
                      </Dialog.Trigger>
                      <UpdateVacancyModal vacancyId={data.id} />
                    </Dialog.Root>
                    <TableContentList>
                      {data.number_of_vacancies}
                    </TableContentList>
                    <TableContentList>{data.job_description}</TableContentList>
                    <TableContentList
                      onClick={() => {
                        handleDeleteVacancy(data.id)
                      }}
                    >
                      <TrashSimple size={28} />
                    </TableContentList>
                  </TableRowContentList>
                )
              }))
            }
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={jobFilterCompany.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Itens por página:"
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </ListRequerimentTable>
  )
}
