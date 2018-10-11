import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { translate } from 'react-i18next'

const Footer = ({ router: { pathname }, lng, t }) => {
  const rootUrl = `/${lng}`

  return <footer className='grid-container'>
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
      {/* <li className='social-link'>
        <a
          aria-label='VK link'
          href='https://vk.com/csssr'
          target='_blank'
        >
          {vkIcon}
        </a>
      </li>*/}

      <li className='social-link'>
        <a
          aria-label='Facebook link'
          href='https://www.facebook.com/csssr/'
          target='_blank'
        >
          <img
            className='social-logo'
            src='../static/icons/facebook.svg'
            alt='CSSSR Logo'
          />
        </a>
      </li>

      <li className='social-link'>
        <a
          aria-label='LinkedIn link'
          href='https://www.linkedin.com/company/csssr'
          target='_blank'
        >
          <img
            className='social-logo'
            src='../static/icons/linkedin.svg'
            alt='CSSSR Logo'
          />
        </a>
      </li>
    </ul>

    <ul className='footer-links'>
      <li className='footer-link'>
        <a
          href='/privacy_policy'
          className='font_footer-link'
          target='_blank'
          dangerouslySetInnerHTML={{ __html: t('common:footer.privacyPolicy') }}
        />
      </li>

      {/* <li className='footer-link'>
      /!* TODO: поставить правильную ссылку *!/
        <a
          href='https://en.wikipedia.org/wiki/HTTP_cookie'
          className='font_footer-link'
          target='_blank'
        >
          Website cookie policy
        </a>
      </li> */}

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
        padding-bottom: 3.5rem;
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
        grid-column: 4 / span 2;
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
        grid-column: 8 / span 4;
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
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        footer {
          width: 944px;
        }

        .logo-wrapper {
          height: 2rem;
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
          grid-column: 6 / span 7;
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
