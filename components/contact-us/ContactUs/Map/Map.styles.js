import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const mapRu = require.context('../../../../public/images/contact-us/maps/map-ru?csssr-images')
const mapEe = require.context('../../../../public/images/contact-us/maps/map-ee?csssr-images')
const mapSg = require.context('../../../../public/images/contact-us/maps/map-sg?csssr-images')

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    position: relative;
    width: 41.25%;
    height: 100%;

    .map {
      top: 0;
      left: 0;
      z-index: -10000;
      position: fixed;
      width: 41.25%;
      height: 100vh;
      background-size: cover;
      background-position: center;
      background-color: #808080;
    }
  }


  .book-a-call {
    display: none;
  }

  ${desktop.all} {
    & {
      height: calc(100vh - 64px);
    }
  }

  ${tablet.all} {
    & {
      height: calc(100vh - 4rem);
    }

    .map {
      width: 41.4%;
    }
  }

  ${mobile.all} {
    & {
      order: 1;
      width: 100%;
      height: ${calcRem(645)};
      overflow-x: hidden;
    }

    &._ru {
      height: ${calcRem(716)};
    }

    .map {
      z-index: 1;
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .book-a-call {
      z-index: 2;
      position: absolute;
      top: ${calcRem(145)};
      left: ${calcRem(16)};
      display: flex;
    }
  }
`

export const backgroundImagesStyles = () => {
  return css`
    ${backgroundCssSmart('.map-ru', mapRu)}
    ${backgroundCssSmart('.map-ee', mapEe)}
    ${backgroundCssSmart('.map-sg', mapSg)}
  `
}

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
