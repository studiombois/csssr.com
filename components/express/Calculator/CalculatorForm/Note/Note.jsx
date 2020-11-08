import * as React from 'react'
import { node, object, oneOf, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Note.styles'
import Text from '../../../../ui-kit/core-design/Text'

const OriginNote = ({ className, children, dangerouslySetInnerHTML, testId }) => {
  return (
    <div className={className}>
      <Text
        className="note"
        type="regular"
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        data-testid={testId}
      >
        {children}
      </Text>
    </div>
  )
}

OriginNote.propTypes = {
  className: string,
  children: node,
  dangerouslySetInnerHTML: object,
  colorTheme: oneOf(['primary', '']),
}

OriginNote.defaultProps = {
  colorTheme: '',
}

const Note = styled(OriginNote)`
  ${styles.base}
`
OriginNote.propTypes = { className: string, content: string }

export { Note }
export default Note