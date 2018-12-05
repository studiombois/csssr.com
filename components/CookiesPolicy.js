import React from 'react'
import styles from './privacy-policy/styles'
import { translate } from 'react-i18next'

const CookiesPolicy = ({ t }) => (
  <article className='grid-container' id='cookies-policy'>
    <header>
      <h2 className='font_h1-regular'>
        {t('common:cookiesPolicy.title')}
      </h2>
      <p className='font_subhead-regular'>
        {t('common:cookiesPolicy.date')}
      </p>
    </header>
    <div>
      <p className='font_p24-strong'>
        This Cookie Policy describes the different types of&nbsp;cookies that may be&nbsp;applied on&nbsp;the equipment of&nbsp;consumers who visit <a href='https://csssr.com/' className='font_link-list_24'>csssr.com</a> (the &laquo;Site&raquo;), owned and operated by&nbsp;Company Name Ltd.
      </p>

      <p className='font_p16-regular'>
        We&nbsp;may update this Cookie Policy from time to&nbsp;time in&nbsp;order to&nbsp;reflect, for example, changes to&nbsp;the cookies we&nbsp;use or&nbsp;for other operational, legal or&nbsp;regulatory reasons. Please therefore re-visit this Cookie Policy regularly to&nbsp;stay informed about our use of&nbsp;cookies and similar technologies. The date at&nbsp;the top of&nbsp;this Cookie Policy indicates when it&nbsp;was last updated.
      </p>

      <p className='font_p16-regular'>
        If&nbsp;you have any further queries, please contact&nbsp;us by&nbsp;email at&nbsp;privacy@csssr.com, or&nbsp;write to&nbsp;us at&nbsp;the following address:
      </p>

      <p className='font_p16-regular'>
        &laquo;Company Name&raquo; Ltd,<br/>
        ul. Letnikovskaya, d.&nbsp;2, c&nbsp;3., a/ya &#8470;&nbsp;33 <br/>
        Moscow, Russia, 115114 <br/>
      </p>

      <p className='font_p16-regular'>
        Some cookies that we&nbsp;use through the Sites will collect personal information about you, or&nbsp;information that becomes personal information if&nbsp;we&nbsp;combine it&nbsp;with other data. Any personal information that we&nbsp;collect will be&nbsp;used in&nbsp;accordance with our Privacy Policy.
      </p>

      <section>
        <h3 className='font_h2-regular'>
          What is&nbsp;a&nbsp;cookie?
        </h3>
        <p className='font_p16-regular'>
          Cookies are a&nbsp;standard feature of&nbsp;websites that allows&nbsp;us to&nbsp;collect certain information from your browser or&nbsp;device when you visit our Sites. In&nbsp;relation to&nbsp;the use of&nbsp;cookies by&nbsp;our partners and clients, note that we&nbsp;do&nbsp;not have access or&nbsp;control over these cookies.
        </p>

        <h3 className='font_h2-regular'>
          What cookies do&nbsp;we&nbsp;use?
        </h3>
        <p className='font_p16-regular'>
          We&nbsp;use a&nbsp;variety of&nbsp;cookies on&nbsp;the Site for several reasons. We&nbsp;also may use web logs, pixel tags, or&nbsp;web beacons, which are pieces of&nbsp;code that may be&nbsp;used to&nbsp;read and place cookies on&nbsp;a&nbsp;web browser, to&nbsp;collect information about how you interact with websites or&nbsp;advertisements.
        </p>
        <p className='font_p16-regular'>
          The sections below describe the types of&nbsp;cookies used by&nbsp;CSSSR on&nbsp;the Site and explain their use.
        </p>

        <h4 className='font_h3-regular'>
          Essential Cookies
        </h4>
        <p className='font_p16-regular'>
          We&nbsp;use cookies that are essential to&nbsp;making the Sites work. These types of&nbsp;cookies enable you to&nbsp;move around the Sites and use their features. For example, we&nbsp;may use cookies to&nbsp;manage user sessions, or&nbsp;adjust settings and functionality on&nbsp;the Site.
        </p>
        <h4 className='font_h3-regular'>
          Preference Cookies
        </h4>
        <p className='font_p16-regular'>
          We&nbsp;also use cookies that collect information about your choices and preferences. These cookies allow&nbsp;us to&nbsp;remember language or&nbsp;other local settings and customize the Sites accordingly. For example, we&nbsp;may store settings and preferences of&nbsp;our users.
        </p>
        <h4 className='font_h3-regular'>
          Social Media Cookies
        </h4>
        <p className='font_p16-regular'>
          Some of&nbsp;the pages on&nbsp;the Sites contain tools or&nbsp;applications that are linked to&nbsp;third-party social media service providers such as&nbsp;Facebook, Twitter and LinkedIn. The social media service provider may set its own cookies on&nbsp;your computer or&nbsp;device through these tools or&nbsp;applications. You should check the social media service provider&rsquo;s website for further details about how they use cookies.
        </p>
        <h4 className='font_h3-regular'>
          Analytics Cookies
        </h4>
        <p className='font_p16-regular'>
          These cookies collect information about how people are using the Sites, for example which pages are visited the most often, how visitors move from one webpage to&nbsp;another, and whether visitors experience any difficulties using the Sites. Overall, these cookies provide&nbsp;us with analytical information about how the Sites are performing and how we&nbsp;can improve&nbsp;it, and in&nbsp;some instances, whether our advertising is&nbsp;effective or&nbsp;not.
        </p>
        <h4 className='font_h3-regular'>
          Advertising Cookies
        </h4>
        <p className='font_p16-regular'>
          We&nbsp;may partner with certain third parties to&nbsp;deliver advertising that we&nbsp;believe may interest you based on&nbsp;your activity on&nbsp;our Sites and other websites over time. These third parties may set and access cookies on&nbsp;your computer or&nbsp;other device and may also use web logs, pixel tags, or&nbsp;web beacons. These cookies are used to&nbsp;deliver advertisements that are more relevant to&nbsp;you and your interests. They are also used to&nbsp;limit the number of&nbsp;times you see an&nbsp;advertisement as&nbsp;well as&nbsp;to&nbsp;help measure the effectiveness of&nbsp;the advertising campaign.
        </p>
        <p className='font_p16-regular'>
          You have the right to&nbsp;decide whether to&nbsp;accept or&nbsp;reject cookies. In&nbsp;addition to&nbsp;the options provided above, you may refuse or&nbsp;accept cookies from the Sites at&nbsp;any time by&nbsp;activating settings on&nbsp;your browser. Information about the procedure to&nbsp;follow in&nbsp;order to&nbsp;enable or&nbsp;disable cookies can be&nbsp;found on&nbsp;your Internet browser provider&rsquo;s website via your help screen. You may wish to&nbsp;refer to&nbsp;<a href='http://www.allaboutcookies.org/manage-cookies/index.html' target='_blank' rel='noopener' className='font_link-list_16'>http://www.allaboutcookies.org/manage-cookies/index.html</a> for information on&nbsp;commonly used browsers. Please be&nbsp;aware that if&nbsp;cookies are disabled, some website features may not operate as&nbsp;intended.
        </p>
      </section>
    </div><style jsx>{`
      article {
        margin-bottom: 31rem;
        margin-right: auto;
        margin-left: auto;
        width: 1792px;
        background-color: white;
      }

      header {
        grid-column: 2 / span 3;
        padding-top: 13.5rem;
      }

      h1 {
        display: inline-block;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        article {
          width: 1328px;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        article {
          width: 1248px;
        }
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        article {
          width: 944px;
        }

        @media (max-width: 1023px) {
          article {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        article {
          margin-bottom: 13.5rem;
          width: 20.5rem;
        }

        header {
          grid-column: 1 / span 6;
          padding-top: 5.5rem;
        }

        p:not(.font_p24-strong) {
          margin-top: 0.125rem;
        }

        p.font_p16-regular + section {
          margin-top: -0.3125rem;
        }

        .font_p24-strong {
          margin-bottom: 1.3125rem !important;
        }
      }
    `}</style>
    <style jsx>{styles}</style>
  </article>
)

export default translate()(CookiesPolicy)
