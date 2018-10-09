import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { translate } from 'react-i18next'
import CSSSRLogoIcon from '../static/icons/csssr_logo.svg'
import FacebookIcon from '../static/icons/facebook.svg'
import LinkedInIcon from '../static/icons/linkedin.svg'

const csssrLogoIcon = <CSSSRLogoIcon style={{ width: '6.0625rem', height: '1.5rem', color: 'black' }}/>
const facebookIcon = <FacebookIcon style={{ width: '1.5rem', height: '1.5rem' }}/>
const linkedInIcon = <LinkedInIcon style={{ width: '1.5rem', height: '1.5rem' }}/>

const handleLinkClick = () => {
  document.documentElement.style.scrollBehavior = 'auto'

  const scrollStylesTimer = setTimeout(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    clearTimeout(scrollStylesTimer)
  }, 0)
}

const Footer = ({ router: { pathname }, lng }) => {
  const rootUrl = `/${lng}`

  return <footer className='grid-container'>
    {pathname === rootUrl
      ? <span className='logo-wrapper'>
        {csssrLogoIcon}
      </span>

      : <span className='logo-wrapper'>
        <Link prefetch href={rootUrl}>
          <a>
            {csssrLogoIcon}
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
          {facebookIcon}
        </a>
      </li>

      <li className='social-link'>
        <a
          aria-label='LinkedIn link'
          href='https://www.linkedin.com/company/csssr'
          target='_blank'
        >
          {linkedInIcon}
        </a>
      </li>
    </ul>

    <ul className='footer-links'>
      <li className='footer-link'>
        <a
          href='#private-policy'
          className='font_footer-link'
          onClick={handleLinkClick}
        >
          Privacy policy
        </a>
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
        <span className='font_footer-text'>
          CSSSR is a part of
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
        padding-right: 3rem;
        padding-left: 3rem;
        padding-bottom: 3.5rem;
        width: 1888px;
        align-items: center;
      }

      .logo-wrapper {
        grid-column: 1 / span 2;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        height: 2.5rem;
        text-align: center;
      }

      .social-links {
        grid-column: 4 / span 2;
        display: flex;
        font-size: 0;
      }

      .social-link:not(:last-child) {
        margin-right: 1.5rem;
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
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          width: 1344px
        }
      }

      @media (max-width: 1359px) {
        footer {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          width: 1248px
        }
      }
    `}</style>
  </footer>
}

export default withRouter(translate()(Footer))
