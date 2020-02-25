import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = css`
  & {
    position: relative;
    padding-top: 13.5rem;
  }

  header,
  h2,
  p {
    grid-column: 8 / span 5;
  }

  h1 {
    width: 100%;
  }

  h1 span {
    padding-top: 1rem;
    display: block;
  }

  h2 {
    margin-top: 1.5625rem;
  }

  h2 + p {
    margin-top: 1rem;
  }

  p + p {
    margin-top: 1rem;
  }

  ul {
    margin-top: 2rem;
    grid-column: 8 / span 5;
  }

  li {
    margin-bottom: 1rem;
  }

  .half-page-picture {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(50vw - 1rem);
    background-image: url('${require('../../../static/images/jobs/1920/cover@1x.jpg')}');
    background-position: 50%;
    background-size: auto 100%;
    overflow: hidden;
  }

  .hunter-text {
    margin-top: 10.75rem;
    grid-column: 9 / span 3;
    grid-row: 14;
  }

  .faq-text {
    margin-top: 6.5rem;
    grid-column: 8 / span 2;
    grid-row: 13;
    font-weight: 900;
  }

  .faq-text a {
    margin-top: 0.5rem;
    text-decoration: underline;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
  }

  .hunter-text-inner {
    white-space: nowrap;
  }

  :global(#main) {
    position: relative;
  }

  .font_link-list_16 {
    display: inline-block;
    text-decoration: none;
  }

  .hot-vacancy {
    position: relative;
  }

  .hot-vacancy::before {
    content: '🔥';
    position: absolute;
    top: 0.125rem;
    left: -2rem;
    display: inline-block;
    text-decoration: none;
  }

  @media (min-width: 1920px) {
    .font_subhead-regular {
      max-width: 37.5rem;
    }
  }

  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    .half-page-picture {
      background-image: url('${require('../../../static/images/jobs/1920/cover@2x.jpg')}');
    }
  }

  @media
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (min-resolution: 288dpi),
  only screen and (min-resolution: 3dppx) {
    .half-page-picture {
      background-image: url('${require('../../../static/images/jobs/1920/cover@3x.jpg')}');
    }
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .half-page-picture {
      width: calc(50vw - 0.5rem);
    }

    .hunter-text {
      grid-column: 9 / span 4;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .half-page-picture {
      width: calc(50vw - 0.5rem);
    }

    .hunter-text {
      grid-column: 9 / span 4;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      padding-top: 9.875rem;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 3.5rem;
    }

    h1 span {
      padding-top: 2rem;
    }

    ul {
      margin-top: 1.625rem;
    }

    h2 {
      margin-top: 1.4375rem;
      padding-bottom: 0;
    }

    h2 + p,
    p + p {
      padding-bottom: 0rem;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    h2 + p {
      margin-top: 0.5625rem;
    }

    p + p {
      margin-top: 0.5rem;
    }

    .font_link-list_24 {
      margin-top: 0rem;
      padding-bottom: 0rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .hot-vacancy::before {
      top: 0;
      left: -1.5rem;
    }

    .faq-text,
    .hunter-text {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .faq-text {
      grid-column: 8 / span 3;
    }

    .hunter-text {
      grid-column: 9 / span 5;
      margin-top: 11.8125rem;
    }

    .font_link-list_16 {
      font-size: 1em;
      line-height: 1.5rem;
    }

    .font_link-list_16::after {
      bottom: 0.625rem;
      right: -0.375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .half-page-picture {
      width: calc(50vw - 0.5rem);
      background-image: url('${require('../../../static/images/jobs/1024/cover@1x.jpg')}');
    }
  }

  @media
  screen and (min-width: 768px) and (max-width: 1023px),
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    .half-page-picture {
      background-image: url('${require('../../../static/images/jobs/1024/cover@2x.jpg')}');
    }
  }

  @media
  screen and (min-width: 768px) and (max-width: 1023px),
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (min-resolution: 288dpi),
  only screen and (min-resolution: 3dppx) {
    .half-page-picture {
      background-image: url('${require('../../../static/images/jobs/1024/cover@3x.jpg')}');
    }
  }

  @media (max-width: 767px) {
    & {
      position: relative;
      margin-top: 15.5rem;
      padding-top: 5.5rem;
      width: 20.5rem;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: 0;
      top: 0;
      left: -1rem;
      display: block;
      width: 100vw;
      height: 100%;
      background-color: white;
    }

    &::after {
      position: fixed;
      left: 0;
      right: 0;
      z-index: -2;
      bottom: 0;
      content: '';
      display: block;
      height: 80vh;
      background-color: white;
    }

    &.hide-fixed-image::after {
      z-index: -1;
    }

    h1 span {
      padding-top: 2.375rem;
      display: block;
    }

    header,
    h2,
    p,
    ul {
      position: relative;
      grid-column: 1 / span 6;
    }

    header {
      position: relative;
    }

    h2 {
      margin-top: 1.375rem;
      padding-bottom: 0;
    }

    h2 + p {
      margin-top: 1.0625rem;
      padding-bottom: 0;
    }

    p + p {
      margin-top: 0.5rem;
    }

    ul {
      margin-top: 1.625rem;
      padding-left: 1.5rem;
    }

    .font_p16-regular,
    .font_link-list_16 {
      margin-top: 0;
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .font_link-list_24 {
      margin-top: 0rem;
      padding-bottom: 0rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .hot-vacancy::before {
      top: 0;
      left: -1.25rem;
    }

    .faq-text  {
      margin-top: 4.5rem;
      grid-column: 1 / span 4;
    }

    .hunter-text {
      margin-top: 4.8125rem;
      grid-column: 2 / span 5;
    }

    .half-page-picture {
      width: 100vw;
      height: 15.5rem;
      background-image: url('${require('../../../static/images/jobs/360/cover@1x.jpg')}');
    }
  }

  @media
  screen and (max-width: 767px),
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    .half-page-picture {
      background-image: url('${require('../../../static/images/jobs/360/cover@2x.jpg')}');
    }
  }

  @media
  screen and (max-width: 767px),
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (min-resolution: 288dpi),
  only screen and (min-resolution: 3dppx) {
    .half-page-picture {
      background-image: url('${require('../../../static/images/jobs/360/cover@3x.jpg')}');
    }
  }
`

