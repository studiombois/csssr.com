import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'
import getBackgroundImageSrcSet from '../../../../utils/style/getBackgroundImageSrcSet'

import mapRuDesktop from '../../../../static/images/contact-us/maps/desktop.all/map-ru.png?responsive'
import mapRuDesktop_webp from '../../../../static/images/contact-us/maps/desktop.all/map-ru.png?responsive_and_webp'
import mapEeDesktop from '../../../../static/images/contact-us/maps/desktop.all/map-ee.png?responsive'
import mapEeDesktop_webp from '../../../../static/images/contact-us/maps/desktop.all/map-ee.png?responsive_and_webp'
import mapSgDesktop from '../../../../static/images/contact-us/maps/desktop.all/map-sg.png?responsive'
import mapSgDesktop_webp from '../../../../static/images/contact-us/maps/desktop.all/map-sg.png?responsive_and_webp'

import mapRuTablet from '../../../../static/images/contact-us/maps/tablet.all/map-ru.png?responsive'
import mapRuTablet_webp from '../../../../static/images/contact-us/maps/tablet.all/map-ru.png?responsive_and_webp'
import mapEeTablet from '../../../../static/images/contact-us/maps/tablet.all/map-ee.png?responsive'
import mapEeTablet_webp from '../../../../static/images/contact-us/maps/tablet.all/map-ee.png?responsive_and_webp'
import mapSgTablet from '../../../../static/images/contact-us/maps/tablet.all/map-sg.png?responsive'
import mapSgTablet_webp from '../../../../static/images/contact-us/maps/tablet.all/map-sg.png?responsive_and_webp'

import mapRuMobile from '../../../../static/images/contact-us/maps/mobile.all/map-ru.png?responsive'
import mapRuMobile_webp from '../../../../static/images/contact-us/maps/mobile.all/map-ru.png?responsive_and_webp'
import mapEeMobile from '../../../../static/images/contact-us/maps/mobile.all/map-ee.png?responsive'
import mapEeMobile_webp from '../../../../static/images/contact-us/maps/mobile.all/map-ee.png?responsive_and_webp'
import mapSgMobile from '../../../../static/images/contact-us/maps/mobile.all/map-sg.png?responsive'
import mapSgMobile_webp from '../../../../static/images/contact-us/maps/mobile.all/map-sg.png?responsive_and_webp'


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
      background-size: cover !important;
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
  }

  ${mobile.all} {
    & {
      order: 1;
      width: 100%;
      height: ${calcRem(645)};
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
      top: 150px;
      left: 16px;
      display: flex;
    }
  }
`

export const backgroundImagesStyles = theme => {
  const { desktop, tablet, mobile } = theme.breakpoints
  return css`
    ${desktop.all} {
      ${getBackgroundImageSrcSet({png: mapRuDesktop, webp: mapRuDesktop_webp}, '.map-ru')};
      ${getBackgroundImageSrcSet({png: mapEeDesktop, webp: mapEeDesktop_webp}, `.map-ee`)};
      ${getBackgroundImageSrcSet({png: mapSgDesktop, webp: mapSgDesktop_webp}, `.map-sg`)};
    };


    ${tablet.all} {
      ${getBackgroundImageSrcSet({png: mapRuTablet, webp: mapRuTablet_webp}, `.map-ru`)};
      ${getBackgroundImageSrcSet({png: mapEeTablet, webp: mapEeTablet_webp}, `.map-ee`)};
      ${getBackgroundImageSrcSet({png: mapSgTablet, webp: mapSgTablet_webp}, `.map-sg`)};
    };

    ${mobile.all} {
      ${getBackgroundImageSrcSet({png: mapRuMobile, webp: mapRuMobile_webp}, `.map-ru`)};
      ${getBackgroundImageSrcSet({png: mapEeMobile, webp: mapEeMobile_webp}, `.map-ee`)};
      ${getBackgroundImageSrcSet({png: mapSgMobile, webp: mapSgMobile_webp}, `.map-sg`)};
    };
  `
}

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
