import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    position: absolute;
    top: ${calcRem(64)};
    left: 0;
    width: 100%;
    height: 0;
    order: 5;
    background-color: ${colors.secondary.darken100};
    overflow: hidden;
    will-change: height;
    transition: height 75ms ease-out;
  }

  &.visible {
    height: ${calcRem(240)};
  }

  .nav,
  .nav ul,
  .nav-item {
    height: 100%;
  }

  .nav {
    margin-left: auto;
    margin-right: auto;
    max-width: 1360px;

    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .title,
  .description {
    color: inherit;
    width: 100%;
  }

  .description {
    margin-top: ${calcRem(15)};
    width: calc(100% - ${calcRem(80)});
    font-size: ${calcRem(14)};
    line-height: ${calcRem(24)};
  }

  .nav_services_ru,
  .nav_howWeWork,
  .nav_industries {
    .nav-item {
      width: 50%;
    }

    .title {
      width: calc(100% - ${calcRem(43)});
    }
  }

  .nav_industries {
    padding-top: ${calcRem(36)};
    padding-bottom: ${calcRem(28)};

    .nav-item {
      padding-top: ${calcRem(28)};
      padding-bottom: ${calcRem(28)};
      height: auto;
    }

    .link {
      padding-top: 0;
    }

    .icon {
      top: ${calcRem(4)};
    }
  }

  .nav_services_ru,
  .nav_howWeWork {
    .icon {
      top: ${calcRem(68)};
    }

    .description {
      width: 55%;
    }
  }

  .nav_services_en {
    .nav-item {
      width: 33%;
    }

    .title {
      width: 50%;
    }
  }

  .link {
    position: relative;
    padding-top: ${calcRem(64)};
    padding-left: ${calcRem(88)};
    display: block;
    height: 100%;
    color: white;
    text-decoration: none;
  }

  .icon {
    position: absolute;
    top: ${calcRem(82)};
    left: ${calcRem(40)};
    width: ${calcRem(24)};
    transition: fill 100ms ease;

    path {
      stroke: white;
      transition: stroke 100ms ease;
    }
  }

  @media (pointer: fine) {
    .nav_howWeWork,
    .nav_industries {
      .link:hover {
        color: #5695ED;
      }

      .link:hover .icon path {
        stroke: #5695ED;
      }
    }

    .nav_services {
      .link:hover {
        color: #5695ED;
      }

      .link:hover .icon {
        fill: #5695ED;
      }

      .link:hover .icon path {
        stroke: #5695ED;
      }
    }
  }

  ${tablet.all} {
    .title {
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }

    .nav_services_ru,
    .nav_howWeWork {
      .description {
        width: calc(100% - ${calcRem(92)});
      }
    }
  }

  ${mobile.all} {
    & {
      top: 0;
      margin-bottom: ${calcRem(64)};
    }

    &.visible {
      position: static;
      height: auto;
    }

    .icon_back {
      margin-right: ${calcRem(8)};
      height: ${calcRem(12)};
    }

    .button_back {
      margin-top: ${calcRem(12)};
      display: flex;
      align-items: center;
      height: ${calcRem(48)};
      font-family: 'Roboto', 'Arial', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
      letter-spacing: ${calcRem(1.25)};
      text-transform: uppercase;
      color: #7E8FA4;
      background-color: transparent;
      border: none;
    }

    .nav ul {
      display: flex;
      flex-direction: column;
    }

    .link {
      padding-top: 0;
      padding-left: 0;
    }

    .title {
      margin-top: ${calcRem(8)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .description {
      margin-top: ${calcRem(6)};
      font-size: ${calcRem(12)};
      line-height: ${calcRem(16)};
    }

    .icon {
      position: static;
      width: ${calcRem(24)};
      height: ${calcRem(24)};
    }

    .nav_industries,
    .nav_howWeWork,
    .nav_services {
      .nav-item {
        width: 100%;
        height: auto;
      }

      .title,
      .description {
        width: 100%;
      }
    }

    .nav_services,
    .nav_howWeWork {
      ul {
        margin-top: ${calcRem(27)};
      }

      .nav-item {
        width: 100%;
        height: auto;
      }

      .nav-item:not(:first-of-type) {
        margin-top: ${calcRem(67)};
      }
    }

    .nav_industries {
      padding-top: ${calcRem(8)};

      .nav-item {
        padding-top: 0;
        padding-bottom: 0;
        width: 100%;
        height: auto;
      }

      .nav-item:not(:first-of-type) {
        margin-top: ${calcRem(20)};
      }

      .link {
        padding-top: ${calcRem(16)};
        padding-bottom: ${calcRem(16)};
        display: flex;
        align-items: center;
      }

      .title {
        margin-top: 0;
        margin-left: ${calcRem(24)};
      }

      .icon {
        width: ${calcRem(28)};
        height: ${calcRem(28)};
      }
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
