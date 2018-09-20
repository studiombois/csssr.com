import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import CSSSRLogoIcon from '../static/icons/csssr_logo.svg'
import FacebookIcon from '../static/icons/facebook.svg'
import LinkedInIcon from '../static/icons/linkedin.svg'

const csssrLogoIcon = <CSSSRLogoIcon width='12rem' height='3rem' color='black'/>
const facebookIcon = <FacebookIcon width='3rem' height='3rem' />
const linkedInIcon = <LinkedInIcon width='3rem' height='3rem' />

const Footer = ({ router: { pathname } }) =>
  <footer className='grid-container'>
    {pathname === '/'
      ? <span className='logo-wrapper'>
        {csssrLogoIcon}
      </span>

      : <span className='logo-wrapper'>
        <Link prefetch href={'/'}>
          <a>
            {csssrLogoIcon}
          </a>
        </Link>
      </span>
    }

    <ul className='social-links'>
      {/* <li className='social-link'>
        <a
          href='https://vk.com/csssr'
          target='_blank'
        >
          {vkIcon}
        </a>
      </li>*/}

      <li className='social-link'>
        <a
          href='https://www.facebook.com/csssr/'
          target='_blank'
        >
          {facebookIcon}
        </a>
      </li>

      <li className='social-link'>
        <a
          href='https://www.linkedin.com/company/csssr'
          target='_blank'
        >
          {linkedInIcon}
        </a>
      </li>
    </ul>

    <ul className='footer-links'>
      <li className='footer-link'>
        {/* TODO: поставить правильную ссылку */}
        <a
          href='https://en.wikipedia.org/wiki/Privacy_policy'
          className='font_footer-link'
          target='_blank'
        >
          Privacy policy
        </a>
      </li>

      <li className='footer-link'>
        {/* TODO: поставить правильную ссылку */}
        <a
          href='https://en.wikipedia.org/wiki/HTTP_cookie'
          className='font_footer-link'
          target='_blank'
        >
          Website cookie policy
        </a>
      </li>

      <li className='footer-link'>
        <span className='font_footer-text'>
          CSSSR is a part off
        </span>

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
        padding-right: 8rem;
        padding-left:  8rem;
        padding-top: 64rem;
        padding-bottom: 8rem;
        width: 1920px;
        align-items: center;
      }

      .logo-wrapper {
        grid-column: 1 / span 2;
        padding-top: 1rem;
        padding-bottom: 1rem;
        height: 5rem;
        text-align: center;
      }

      .social-links {
        grid-column: 4 / span 2;
        display: flex;
        font-size: 0;
      }

      .social-link:not(:last-child) {
        margin-right: 3rem;
      }

      .footer-links {
        grid-column: 8 / span 4;
        display: flex;
        justify-content: flex-end;
        height: 3rem;
      }

      .footer-link:not(:last-child) {
        margin-right: 2rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        footer {
          padding-left:  2rem;
          padding-right: 2rem;
          width: 1360px
        }
      }

      @media (max-width: 1359px) {
        footer {
          padding-left:  3rem;
          padding-right: 3rem;
          width: 1280px
        }
      }
    `}</style>
  </footer>

export default withRouter(Footer)
