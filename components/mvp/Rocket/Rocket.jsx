import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles, {
  rocketBody,
  rocketDress,
  rocketBlue,
  rocketArrow,
  rocketJet1,
  rocketJet2,
  rocketJet3,
  rocketBlack,
} from './Rocket.styles'
import translate from '../../../utils/translate-wrapper'
import Picture from '../../Picture'

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
    const { className, t } = this.props
    return (
      <Fragment>
        <div className={className} ref={this.rocketRef}>
          <Picture
            css={rocketBody(isAssembled)}
            image={{ namespace: 'mvp', key: 'red_block', alt: t('mvp:begin.imageAlt.rocketBody') }}
          />
          <Picture
            css={rocketDress(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'yellow_block',
              alt: t('mvp:begin.imageAlt.rocketDress'),
            }}
          />
          <Picture
            css={rocketBlue(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'blue_line',
              alt: t('mvp:begin.imageAlt.rocketDivider'),
            }}
          />
          <Picture
            css={rocketArrow(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'yellow_arrow',
              alt: t('mvp:begin.imageAlt.rocketArrow'),
            }}
          />
          <Picture
            css={rocketJet1(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'green_line_left',
              alt: t('mvp:begin.imageAlt.rocketJet'),
            }}
          />
          <Picture
            css={rocketJet2(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'green_line_middle',
              alt: t('mvp:begin.imageAlt.rocketJet'),
            }}
          />
          <Picture
            css={rocketJet3(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'green_line_right',
              alt: t('mvp:begin.imageAlt.rocketJet'),
            }}
          />
          <Picture
            css={rocketBlack(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'black_line',
              alt: t('mvp:begin.imageAlt.rocketDivider'),
            }}
          />
        </div>
      </Fragment>
    )
  }
}

export default styled(translate(Rocket))`
  ${styles}
`
