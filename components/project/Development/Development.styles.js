import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  .description {
    font-family: 'Roboto Slab', serif;
  }

  .paragraph {
    font-weight: normal;
  }

  .features-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .feature-item {
    display: flex;
    align-items: center;
  }

  .feature-text {
    font-weight: bold;
  }

  .tech-icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    vertical-align: middle;

    &_react {
      background-image: url('../../../static/icons/project/development/react-icon.svg');
    }

    &_nextjs {
      background-image: url('../../../static/icons/project/development/nextjs-icon.svg');
    }
  }

  ${desktop.all} {
    & {
      padding-top: 152px;
    }

    .heading {
      grid-column: 2 / span 4;
    }

    .text-wrapper {
      grid-column: 2 / span 8;
      margin-top: 40px;
    }

    .paragraph {
      font-size: 24px;
      line-height: 40px;
      font-weight: normal;

      &:not(:first-of-type) {
        margin-top: 24px;
      }
    }

    .tech-icon {
      margin-right: 4px;

      &_react {
        width: 34px;
        height: 30px;
      }

      &_nextjs {
        width: 24px;
        height: 34px;
      }
    }

    .description {
      grid-column: 3 / span 6;
      margin-top: 104px;
      font-size: 32px;
      line-height: 48px;
    }

    .features-wrapper {
      grid-column: 3 / span 8;
      margin-top: 83px;
    }

    .feature-item {
      &:last-of-type,
      &:nth-of-type(3) {
        margin-top: 96px;
      }

      &:nth-of-type(even) {
        margin-left: 60px;
      }
    }

    .feature-icon {
      width: 96px;
      height: 96px;
      margin-right: 16px;
    }

    .feature-text {
      max-width: 436px;
      font-size: 24px;
      line-height: 40px;
    }
  }

  ${desktop.l} {
    .description {
      margin-left: 5px;
    }
  }

  ${desktop.m} {
    .features-wrapper {
      grid-column: 3 / span 10;
      margin-top: 70px;
    }

    .feature-item {
      &:last-of-type,
      &:nth-of-type(3) {
        margin-top: 72px;
      }

      &:nth-of-type(even) {
        margin-left: 106px;
      }

      &_deployment {
        margin-top: 32px;
      }
    }

    .feature-text {
      max-width: 342px;

      &_chat {
        max-width: 343px;
      }
    }
  }

  ${desktop.s} {
    .features-wrapper {
      grid-column: 3 / span 9;
      margin-top: 70px;
    }

    .description {
      grid-column: 3 / span 7;
    }

    .feature-item {
      &:last-of-type,
      &:nth-of-type(3) {
        margin-top: 72px;
      }

      &:nth-of-type(even) {
        margin-left: 120px;
      }

      &_deployment {
        margin-top: 32px;
      }
    }

    .feature-text {
      max-width: 288px;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(112)};
    }

    .heading {
      grid-column: 2 / span 4;
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }

    .text-wrapper {
      grid-column: 2 / span 8;
      margin-top: ${calcRem(16)};
    }

    .paragraph {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
      font-weight: normal;

      &:not(:first-of-type) {
        margin-top: ${calcRem(16)};
      }
    }

    .tech-icon {
      margin-right: ${calcRem(4)};

      &_react {
        width: ${calcRem(21)};
        height: ${calcRem(19)};
      }

      &_nextjs {
        width: ${calcRem(16)};
        height: ${calcRem(23)};
      }
    }

    .description {
      grid-column: 3 / span 6;
      max-width: ${calcRem(461)};
      margin-top: ${calcRem(64)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(32)};
    }

    .features-wrapper {
      grid-column: 3 / span 9;
      margin-top: ${calcRem(48)};
    }

    .feature-item {
      &:last-of-type,
      &:nth-of-type(3) {
        margin-top: ${calcRem(36)};
      }

      &:nth-of-type(even) {
        margin-left: ${calcRem(96)};
      }
    }

    .feature-icon {
      width: ${calcRem(64)};
      height: ${calcRem(64)};
      margin-right: ${calcRem(16)};
    }

    .feature-text {
      max-width: ${calcRem(224)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(88)};
    }

    .heading {
      grid-column: 1 / span 6;
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }

    .text-wrapper {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(24)};
    }

    .paragraph {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(9)};
      }
    }

    .tech-icon {
      margin-right: ${calcRem(1)};

      &_react {
        width: ${calcRem(18)};
        height: ${calcRem(16)};
      }

      &_nextjs {
        width: ${calcRem(15)};
        height: ${calcRem(20)};
      }
    }

    .description {
      grid-column: 1 / span 6;
      max-width: ${calcRem(461)};
      margin-top: ${calcRem(32)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(32)};
    }

    .features-wrapper {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(56)};
    }

    .feature-item {
      &:not(:first-of-type) {
        margin-top: ${calcRem(56)};
      }
    }

    .feature-icon {
      width: ${calcRem(96)};
      height: ${calcRem(96)};
    }

    .feature-text {
      max-width: ${calcRem(224)};
      padding-left: ${calcRem(16)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }
  }
`


export default props => {
  const breakpoints = props.theme.breakpoints
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, language })}
  `
}
