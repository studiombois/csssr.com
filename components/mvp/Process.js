import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import lottie from 'lottie-web'

class Process extends PureComponent {
  solarSystemRef = React.createRef()
  solarLottie = null

  static propTypes = {
    title: string,
  }

  state = {
    isMoved: false,
  }

  handleScroll = () => {
    if (!this.solarSystemRef || !this.solarSystemRef.current) {
      return
    }
    const { isMoved } = this.state
    const solarRect = this.solarSystemRef.current.getBoundingClientRect()
    if (solarRect.top < window.innerHeight / 3 && !isMoved) {
      this.setState({ isMoved: true })
      this.solarLottie.play()
    }
  }

  componentDidMount() {
    this.solarLottie = lottie.loadAnimation({
      container: this.solarSystemRef.current,
      renderer: 'canvas',
      autoplay: false,
      animationData: require('../../static/solarSystem/solarSystem.json'),
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
          <span className='solar-system' ref={this.solarSystemRef} />
          <div className='grid-container'>
            <h2>{title}</h2>
          </div>
        </section><style jsx>{`
          section {
            overflow: hidden;
            position: relative;
          }

          .solar-system {
            position: absolute;
            display: block;
            top: 8rem;
            left: -32rem;
            width: 170rem;
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

            .solar-system {
              top: 10rem;
              left: -44rem;
              width: 166rem;
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

            .solar-system {
              top: 10rem;
              left: -44rem;
              width: 166rem;
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

            .solar-system {
              top: 7rem;
              left: -35rem;
              width: 136rem;
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

            .solar-system {
              top: 13rem;
              left: -38rem;
              width: 81rem;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Process
