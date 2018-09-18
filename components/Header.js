import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import CSSSRLogoIcon from '../static/icons/csssr_logo.svg'

const links = [
  { href: '/competence_and_services', label: 'Competence & Services' },
  { href: '/customers', label: 'Customers' },
  { href: '/hire_us', label: 'Hire us' },
]

const Header = ({ router: { pathname }, section }) =>
  <header className='grid-container'>
    {pathname === '/'
      ? <span className='logo-wrapper'>
        <CSSSRLogoIcon width='12rem' height='3rem' color='black'/>
      </span>

      : <span>
        <Link prefetch href={'/'}>
          <a className='logo-wrapper'>
            <CSSSRLogoIcon width='12rem' height='3rem' color='black'/>
          </a>
        </Link>
      </span>
    }

    <nav className='nav'>
      <ul>
        {links.map(({ href, label }) => (
          <li className='nav-item'
            key={`nav-link-${href}-${label}`}
            className={href === pathname && 'active' }>
            <Link prefetch href={href}>
              <a className='font_top-menu'>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <span >
      {/* section */}
    </span>

    <button>
      {/* burger */}
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

        outline: 1px solid red;
      }

      .logo {
        padding-top: 1rem;
        padding-bottom: 1rem;
        height: 5rem;
        grid-column: 1 / span 2;
        outline: 1px solid blue;
        text-align: center;
      }

      .nav {
        height: 4rem;
        grid-column: 3 / span 6;

        outline: 1px solid green;
      }

      .nav-item {
        display: inline-block;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        header {
          width: 1360px
        }
      }

      @media (max-width: 1359px) {
        header {
          width: 1280px
        }
      }

    `}</style>
  </header>

export default withRouter(Header)
