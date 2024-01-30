/* eslint-disable @typescript-eslint/naming-convention */
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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
export interface RegisterCompaniesProps {
  name_companies: string
  email: string
  company_description: string
  path_banner: string
  path_img: string
  password: string
  branch_of_activity: string
}
interface GetListVacancies {
  vacancy: string
  selectedPage: string
}
export interface DataLoginCompanies {
  email: string
  password: string
}
export interface DataCompany {
  id: number
  name_companies: string
  email: string
  company_description: string
  urlImage: string
  urlBanner: string
  token: string
}
export interface ListVacancyProps {
  vacancies_id: number
  name_vacancies: string
  number_of_vacancies: string
  job_description: string
  vacancy_requirements: string
  additional_information: string
  vacancies: DataCompany
}
export interface VacanciesProps {
  name_vacancies: string
  number_of_vacancies: string
  job_description: string
  vacancy_requirements: string
}
interface ListCompanyType {
  handleGetListVacancies: (vacancy: GetListVacancies) => Promise<void>
  handleRegiterCompanies: (data: RegisterCompaniesProps) => Promise<void>
  HandleLoginCompanies: (data: DataLoginCompanies) => Promise<void>
  createNewVacancies: (data: VacanciesProps) => Promise<void>
  listCompanies: DataCompany[]
  searchVacancy: string
  dataCompany: DataCompany
  listVacancy: ListVacancyProps[]
  listOfFilteredVacancies: ListVacancyProps[]
  pageStatusJobSearch: string
}

interface ListCompanyProps {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CompanyContext = createContext({} as ListCompanyType)

export const ListCompanyProvider = ({ children }: ListCompanyProps) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [dataCompany, setDataCompany] = useState<DataCompany>({} as DataCompany)
  const [listCompanies, setListCompanies] = useState<DataCompany[]>([])
  const [listVacancy, setListVacancy] = useState<ListVacancyProps[]>([])
  const [listOfFilteredVacancies, setListOfFilteredVacancies] = useState<
    ListVacancyProps[]
  >([])
  const [searchVacancy, setSearchVacancy] = useState('')
  const [pageStatusJobSearch, setPageStatusJobSearch] = useState('')
  const navigate = useNavigate()

  const getListConpanies = useCallback(async () => {
    try {
      const response = await api.get('listCompanies')
      const newListCompanies: DataCompany[] = response.data
      setListCompanies(newListCompanies)
    } catch (error) {}
  }, [])

  const GetListVacancy = async () => {
    try {
      const response = await api.get('listVacancies')

      const listVacancies: ListVacancyProps[] = response.data
      setListVacancy(listVacancies)
    } catch (error) {
      console.error('Erro ao obter a lista de vagas:', error)
    }
  }

  useEffect(() => {
    void GetListVacancy()
    void getListConpanies()
  }, [getListConpanies])

  const handleGetListVacancies = useCallback(
    async (data: GetListVacancies) => {
      const { vacancy, selectedPage } = data
      setSearchVacancy(vacancy)
      setPageStatusJobSearch(selectedPage)

      if (selectedPage === 'pageJob') {
        const listVacanciesSelected: ListVacancyProps[] = listVacancy.filter(
          (list) =>
            list.name_vacancies.toLowerCase().startsWith(vacancy.toLowerCase()),
        )
        setListOfFilteredVacancies(listVacanciesSelected)
      }

      if (selectedPage === 'homePage') {
        const listVacanciesSelected = listVacancy.filter((list) =>
          list.name_vacancies.toLowerCase().startsWith(vacancy.toLowerCase()),
        )

        setListOfFilteredVacancies(listVacanciesSelected)
        navigate('/vagas')
      }
    },
    [listVacancy, navigate],
  )

  const handleRegiterCompanies = useCallback(
    async (data: RegisterCompaniesProps) => {
      const {
        name_companies,
        email,
        company_description,
        path_banner,
        path_img,
        password,
        branch_of_activity,
      } = data

      try {
        const formData = new FormData()
        formData.append('name_companies', name_companies)
        formData.append('email', email)
        formData.append('company_description', company_description)
        formData.append('password', password)
        formData.append('path_banner', path_banner)
        formData.append('path_img', path_img)
        formData.append('branch_of_activity', branch_of_activity)

        await toast.promise(
          api.post('companies', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }),
          {
            pending: 'Verificando seus dados',
            success: 'Empresa Cadastrada!',
            error: 'Verifique seus dados e tente novamente 🤯',
          },
        )

        setTimeout(() => {
          navigate('/login')
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    },

    [navigate],
  )

  const createNewVacancies = useCallback(
    async (data: VacanciesProps) => {
      const {
        job_description,
        name_vacancies,
        number_of_vacancies,
        vacancy_requirements,
      } = data

      const newVacacies = {
        job_description,
        name_vacancies,
        number_of_vacancies,
        vacancy_requirements,
        vacancies_id: dataCompany.id,
      }

      try {
        await toast.promise(api.post('vacancies', newVacacies), {
          pending: 'Verificando seus dados',
          success: 'Vaga criada com sucesso!',
          error: 'Verifique seus dado e faça novamente! 🤯',
        })
      } catch (error) {
        console.log(error)
      }
    },
    [dataCompany],
  )

  const HandleLoginCompanies = useCallback(
    async (data: DataLoginCompanies) => {
      const { email, password } = data

      try {
        const response = await toast.promise(
          api.post('sessions', { email, password }),
          {
            pending: 'Verificando seus dados',
            success: 'Seja Bem-vindo(a)!',
            error: 'Verifique seu e-mail e senha 🤯',
          },
        )

        const { data } = response

        localStorage.setItem(
          'AdvecEmpreendedores:EmpreendedoresData1.0',
          JSON.stringify(data),
        )

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setDataCompany(data)

        setTimeout(() => {
          navigate('/dashboard')
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    },
    [navigate],
  )

  return (
    <CompanyContext.Provider
      value={{
        handleGetListVacancies,
        handleRegiterCompanies,
        HandleLoginCompanies,
        createNewVacancies,
        listCompanies,
        searchVacancy,
        dataCompany,
        listVacancy,
        pageStatusJobSearch,
        listOfFilteredVacancies,
      }}
    >
      {children}
    </CompanyContext.Provider>
  )
}

export const useListVocancies = () => {
  const context = useContext(CompanyContext)
  return context
}