const ie11Styles = css`
  & header {
    -ms-grid-row: 1;
  }

  & ul {
    -ms-grid-row: 2;
  }

  & picture:nth-of-type(1) {
    -ms-grid-row: 4;
  }

  & h2:nth-of-type(1) {
    -ms-grid-row: 5;
  }

  & p:nth-of-type(1) {
    -ms-grid-row: 7;
  }

  & picture:nth-of-type(2) {
    -ms-grid-row: 8;
  }

  & h2:nth-of-type(2) {
    -ms-grid-row: 10;
  }

  & p:nth-of-type(2) {
    -ms-grid-row: 11;
  }

  & picture:nth-of-type(3) {
    -ms-grid-row: 12;
  }

  & h2:nth-of-type(3) {
    -ms-grid-row: 13;
  }

  & p:nth-of-type(3) {
    -ms-grid-row: 14;
  }

  & p:nth-of-type(4) {
    -ms-grid-row: 15;
  }

  & picture:nth-of-type(4) {
    -ms-grid-row: 16;
  }

  & p:nth-of-type(5) {
    -ms-grid-row: 16;
  }

  & picture:nth-of-type(5) {
    -ms-grid-row: 17;
  }

  & p:nth-of-type(6) {
    -ms-grid-row: 17;
  }

  header,
  h2,
  p {
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
  }

  .hot-vacancy::before {
    content: '🔥';
    color: orange;
    height: 28px;
    overflow: hidden;
  }

  ul {
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
  }

  .hunter-text {
    -ms-grid-column: ${getGridValueForMs(9)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
    -ms-grid-row: 14;
  }

  .faq-text {
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
    -ms-grid-row: 13;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .hunter-text {
      -ms-grid-column: ${getGridValueForMs(9)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .hunter-text {
      -ms-grid-column: ${getGridValueForMs(9)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .faq-text {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .hunter-text {
      -ms-grid-column: ${getGridValueForMs(9)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }
`

const pictureStyles = css`
  & {
    grid-column: 8 / span 2;
    margin-top: 5.5rem;
  }

  & {
    display: block;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
  }

  &:nth-of-type(3) {
    -ms-grid-row: 3;
  }

  &:nth-of-type(6) {
    -ms-grid-row: 6;
  }

  &:nth-of-type(9) {
    -ms-grid-row: 9;
  }

  &:first-of-type {
    margin-top: 6rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      margin-top: 3.5rem;
    }

    &:first-of-type {
      margin-top: 6.5rem;
    }
  }

  @media (max-width: 767px) {
    & {
      position: relative;
      grid-column: 1 / span 3;
      margin-top: 3.5625rem;
    }

    &:first-of-type {
      margin-top: 3.5625rem;
    }
  }
`

const pictureFaqStyles = css`
  & {
    grid-column: 8 / span 5;
    grid-row: 13;
    margin-top: 3.5rem;
  }

  & {
    display: block;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 13;
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    img {
      width: auto;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 33%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      object-position: calc(100% + 6.5rem);
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    img {
      width: 125%;
      max-width: none;
      height: auto;
      object-position: unset;
    }
  }

  @media (max-width: 767px) {
    & {
      position: relative;
      grid-column: 1 / span 6;
      margin-top: 1.5rem;
      height: 100%;
      max-height: 8.75rem;
    }

    img {
      width: auto;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 40%;
    }
  }
`

const pictureHunterStyles = css`
  & {
    grid-column: 8 / span 1;
    grid-row: 14;
    margin-top: 10.75rem;
  }

  & {
    display: block;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(1)};
    -ms-grid-row: 14;
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      margin-top: 11.375rem;
    }
  }

  @media (max-width: 767px) {
    & {
      position: relative;
      margin-top: 4.8125rem;
      grid-column: 1 / span 1;
    }

    img {
      width: 3rem;
    }
  }
`

export {
  pictureStyles,
  pictureFaqStyles,
  pictureHunterStyles,
}

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
