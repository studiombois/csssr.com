import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import cn from 'classnames'
import ContactModal from '../ContactModal'
import styles from './Covid19Content.styles'
import FloatButton from './FloatButton'
import FeatureBlock from './FeatureBlock'

const features = [
  {
    id: 'benefits-1',
    header: 'Let&nbsp;us speed up&nbsp;your project development with our team and experience',
    text:
      'Maybe right now your project is&nbsp;almost ready for release, but your team members have to&nbsp;keep social distancing so&nbsp;cannot complete&nbsp;it.',
  },
  {
    id: 'benefits-2',
    header: 'We&nbsp;can bring your business online right now',
    text:
      'This crisis is&nbsp;not only a&nbsp;time of&nbsp;hardship but also great opportunities for exponential growth. Perhaps it&nbsp;is&nbsp;the right time to&nbsp;launch your project. We&nbsp;would love to&nbsp;craft digital products, services, internal systems and ecosystems.',
  },
  {
    id: 'benefits-4',
    header: 'Let&nbsp;us optimize your web-service performance',
    text:
      'People are in&nbsp;a&nbsp;difficult situation, and the highest load Internet services are on&nbsp;the front line now and must stay stable and reliable.',
  },
  {
    id: 'benefits-5',
    header: 'We&nbsp;are ready to&nbsp;bring the costs down for any socially important projects',
    text:
      'Tell&nbsp;us why your project is&nbsp;important for society. We&nbsp;are all in&nbsp;the same boat now.',
  },
]

const Covid19Content = ({ className }) => {
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)
  const [hoveredImage, setHoveredImage] = useState(null)

  const handleButtonClick = (event) => {
    event.preventDefault()

    disablePageScroll(document.body)
    toggleContactModalVisibility(true)
  }

  const handleHideContactModal = () => {
    enablePageScroll(document.body)
    toggleContactModalVisibility(false)
  }

  return (
    <article className={className}>
      <Global
        styles={css`
          body,
          #main {
            background-color: #18191b;
          }
        `}
      />

      <FloatButton onClick={handleButtonClick} />

      <div className="greeting">
        <div className="grid">
          <div className="greeting-text">
            <h1 className="font-heading-1">
              The World Comes Apart Let’s <span className="font-color-blue">Stay Together</span>
            </h1>

            <div className="greeting-red-box">
              <img src={require('../../static/covid-19/icons/badge.svg').default} />
            </div>
          </div>

          <div className="greeting-image">
            <img
              srcSet={`${require('../../static/covid-19/greeting.png')} 1x, ${require('../../static/covid-19/greeting@2x.png')} 2x, ${require('../../static/covid-19/greeting@3x.png')} 3x`}
              src={require('../../static/covid-19/greeting.png')}
              alt="Greeting"
            />
          </div>

          <div className="greeting-image-mobile">
            <img
              srcSet={`${require('../../static/covid-19/greeting_mobile.png')} 1x, ${require('../../static/covid-19/greeting_mobile@2x.png')} 2x, ${require('../../static/covid-19/greeting_mobile@3x.png')} 3x`}
              src={require('../../static/covid-19/greeting_mobile.png')}
              alt="Greeting"
            />
          </div>
        </div>
      </div>

      <div className="crisis" id="crisis">
        <div className="grid">
          <h2 className="font-heading-2">How we can help</h2>
        </div>
      </div>

      <div className="benefits">
        <div className="grid">
          <p className="benefits-description">
            During the pandemic the web has become more important than ever. Almost everybody has
            to&nbsp;stay isolated at&nbsp;home, so&nbsp;the Internet has instantly become
            <span className="benefits-description-bold"> a&nbsp;global workplace </span>
            , the only way to&nbsp;communicate with other people and get goods and services.
            <br />
            <br />
            Our group of&nbsp;companies employs more than
            <span className="benefits-description-bold"> 150 professionals </span>
            in&nbsp;different countries and all of&nbsp;them have always been working remotely. For
            <span className="benefits-description-bold"> eight years </span>
            we&nbsp;have been building web services for various industries such{' '}
            <a href="https://csssr.com/en/industry/ecommerce" className="font-p-link no-wrap">
              e-commerce
            </a>
            ,{' '}
            <a href="https://csssr.com/en/industry/fintech" className="font-p-link">
              fintech
            </a>{' '}
            and{' '}
            <a href="https://csssr.com/en/industry/media-and-marketing" className="font-p-link">
              media
            </a>
            .
          </p>

          {features.map((feature) => (
            <FeatureBlock
              key={feature.id}
              id={feature.id}
              image={require(`../../static/covid-19/${feature.id}.png`)}
              imagesSet={`${require(`../../static/covid-19/${feature.id}.png`)} 1x, ${require(`../../static/covid-19/${feature.id}@2x.png`)} 2x, ${require(`../../static/covid-19/${feature.id}@3x.png`)} 3x`}
              header={feature.header}
              text={feature.text}
            />
          ))}

          {/* <!-- 5 Benefit --> */}
          <h3
            className="font-heading-5 benefit-3-title"
            onMouseOver={() => setHoveredImage(3)}
            onMouseOut={() => setHoveredImage(null)}
          >
            <a onClick={handleButtonClick}>
              We&nbsp;offer{' '}
              <span className="benefit-3-title-redbox">free remote work consulting</span> for
              companies from 20&nbsp;to&nbsp;200 employees
            </a>
          </h3>
          <div className="benefit-3-image">
            <img
              srcSet={`${require('../../static/covid-19/benefits-3.png')} 1x, ${require('../../static/covid-19/benefits-3@2x.png')} 2x, ${require('../../static/covid-19/benefits-3@3x.png')} 3x`}
              src={require('../../static/covid-19/benefits-3.png')}
              alt="Remote Work Consultancy"
            />
          </div>
          <p className="font-p-1 benefit-3-description">
            Remote work communication nets cannot appear out of&nbsp;nowhere in&nbsp;just a&nbsp;few
            weeks. It&nbsp;has to&nbsp;be&nbsp;developed and optimized for years! We&nbsp;have been
            in&nbsp;this business for more than 8&nbsp;years. We&nbsp;believe that our experience
            can help people these days so&nbsp;we&rsquo;ll be&nbsp;happy to&nbsp;share&nbsp;it.
          </p>
        </div>
      </div>

      {typeof window !== 'undefined' &&
        isContactModalVisible &&
        ReactDOM.createPortal(
          <ContactModal onClose={handleHideContactModal} pageName="covid19" />,
          document.getElementById('main'),
        )}
    </article>
  )
}

export default styled(Covid19Content)`
  ${styles}
`
