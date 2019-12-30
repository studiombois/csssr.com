import React from 'react'
import { string } from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Text from '../ui-kit/core-design/Text'
import Heading from '../ui-kit/core-design/Heading'
import SubHeading from '../ui-kit/core-design/SubHeading'
import Link from '../ui-kit/core-design/Link'
import Button from '../ui-kit/core-design/Button'
import AnimatedButton from '../ui-kit/core-design/AnimatedButton'
import TextFieldLight from '../ui-kit/core-design/TextFieldLight'
import TextFieldRegular from '../ui-kit/core-design/TextFieldRegular'
import TextareaLight from '../ui-kit/core-design/TextareaLight'
import TextareaRegular from '../ui-kit/core-design/TextareaRegular'
import Layout from '../Layout'

const MainPage = ({ className }) => (
  <div className={className}>
    <Layout>
      <Heading as="h3" type="slab" size="l">
        MainPage
      </Heading>
      <SubHeading>for new csssr.com design</SubHeading>

      <Text type="strong" size="m">
        We are an international IT company that specializes in front-end web development service and
        dreams of the stars.
        <Link href="https://csssr.com/en">Here is out old site</Link>
      </Text>
      <Button
        css={css`
          width: 200px;
        `}
      >
        Кнопка
      </Button>

      <Text type="strong" size="m">
        We are an international IT company that specializes in front-end web development service and
        dreams of the stars.
      </Text>
      <Button
        href="https://csssr.com/en"
        as="a"
        target="_blank"
        rel="noopener nofollow"
        css={css`
          width: 200px;
        `}
      >
        Ссылка
      </Button>

      <AnimatedButton
        status="submitting"
        css={css`
          margin-top: 24px;
          width: 200px;
        `}
      />
      <TextFieldLight
        css={css`
          display: block;
          width: 400px;
        `}
      />
      <TextFieldRegular
        css={css`
          display: block;
          width: 400px;
        `}
      />
      <TextareaLight
        css={css`
          display: block;
          width: 400px;
        `}
      />
      <TextareaRegular
        css={css`
          display: block;
          width: 400px;
        `}
      />
    </Layout>
  </div>
)

MainPage.propTypes = {
  className: string,
}

export default styled(MainPage)`
  code {
    background-color: ${props => props.theme.colors.secondary.origin};
  }
`
