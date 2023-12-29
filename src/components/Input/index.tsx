import { forwardRef, type InputHTMLAttributes } from 'react'

import { TextRegular } from '../typograph'
import { InputContaineStyle, InputStyled, InputWrapper } from './styled'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <InputWrapper>
        <InputContaineStyle hasError={error !== undefined && error !== ''}>
          <InputStyled ref={ref} {...props} />
        </InputContaineStyle>
        {error !== undefined && (
          <TextRegular size="s" color="red">
            {error}
          </TextRegular>
        )}
      </InputWrapper>
    )
  },
)
