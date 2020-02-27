import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    display: flex;
  }

  .title {
    color: ${colors.secondary.darken100};
  }

  .address,
  .phone {
    color: ${colors.secondary.darken100};
    font-weight: normal;
  }

  .time {
    color: #7E8FA4;
  }

  .address-item:nth-child(3) .address {
    margin-top: ${calcRem(40)};
  }

  ${desktop.all} {
    .address {
      margin-top: ${calcRem(16)};
    }

    .phone {
      margin-top: ${calcRem(16)};
    }

    .time {
      margin-top: ${calcRem(16)};
    }

    .address-item {
      margin-top: ${calcRem(47)};
    }

    .address-item:nth-child(1) {
      margin-right: ${calcRem(58)};
    }

    .address-item:nth-child(2) {
      margin-right: ${calcRem(50)};
    }
  }

  ${tablet.all} {
    .address {
      margin-top: ${calcRem(16)};
    }

    .phone {
      margin-top: ${calcRem(8)};
    }

    .time {
      margin-top: ${calcRem(8)};
    }

    .address-item {
      margin-top: ${calcRem(31)};
    }

    .address-item:nth-child(1) {
      margin-right: ${calcRem(42)};
    }

    .address-item:nth-child(2) {
      margin-right: ${calcRem(38)};
    }
  }

  ${mobile.all} {
    & {
      flex-direction: column;
      align-items: center;
    }

    .title,
    .address,
    .phone,
    .time {
      width: 100%;
      text-align: center;
    }

    .address,
    .phone,
    .time {
      margin-top: ${calcRem(8)};
    }

    .address-item:not(:first-of-type) {
      margin-top: ${calcRem(32)};
    }

    .address-item:last-of-type {
      margin-top: ${calcRem(24)};
    }

    .address-item:nth-child(3) .address {
      margin-top: ${calcRem(0)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}
