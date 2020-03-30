import React from 'react'
import styled from '@emotion/styled'
import styles from './Covid19.styles'
import { Global, css } from '@emotion/core'

const Covid19Content = ({ className }) => (
  <article className={className}>
    <Global
      styles={css`
        body,
        #main {
          background-color: #18191b;
        }
      `}
    />
    <div className="greeting">
      <div className="grid">
        <h1 className="font-heading-1">
          The World Comes Apart Let’s <span className="font-color-blue">Stay Together</span>
        </h1>

        <div className="greeting-red-box">
          <div className="greeting-red-rectangle">
            <img src={require('../../static/covid-19/icons/virus.svg').default} />
            <p className="greeting-red-text">COVID-19</p>
          </div>
          <p className="greeting-red-text-bottom">RESPONSE</p>
        </div>

        <div className="greeting-image">
          <img
            srcSet="../../static/covid-19/greeting.png 1x, ../../static/covid-19/greeting@2x.png 2x, ../../static/covid-19/greeting@3x.png 3x"
            src="../../static/covid-19/greeting.png"
            alt="Greeting"
          />
        </div>

        <div className="greeting-image-mobile">
          <img
            srcSet="../../static/covid-19/greeting_mobile.png 1x, ../../static/covid-19/greeting_mobile@2x.png 2x, ../../static/covid-19/greeting_mobile@3x.png 3x"
            src="../../static/covid-19/greeting_mobile.png"
            alt="Greeting"
          />
        </div>

        <p className="font-p-1 greeting-description">
          During the pandemic the web has become more important than ever. Almost everybody has
          to&nbsp;stay isolated at&nbsp;home, so&nbsp;the Internet has instantly become
          a&nbsp;global workplace, the only way to&nbsp;communicate with other people and get goods
          and services. For eight years we&nbsp;have been building web services for various
          industries such&nbsp;
          <a href="https://csssr.com/en/industry/ecommerce" className="font-p-link">
            e-commerce
          </a>
          ,
          <a href="https://csssr.com/en/industry/fintech" className="font-p-link">
            fintech
          </a>
          and
          <a href="https://csssr.com/en/industry/media-and-marketing" className="font-p-link">
            media
          </a>
          ,
        </p>

        <div className="experience-number">
          <img src={require('../../static/covid-19/icons/eight.svg').default} alt="Eight number" />
        </div>

        <p className="font-p-1 experience-description">
          Our group of&nbsp;companies employs more than 150 professionals in&nbsp;different
          countries and all of&nbsp;them have always been working remotely. For more than
          8&nbsp;years of&nbsp;our successful operations, we&nbsp;have never had a&nbsp;fixed
          office, which has made&nbsp;us agile, flexible, and cost effective. That is&nbsp;the
          reason why we&nbsp;are not affected&nbsp;by
          <span className="experience-description-virus-text">COVID-19</span>
          now.
        </p>
      </div>
    </div>

    <div className="crisis">
      <div className="grid">
        <h2 className="font-heading-3">
          We&nbsp;believe it&nbsp;is&nbsp;our duty to&nbsp;contribute to&nbsp;the global fight
          against the
          <span className="benefit-2-text-bold"> COVID-19 </span>
          crisis.
        </h2>

        <div className="crisis-lines">
          <img
            src={require('../../static/covid-19/icons/crisis_lines.svg').default}
            alt="crisis lines"
          />
        </div>

        <div className="crisis-image">
          <img
            srcSet="../../static/covid-19/crisis.png 1x, ../../static/covid-19/crisis@2x.png 2x, ../../static/covid-19/crisis@3x.png 3x"
            src="../../static/covid-19/crisis.png"
          />
        </div>
      </div>
    </div>

    <div className="benefits">
      <div className="grid">
        {/* <!-- 1 Benefit --> */}
        <div className="benefit-1-image">
          <img
            srcSet="../../static/covid-19/benefits-1.png 1x, ../../static/covid-19/benefits-1@2x.png 2x, ../../static/covid-19/benefits-1@3x.png 3x"
            src="../../static/covid-19/benefits-1.png"
            alt="Speed up development"
          />
        </div>

        <div className="benefit-1-image-mobile">
          <img
            srcSet="../../static/covid-19/benefits-1-mobile.png 1x, ../../static/covid-19/benefits-1-mobile@2x.png 2x, ../../static/covid-19/benefits-1-mobile@3x.png 3x"
            src="../../static/covid-19/benefits-1-mobile.png"
            alt="Speed up development"
          />
        </div>

        <div className="benefit-1-description">
          <div className="benefit-1-title">
            <h3 className="font-heading-3">
              1. Let&nbsp;us speed up&nbsp;your project development with our team and experience
            </h3>
          </div>

          <p className="font-p-1">
            Maybe right now your project is&nbsp;almost ready for release, but your team members
            have to&nbsp;keep social distancing so&nbsp;cannot complete&nbsp;it.
          </p>
        </div>

        {/* <!-- 2 Benefit --> */}

        <div className="benefit-2-image-mobile">
          <img
            srcSet="../../static/covid-19/benefits-2.png 1x, ../../static/covid-19/benefits-2@2x.png 2x, ../../static/covid-19/benefits-2@3x.png 3x"
            src="../../static/covid-19/benefits-2.png"
            alt="New project development"
          />
        </div>

        <div className="benefit-2-description">
          <div className="benefit-2-title">
            <h3 className="font-heading-3">2. We&nbsp;can bring your business online right now</h3>
          </div>

          <p className="font-p-1">
            This crysis is&nbsp;not only a&nbsp;time of&nbsp;hardship but also great opportunities
            for exponential growth. Perhaps it&nbsp;is&nbsp;the right time to&nbsp;launch your
            project. We&nbsp;would love to&nbsp;craft
            <span className="benefit-2-text-bold">digital products</span>,
            <span className="benefit-2-text-bold">services</span>,
            <span className="benefit-2-text-bold">internal systems</span>
            &amp;
            <span className="benefit-2-text-bold">ecosystems</span>.
          </p>
        </div>

        <div className="benefit-2-image">
          <img
            srcSet="../../static/covid-19/benefits-2.png 1x, ../../static/covid-19/benefits-2@2x.png 2x, ../../static/covid-19/benefits-2@3x.png 3x"
            src="../../static/covid-19/benefits-2.png"
            alt="New project development"
          />
        </div>

        {/* <!-- 3 Benefit --> */}

        <div className="benefit-4-image">
          <img
            srcSet="../../static/covid-19/benefits-4.png 1x, ../../static/covid-19/benefits-4@2x.png 2x, ../../static/covid-19/benefits-4@3x.png 3x"
            src="../../static/covid-19/benefits-1.png"
            alt="Speed up development"
          />
        </div>

        <div className="benefit-4-image-mobile">
          <img
            srcSet="../../static/covid-19/benefits-4-mobile.png 1x, ../../static/covid-19/benefits-4-mobile@2x.png 2x, ../../static/covid-19/benefits-4-mobile@3x.png 3x"
            src="../../static/covid-19/benefits-4-mobile.png"
            alt="Speed up development"
          />
        </div>

        <div className="benefit-4-description">
          <div className="benefit-4-title">
            <h3 className="font-heading-3">3. Let&nbsp;us optimize your web-service performance</h3>
          </div>

          <p className="font-p-1">
            People are in&nbsp;a&nbsp;difficult situation, and the highest load Internet services
            are on&nbsp;the front line now and must stay stable and reliable.
          </p>
        </div>

        {/* <!-- 4 Benefit --> */}

        <div className="benefit-5-image-mobile">
          <img
            srcSet="../../static/covid-19/benefits-5.png 1x, ../../static/covid-19/benefits-5@2x.png 2x, ../../static/covid-19/benefits-5@3x.png 3x"
            src="../../static/covid-19/benefits-5.png"
            alt="New project development"
          />
        </div>

        <div className="benefit-5-description">
          <div className="benefit-5-title">
            <h3 className="font-heading-3">
              4. We&nbsp;are ready to&nbsp;significantly
              <span className="benefit-2-text-bold">reduce prices</span>
              for any socially important projects
            </h3>
          </div>

          <p className="font-p-1">
            Tell&nbsp;us why your project is&nbsp;important for society. We&nbsp;are all in&nbsp;the
            same boat now.
          </p>
        </div>

        <div className="benefit-5-image">
          <img
            srcSet="../../static/covid-19/benefits-5.png 1x, ../../static/covid-19/benefits-5@2x.png 2x, ../../static/covid-19/benefits-5@3x.png 3x"
            src="../../static/covid-19/benefits-5.png"
            alt="New project development"
          />
        </div>

        {/* <!-- 5 Benefit --> */}

        <h3 className="font-heading-5 benefit-3-title">
          We&nbsp;offer
          <span className="benefit-3-title-redbox">free remote work consulting</span>
          for companies from 20&nbsp;to&nbsp;200 employees
        </h3>

        <div className="benefit-3-image">
          <img
            srcSet="../../static/covid-19/benefits-3.png 1x, ../../static/covid-19/benefits-3@2x.png 2x, ../../static/covid-19/benefits-3@3x.png 3x"
            src="../../static/covid-19/benefits-3.png"
            alt="Remote Work Consultancy"
          />
        </div>

        <p className="font-p-1 benefit-3-description">
          Remote work communication nets cannot appear out of&nbsp;nowhere in&nbsp;just a&nbsp;few
          weeks. It&nbsp;has to&nbsp;be&nbsp;developed and optimized for years! We&nbsp;have been
          in&nbsp;this business for more than 8&nbsp;years. We&nbsp;believe that our experience can
          help people these days so&nbsp;we&rsquo;ll be&nbsp;happy to&nbsp;share&nbsp;it.
        </p>
      </div>
    </div>

    <div className="contact">
      <div className="grid">
        <p className="font-p-1">Feel free to drop us a line</p>

        <a className="link-big" href="mailto:emergency@csssr.com">
          emergency@csssr.com
        </a>

        <div className="contact-image">
          <img src={require('../../static/covid-19/icons/email.svg').default} alt="mail" />
        </div>
      </div>
    </div>
  </article>
)

export default styled(Covid19Content)`
  ${styles}
`
