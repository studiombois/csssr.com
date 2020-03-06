import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

export default {
  base: props => {
    const breakpoints = props.theme.breakpoints
    const colors = props.theme.colors

    return css`
      padding-left: 14rem;

      ${breakpoints.desktop.s} {
        padding-left: 13rem;
      }

      ${breakpoints.tablet.all} {
        margin-bottom: 3rem;
        padding-left: 10rem;
      }

      ${breakpoints.mobile.all} {
        margin-bottom: 1.5rem;
        padding-top: ${calcRem(20)};
      }

      .wrapper {
        display: flex;

        &:not(:last-of-type) {
            margin-bottom: 3.75rem;
          }

        ${breakpoints.desktop.all} {
          &:not(:last-of-type):not(:first-of-type) {
            margin-bottom: ${calcRem(70)};
          }
        }

        ${breakpoints.tablet.all} {
          align-items: center;

          &:first-of-type {
            margin-bottom: 2.75rem;
          }
        }

        ${breakpoints.tablet.m} {
          &:first-of-type {
            margin-bottom: ${calcRem(44)};
          }
        }

        ${breakpoints.mobile.all} {
          &:not(:last-of-type) {
            margin-bottom:  2.1rem;
          }
        }
      }

      .heading {
        ${breakpoints.desktop.all} {
          margin-bottom: 5.5rem;
        }

        ${breakpoints.tablet.all} {
          margin-bottom: 3rem;
        }

        ${breakpoints.mobile.all} {
          margin-bottom: 3rem;
        }
      }

      .img-wrapper {
        align-self: center;
        margin-right: 1rem;

        ${breakpoints.tablet.all} {
          margin-bottom: ${calcRem(-10)};
        }

        ${breakpoints.mobile.all} {
          margin-right: 0.625rem;
        }
      }

      .picture {
        max-height: ${calcRem(96)};
        object-fit: contain;
      }

      .picture_1 {
        ${breakpoints.desktop.l} {
          width: ${calcRem(120)};
        }

        ${breakpoints.desktop.m} {
          width: ${calcRem(96)};
        }

        ${breakpoints.desktop.s} {
          width: ${calcRem(88)};
        }

        ${breakpoints.tablet.all} {
          width: ${calcRem(64)};
        }

        ${breakpoints.mobile.all} {
          width: ${calcRem(48)};
        }
      }

      .picture_2 {

        ${breakpoints.desktop.all} {
          margin-bottom: ${calcRem(50)}
        }

        ${breakpoints.desktop.l} {
          width: ${calcRem(272)};
        }

        ${breakpoints.desktop.m} {
          width: ${calcRem(208)};
        }

        ${breakpoints.desktop.s} {
          width: ${calcRem(192)};
        }

        ${breakpoints.tablet.all} {
          width: ${calcRem(144)};
        }

        ${breakpoints.mobile.all} {
          width: ${calcRem(48)};
        }
      }

      .picture_3 {
        ${breakpoints.desktop.all} {
          margin-top: ${calcRem(-7)};
        }

        ${breakpoints.desktop.l} {
          width: ${calcRem(424)};
        }

        ${breakpoints.desktop.m} {
          width: ${calcRem(320)};
        }

        ${breakpoints.desktop.s} {
          width: ${calcRem(296)};
        }

        ${breakpoints.tablet.all} {
          width: ${calcRem(224)};
        }

        ${breakpoints.mobile.all} {
          width: ${calcRem(48)};
        }
      }

      .picture_4 {
        ${breakpoints.desktop.all} {
          margin-top: ${calcRem(-7)};
        }


        ${breakpoints.desktop.l} {
          width: ${calcRem(576)};
        }

        ${breakpoints.desktop.m} {
          width: ${calcRem(432)};
        }

        ${breakpoints.desktop.s} {
          width: ${calcRem(400)};
        }

        ${breakpoints.tablet.all} {
          width: ${calcRem(304)};
        }

        ${breakpoints.mobile.all} {
          width: ${calcRem(48)};
        }
      }

      .picture_5 {
        ${breakpoints.desktop.all} {
          margin-top: ${calcRem(-7)};
        }

        ${breakpoints.desktop.l} {
          width: ${calcRem(728)};
        }

        ${breakpoints.desktop.m} {
          width: ${calcRem(544)};
        }

        ${breakpoints.desktop.s} {
          width: ${calcRem(504)};
        }

        ${breakpoints.tablet.all} {
          margin-top: ${calcRem(-30)};
          width: ${calcRem(384)};
        }

        ${breakpoints.mobile.all} {
          width: ${calcRem(48)};
        }
      }

      .text {
        margin: 0;

        ${breakpoints.desktop.all} {
          margin-top: -0.5625rem;
        }

        ${breakpoints.desktop.l} {
          width: ${calcRem(576)};
        }

        ${breakpoints.desktop.m} {
          width: ${calcRem(432)};
        }

        ${breakpoints.desktop.s} {
          width: ${calcRem(400)};
        }

        ${breakpoints.tablet.all} {
          margin-bottom: ${calcRem(27)};
          width: ${calcRem(304)};
        }

        ${breakpoints.mobile.all} {
          width: ${calcRem(272)};
        }
      }

      .text_1 {
        ${breakpoints.desktop.l} {
          width: ${calcRem(880)};
        }

        ${breakpoints.desktop.m} {
          width: ${calcRem(656)};
        }

        ${breakpoints.desktop.s} {
          width: ${calcRem(608)};
        }

        ${breakpoints.tablet.all} {
          width: ${calcRem(384)};
        }

        ${breakpoints.mobile.all} {
          margin-top: 1rem;
        }
      }

      .text_2 {
        ${breakpoints.desktop.m} {
          width: ${calcRem(425)};
        }

        ${breakpoints.tablet.all} {
          margin-bottom: 0;
        }
      }

      .text_3,
      .text_4,
      .text_5 {
        ${breakpoints.mobile.all} {
          margin-top: 1rem;
        }
      }

      .wrapper a {
        padding: 0 0.3125rem;
        display: inline-block;
        height: auto;
        width: auto;
        font-size: inherit;
        line-height: 1.75rem;
        font-weight: inherit;
        text-transform: none;
        color: white;
        background-color: ${colors.primary.origin};
      }
    `
  },
}
