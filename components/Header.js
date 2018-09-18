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
    <nav>
      {pathname === '/'
        ? <span>
          <CSSSRLogoIcon width='12rem' height='3rem' color='black'/>
        </span>

        : <Link prefetch href={'/'}>
          <a>
            <CSSSRLogoIcon width='12rem' height='3rem' color='black'/>
          </a>
        </Link>
      }
      <div className='topMenu'>dasdasdasda</div>
      <ul>
        {links.map(({ href, label }) => (
          <li
            key={`nav-link-${href}-${label}`}
            className={href === pathname && 'active' }>
            <Link prefetch href={href}>
              <a className='topMenu'>{label}</a>
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

        outline: 1px solid red;
      }

      nav {
        padding-left: 11rem;
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
