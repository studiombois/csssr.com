import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const links = [
  { href: '/', label: 'Example' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = ({ router: { pathname } }) => (
  <nav>/c
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key} className={href === pathname && 'active' }>
          <Link prefetch href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      title {
        color: blue;
      }
      nav {
        text-align: center;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      .active {
        background: red;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default withRouter(Nav)
