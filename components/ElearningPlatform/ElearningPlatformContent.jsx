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
                src: require(`../../static/elearning-platform/icons/features-payment-image.svg`).default,
                heading: 'Payment Providers Integration',
                description:
                    'We have the most popular providers built-in our system but we’ve learned that there is no perfect solution that would fit everybody. So we can do a development to make the module work with any payment provider or bank or even cryptocurrency you need as long as it’s connected to the internet.',
            },
            skill: {
                src: require(`../../static/elearning-platform/icons/features-skill-image.svg`).default,
                heading: 'Skill-Based Learning System',
                description:
                    'Our skill-based system helps users to choose or configure the learning program based on skills they want to get or improve. As they progress the system constantly monitors the way they do it and, taking into consideration a lot of parameters from passed assessments to time and attempts taken, indicates how skills are improving.',
            },
            rating: {
                src: require(`../../static/elearning-platform/icons/feature-rating-image.svg`).default,
                heading: 'Rating System',
                description:
                    'Most people want not only to complete tasks but monitor their KPIs and find out how well they are compared to others. For that purpose we’ve developed the Rating System module it’s a highly configurable system allowing to make your educational platform more competitive or more focused on individual progression.',
            },
            ecosystem: {
                src: require(`../../static/elearning-platform/icons/feature-ecosystem-image.svg`).default,
                heading: 'Ecosystem Integration',
                description:
                    'Every business is unique so we’ve made out the platform in the way it could be easily integrated with other products in your ecosystem. It could be anything from a communication hub like Slack to building a learning platform for your own product.',
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
                                Build solution from modules and add anything you need with our development team
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
                            We’ve build the assistant using Google Dialogflow. It gives us limitless possibilities
                            to integrate our LMS with other apps giving users an ability to communicate with the
                            platform the way they are used to.
            </p>
                        <p className="font-p-2 module-subdescription-right subdescription-next">
                            The assistant can be used on all stages from helping to choose the course to buy on
                            your website to sending tasks through Slack or any other messengers.
            </p>

                        <div className="module-title module-title-left">
                            <h3 className="font-heading-3">Build-in Gamification</h3>
                            <p className="font-heading-5">
                                Enhance users motivation with feature everybody loves
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
                            Improve users motivation with achievements and rewards system. It could be in-depth
                            customized to any level you want from a basic one to an advanced RPG like integrated
                            with skill-system, quests and bonuses.
            </p>
                    </div>
                </div>

                <div className="features">
                    <div className="grid">
                        <h2 className="font-heading-2 features-heading">Key Modules</h2>

                        <div className="features-list-left">
                            <p className="font-heading-3 features-list-heading">Administration</p>

                            <ul className="features-list">
                                <li>
                                    <p className="font-p-3">Task assessment</p>
                                </li>
                                <li>
                                    <p className="font-p-3">Rights and access management</p>
                                </li>
                                <li>
                                    <p className="font-p-3">Reporting system</p>
                                </li>
                                <li>
                                    <p className="font-p-3">Statistics and analytics</p>
                                </li>
                            </ul>
                        </div>

                        <div className="features-list-center">
                            <p className="font-heading-3 features-list-heading">Learning</p>

                            <ul className="features-list">
                                <li>
                                    <p className="font-p-3">Interactive tasks and lessons</p>
                                </li>
                                <li>
                                    <p className="font-p-3">Personal dashboard</p>
                                </li>
                                <li>
                                    <p className="font-p-3">Progression system</p>
                                </li>
                                <li>
                                    <p className="font-p-3">Discussion system</p>
                                </li>
                            </ul>
                        </div>

                        <div className="features-list-right">
                            <p className=" font-heading-3 features-list-heading">Management</p>

                            <ul className="features-list">
                                <li>
                                    <p className="font-p-3">Course and task management system</p>
                                </li>
                                <li>
                                    <p className="font-p-3">Publishing</p>
                                </li>
                                <li>
                                    <p className="font-p-3">Scheduled and automated delivery</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="design">
                    <div className="grid">
                        <div className="design-content">
                            <h2 className="font-heading-2 design-title">Custom design</h2>

                            <p className="font-p-2 design-desription">
                                We have a design team that would customize LMS to match your brand identity.
              </p>
                            <p className="font-p-2 design-desription design-desription-second">
                                You can change everything you need. See how it works by pointing the buttons below.{' '}
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
                            We’ll provide you a development team based on the desired functionality and timeline
                            of a project.
              <br />
                            <br />
              During the years we’ve established well-polished processes (link processes). Our
              developers work with modern technologies (link tech stack) to achieve the best
              results.
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
                            <img src={featureImages[this.state.activeFeatureImage].src} alt="Feature" />
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
                            t="Payment Providers Integration"
                            d="Add any payment provider you need"
                            onClick={() => this.setState({ activeFeatureImage: 'payment' })}
                        />

                        <FeatureButton
                            i={require('../../static/elearning-platform/feature-skill.png')}
                            t="Skill-Based Learning System"
                            d="Configure learning programms based on skills"
                            onClick={() => this.setState({ activeFeatureImage: 'skill' })}
                        />

                        <FeatureButton
                            i={require('../../static/elearning-platform/feature-rating.png')}
                            t="Rating System"
                            d="Choose the learning programm and see how skils grow"
                            onClick={() => this.setState({ activeFeatureImage: 'rating' })}
                        />

                        <FeatureButton
                            i={require('../../static/elearning-platform/feature-ecosystem.png')}
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
