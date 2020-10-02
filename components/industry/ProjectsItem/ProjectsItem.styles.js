import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors,  breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    display: flex;
    flex-direction: column;
    text-decoration: none;

    &:hover .image {
      opacity: 0;
    }
  }

  .picture-wrapper {
    background-position: left;
    background-repeat: no-repeat;

    &_MOSOBLGAZ {
      background-image: url('/images/industry/ecommerce/cases/mosoblgaz_hover/desktop.l.png');
      background-size: 245px 160px;
    }

    &_Brusnika {
      background-image: url('/images/industry/ecommerce/cases/brusnika_hover/desktop.l.png');
      background-size: 301px 160px;
    }

    &_QAcademy {
      background-image: url('/images/industry/media-and-marketing/cases/qmarketing_hover/desktop.l.png');
      background-size: 257px 160px;
    }

    &_Mindbox {
      background-image: url('/images/industry/media-and-marketing/cases/mindbox_hover/desktop.l.png');
      background-size: 224px 160px;
    }

    &_Gazprom {
      background-image: url('/images/industry/information-technology/cases/gazprom_hover/desktop.l.png');
      background-size: 285px 160px;
    }

    &_S7Airlines {
      background-image: url('/images/industry/information-technology/cases/s7airlines_hover/desktop.l.png');
      background-size: 293.5px 160px;
    }
  }

  .image {
    max-width: ${calcRem(301)};
    height: ${calcRem(160)};

    & img {
      width: 100%;
      height: 100%;
    }
  }

  ${desktop.l} {
    .button {
      max-width: ${calcRem(272)};
    }

    .image {
      &_MOSOBLGAZ {
        width: ${calcRem(245)};
      }

      &_QAcademy {
        width: ${calcRem(257)};
      }

      &_Mindbox {
        width: ${calcRem(224)};
      }

      &_Gazprom {
        width: ${calcRem(286)};
      }

      &_S7Airlines {
        width: ${calcRem(294)};
      }
    }
  }

  .item-heading {
    max-width: ${calcRem(400)};
    margin-top: ${calcRem(24)};
    color: ${colors.secondary.darken100};
  }

  .numbers-wrapper {
    display: flex;
    margin-top: ${calcRem(15)};
  }

  .team,
  .duration,
  .separator {
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    font-weight: 500;
    color: #000000;
  }

  .separator {
    margin: 0 ${calcRem(18)};
  }

  ${desktop.m} {
    .picture-wrapper {
      &_Brusnika {
        background-image: url('/images/industry/ecommerce/cases/brusnika_hover/desktop.m.png');
        background-size: 280px 160px;
      }

      &_Gazprom {
        background-image: url('/images/industry/information-technology/cases/gazprom_hover/desktop.m.png');
        background-size: 272px 160px;
      }

      &_S7Airlines {
        background-image: url('/images/industry/information-technology/cases/s7airlines_hover/desktop.m.png');
        background-size: 269.5px 160px;
      }
    }

    .item-heading {
      max-width: ${calcRem(280)};
    }

    .image {
      max-width: ${calcRem(280)};

      &_Brusnika {
        width: ${calcRem(280)};
      }

      &_Gazprom {
        width: ${calcRem(272)};
      }

      &_S7Airlines {
        width: ${calcRem(270)};
      }

      &_MOSOBLGAZ {
        width: ${calcRem(245)};
      }

      &_Mindbox {
        width: ${calcRem(224)};
      }

      &_QAcademy {
        width: ${calcRem(257)};
      }
    }
  }

  ${desktop.s} {
    .picture-wrapper {
      &_Brusnika {
        background-image: url('/images/industry/ecommerce/cases/brusnika_hover/desktop.s.png');
        background-size: 280px 160px;
      }

      &_Gazprom {
        background-image: url('/images/industry/information-technology/cases/gazprom_hover/desktop.s.png');
        background-size: 272px 160px;
      }

      &_S7Airlines {
        background-image: url('/images/industry/information-technology/cases/s7airlines_hover/desktop.s.png');
        background-size: 269.5px 160px;
      }
    }

    .item-heading {
      max-width: ${calcRem(280)};
    }

    .image {
      max-width: ${calcRem(280)};

      &_Brusnika {
        width: ${calcRem(280)};
      }

      &_Mindbox {
        width: ${calcRem(225)};
      }

      &_MOSOBLGAZ {
        width: ${calcRem(245)};
      }

      &_Gazprom {
        width: ${calcRem(272)};
      }

      &_S7Airlines {
        width: ${calcRem(270)};
      }

      &_QAcademy {
        width: ${calcRem(257)};
      }
    }
  }

  ${tablet.all} {
    &:hover .image {
      opacity: 1;
    }

    .picture-wrapper {
      background-image: none;
    }

    .item-heading {
      max-width: ${calcRem(210)};
    }

    .image {
      max-width: ${calcRem(210)};

      &_MOSOBLGAZ {
        width: ${calcRem(181)};
      }

      &_Brusnika {
        width: ${calcRem(204)};
      }

      &_QAcademy {
        width: ${calcRem(190)};
      }

      &_Mindbox {
        width: ${calcRem(172)};
      }

      &_Gazprom {
        width: ${calcRem(202)};
      }

      &_S7Airlines {
        width: ${calcRem(200)};
      }
    }

    .numbers-wrapper {
      margin-top: ${calcRem(10)};
    }

    .team,
    .duration,
    .separator {
      font-size: ${calcRem(12)};
      line-height: ${calcRem(16)};
    }
  }

  ${mobile.all} {
    .picture-wrapper {
      background-image: none;
    }
    &:hover .image {
      opacity: 1;
    }

    .picture-wrapper {
      width: 100vw;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    .image {
      max-width: none;
      width: 100% !important;
      height: auto;
    }

    .item-heading {
      margin-top: ${calcRem(24)};
    }

    .numbers-wrapper {
      margin-top: ${calcRem(10)};
    }

    .separator {
      margin: 0 ${calcRem(13)};
    }

    .team,
    .duration,
    .separator {
      font-size: ${calcRem(12)};
      line-height: ${calcRem(16)};
      font-weight: bold;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ colors, breakpoints })}
  `
}
