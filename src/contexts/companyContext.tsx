import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../services/api'

interface CompaniesProps {
  id: number
  cnpj: string
  name_companies: string
  email: string
  company_description: string
  urlImage: string
  urlBanner: string
}

export interface ListVacanciesProps {
  nameSearch: string
  id: number
  name_vacancies: string
  number_of_vacancies: string
  job_description: string
  vacancy_requirements: string
  additional_information: string
  created_at: string
  vacancies: CompaniesProps
}

interface ListCompanyType {
  handleGetListVacancies: (vacancy: string) => Promise<void>
  searchVacancy: string
}

interface ListCompanyProps {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CompanyContext = createContext({} as ListCompanyType)

export const ListCompanyProvider = ({ children }: ListCompanyProps) => {
  const [searchVacancy, setSearchVacancy] = useState('')
  const navigate = useNavigate()

  const handleGetListVacancies = useCallback(
    async (vacancy: string) => {
      setSearchVacancy(vacancy)
      try {
        const response = await api.get('listVacancies')

        const { data } = response

        const listVacanciesSelected = data.filter((list: ListVacanciesProps) =>
          list.name_vacancies.toLowerCase().startsWith(vacancy.toLowerCase()),
        )

        navigate('/vagas', {
          state: listVacanciesSelected,
        })
      } catch (error) {
        console.error('Erro ao obter a lista de vagas:', error)
      }
    },
    [navigate],
  )

  return (
    <CompanyContext.Provider value={{ handleGetListVacancies, searchVacancy }}>
      {children}
    </CompanyContext.Provider>
  )
}

export const useListVocancies = () => {
  const context = useContext(CompanyContext)
  return context
}
