import React, { PureComponent } from 'react'
import Fade from 'react-reveal/Fade'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles from './ElearningPlatformContent.styles'
import DesignButton from './DesignButton'
import FeatureButton from './FeatureButton'
import ContactButton from '../ContactButton'

class ElearningPlatformContent extends PureComponent {
  state = {
    activeDesignImage: 'base',
    activeFeatureImage: 'payment',
  }

  render() {
    const { className, pageName } = this.props

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
          'Though we have the most popular providers built-in our system, we’re aware that there is no perfect solution that fits all. We can make the module work with any payment provider or a bank, even a cryptocurrency. Whatever you need, as long as it is connected to the Internet.',
      },
      skill: {
        srcSet: `${require(`../../static/elearning-platform/features-skill-image.png`)} 1x, ${require(`../../static/elearning-platform/features-skill-image@2x.png`)} 2x, ${require(`../../static/elearning-platform/features-skill-image@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/features-skill-image.png`),
        heading: 'Configure learning programs based on skills',
        description:
          'Our skill-based system could help users to choose or configure the learning program based on skills they want to get or improve. As they make progress the system constantly monitors the way they improve and, taking into account multiple parameters from passed assessments to time and attempts made, indicates how skills are improving.',
      },
      rating: {
        srcSet: `${require(`../../static/elearning-platform/feature-rating-image.png`)} 1x, ${require(`../../static/elearning-platform/feature-rating-image@2x.png`)} 2x, ${require(`../../static/elearning-platform/feature-rating-image@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/feature-rating-image.png`),
        heading: 'Choose a learning program and see how your skills grow',
        description:
          'Most students want not just to complete tasks but to monitor their KPIs and find out how well they are doing as compared to the other ones. For that purpose we can develop a Rating System module. It could be a highly configurable system making your educational platform more competitive and more focused on individual advancement.',
      },
      ecosystem: {
        srcSet: `${require(`../../static/elearning-platform/feature-ecosystem-image.png`)} 1x, ${require(`../../static/elearning-platform/feature-ecosystem-image@2x.png`)} 2x, ${require(`../../static/elearning-platform/feature-ecosystem-image@3x.png`)} 3x`,
        src: require(`../../static/elearning-platform/feature-ecosystem-image.png`),
        heading: 'Connect the LMS to your existing tools and systems',
        description:
          'Each business is unique so we’ve developed a platform that can be easily integrated with other products in your ecosystem. It could be anything from a communication hub, like Slack, to a learning platform to be integrated in your own product.',
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
            <p className="font-p-5 greeting-perforator">Start Your Online Education Business</p>
            <h1 className="font-heading-1">Modular Learning Management System</h1>
            <p className="font-p-1 greeting-description">
              Build your solution from the modules, add anything you need with our development team.
            </p>

            <div className="greeting-image">
              <img
                srcSet={`${require('../../static/elearning-platform/greeting.png')} 1x, ${require('../../static/elearning-platform/greeting@2x.png')} 2x, ${require('../../static/elearning-platform/greeting@3x.png')} 3x`}
                src={require('../../static/elearning-platform/greeting.png')}
                alt="By using a modular learning management system you can build your solution from the modules."
              />
            </div>

            <div className="greeting-image-mobile">
              <img
                srcSet={`${require('../../static/elearning-platform/greeting-mob.png')} 1x, ${require('../../static/elearning-platform/greeting-mob@2x.png')} 2x, ${require('../../static/elearning-platform/greeting-mob@3x.png')} 3x`}
                src={require('../../static/elearning-platform/greeting-mob.png')}
                alt="By using a modular learning management system you can build your solution from the modules."
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
                alt="We’ve built an assistant based on Google Dialogflow."
              />
            </div>

            <div className="module-title module-title-right">
              <h3 className="font-heading-3">Intelligent assistant</h3>
              <p className="font-heading-5">Innovative built-in support and integrations</p>
            </div>

            <p className="font-p-2 module-subdescription-right subdescription-first">
              We&rsquo;ve built an&nbsp;assistant based on&nbsp;
              <span className="font-p-bold">Google Dialogflow</span>. It&nbsp;gives&nbsp;us
              limitless possibilities to&nbsp;integrate our LMS with other apps enabling users
              to&nbsp;communicate with the platform the way they are used&nbsp;to.
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
                alt="Boost users motivation up with an achievements and rewards system."
              />
            </div>

            <p className="font-p-2 module-subdescription-left subdescription-first subdescription-first-tablet">
              Boost users motivation up&nbsp;with an&nbsp;achievements and rewards system.
              It&nbsp;could be&nbsp;customized to&nbsp;any level you want from a&nbsp;basic one
              to&nbsp;an&nbsp;advanced RPG like integrated with{' '}
              <span className="font-p-bold">skill-system, quests and bonuses</span>.
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
              <p className="font-p-2">All of the core tools for managing courses and tasks.</p>
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
              <p className="font-p-2">A set of instruments for tutors.</p>
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
              <p className="font-p-2">The main part of the platform is available for students.</p>
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

              <p className="font-p-2 design-desription design-desription-second-first">
                We&nbsp;have a&nbsp;design team that will customize LMS to&nbsp;match your brand
                identity. You can change everything you need. See how it&nbsp;works by&nbsp;clicking
                the icons below.
              </p>

              <div className="design-buttons">
                <div className="design-buttons-row">
                  <DesignButton
                    onMouseEnter={() => this.setState({ activeDesignImage: 'font' })}
                    className="design-button"
                    text="Font"
                    icon={require('../../static/elearning-platform/icons/font.svg').default}
                  />
                  <DesignButton
                    onMouseEnter={() => this.setState({ activeDesignImage: 'graphic' })}
                    className="design-button"
                    text="Graphic"
                    icon={require('../../static/elearning-platform/icons/graphic.svg').default}
                  />
                </div>

                <div className="design-buttons-row">
                  <DesignButton
                    onMouseEnter={() => this.setState({ activeDesignImage: 'theme' })}
                    className="design-button"
                    text="Theme"
                    icon={require('../../static/elearning-platform/icons/theme.svg').default}
                  />
                  <DesignButton
                    onMouseEnter={() => this.setState({ activeDesignImage: 'color' })}
                    className="design-button"
                    text="Color"
                    icon={require('../../static/elearning-platform/icons/color.svg').default}
                  />
                </div>
              </div>
            </div>

            <div className="design-image">
              {this.state.activeDesignImage === 'base' && (
                <Fade right={true} duration={200} distance="40px">
                  <img
                    srcSet={designImages.base.srcSet}
                    src={designImages.base.src}
                    alt="We have a design team that will customize the LMS to match your brand identity."
                  />
                </Fade>
              )}

              {this.state.activeDesignImage === 'font' && (
                <Fade right={true} duration={200} distance="40px">
                  <img
                    srcSet={designImages.font.srcSet}
                    src={designImages.font.src}
                    alt="We have a design team that will customize the LMS to match your brand identity."
                  />
                </Fade>
              )}

              {this.state.activeDesignImage === 'graphic' && (
                <Fade right={true} duration={200} distance="40px">
                  <img
                    srcSet={designImages.graphic.srcSet}
                    src={designImages.graphic.src}
                    alt="We have a design team that will customize the LMS to match your brand identity."
                  />
                </Fade>
              )}

              {this.state.activeDesignImage === 'theme' && (
                <Fade right={true} duration={200} distance="40px">
                  <img
                    srcSet={designImages.theme.srcSet}
                    src={designImages.theme.src}
                    alt="We have a design team that will customize the LMS to match your brand identity."
                  />
                </Fade>
              )}

              {this.state.activeDesignImage === 'color' && (
                <Fade right={true} duration={200} distance="40px">
                  <img
                    srcSet={designImages.color.srcSet}
                    src={designImages.color.src}
                    alt="We have a design team that will customize the LMS to match your brand identity."
                  />
                </Fade>
              )}
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="grid">
            <h3 className="font-heading-3 banner-title">Need more info?</h3>
            <ContactButton
              className="banner-button font-p-5"
              pageName={pageName}
              kind="secondary"
              dangerouslySetInnerHTML={{ __html: 'REQUEST A DEMO' }}
            />
          </div>
        </div>

        <div className="team">
          <div className="grid">
            <p className="font-p-1 team-subheading">Add anything you need with our</p>
            <h2 className="font-heading-1 team-title">Agile Development Team</h2>
          </div>
          <div className="team-image-wrapper">
            <div className="grid">
              <div className="team-image">
                <img
                  srcSet={`${require('../../static/elearning-platform/team.png')} 1x, ${require('../../static/elearning-platform/team@2x.png')} 2x, ${require('../../static/elearning-platform/team@3x.png')} 3x`}
                  src={require('../../static/elearning-platform/team.png')}
                  alt="We’ll provide you with a development team based on the project desired functionality and timeline."
                />
              </div>
            </div>
          </div>
          <div className="grid">
            <p className="font-p-2 team-description">
              We&rsquo;ll provide you with a&nbsp;development team based on&nbsp;desired
              functionality and timeline of&nbsp;the project. During the years we&rsquo;ve
              established impeccable internal{' '}
              <a
                className="font-p-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://csssr.com/en/way-of-work"
              >
                processes
              </a>
              . Our developers work with modern{' '}
              <a
                className="font-p-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://csssr.com/en/tech-stack"
              >
                technologies
              </a>{' '}
              to&nbsp;achieve excellent results.
            </p>

            <div className="team-specialists">
              <p className="team-number">150+</p>
              <p className="team-label">specialists</p>
            </div>

            <div className="team-projects">
              <p className="team-number">500+</p>
              <p className="team-label">projects</p>
            </div>
          </div>
        </div>

        <div className="advanced-features">
          <div className="grid">
            <h3 className="font-heading-5 advanced-features-title">Advanced Feature Ideas</h3>

            <div className="advanced-feature-image">
              <img
                srcSet={featureImages[this.state.activeFeatureImage].srcSet}
                src={featureImages[this.state.activeFeatureImage].src}
                alt="By using advanced features ideas you can add any payment provider you like."
              />
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
              im={require('../../static/elearning-platform/feature-payment-mobile.png')}
              srcSet={`${require('../../static/elearning-platform/feature-payment.png')} 1x, ${require('../../static/elearning-platform/feature-payment@2x.png')} 2x, ${require('../../static/elearning-platform/feature-payment@3x.png')} 3x`}
              mobileSrcSet={`${require('../../static/elearning-platform/feature-payment-mobile.png')} 1x, ${require('../../static/elearning-platform/feature-payment-mobile@2x.png')} 2x, ${require('../../static/elearning-platform/feature-payment-mobile@3x.png')} 3x`}
              text="Payment Providers Integration"
              d="Add any payment provider you need"
              onMouseOver={() => this.setState({ activeFeatureImage: 'payment' })}
              onMouseOut={() => this.setState({ activeFeatureImage: 'payment' })}
              imageAlt="Add any payment provider you need"
            />

            <FeatureButton
              i={require('../../static/elearning-platform/feature-skill.png')}
              im={require('../../static/elearning-platform/feature-skill-mobile.png')}
              srcSet={`${require('../../static/elearning-platform/feature-skill.png')} 1x, ${require('../../static/elearning-platform/feature-skill@2x.png')} 2x, ${require('../../static/elearning-platform/feature-skill@3x.png')} 3x`}
              mobileSrcSet={`${require('../../static/elearning-platform/feature-skill-mobile.png')} 1x, ${require('../../static/elearning-platform/feature-skill-mobile@2x.png')} 2x, ${require('../../static/elearning-platform/feature-skill-mobile@3x.png')} 3x`}
              text="Skill-Based Learning System"
              d="Configure learning programms based on skills"
              onMouseOver={() => this.setState({ activeFeatureImage: 'skill' })}
              onMouseOut={() => this.setState({ activeFeatureImage: 'payment' })}
              imageAlt="Configure learning programs based on skills"
            />

            <FeatureButton
              i={require('../../static/elearning-platform/feature-rating.png')}
              im={require('../../static/elearning-platform/feature-rating-mobile.png')}
              srcSet={`${require('../../static/elearning-platform/feature-rating.png')} 1x, ${require('../../static/elearning-platform/feature-rating@2x.png')} 2x, ${require('../../static/elearning-platform/feature-rating@3x.png')} 3x`}
              mobileSrcSet={`${require('../../static/elearning-platform/feature-rating-mobile.png')} 1x, ${require('../../static/elearning-platform/feature-rating-mobile@2x.png')} 2x, ${require('../../static/elearning-platform/feature-rating-mobile@3x.png')} 3x`}
              text="Rating System"
              d="Choose the learning programm and see how skils grow"
              onMouseOver={() => this.setState({ activeFeatureImage: 'rating' })}
              onMouseOut={() => this.setState({ activeFeatureImage: 'payment' })}
              imageAlt="Choose among the learning programs and see how skills grow"
            />

            <FeatureButton
              i={require('../../static/elearning-platform/feature-ecosystem.png')}
              im={require('../../static/elearning-platform/feature-ecosystem-mobile.png')}
              srcSet={`${require('../../static/elearning-platform/feature-ecosystem.png')} 1x, ${require('../../static/elearning-platform/feature-ecosystem@2x.png')} 2x, ${require('../../static/elearning-platform/feature-ecosystem@3x.png')} 3x`}
              mobileSrcSet={`${require('../../static/elearning-platform/feature-ecosystem-mobile.png')} 1x, ${require('../../static/elearning-platform/feature-ecosystem-mobile@2x.png')} 2x, ${require('../../static/elearning-platform/feature-ecosystem-mobile@3x.png')} 3x`}
              text="Ecosystem integration"
              d="Connect the LMS to your own and unique existing tools and systems"
              onMouseOver={() => this.setState({ activeFeatureImage: 'ecosystem' })}
              onMouseOut={() => this.setState({ activeFeatureImage: 'payment' })}
              imageAlt="Connect the LMS to your own current unique tools and systems"
            />
          </div>
        </div>
      </article>
    )
  }
}

export default styled(ElearningPlatformContent)`
  ${styles}
`
