import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import css from 'styled-jsx/css'
import translate from '../../utils/translate-wrapper'
import Picture from '../Picture'

const rocketBody = isAssembled => css.resolve`
  picture {
    position: absolute;
    top: 35px;
    left: 405px;
    width: 342px;
    transform: rotate(${isAssembled ? '0' : '50deg'})
      translate(${isAssembled ? '0, 0' : '-110px, -100px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketDress = isAssembled => css.resolve`
  picture {
    position: absolute;
    top: 184px;
    left: 280px;
    width: 278px;
    transform: rotate(${isAssembled ? '0' : '39deg'})
      translate(${isAssembled ? '0, 0' : '-158px, -73px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketBlue = isAssembled => css.resolve`
  picture {
    position: absolute;
    top: 200px;
    left: 392px;
    width: 176px;
    transform: rotate(${isAssembled ? '0' : '75deg'})
      translate(${isAssembled ? '0, 0' : '105px, 56px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketArrow = isAssembled => css.resolve`
  picture {
    position: absolute;
    top: -11px;
    left: 581px;
    width: 227px;
    transform: rotate(${isAssembled ? '0' : '-30deg'})
      translate(${isAssembled ? '0, 0' : '-80px, 120px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketJet1 = isAssembled => css.resolve`
  picture {
    position: absolute;
    top: 436px;
    left: 337px;
    width: 201px;
    transform: rotate(${isAssembled ? '0' : '20deg'})
      translate(${isAssembled ? '0, 0' : '-33px, -241px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketJet2 = isAssembled => css.resolve`
  picture {
    position: absolute;
    top: 334px;
    left: 240px;
    width: 167px;
    transform: rotate(${isAssembled ? '0' : '33deg'})
      translate(${isAssembled ? '0, 0' : '30px, -30px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketJet3 = isAssembled => css.resolve`
  picture {
    position: absolute;
    top: 181px;
    left: 127px;
    width: 203px;
    transform: rotateZ(${isAssembled ? '0' : '98deg'})
      translate(${isAssembled ? '0, 0' : '-33px, -30px'});
    transition: transform 0.5s ease-out;
  }
`

const rocketBlack = isAssembled => css.resolve`
  picture {
    position: absolute;
    top: 103px;
    left: 521px;
    width: 146px;
    transform: rotate(${isAssembled ? '0' : '65deg'})
      translate(${isAssembled ? '0, 0' : '-40px, 40px'});
    transition: transform 0.5s ease-out;
  }
`

class Rocket extends PureComponent {
  static propTypes = {
    rocketBodyAlt: string,
    rocketDressAlt: string,
    rocketJetAlt: string,
    rocketDividerAlt: string,
    rocketArrowAlt: string,
  }

  rocketRef = React.createRef()

  state = {
    isAssembled: false,
  }

  handleScroll = () => {
    if (!this.rocketRef || !this.rocketRef.current) {
      return
    }
    const { isAssembled } = this.state
    const rocketRect = this.rocketRef.current.getBoundingClientRect()
    if (rocketRect.top < window.innerHeight / 2 && !isAssembled) {
      this.setState({ isAssembled: true })
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { isAssembled } = this.state
    const { t } = this.props
    return (
      <Fragment>
        <div ref={this.rocketRef}>
          <Picture
            className={rocketBody(isAssembled).className}
            image={{ namespace: 'mvp', key: 'red_block', alt: t('mvp:begin.imageAlt.rocketBody') }}
          />
          <Picture
            className={rocketDress(isAssembled).className}
            image={{
              namespace: 'mvp',
              key: 'yellow_block',
              alt: t('mvp:begin.imageAlt.rocketDress'),
            }}
          />
          <Picture
            className={rocketBlue(isAssembled).className}
            image={{
              namespace: 'mvp',
              key: 'blue_line',
              alt: t('mvp:begin.imageAlt.rocketDivider'),
            }}
          />
          <Picture
            className={rocketArrow(isAssembled).className}
            image={{
              namespace: 'mvp',
              key: 'yellow_arrow',
              alt: t('mvp:begin.imageAlt.rocketArrow'),
            }}
          />
          <Picture
            className={rocketJet1(isAssembled).className}
            image={{
              namespace: 'mvp',
              key: 'green_line_left',
              alt: t('mvp:begin.imageAlt.rocketJet'),
            }}
          />
          <Picture
            className={rocketJet2(isAssembled).className}
            image={{
              namespace: 'mvp',
              key: 'green_line_middle',
              alt: t('mvp:begin.imageAlt.rocketJet'),
            }}
          />
          <Picture
            className={rocketJet3(isAssembled).className}
            image={{
              namespace: 'mvp',
              key: 'green_line_right',
              alt: t('mvp:begin.imageAlt.rocketJet'),
            }}
          />
          <Picture
            className={rocketBlack(isAssembled).className}
            image={{
              namespace: 'mvp',
              key: 'black_line',
              alt: t('mvp:begin.imageAlt.rocketDivider'),
            }}
          />
        </div>
        <style jsx>{`
          div {
            display: inline-block;
            width: 880px;
            height: 664px;
            transform-origin: 0 0;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            div {
              transform: scale(0.745);
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            div {
              transform: scale(0.69);
            }
          }

          @media (min-width: 830px) and (max-width: 1279px) {
            div {
              transform: scale(0.53);
            }
          }

          @media (min-width: 768px) and (max-width: 829px) {
            div {
              margin-left: -2rem;
              transform: scale(0.53);
            }
          }

          @media (min-width: 500px) and (max-width: 767px) {
            div {
              position: absolute;
              left: 50%;
              margin-top: -2.375rem;
              transform-origin: 0 50%;
              transform: scale(0.43) translate(-50%, -50%);
            }
          }

          @media (max-width: 499px) {
            div {
              position: absolute;
              left: 50%;
              margin-top: 0.375rem;
              transform: scale(0.243) translateX(-50%);
            }
          }
        `}</style>
        {rocketBody(isAssembled).styles}
        {rocketDress(isAssembled).styles}
        {rocketBlue(isAssembled).styles}
        {rocketArrow(isAssembled).styles}
        {rocketJet1(isAssembled).styles}
        {rocketJet2(isAssembled).styles}
        {rocketJet3(isAssembled).styles}
        {rocketBlack(isAssembled).styles}
      </Fragment>
    )
  }
}

export default translate()(Rocket)
