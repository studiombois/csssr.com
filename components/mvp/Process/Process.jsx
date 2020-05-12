import React, { PureComponent } from 'react'
import styled from '@emotion/styled'
import styles from './Process.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

class Process extends PureComponent {
  planetsRef = React.createRef()
  sputnikRef = React.createRef()
  planetsLottie = null
  sputnikLottie = null
  isSputnikMoved = false
  isPlanetsMoved = false

  handleScroll = () => {
    if (!this.planetsRef || !this.planetsRef.current) {
      return
    }
    const planetsRect = this.planetsRef.current.getBoundingClientRect()
    const sputnikRect = this.sputnikRef.current.getBoundingClientRect()

    if (planetsRect.top < window.innerHeight / 2 && !this.isPlanetsMoved) {
      this.isPlanetsMoved = true
      this.planetsLottie.play()
    }

    if (sputnikRect.top < window.innerHeight / 2 && !this.isSputnikMoved) {
      this.isSputnikMoved = true
      this.sputnikLottie.setSpeed(0.6)
      this.sputnikLottie.play()
    }
  }

  componentDidMount() {
    const {
      l10n: { language },
    } = this.props
    const lottieWeb = import(
      /* webpackChunkName: "lottie" */ 'lottie-web/build/player/lottie_light.min'
    )
    const planets = import(
      /* webpackChunkName: "lottie" */ `../../../static/lottie/mvp/${language}/planets.json`
    )
    const sputnik = import(/* webpackChunkName: "lottie" */ '../../../static/lottie/sputnik.json')

    Promise.all([lottieWeb, planets, sputnik]).then(([lottie, planetsJson, sputnikJson]) => {
      this.planetsLottie = lottie.loadAnimation({
        container: this.planetsRef.current,
        renderer: 'svg',
        autoplay: false,
        animationData: planetsJson,
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
    const {
      className,
      l10n: { translations },
    } = this.props

    return (
      <section className={className} id="process">
        <span className="planets" ref={this.planetsRef} />
        <span className="sputnik" ref={this.sputnikRef} />
        <div className="grid-container">
          <h2>{translations.mvp.process.title}</h2>
        </div>
      </section>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Process)`
    ${styles}
  `),
)
