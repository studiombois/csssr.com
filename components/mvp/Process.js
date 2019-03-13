import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import lottie from 'lottie-web'

class Process extends PureComponent {
  orbitsRef = React.createRef()
  sputnikRef = React.createRef()
  orbitsLottie = null
  sputnikLottie = null
  isSputnikMoved = false
  isOrbitsMoved = false

  static propTypes = {
    title: string,
  }

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
      this.sputnikLottie.play()
    }
  }

  componentDidMount() {
    this.orbitsLottie = lottie.loadAnimation({
      container: this.orbitsRef.current,
      renderer: 'canvas',
      autoplay: false,
      animationData: require('../../static/json/orbits.json'),
    })

    this.sputnikLottie = lottie.loadAnimation({
      container: this.sputnikRef.current,
      renderer: 'canvas',
      autoplay: false,
      animationData: require('../../static/json/sputnik.json'),
    })

    document.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { title } = this.props

    return (
      <Fragment>
        <section id='process'>
          <span className='orbits' ref={this.orbitsRef} />
          <span className='sputnik' ref={this.sputnikRef} />
          <div className='grid-container'>
            <h2>{title}</h2>
          </div>
        </section><style jsx>{`
          section {
            position: relative;
          }

          .orbits {
            position: absolute;
            display: block;
            top: 14rem;
            left: -16rem;
            width: 124rem;
          }

          .sputnik {
            position: absolute;
            display: block;
            top: -2rem;
            left: -8rem;
            right: -10rem;
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
            margin-top: 10.8rem;
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
              margin-top: 12.9rem;
            }

            .orbits {
              top: 14rem;
              left: -30rem;
              width: 126rem;
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
              margin-top: 8.7rem;
              width: 1232px;
              height: 82.1875rem;
            }

            h2 {
              margin-top: 13.1rem;
            }

            .orbits {
              top: 14rem;
              left: -32rem;
              width: 126rem;
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
              margin-top: 5.6rem;
              width: 944px;
              height: 68.125rem;
            }

            h2 {
              margin-top: 11.2rem;
              font-size: 1.5rem;
            }

            .orbits {
              top: 11rem;
              left: -29rem;
              width: 107rem;
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
              margin-top: 7.9rem;
              grid-column: 1 / span 6;
              font-size: 1.5rem;
            }

            .orbits {
              top: 13rem;
              left: -23rem;
              width: 54rem;
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

export default Process
