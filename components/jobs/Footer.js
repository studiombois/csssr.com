import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { translate } from 'react-i18next'
import footerLinks from '../../data/jobs/footerLinks'

const handleLinkClick = () => {
  document.documentElement.style.scrollBehavior = 'auto'

  const scrollStylesTimer = setTimeout(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    clearTimeout(scrollStylesTimer)
  })
}

const Footer = ({ router: { pathname }, className, lng, t }) => {
  const rootUrl = `/${lng}`

  return <footer className={`${className} grid-container`}>
    {pathname === rootUrl
      ? <span className='logo-wrapper'>
        <img
          className='logo'
          src='../static/icons/csssr_logo.svg'
          alt='CSSSR Logo'
        />
      </span>

      : <span className='logo-wrapper'>
        <Link prefetch href={rootUrl}>
          <a>
            <img
              className='logo'
              src='../static/icons/csssr_logo.svg'
              alt='CSSSR Logo'
            />
          </a>
        </Link>
      </span>
    }

    <ul className='social-links'>
      {footerLinks.map(({ href, label }) =>
        <li key={label} className='social-link'>
          <a
            aria-label={`${label} link`}
            href={href}
            target='_blank'
          >
            <img
              className='social-logo'
              src={`../static/icons/${label.toLowerCase()}.svg`}
              alt={`${label} logo`}
            />
          </a>
        </li>
      )}
    </ul>

    <ul className='footer-links'>
      <li className='footer-link'>
        <a
          href='#private-policy'
          className='font_footer-link'
          onClick={handleLinkClick}
        >
          Политика конфеденциальности
        </a>
      </li>

      <li className='footer-link'>
        <span className='font_footer-text' dangerouslySetInnerHTML={{ __html: t('common:footer.alliancePartText') }} />
        {' '}
        <a
          href='https://frontend.digital/'
          className='font_footer-link'
          target='_blank'
        >
          Frontend.Digital alliance
        </a>
      </li>
    </ul>

    <style jsx>{`
      footer {
        margin-right: auto;
        margin-left: auto;
        padding-bottom: 5.4375em;
        width: 1792px;
        align-items: center;
      }

      .logo-wrapper {
        grid-column: 1 / span 2;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        height: 2.5rem;
        text-align: center;
      }

      .logo {
        width: 6.0625rem;
        height: 1.5rem;
      }

      .social-links {
        grid-column: 8 / span 5;
        display: flex;
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
        grid-row: 15;
        padding-top: 33px;


        grid-column: 8 / span 5;
        display: flex;
        justify-content: flex-start;
        height: 1.5rem;
      }

      .footer-link:not(:last-child) {
        margin-right: 1rem;
      }

      .change-language-link-wrapper {
        grid-column: 6 / span 3;
        height: 1.5rem;
        text-align: right;
        align-self: center;
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
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        footer {
          width: 944px;
        }

        @media (max-width: 1023px) {
          footer {
            width: 59rem;
          }
        }
      }
    `}</style>
  </footer>
}

export default withRouter(translate()(Footer))
