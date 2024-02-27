import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { UserCircle } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import {
  Button,
  CommentModal,
  TextRegular,
  TitleText,
} from '../../../../components'
import {
  type CompaniesProps,
  type CommentsProps,
} from '../../../../contexts/companyContext'
import {
  CommentsHeader,
  ContainerComments,
  ContentComments,
  HeaderContent,
} from './styled'

import 'swiper/css'
import 'swiper/css/pagination'

interface PageCommentsProps {
  company: CompaniesProps
  commentsList: CommentsProps[]
}

export const Comments = ({ company, commentsList }: PageCommentsProps) => {
  return (
    <ContainerComments>
      <HeaderContent>
        <TitleText>O que Falam da {company.name_companies}</TitleText>
        <TextRegular weight={500}>
          Compratilhe conosco a sua experiência com a {company.name_companies}
        </TextRegular>
        <div>
          <Stack>
            <TextRegular weight={600}>5 Estrelas</TextRegular>
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={0.5}
              readOnly
            />
          </Stack>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button bg="theme" search>
                Enviar Avaliação
              </Button>
            </Dialog.Trigger>
            <CommentModal idCompany={company.id} />
          </Dialog.Root>
        </div>
      </HeaderContent>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          980: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {commentsList.map((comment) => {
          return (
            <ContentComments key={comment.id}>
              <CommentsHeader>
                <UserCircle size={42} weight="duotone" />
                <TitleText size="s" color="black">
                  {comment.name_user}
                </TitleText>
                <Stack>
                  <Rating
                    name="half-rating"
                    defaultValue={Number(comment.number_of_stars)}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </CommentsHeader>
              <TextRegular size="sm">{comment.text_comments}</TextRegular>
            </ContentComments>
          )
        })}
      </Swiper>
    </ContainerComments>
  )
}
