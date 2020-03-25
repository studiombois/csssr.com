import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors, lng }) => css`
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
  
  .phone {
    display: block;
  }

  @media (hover: hover) and (pointer: fine) {
    .phone:hover {
      color: #0254D8;
    }
  }

  .time,
  .status {
    color: #7E8FA4;
  }

  ${desktop.all} {
    .address {
      margin-top: ${calcRem(16)};
    }

    .phone {
      margin-top: ${calcRem(8)};
    }

    .time,
    .status {
      margin-top: ${calcRem(8)};
    }

    .address-item {
      margin-top: ${calcRem(47)};
    }

    .address-item:nth-of-type(1) {
      margin-right: ${calcRem(80)};
    }

    .address-item:nth-of-type(2) {
      margin-right: ${calcRem(40)};
    }

    .address-item:nth-of-type(3) {
      margin-top: ${calcRem(80)};
      margin-right: ${calcRem(80)};
    }

    .address-item:nth-of-type(3) .address {
      margin-top: ${calcRem(0)};
    }
  }

  ${tablet.all} {
    .address {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(12)};
      line-height: ${calcRem(16)};
    }

    .phone {
      margin-top: ${calcRem(8)};
      font-size: ${calcRem(12)};
      line-height: ${calcRem(24)};
    }

    .time {
      font-size: ${calcRem(12)};
      line-height: ${calcRem(16)};
    }

    .time,
    .status {
      margin-top: ${calcRem(8)};
    }

    .address-item {
      margin-top: ${calcRem(31)};
    }

    .address-item:nth-of-type(1) {
      margin-right: ${lng === 'ru' ? calcRem(25) : calcRem(42)};
    }

    .address-item:nth-of-type(2) {
      margin-right: ${calcRem(25)};
    }

    .address-item:nth-of-type(3) {
      margin-top: ${calcRem(72)};
      margin-right: ${lng === 'ru' ? calcRem(25) : calcRem(42)};
    }

    .address-item:nth-of-type(3) .address {
      margin-top: ${calcRem(0)};
    }
  }

  ${mobile.all} {
    & {
      flex-direction: column;
      align-items: center;
    }

    .phone {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .title,
    .address,
    .phone,
    .time,
    .status {
      width: 100%;
      text-align: center;
    }

    .address,
    .phone,
    .time {
      margin-top: ${calcRem(8)};
    }

    .status {
      margin-top: ${calcRem(12)};
    }

    .address-item:not(:first-of-type) {
      margin-top: ${calcRem(24)};
    }

    .address-item:last-of-type {
      margin-top: ${calcRem(24)};
    }

    .address-item:nth-of-type(3) .address {
      margin-top: ${calcRem(0)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const { lng } = props

  return css`
    ${base({ breakpoints, colors, lng })}
  `
}
