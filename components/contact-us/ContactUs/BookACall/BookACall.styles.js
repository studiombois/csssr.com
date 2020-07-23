import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, above }, colors }) => css`
  & {
    position: relative;
    display: flex;
  }

  .manager-avatar {
    width: ${calcRem(76)};
    height: ${calcRem(76)};
  }

  .manager-name,
  .reservation-heading {
    font-weight: 500;
    font-size: ${calcRem(14)};
    line-height: ${calcRem(24)};
  }

  .manager-position,
  .reservation-time {
    font-weight: normal;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(16)};
  }

  .email {
    font-weight: 500;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(32)};
    text-decoration-line: underline;
    color: ${colors.primary.origin};
  }

  .reservation-description {
    font-weight: 500;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(16)};
    color: ${colors.secondary.gray};
  }

  .manager-name,
  .manager-position,
  .reservation-heading,
  .reservation-time,
  .email,
  .reservation-description,
  .counter {
    font-family: Roboto;
    font-style: normal;
  }

  .manager-name,
  .manager-position,
  .reservation-heading,
  .reservation-time {
    color: ${colors.secondary.darken100};
  }

  .counter {
    position: absolute;
    font-weight: 500;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.gray};
  }

  .button {
    padding-right: ${calcRem(27)};
    padding-left: ${calcRem(27)};
    width: auto;
  }

  ${above.mobile} {
    & {
      padding-bottom: ${calcRem(80)};
      flex-direction: column;
      align-items: center;
      width: ${calcRem(260)};
    }

    &.call_was_booked {
      padding-bottom: ${calcRem(86)};
    }

    .reservation,
    .manager {
      text-align: center;
    }

    .manager-name,
    .reservation-heading {
      margin-top: ${calcRem(12)};
    }

    .email {
      margin-top: ${calcRem(10)};
    }

    .manager-name,
    .manager-position,
    .reservation-heading,
    .reservation-time,
    .email,
    .reservation-description {
      text-align: center;
    }

    .reservation-description  {
      margin-top: ${calcRem(4)};
    }

    .button {
      position: absolute;
      bottom: 0;
    }

    .success-icon_small {
      position: absolute;
      bottom: 0;
      margin-top: ${calcRem(62)};
      width: ${calcRem(40)};
      height: ${calcRem(40)};
    }

    .counter {
      bottom: ${calcRem(8)};
      left: calc(50% + ${calcRem(32)});
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(32)};
      padding-right: ${calcRem(12)};
      padding-bottom: ${calcRem(56)};
      padding-left: ${calcRem(24)};
      flex-direction: row;
      flex-wrap: wrap;
      width: ${calcRem(328)};
      background-color: white;
    }

    .reservation,
    .manager {
      width: ${calcRem(200)};
    }

    .manager-avatar,
    .success-icon_big {
      margin-right: ${calcRem(16)};
    }

    .manager-name,
    .reservation-heading {
      line-height: ${calcRem(16)};
    }

    .manager-position,
    .reservation-time {
      margin-top: ${calcRem(4)};
    }

    .email {
      margin-top: ${calcRem(4)};
    }

    .reservation-description  {
      margin-top: ${calcRem(6)};
    }

    .button {
      position: absolute;
      bottom: 0;
      left: 0;
      height: ${calcRem(40)};
      width: 100%;
    }

    .success-icon_small {
      display: none;
    }

    .success-icon_big {
      width: ${calcRem(76)};
      height: ${calcRem(76)};
    }

    .counter {
      top: ${calcRem(32)};
      right: ${calcRem(12)};
      line-height: ${calcRem(16)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .email:hover {
      color: ${colors.primary.darken15};
    }
  }
`

export default (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
