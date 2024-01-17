/* eslint-disable @typescript-eslint/naming-convention */
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { Button, Input, TextRegular, TitleText } from '../../../../components'
import { Sectores } from '../../../../components/ArrayOfSectors'
import { useListVocancies } from '../../../../contexts/companyContext'
import { TextArea } from '../../../Home/components/Contact/styled'
import {
  ContainerInputImage,
  ContentInput,
  Form,
  InputFile,
  Label,
  LabelSelect,
  Select,
} from './styled'

const RegisterCompaniesFormSchema = zod.object({
  name_companies: zod
    .string()
    .min(1, 'Por gentileza, Digite o nome da sua empresa'),
  branch_of_activity: zod
    .string()
    .min(1, 'Por gentileza, Digite o nome da sua empresa'),
  email: zod
    .string()
    .email('Por gentileza, digite seu E-mail corretamente')
    .min(1, 'Por gentileza, digite seu E-mail'),
  company_description: zod
    .string()
    .min(1, 'Por gentileza, digite a descrição da sua empresa'),
  path_img: zod.any(),
  path_banner: zod.any(),
  password: zod
    .string()
    .min(6, 'Por gentileza, digite sua senha corretamente')
    .max(6, 'Por gentileza, digite sua senha corretamente'),
})

type createLoginCompaniesFormInputs = zod.infer<
  typeof RegisterCompaniesFormSchema
>

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createLoginCompaniesFormInputs>({
    resolver: zodResolver(RegisterCompaniesFormSchema),
  })

  const [fileInputFilledLogo, setFileInputFilledLogo] = useState(false)
  const [fileInputFilledBanner, setFileInputFilledBanner] = useState(false)

  const { handleRegiterCompanies } = useListVocancies()

  const handleFileInputChangeLogo = () => {
    setFileInputFilledLogo(true)
  }

  const handleFileInputChangeBanner = () => {
    setFileInputFilledBanner(true)
  }

  const handleRegisterCompanies = (data: createLoginCompaniesFormInputs) => {
    const {
      password,
      company_description,
      email,
      name_companies,
      path_banner,
      path_img,
      branch_of_activity,
    } = data

    const newList = {
      password,
      path_banner: path_banner[0],
      path_img: path_img[0],
      company_description,
      email,
      name_companies,
      branch_of_activity,
    }

    void handleRegiterCompanies(newList)

    reset()
  }

  return (
    <Form onSubmit={handleSubmit(handleRegisterCompanies)}>
      <TitleText>Log In Please</TitleText>

      <Input
        placeholder="Digite o nome da empresa"
        {...register('name_companies')}
        error={errors.name_companies?.message}
      />
      <LabelSelect htmlFor="selected">
        Selecione o Ramo da Empresa
        <Select id="selected" {...register('branch_of_activity')}>
          {Sectores.map((list) => {
            return (
              <option key={list.id} value={list.name}>
                {list.name}
              </option>
            )
          })}
        </Select>
      </LabelSelect>

      <Input
        placeholder="Digite o email da empresa"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        placeholder="Digite sua senha"
        {...register('password')}
        error={errors.password?.message}
      />
      <TextArea
        placeholder="Descreva a sua empresa"
        {...register('company_description')}
        error={errors.company_description?.message !== undefined && true}
      />

      <ContainerInputImage>
        <TextRegular weight={700}>Adicione a Logo e o Banner</TextRegular>
        <ContentInput>
          <Label htmlFor="logo" fileState={fileInputFilledLogo}>
            Logo
          </Label>
          <InputFile
            type="file"
            id="logo"
            {...register('path_img')}
            onClick={handleFileInputChangeLogo}
          />
          <Label htmlFor="Banner" fileState={fileInputFilledBanner}>
            Banner
          </Label>
          <InputFile
            type="file"
            id="Banner"
            {...register('path_banner')}
            onClick={handleFileInputChangeBanner}
          />
        </ContentInput>
      </ContainerInputImage>
      <Button bg="theme">Cadastrar</Button>
    </Form>
  )
}
