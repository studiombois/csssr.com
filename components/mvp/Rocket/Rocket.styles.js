import { css } from '@emotion/core'

const base = css`
  & {
    display: inline-block;
    width: 880px;
    height: 664px;
    transform-origin: 0 0;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    & {
      transform: scale(0.745);
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      transform: scale(0.69);
    }
  }

  @media (min-width: 830px) and (max-width: 1279px) {
    & {
      transform: scale(0.53);
    }
  }

  @media (min-width: 768px) and (max-width: 829px) {
    & {
      margin-left: -2rem;
      transform: scale(0.53);
    }
  }

  @media (min-width: 500px) and (max-width: 767px) {
    & {
      position: absolute;
      left: 50%;
      margin-top: -2.375rem;
      transform-origin: 0 50%;
      transform: scale(0.43) translate(-50%, -50%);
    }
  }

  @media (max-width: 499px) {
    & {
      position: absolute;
      left: 50%;
      margin-top: 0.375rem;
      transform: scale(0.243) translateX(-50%);
    }
  }
`

const rocketBody = isAssembled => css`
  & {
    position: absolute;
    top: 35px;
    left: 405px;
    width: 342px;
    transform: rotate(${isAssembled ? '0' : '50deg'})
      translate(${isAssembled ? '0, 0' : '-110px, -100px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketDress = isAssembled => css`
  & {
    position: absolute;
    top: 184px;
    left: 280px;
    width: 278px;
    transform: rotate(${isAssembled ? '0' : '39deg'})
      translate(${isAssembled ? '0, 0' : '-158px, -73px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketBlue = isAssembled => css`
  & {
    position: absolute;
    top: 200px;
    left: 392px;
    width: 176px;
    transform: rotate(${isAssembled ? '0' : '75deg'})
      translate(${isAssembled ? '0, 0' : '105px, 56px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketArrow = isAssembled => css`
  & {
    position: absolute;
    top: -11px;
    left: 581px;
    width: 227px;
    transform: rotate(${isAssembled ? '0' : '-30deg'})
      translate(${isAssembled ? '0, 0' : '-80px, 120px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketJet1 = isAssembled => css`
  & {
    position: absolute;
    top: 436px;
    left: 337px;
    width: 201px;
    transform: rotate(${isAssembled ? '0' : '20deg'})
      translate(${isAssembled ? '0, 0' : '-33px, -241px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketJet2 = isAssembled => css`
  & {
    position: absolute;
    top: 334px;
    left: 240px;
    width: 167px;
    transform: rotate(${isAssembled ? '0' : '33deg'})
      translate(${isAssembled ? '0, 0' : '30px, -30px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketJet3 = isAssembled => css`
  & {
    position: absolute;
    top: 181px;
    left: 127px;
    width: 203px;
    transform: rotateZ(${isAssembled ? '0' : '98deg'})
      translate(${isAssembled ? '0, 0' : '-33px, -30px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketBlack = isAssembled => css`
  & {
    position: absolute;
    top: 103px;
    left: 521px;
    width: 146px;
    transform: rotate(${isAssembled ? '0' : '65deg'})
      translate(${isAssembled ? '0, 0' : '-40px, 40px'});
    transition: transform 0.5s ease-out;
  }
`

export {
  rocketBody,
  rocketDress,
  rocketBlue,
  rocketArrow,
  rocketJet1,
  rocketJet2,
  rocketJet3,
  rocketBlack,
}

export default css`
  ${base}
`
