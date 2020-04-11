import React, { useState, PureComponent } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import cn from 'classnames'
import ContactModal from '../ContactModal'
import styles from './ElearningPlatformContent.styles'
import DesignButton from './DesignButton'
import FeatureButton from './FeatureButton'

class ElearningPlatformContent extends PureComponent {
  state = {
    activeDesignImage: 'base',
    activeFeatureImage: 'payment',
  }

  render() {
    const { className } = this.props
    const { activeDesignImage, activeFeatureImage } = this.state
    const designImages = {
      base: {
        srcSet: `${require(`../../static/elearning-platform/design-base.png`)} 1x, ${require(`../../static/elearning-platform/design-base@2x.png`)} 2x, ${require(`../../static/elearning-platform/design-base@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/design-base.png`),
      },
      color: {
        srcSet: `${require(`../../static/elearning-platform/design-color.png`)} 1x, ${require(`../../static/elearning-platform/design-color@2x.png`)} 2x, ${require(`../../static/elearning-platform/design-color@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/design-color.png`),
      },
      theme: {
        srcSet: `${require(`../../static/elearning-platform/design-theme.png`)} 1x, ${require(`../../static/elearning-platform/design-theme@2x.png`)} 2x, ${require(`../../static/elearning-platform/design-theme@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/design-theme.png`),
      },
      font: {
        srcSet: `${require(`../../static/elearning-platform/design-font.png`)} 1x, ${require(`../../static/elearning-platform/design-font@2x.png`)} 2x, ${require(`../../static/elearning-platform/design-font@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/design-font.png`),
      },
      graphic: {
        srcSet: `${require(`../../static/elearning-platform/design-graphic.png`)} 1x, ${require(`../../static/elearning-platform/design-graphic@2x.png`)} 2x, ${require(`../../static/elearning-platform/design-graphic@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/design-graphic.png`),
      },
    }

    const featureImages = {
      payment: {
        srcSet: `${require(`../../static/elearning-platform/features-payment-image.png`)} 1x, ${require(`../../static/elearning-platform/features-payment-image@2x.png`)} 2x, ${require(`../../static/elearning-platform/features-payment-image@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/features-payment-image.png`),
        heading: 'Add any payment provider you like',
        description:
          'Though we&nbsp;have the most popular providers built-in our system, we&rsquo;re aware that there is&nbsp;no&nbsp;perfect solution that fits all. We&nbsp;can make the module work with any payment provider or&nbsp;a&nbsp;bank, even a&nbsp;cryptocurrency. Whatever you need, as&nbsp;long as&nbsp;it&nbsp;is&nbsp;connected to&nbsp;the Internet.',
      },
      skill: {
        srcSet: `${require(`../../static/elearning-platform/features-skill-image.png`)} 1x, ${require(`../../static/elearning-platform/features-skill-image@2x.png`)} 2x, ${require(`../../static/elearning-platform/features-skill-image@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/features-skill-image.png`),
        heading: 'Configure learning programs based on&nbsp;skills',
        description:
          'Our skill-based system could help users to&nbsp;choose or&nbsp;configure the learning program based on&nbsp;skills they want to&nbsp;get or&nbsp;improve. As&nbsp;they make progress the system constantly monitors the way they improve and, taking into account multiple parameters from passed assessments to&nbsp;time and attempts made, indicates how skills are improving.',
      },
      rating: {
        srcSet: `${require(`../../static/elearning-platform/feature-rating-image.png`)} 1x, ${require(`../../static/elearning-platform/feature-rating-image@2x.png`)} 2x, ${require(`../../static/elearning-platform/feature-rating-image@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/feature-rating-image.png`),
        heading: 'Choose a&nbsp;learning program and see how your skills grow',
        description:
          'Most students want not just to&nbsp;complete tasks but to&nbsp;monitor their KPIs and find out how well they are doing as&nbsp;compared to&nbsp;the other ones. For that purpose we&nbsp;can develop a&nbsp;Rating System module. It&nbsp;could be&nbsp;a&nbsp;highly configurable system making your educational platform more competitive and more focused on&nbsp;individual advancement.',
      },
      ecosystem: {
        srcSet: `${require(`../../static/elearning-platform/feature-ecosystem-image.png`)} 1x, ${require(`../../static/elearning-platform/feature-ecosystem-image@2x.png`)} 2x, ${require(`../../static/elearning-platform/feature-ecosystem-image@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/feature-ecosystem-image.png`),
        heading: 'Connect the LMS to&nbsp;your existing tools and systems',
        description:
          'Each business is&nbsp;unique so&nbsp;we&rsquo;ve developed a&nbsp;platform that can be&nbsp;easily integrated with other products in&nbsp;your ecosystem. It&nbsp;could be&nbsp;anything from a&nbsp;communication hub, like Slack, to&nbsp;a&nbsp;learning platform to&nbsp;be&nbsp;integrated in&nbsp;your own product.',
      },
    }

    // const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

    // const handleButtonClick = (event) => {
    //     event.preventDefault()

    //     disablePageScroll(document.body)
    //     toggleContactModalVisibility(true)
    // }

    // const handleHideContactModal = () => {
    //     enablePageScroll(document.body)
    //     toggleContactModalVisibility(false)
    // }

    return (
      <article className={className}>
        <Global
          styles={css`
            body,
            #main {
              background-color: #ffffff;
            }
          `}
        />

        <div className="greeting">
          <div className="grid">
            <div className="greeting-text">
              <p className="font-p-5 greeting-perforator">Start Your Online Education Business</p>
              <h1 className="font-heading-1">Modular Learning Management System</h1>
              <p className="font-p-1 greeting-description">
                Build your solution from the modules, add anything you need with our development
                team
              </p>
            </div>

            <div className="greeting-image">
              <img
                srcSet={`${require('../../static/elearning-platform/greeting.png')} 1x, ${require('../../static/elearning-platform/greeting@2x.png')} 2x, ${require('../../static/elearning-platform/greeting@3x.png')} 3x`}
                src={require('../../static/elearning-platform/greeting.png')}
                alt="Greeting image"
              />
            </div>
          </div>
        </div>

        <div className="modules">
          <div className="grid">
            <h2 className="font-heading-2 modules-heading">Magnificent Modules</h2>

            <div className="module-image module-image-left">
              <img
                srcSet={`${require('../../static/elearning-platform/assistant.png')} 1x, ${require('../../static/elearning-platform/assistant@2x.png')} 2x, ${require('../../static/elearning-platform/assistant@3x.png')} 3x`}
                src={require('../../static/elearning-platform/assistant.png')}
                alt="assistant"
              />
            </div>

            <div className="module-title module-title-right">
              <h3 className="font-heading-3">Intelligent assistant</h3>
              <p className="font-heading-5">Innovative built-in support and integrations</p>
            </div>

            <p className="font-p-2 module-subdescription-right subdescription-first">
              We&rsquo;ve built an&nbsp;assistant based on&nbsp;Google Dialogflow.
              It&nbsp;gives&nbsp;us limitless possibilities to&nbsp;integrate our LMS with other
              apps enabling users to&nbsp;communicate with the platform the way they are
              used&nbsp;to.
            </p>
            <p className="font-p-2 module-subdescription-right subdescription-next">
              The assistant can be&nbsp;used in&nbsp;all phases from helping customers
              to&nbsp;choose a&nbsp;course to&nbsp;buy on&nbsp;your website to&nbsp;sending tasks
              through Slack or&nbsp;any other messengers.
            </p>

            <div className="module-title module-title-left">
              <h3 className="font-heading-3">Build-in Gamification</h3>
              <p className="font-heading-5">
                Enhance users motivation with the feature everybody loves
              </p>
            </div>

            <div className="module-image module-image-right">
              <img
                srcSet={`${require('../../static/elearning-platform/gamification.png')} 1x, ${require('../../static/elearning-platform/gamification@2x.png')} 2x, ${require('../../static/elearning-platform/gamification@3x.png')} 3x`}
                src={require('../../static/elearning-platform/gamification.png')}
                alt="gamification"
              />
            </div>

            <p className="font-p-2 module-subdescription-left subdescription-first">
              Boost users motivation up&nbsp;with an&nbsp;achievements and rewards system.
              It&nbsp;could be&nbsp;customized to&nbsp;any level you want from a&nbsp;basic one
              to&nbsp;an&nbsp;advanced RPG like integrated with skill-system, quests and bonuses.
            </p>
          </div>
        </div>

        <div className="features">
          <div className="grid">
            <h2 className="font-heading-2 features-heading">Core Modules</h2>

            <div className="features-lines features-line-management">
              <img
                src={require('../../static/elearning-platform/icons/management.svg').default}
                alt="line"
              />
            </div>

            <div className="features-description features-description-first">
              <h3 className="font-heading-3">Management</h3>
              <p className="font-p-2">
                When it's time to explore new possibilities for an existing product.
              </p>
            </div>

            <ul className="features-list-first features-list">
              <li>
                <p className="font-p-4">Course and task management systems</p>
              </li>
              <li>
                <p className="font-p-4">Publishing</p>
              </li>
              <li>
                <p className="font-p-4">Scheduled and automated deliveries</p>
              </li>
            </ul>

            <div className="features-lines features-line-administration">
              <img
                src={require('../../static/elearning-platform/icons/administration.svg').default}
                alt="line"
              />
            </div>

            <div className="features-description features-description-second">
              <h3 className="font-heading-3">Administration</h3>
              <p className="font-p-2">
                When it's time to explore new possibilities for an existing product.
              </p>
            </div>

            <ul className="features-list-second features-list">
              <li>
                <p className="font-p-4">Task assessment</p>
              </li>
              <li>
                <p className="font-p-4">Rights and access management</p>
              </li>
              <li>
                <p className="font-p-4">Reporting system</p>
              </li>
              <li>
                <p className="font-p-4">Statistics and analytics</p>
              </li>
            </ul>

            <div className="features-lines features-line-learning">
              <img
                src={require('../../static/elearning-platform/icons/learning.svg').default}
                alt="line"
              />
            </div>

            <div className="features-description features-description-third">
              <h3 className="font-heading-3">Learning</h3>
              <p className="font-p-2">
                When it's time to explore new possibilities for an existing product.
              </p>
            </div>

            <ul className="features-list-third features-list">
              <li>
                <p className="font-p-4">Interactive tasks and lessons</p>
              </li>
              <li>
                <p className="font-p-4">Personal dashboard</p>
              </li>
              <li>
                <p className="font-p-4">Progression system</p>
              </li>
              <li>
                <p className="font-p-4">Discussion system</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="design">
          <div className="grid">
            <div className="design-content">
              <h2 className="font-heading-2 design-title">Custom Design</h2>

              <p className="font-p-2 design-desription">
                We&nbsp;have a&nbsp;design team that will customize LMS to&nbsp;match your brand
                identity.
              </p>
              <p className="font-p-2 design-desription design-desription-second">
                You can change everything you need. See how it&nbsp;works by&nbsp;clicking the icons
                below.
              </p>

              <div className="design-buttons">
                <div className="design-buttons-row">
                  <DesignButton
                    onMouseOver={() => this.setState({ activeDesignImage: 'font' })}
                    onMouseOut={() => this.setState({ activeDesignImage: 'base' })}
                    className="design-button"
                    t="Font"
                    icon={require('../../static/elearning-platform/icons/font.svg').default}
                  />
                  <DesignButton
                    onMouseOver={() => this.setState({ activeDesignImage: 'graphic' })}
                    onMouseOut={() => this.setState({ activeDesignImage: 'base' })}
                    className="design-button"
                    t="Graphic"
                    icon={require('../../static/elearning-platform/icons/graphic.svg').default}
                  />
                </div>

                <div className="design-buttons-row">
                  <DesignButton
                    onMouseOver={() => this.setState({ activeDesignImage: 'theme' })}
                    onMouseOut={() => this.setState({ activeDesignImage: 'base' })}
                    className="design-button"
                    t="Theme"
                    icon={require('../../static/elearning-platform/icons/theme.svg').default}
                  />
                  <DesignButton
                    onMouseOver={() => this.setState({ activeDesignImage: 'color' })}
                    onMouseOut={() => this.setState({ activeDesignImage: 'base' })}
                    className="design-button"
                    t="Color"
                    icon={require('../../static/elearning-platform/icons/color.svg').default}
                  />
                </div>
              </div>
            </div>

            <div className="design-image">
              <img
                srcSet={designImages[this.state.activeDesignImage].srcSet}
                src={designImages[this.state.activeDesignImage].src}
                alt="Screenshot"
              />
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="grid">
            <h3 className="font-heading-3 banner-title">Need more info?</h3>
            {/* MODAL BUTTON */}
            <a className="banner-button font-p-5">REQUEST A DEMO</a>
          </div>
        </div>

        <div className="team">
          <div className="grid">
            <p className="font-p-1 team-subheading">Add anything you need with our</p>
            <h2 className="font-heading-1 team-title">Agile Development Team</h2>
          </div>

          <div className="team-image">
            <img
              srcSet={`${require('../../static/elearning-platform/team.png')} 1x, ${require('../../static/elearning-platform/team@2x.png')} 2x, ${require('../../static/elearning-platform/team@3x.png')} 3x`}
              src={require('../../static/elearning-platform/team.png')}
              alt="team"
            />
          </div>

          <div className="grid">
            <p className="font-p-4 team-description">
              We&rsquo;ll provide you with a&nbsp;development team based on&nbsp;desired
              functionality and timeline of&nbsp;the project.
              <br />
              <br />
              During the years we&rsquo;ve established impeccable internal processes (link
              processes). Our developers work with modern technologies (link tech stack)
              to&nbsp;achieve excellent results.
            </p>

            <div className="team-specialists">
              <img
                src={require('../../static/elearning-platform/icons/team-specialists.svg').default}
                alt="team-specialists"
              />
            </div>

            <div className="team-projects">
              <img
                src={require('../../static/elearning-platform/icons/team-projects.svg').default}
                alt="team-projects"
              />
            </div>
          </div>
        </div>

        <div className="advanced-features">
          <div className="grid">
            <h3 className="font-heading-5 advanced-features-title">Advanced Feature Ideas</h3>

            <div className="advanced-feature-image">
              <img srcSet={featureImages[this.state.activeFeatureImage].srcSet}
                    src={featureImages[this.state.activeFeatureImage].src} alt="Feature" />
            </div>

            <div className="advanced-feature-description">
              <h4 className="font-heading-4">
                {featureImages[this.state.activeFeatureImage].heading}
              </h4>
              <p className="font-p-2">{featureImages[this.state.activeFeatureImage].description}</p>
            </div>
          </div>
          <div className="advanced-feature-buttons">
            <FeatureButton
              i={require('../../static/elearning-platform/feature-payment.png')}
              srcSet={`${require('../../static/elearning-platform/feature-payment.png')} 1x, ${require('../../static/elearning-platform/feature-payment@2x.png')} 2x, ${require('../../static/elearning-platform/feature-payment@3x.png')} 3x`}
              t="Payment Providers Integration"
              d="Add any payment provider you need"
              onClick={() => this.setState({ activeFeatureImage: 'payment' })}
            />

            <FeatureButton
              i={require('../../static/elearning-platform/feature-skill.png')}
              srcSet={`${require('../../static/elearning-platform/feature-skill.png')} 1x, ${require('../../static/elearning-platform/feature-skill@2x.png')} 2x, ${require('../../static/elearning-platform/feature-skill@3x.png')} 3x`}
              t="Skill-Based Learning System"
              d="Configure learning programms based on skills"
              onClick={() => this.setState({ activeFeatureImage: 'skill' })}
            />

            <FeatureButton
              i={require('../../static/elearning-platform/feature-rating.png')}
              srcSet={`${require('../../static/elearning-platform/feature-rating.png')} 1x, ${require('../../static/elearning-platform/feature-rating@2x.png')} 2x, ${require('../../static/elearning-platform/feature-rating@3x.png')} 3x`}
              t="Rating System"
              d="Choose the learning programm and see how skils grow"
              onClick={() => this.setState({ activeFeatureImage: 'rating' })}
            />

            <FeatureButton
              i={require('../../static/elearning-platform/feature-ecosystem.png')}
              srcSet={`${require('../../static/elearning-platform/feature-ecosystem.png')} 1x, ${require('../../static/elearning-platform/feature-ecosystem@2x.png')} 2x, ${require('../../static/elearning-platform/feature-ecosystem@3x.png')} 3x`}
              t="Ecosystem integration"
              d="Connect the LMS to your existing tools and systems"
              onClick={() => this.setState({ activeFeatureImage: 'ecosystem' })}
            />
          </div>
        </div>

        {/* {typeof window !== 'undefined' &&
                    isContactModalVisible &&
                    ReactDOM.createPortal(
                        <ContactModal onClose={handleHideContactModal} pageName="covid19" />,
                        document.getElementById('main'),
                    )} */}
      </article>
    )
  }
}

export default styled(ElearningPlatformContent)`
  ${styles}
`
