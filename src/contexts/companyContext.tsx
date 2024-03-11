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

export interface CommentsProps {
  id?: number
  comments_id: number
  name_user: string
  text_comments: string
  number_of_stars: number
}

interface PathImagesCompaniesProps {
  imageOne: string
  imageTwo: string
  imageThree: string
  imageFour: string
}

export interface DataCompany {
  id: number
  name_companies: string
  email: string
  company_description: string
  path_img: string
  path_banner: string
  token: string
  branch_of_activity: string
  path_companies_img: PathImagesCompaniesProps
}

export interface CompaniesProps {
  id: number
  cnpj: string
  name_companies: string
  email: string
  company_description: string
  path_img: string
  path_banner: string
  path_companies_img: PathImagesCompaniesProps
}
export interface ListVacanciesProps {
  nameSearch: string
  id: string
  vacancies_id: number
  name_vacancies: string
  number_of_vacancies: string
  job_description: string
  vacancy_requirements: string
  additional_information: string
  createdAt: string
  vacancies: DataCompany
}

export interface RegisterCompaniesProps {
  name_companies: string
  email: string
  company_description: string
  path_banner: string
  path_img: string
  password: string
  branch_of_activity: string
  first_img: string
  second_img: string
  third_img: string
  fourth_img: string
}
interface GetListVacancies {
  vacancy: string
  selectedPage: string
}
export interface DataLoginCompanies {
  email: string
  password: string
}

export interface ListVacancyProps {
  id: string
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

interface SendEmailProps {
  name: string
  subject: string
  email: string
  phone: string
}

interface ListCompanyType {
  handleGetListVacancies: (vacancy: GetListVacancies) => Promise<void>
  handleRegiterCompanies: (data: RegisterCompaniesProps) => Promise<void>
  HandleLoginCompanies: (data: DataLoginCompanies) => Promise<void>
  createNewVacancies: (data: VacanciesProps) => Promise<void>
  setPageStatusJobSearch: (data: string) => void
  setCompanyBranchFilter: (data: string) => void
  createNewComments: (data: CommentsProps) => void
  handleSendEmail: (data: SendEmailProps) => void
  listCompanies: DataCompany[]
  filteredAllListCompanies: DataCompany[]
  searchVacancy: string
  companyBranchFilter: string
  dataCompany: DataCompany
  listVacancy: ListVacanciesProps[]
  listOfFilteredVacancies: ListVacanciesProps[]
  pageStatusJobSearch: string
  allListComments: CommentsProps[]
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
  const [filteredAllListCompanies, setFilteredAllListCompanies] = useState<
    DataCompany[]
  >([])
  const [listVacancy, setListVacancy] = useState<ListVacanciesProps[]>([])
  const [listOfFilteredVacancies, setListOfFilteredVacancies] = useState<
    ListVacanciesProps[]
  >([])
  const [allListComments, setallListComments] = useState<CommentsProps[]>([])
  const [searchVacancy, setSearchVacancy] = useState('')
  const [pageStatusJobSearch, setPageStatusJobSearch] =
    useState('PageCompanies')
  const [companyBranchFilter, setCompanyBranchFilter] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getListVacancy = async () => {
      try {
        const response = await api.get('listVacancies')
        const listVacancies: ListVacanciesProps[] = response.data
        setListVacancy(listVacancies)
      } catch (error) {
        console.error('Erro ao obter a lista de vagas:', error)
      }
    }

    const getListCompanies = async () => {
      try {
        const response = await api.get('listCompanies')
        const newListCompanies: DataCompany[] = response.data
        setListCompanies(newListCompanies)
      } catch (error) {
        console.error('Erro ao obter a lista de empresas:', error)
      }
    }

    const getListComments = async () => {
      try {
        const response = await api.get('listComments')
        const newListCompanies: CommentsProps[] = response.data
        setallListComments(newListCompanies)
      } catch (error) {
        console.error('Erro ao obter a lista de comentários:', error)
      }
    }

    void getListCompanies()
    void getListVacancy()
    void getListComments()
  }, [])

  const handleGetListVacancies = useCallback(
    async (data: GetListVacancies) => {
      const { vacancy, selectedPage } = data
      setSearchVacancy(vacancy)
      setPageStatusJobSearch(selectedPage)

      console.log(selectedPage)

      if (selectedPage === 'pageJob') {
        const listVacanciesSelected: ListVacanciesProps[] = listVacancy.filter(
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

      if (selectedPage === 'searchCompanies') {
        const listCompaniesSelected = listCompanies.filter((list) =>
          list.name_companies.toLowerCase().startsWith(vacancy.toLowerCase()),
        )

        setFilteredAllListCompanies(listCompaniesSelected)
      }
    },
    [listCompanies, listVacancy, navigate],
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
        first_img,
        second_img,
        third_img,
        fourth_img,
      } = data

      const formData = new FormData()
      formData.append('name_companies', name_companies)
      formData.append('email', email)
      formData.append('company_description', company_description)
      formData.append('password', password)
      formData.append('path_banner', path_banner[0])
      formData.append('path_img', path_img[0])
      formData.append('first_img', first_img)
      formData.append('second_img', second_img)
      formData.append('third_img', third_img)
      formData.append('fourth_img', fourth_img)
      formData.append('branch_of_activity', branch_of_activity)

      console.log(formData)

      try {
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
        const newListVacancies = await toast.promise(
          api.post('vacancies', newVacacies),
          {
            pending: 'Verificando seus dados',
            success: 'Vaga criada com sucesso!',
            error: 'Verifique seus dado e faça novamente! 🤯',
          },
        )
        const { data } = newListVacancies

        setListVacancy([...listVacancy, data])
      } catch (error) {
        console.log(error)
      }
    },
    [dataCompany.id, listVacancy],
  )

  const createNewComments = useCallback(
    async (data: CommentsProps) => {
      const { comments_id, name_user, number_of_stars, text_comments } = data

      const newComments = {
        name_user,
        number_of_stars,
        text_comments,
        comments_id,
      }

      try {
        const newListComments = await toast.promise(
          api.post('addComments', newComments),
          {
            pending: 'Verificando seus dados',
            success: 'Vaga criada com sucesso!',
            error: 'Verifique seus dado e faça novamente! 🤯',
          },
        )

        const { data } = newListComments
        setallListComments([...allListComments, data])
      } catch (error) {
        console.log(error)
      }
    },
    [allListComments],
  )

  const handleSendEmail = useCallback(async (data: SendEmailProps) => {
    const { email, name, phone, subject } = data

    const dataSendEmail = {
      email,
      name,
      phone,
      subject,
    }

    try {
      await toast.promise(api.post('sendMail', dataSendEmail), {
        pending: 'Verificando seus dados',
        success: 'Dúvida enviada com sucesso!',
        error: 'Verifique seus dado e faça novamente! 🤯',
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

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
        setPageStatusJobSearch,
        setCompanyBranchFilter,
        createNewComments,
        handleSendEmail,
        listCompanies,
        searchVacancy,
        dataCompany,
        listVacancy,
        pageStatusJobSearch,
        listOfFilteredVacancies,
        filteredAllListCompanies,
        allListComments,
        companyBranchFilter,
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
