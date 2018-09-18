import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import CSSSRLogoIcon from '../static/icons/csssr_logo.svg'
import BurgerIcon from '../static/icons/burger.svg'

const links = [
  { href: '/competence_and_services', label: 'Competence & Services' },
  { href: '/customers', label: 'Customers' },
  { href: '/hire_us', label: 'Hire us' },
]

const csssrLogoIcon = <CSSSRLogoIcon width='12rem' height='3rem' color='black'/>
const burgerIcon = <BurgerIcon width='3rem' height='2.25rem'/>

const Header = ({ router: { pathname }, sectionName }) =>
  <header className='grid-container'>
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

    <nav className='nav'>
      <ul className='nav-list'>
        {links.map(({ href, label }) => (
          <li
            className='nav-list-item'
            key={`nav-link-${href}-${label}`}
          >
            <Link prefetch href={href}>
              <a className='nav-list-link font_top-menu'>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <span className='section-name font_perforator-16-black'>
      {/* //TODO: заглушка для теста, убрать при деплое на прод */}
      {sectionName || 'Software Engeniring'}
    </span>

    <button className='burger'>
      {burgerIcon}
    </button>

    <style jsx>{`
      header {
        margin-right: auto;
        margin-left: auto;
        padding-left:  8rem;
        padding-right: 8rem;
        height: 8rem;
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

      .nav {
        grid-column: 3 / span 6;
        height: 4rem;
      }

      .nav-list {
        display: flex;
        width: 100%;
        height: 100%;
      }

      .nav-list-item:not(:last-child) {
        height: 100%;
        margin-right: 3rem;
      }

      .nav-list-link {
        height: 4rem;
      }

      .section-name {
        grid-column: 9 / span 3;
        height: 3rem;
        text-align: right;
      }

      .burger {
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 4rem;
        height: 4rem;
        border: none;
        font-size: 0;
        background: none;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        header {
          padding-left:  2rem;
          padding-right: 2rem;
          width: 1360px
        }
      }

      @media (max-width: 1359px) {
        header {
          padding-left:  3rem;
          padding-right: 3rem;
          width: 1280px
        }
      }

    `}</style>
  </header>

export default withRouter(Header)
