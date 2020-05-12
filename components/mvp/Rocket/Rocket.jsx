import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles, {
  rocketArrow,
  rocketBlack,
  rocketBlue,
  rocketBody,
  rocketDress,
  rocketJet1,
  rocketJet2,
  rocketJet3,
} from './Rocket.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
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
    const {
      className,
      l10n: { translations },
    } = this.props
    return (
      <Fragment>
        <div className={className} ref={this.rocketRef}>
          <Picture
            css={rocketBody(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'red_block',
              alt: translations.mvp.begin.imgAlt.rocketBody,
            }}
          />
          <Picture
            css={rocketDress(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'yellow_block',
              alt: translations.mvp.begin.imgAlt.rocketDress,
            }}
          />
          <Picture
            css={rocketBlue(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'blue_line',
              alt: translations.mvp.begin.imgAlt.rocketDivider,
            }}
          />
          <Picture
            css={rocketArrow(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'yellow_arrow',
              alt: translations.mvp.begin.imgAlt.rocketArrow,
            }}
          />
          <Picture
            css={rocketJet1(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'green_line_left',
              alt: translations.mvp.begin.imgAlt.rocketJet,
            }}
          />
          <Picture
            css={rocketJet2(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'green_line_middle',
              alt: translations.mvp.begin.imgAlt.rocketJet,
            }}
          />
          <Picture
            css={rocketJet3(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'green_line_right',
              alt: translations.mvp.begin.imgAlt.rocketJet,
            }}
          />
          <Picture
            css={rocketBlack(isAssembled)}
            image={{
              namespace: 'mvp',
              key: 'black_line',
              alt: translations.mvp.begin.imgAlt.rocketDivider,
            }}
          />
        </div>
      </Fragment>
    )
  }
}

export default styled(L10nConsumer(Rocket))`
  ${styles}
`
