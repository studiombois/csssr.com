import { css } from '@emotion/core'
import TextareaFieldLightStyles from '../styles/TextareaFieldLight.styles'
import TextareaFieldRegularStyles from '../styles/TextareaFieldRegular.styles'

export default props => css`
  ${props.kind === 'light' ? TextareaFieldLightStyles : TextareaFieldRegularStyles}
`