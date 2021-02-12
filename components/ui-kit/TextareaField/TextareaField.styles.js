import { css } from '@emotion/react'
import TextareaFieldLightStyles from '../styles/TextareaFieldLight.styles'
import TextareaFieldRegularStyles from '../styles/TextareaFieldRegular.styles'

const StyledTextareaField = props => css`
${props.kind === 'light' ? TextareaFieldLightStyles : TextareaFieldRegularStyles}
`
export default StyledTextareaField