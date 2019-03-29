import React, { Fragment, PureComponent } from 'react'
import translate from '../../utils/translate-wrapper'

class Process extends PureComponent {
  orbitsRef = React.createRef()
  sputnikRef = React.createRef()
  orbitsLottie = null
  sputnikLottie = null
  isSputnikMoved = false
  isOrbitsMoved = false

  handleScroll = () => {
    if (!this.orbitsRef || !this.orbitsRef.current) {
      return
    }
    const solarRect = this.orbitsRef.current.getBoundingClientRect()
    const sputnikRect = this.sputnikRef.current.getBoundingClientRect()

    if (solarRect.top < window.innerHeight / 2 && !this.isOrbitsMoved) {
      this.isOrbitsMoved = true
      this.orbitsLottie.play()
    }

    if (sputnikRect.top < window.innerHeight / 2 && !this.isSputnikMoved) {
      this.isSputnikMoved = true
      this.sputnikLottie.setSpeed(0.6)
      this.sputnikLottie.play()
    }
  }

  componentDidMount() {
    const lottieWeb = import(/* webpackChunkName: "lottie" */ 'lottie-web/build/player/lottie_light.min')
    const orbits = import(/* webpackChunkName: "lottie" */ '../../static/lottie/orbits.json')
    const sputnik = import(/* webpackChunkName: "lottie" */ '../../static/lottie/sputnik.json')

    Promise.all([lottieWeb, orbits, sputnik]).then(([lottie, orbitsJson, sputnikJson]) => {
      this.orbitsLottie = lottie.loadAnimation({
        container: this.orbitsRef.current,
        renderer: 'svg',
        autoplay: false,
        animationData: orbitsJson,
        rendererSettings: {
          progressiveLoad: true,
        },
      })

      this.sputnikLottie = lottie.loadAnimation({
        container: this.sputnikRef.current,
        renderer: 'svg',
        autoplay: false,
        animationData: sputnikJson,
        rendererSettings: {
          progressiveLoad: true,
        },
      })
      this.handleScroll()
      document.addEventListener('scroll', this.handleScroll)
    })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { t } = this.props

    return (
      <Fragment>
        <section id='process'>
          <span className='orbits' ref={this.orbitsRef} />
          <span className='sputnik' ref={this.sputnikRef} />
          <div className='grid-container'>
            <h2>{t('mvp:process.title')}</h2>
          </div>
        </section><style jsx>{`
          section {
            position: relative;
          }

          .orbits {
            position: absolute;
            display: block;
            top: 11rem;
            left: 2rem;
            width: 90rem;
          }

          .sputnik {
            position: absolute;
            display: block;
            top: -2rem;
            left: -8rem;
            right: -34rem;
          }

          div {
            margin-top: 9.8rem;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
            height: 80rem;
          }

          h2 {
            grid-column: 2 / span 11;
            grid-row: 1;
            margin-top: 10.8125rem;
            font-size: 3rem;
            font-family: 'Roboto Slab', serif;
            font-weight: normal;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            div {
              margin-top: 9rem;
              width: 1328px;
              height: 82.1875rem;
            }

            h2 {
              margin-top: 12.875rem;
            }

            .orbits {
              top: 15rem;
              left: -11rem;
              width: 90rem;
            }

            .sputnik {
              top: -10rem;
              left: -36rem;
              right: auto;
              width: 155rem;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            div {
              margin-top: 8.6875rem;
              width: 1232px;
              height: 82.1875rem;
            }

            h2 {
              margin-top: 13.125rem;
            }

            .orbits {
              top: 14rem;
              left: -13rem;
              width: 90rem;
            }

            .sputnik {
              top: -7rem;
              left: -20rem;
              right: auto;
              width: 120rem;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            div {
              margin-top: 5.625rem;
              width: 944px;
              height: 68.125rem;
            }

            h2 {
              margin-top: 11.1875rem;
              font-size: 1.5rem;
            }

            .orbits {
              top: 12rem;
              left: -10rem;
              width: 72rem;
            }

            .sputnik {
              top: -7rem;
              left: -25rem;
              right: auto;
              width: 125rem;
            }
          }
          @media (max-width: 767px) {
            div {
              margin-top: 6rem;
              width: 20.5rem;
              height: 43.5625rem;
            }

            h2 {
              margin-top: 7.875rem;
              grid-column: 1 / span 6;
              font-size: 1.5rem;
            }

            .orbits {
              top: 14rem;
              left: -15rem;
              width: 38rem;
            }

            .sputnik {
              top: -1rem;
              left: -30rem;
              right: auto;
              width: 80rem;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default translate()(Process)