import { css } from '@emotion/react'
import TextFieldLightStyles from '../styles/TextFieldLight.styles'
import TextFieldRegularStyles from '../styles/TextFieldRegular.styles'

const StyledTextField = props => css`
${props.kind === 'light' ? TextFieldLightStyles : TextFieldRegularStyles}
`
export default StyledTextField

