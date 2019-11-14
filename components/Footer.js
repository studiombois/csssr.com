import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import translate from '../utils/translate-wrapper'
import privacyPolicyLinkClick from '../utils/privacyPolicyLinkClick'


const Footer = ({ socialLinks, lng, t }) => {
  const rootUrl = `/${lng}`

  return <footer className='grid-container'>
    <span className='logo-wrapper'>
      <Link href={rootUrl}>
        <a data-testid='footer:link:logo'>
          <img
            className='logo'
            src={require('../static/icons/csssr_logo.svg')}
            alt='CSSSR Logo'
          />
        </a>
      </Link>
    </span>

    <ul className='social-links'>
      {socialLinks.map(({ href, label }) =>
        <li key={label} className='social-link'>
          <a
            aria-label={`${label} link`}
            href={href}
            target='_blank'
            rel='noopener'
            data-testid={`footer:social:${label.toLowerCase()}`}
          >
            <img
              className='social-logo'
              src={require(`../static/icons/${label.toLowerCase()}.svg`)}
              alt={`${label} logo`}
            />
          </a>
        </li>
      )}
    </ul>

    <ul className='footer-links'>
      <li className='footer-link'>
        <a
          target='_blank'
          rel='noopener'
          href={`${rootUrl}/privacy-policy`}
          className={lng !== 'ru' ? 'font_footer-link' : 'font_footer-link font_footer-link_without-margin'}
          onClick={privacyPolicyLinkClick}
          data-testid='footer:link:privacyPolicy'
        >
          {t('common:footer:privacyPolicy')}
        </a>
      </li>

      {lng !== 'ru' && <li className='footer-link'>
        <a
          target='_blank'
          rel='noopener'
          href='/en/cookies-policy'
          className='font_footer-link'
          onClick={privacyPolicyLinkClick}
          data-testid='footer:link:cookiesPolicy'
        >
          Website cookie policy
        </a>
      </li>}

      <li className='footer-link'>
        <span className='font_footer-text' dangerouslySetInnerHTML={{ __html: t('common:footer.alliancePartText') }} />

        {' '}
        <a
          href='https://frontend.digital/'
          className='font_footer-link'
          target='_blank'
          rel='noopener'
          data-testid='footer:link:frontendDigitalAlliance'
        >
          Frontend.Digital alliance
        </a>
      </li>
    </ul>

    <style jsx>{`
      footer {
        margin-right: auto;
        margin-left: auto;
        padding-bottom: 3.5rem;
        width: 1792px;
        align-items: center;
      }

      .logo-wrapper {
        // IE-11 styles
        -ms-grid-column: 1;
        -ms-grid-column-span: 3;
        -ms-grid-row-align: center;

        // Other browsers styles
        grid-column: 1 / span 2;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        display: block;
        height: 2.5rem;
        text-align: center;
      }

      .logo {
        width: 6.0625rem;
        height: 1.5rem;
      }

      .social-links {
        // IE-11 styles
        -ms-grid-column: 7;
        -ms-grid-column-span: 3;
        -ms-grid-row-align: center;

        // Other browsers styles
        grid-column: 4 / span 2;
        display: flex;
        justify-content: flex-start;
        font-size: 0;
      }

      .social-link:not(:last-child) {
        margin-right: 1.5rem;
      }

      .social-logo {
        width: 1.5rem;
        height: 1.5rem;
      }

      .footer-links {
        // IE-11 styles
        -ms-grid-column: 13;
        -ms-grid-column-span: 9;
        -ms-grid-row-align: center;

        // Other browsers styles
        grid-column: 7 / span 5;
        display: flex;
        justify-content: flex-end;
        height: 1.5rem;
      }

      .footer-link:not(:last-child) {
        margin-right: 1rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        footer {
          width: 1328px;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        footer {
          width: 1232px;
        }

        .footer-links {
          // IE-11 styles
          -ms-grid-column: 17;
          -ms-grid-column-span: 7;

          // Other browsers styles
          grid-column: 9 / span 4;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        footer {
          width: 944px;
        }

        .logo-wrapper {
          height: 2rem;
        }

        :global(.ie11) .logo-wrapper a img {
          width: 5rem;
          height: 1.1rem;
        }

        .logo {
          width: 4rem;
          height: 1rem;
        }

        .social-link:not(:last-child) {
          margin-right: 1rem;
        }

        .social-logo {
          width: 1rem;
          height: 1rem;
        }

        .footer-links {
          // IE-11 styles
          -ms-grid-column: 13;
          -ms-grid-column-span: 11;

          // Other browsers styles
          grid-column: 7 / span 6;
        }

        @media (max-width: 1023px) {
          footer {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        footer {
          width: 20.5rem;
        }

        .logo-wrapper {
          display: none;
        }

        .social-links,
        .footer-links {
          // IE-11 styles
          -ms-grid-column: 1;
          -ms-grid-column-span: 11;

          // Other browsers styles
          grid-column: 1 / span 6;
        }

        .social-link:not(:last-child) {
          margin-right: 1.5rem;
        }

        .social-links {
          justify-content: center;
        }

        .footer-links {
          // IE-11 styles
          -ms-grid-row: 2;

          // Other browsers styles
          grid-row: 2;
          margin-top: 1.0625rem;
          justify-content: center;
          flex-wrap: wrap;
          height: auto;
        }

        .footer-link:not(:first-child),
        .font_footer-link_without-margin {
          margin-right: 0;
        }

        .footer-link:last-child {
          margin-top: 0.5rem;
          width: 100%;
          text-align: center;
        }
      }
    `}</style>
  </footer>
}

export default withRouter(translate()(Footer))
