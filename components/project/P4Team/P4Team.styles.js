import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    grid-template-rows: max-content max-content max-content;
  }

  .team-breakdown {
    display: flex;
    flex-direction: column;
    grid-row: 1;
  }

  .description {
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
  }

  .image {
    grid-row: 1;
  }

  .team-title {
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
  }

  .tech-text {
    white-space: nowrap;
  }

  .tech-icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .tech-icon.slack-icon {
    background-image: url('../../../static/icons/project/team-breakdown/slack.svg');
  }

  .tech-icon.jira-icon {
    background-image: url('../../../static/icons/project/team-breakdown/jira.svg');
  }

  .tech-icon.confl-icon {
    background-image: url('../../../static/icons/project/team-breakdown/conf.svg');
  }

  ${desktop.all} {
    & {
      padding-top: 192px;
    }

    .team-breakdown {
      grid-column: 2 / span 5;
    }

    .description {
      margin-top: 40px;
      font-size: 32px;
      line-height: 48px;
    }

    .image {
      grid-column: 7 / span 5;
      margin-top: 70px;
    }

    .team-title {
      grid-column: 2 / span 4;
      font-size: 32px;
      line-height: 48px;
      
      &_account {
        margin-top: 56px;
      }

      &_project {
        margin-top: 104px;
      }
    }

    .tech-icon {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      margin-left: 5px;
    }

    .text-block {
      grid-column: 6 / span 5;

      &_account {
        margin-top: 64px;
      }

      &_project {
        margin-top: 112px;
      }
    }

    .team-text {
      &:not(:first-of-type) {
        margin-top: 32px;
      }
    }

  }

  ${desktop.l} {
    .image {
      max-height: 536px;
    }
  }

  ${desktop.m} {
    .description {
      margin-top: 32px;
    }

    .image {
      grid-column: 7 / span 6;
      margin-top: ${calcRem(102)};
      max-height: 400px;
    }
  }

  ${desktop.s} {
    .image {
      grid-column: 7 / span 6;
      margin-top: ${calcRem(102)};
      max-height: 368px;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(128)};
    }

    .heading {
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }

    .description {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(32)};
    }

    .team-breakdown {
      grid-column: 2 / span 5;
    }

    .image {
      grid-column: 7 / span 6;
      max-width: ${calcRem(464)};
      max-height: ${calcRem(213)};
      margin-top: ${calcRem(32)};
      margin-left: ${calcRem(-5)};
    }

    .team-title {
      grid-column: 2 / span 4;
      font-size: ${calcRem(24)};
      font-weight: normal;

      &_account {
        margin-top: ${calcRem(45)};
      }

      &_project {
        margin-top: ${calcRem(64)};
      }
    }

    .text-block {
      grid-column: 6 / span 5;

      &_account {
        margin-top: ${calcRem(53)};
      }

      &_project {
        margin-top: ${calcRem(72)};
      }
    }

    .team-text {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(16)};
      }
    }

    .tech-icon {
      width: ${calcRem(15)};
      height: ${calcRem(15)};
      margin-right: ${calcRem(5)};
      margin-left: ${calcRem(5)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(88)};
    }

    .team-breakdown {
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    .heading {
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }

    .description {
      margin-top: ${calcRem(24)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(32)};
    }

    .image {
      grid-column: 1 / span 6;
      grid-row: 2;
      max-width: 100%;
      max-height: ${calcRem(195)};
      margin-top: ${calcRem(8)};
    }

    .team-title {
      grid-column: 1 / span 6;
      font-size: ${calcRem(24)};
      font-weight: bold;

      &_account {
        margin-top: ${calcRem(64)};
      }

      &_project {
        margin-top: ${calcRem(64)};
      }
    }

    .text-block {
      grid-column: 1 / span 6;

      &_account {
        margin-top: ${calcRem(24)};
      }

      &_project {
        margin-top: ${calcRem(24)};
      }
    }

    .team-text {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
      font-weight: 300;

      &:not(:first-of-type) {
        margin-top: ${calcRem(16)};
      }
    }

    .tech-icon {
      width: ${calcRem(10)};
      height: ${calcRem(10)};
      margin-right: ${calcRem(2)};
      margin-left: ${calcRem(2)};
    }
  }
`

const ie11Styles = ({ breakpoints: { mobile }}) => css`
  & {
    -ms-grid-template-rows: max-content max-content;
  }

  .team-breakdown {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
  }

  .image {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  ${mobile.all} {
    .team-breakdown {
      position: relative;
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
