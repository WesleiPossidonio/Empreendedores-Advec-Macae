import { ContainerTextArea } from './styled'

interface TextAreaProps {
  error?: string
  placeholder: string
}

export const TextArea = ({ error, placeholder }: TextAreaProps) => {
  return (
    <ContainerTextArea placeholder={placeholder} error={error !== undefined} />
  )
}
