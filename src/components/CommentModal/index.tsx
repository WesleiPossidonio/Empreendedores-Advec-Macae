import { zodResolver } from '@hookform/resolvers/zod'
import { Rating, Box } from '@mui/material'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { useListVocancies } from '../../contexts/companyContext'
import { TextArea } from '../../pages/Home/components/Contact/styled'
import { CloseButton, ContentModal, Overlay } from './styled'

import { Button, Input } from '..'

interface CommentModalProps {
  idCompany: number
}

const addReviewFormSchema = zod.object({
  name_user: zod.string().min(3, 'Por gentileza, digite o seu nome'),
  text_comments: zod
    .string()
    .min(1, 'Por gentileza, descreva a sua experiencia com a empresa'),
  number_of_stars: zod.number(),
})

type addReviewFormInput = zod.infer<typeof addReviewFormSchema>

export const CommentModal = ({ idCompany }: CommentModalProps) => {
  const [captcha, setCaptcha] = useState('')
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<addReviewFormInput>({
    resolver: zodResolver(addReviewFormSchema),
  })

  const { createNewComments } = useListVocancies()

  const handleAddReview = (data: addReviewFormInput) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { text_comments, name_user, number_of_stars } = data

    const newComment = {
      text_comments,
      name_user,
      number_of_stars,
      comments_id: idCompany,
    }

    if (captcha !== '') {
      createNewComments(newComment)
      reset()
    } else {
      alert('Por gentileza, preencha todos os campos')
    }
  }

  const handleCapcha = (token: string | null) => {
    if (token !== null) {
      setCaptcha(token)
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <ContentModal>
        <Dialog.Title>Adicionar Avaliação</Dialog.Title>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <form onSubmit={handleSubmit(handleAddReview)}>
          <Input
            type="text"
            placeholder="Escreva o seu Nome"
            {...register('name_user')}
            error={errors.name_user?.message}
          />
          <TextArea
            placeholder="Descreva a sua Experiência"
            {...register('text_comments')}
            error={errors.text_comments?.message}
          />
          <Box component="fieldset" borderColor="transparent">
            <Controller
              name="number_of_stars"
              control={control}
              defaultValue={3}
              render={({ field }) => (
                <Rating
                  onChange={(event, newValue) => {
                    console.log(event)
                    field.onChange(newValue)
                  }}
                  value={field.value}
                />
              )}
            />
          </Box>
          <ReCAPTCHA
            sitekey="6LdmsKQpAAAAABUDbKwwG4084CSbsLgbFfeP-RKv"
            onChange={handleCapcha}
          />
          <Button bg="theme">Enviar</Button>
        </form>
      </ContentModal>
    </Dialog.Portal>
  )
}
