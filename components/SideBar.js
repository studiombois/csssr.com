import React, { PureComponent } from 'react'
import { withRouter } from 'next/router'
import { bool, func } from 'prop-types'
import cn from 'classnames'
import CrossIcon from '../static/icons/cross.svg'
import ClickOutside from './ui-kit/ClickOutside'

const items = [{
  href: '/en/software',
  text: 'Software Engeniring',
}, {
  href: '/en/recruitment',
  text: 'Recruitment',
}, {
  href: '/en/company',
  text: 'Company',
}, {
  href: '/en/products',
  text: 'Products',
}, {
  href: '/en/education',
  text: 'Education',
}]

const crossIcon = <CrossIcon width='3rem' height='3rem'/>
const clickOutsideStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  height: '100%',
}


export class SideBar extends PureComponent {
  static propTypes = {
    isOpened: bool,
    onToggle: func,
    onClose: func,
  }

  renderNavItem = ({ href, text }) => {
    const { router: { pathname } } = this.props

    return (
      <li key={text} className='item'>
        <a
          href={href}
          className={cn('font_burger-menu link', {
            link_active: pathname === href,
          })}
        >
          {text}
        </a><style jsx>{`
          .link {
            padding-right: 11rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 6rem;
          }

          .link_active {
            background-color: #7b7b7b;
            color: #fff;
          }
        `}</style>
      </li>
    )
  }

  render() {
    const { isOpened, onToggle, onClose } = this.props

    return (
      <aside className={cn('sidebar', {
        sidebar_opened: isOpened,
      })}>
        <ClickOutside
          onOutsideClick={onClose}
          style={clickOutsideStyles}
        >
          <button type='button' aria-label='Close menu' className='close' onClick={onToggle}>
            {crossIcon}
          </button>
          <div className='body'>
            <div className='top'>
              <div className='font_perforator-16-black active'>Company</div>
              <ul className='list'>
                {items.map(this.renderNavItem)}
              </ul>
            </div>
            <div className='bottom'>
              <a
                href='/ru'
                className='font_footer-link'
                target='_blank'
              >
                Доступно на русском языке
              </a>
            </div>
          </div>
        </ClickOutside><style jsx>{`
          .sidebar {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 10;
            width: 53rem;
            background-color: #fff;
            transform: translateX(100%);
            transition: transform 0.3s ease-out;
          }

          .data {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            height: 100%;
          }

          .sidebar:before {
            position: absolute;
            top: 0;
            right: 10000px;
            bottom: 0;
            width: 10000px;
            opacity: 0;
            background-color: #000;
            content: '';
            transition: right 0s ease-out 1s, opacity 0.3s ease-out;
          }

          .sidebar_opened {
            transform: translateX(0);
          }

          .sidebar_opened:before {
            right: 100%;
            z-index: 0;
            opacity: 0.3;
            transition: right 0s ease-out 0s, opacity 0.3s ease-out;
          }

          .close {
            position: absolute;
            z-index: 1;
            top: 2.5rem;
            right: 8rem;
            height: 3rem;
            width: 3rem;
            border: none;
            background: none;
            cursor: pointer;
          }

          .active {
            position: relative;
            margin-bottom: 8.25rem;
            padding-right: 16rem;
            line-height: 2rem;
            text-align: right;
          }

          .active::before {
            position: absolute;
            top: 15px;
            left: 50%;
            height: 96px;
            width: 64px;
            opacity: 0.3;
            background-color: #ff0000;
            // content: '';
          }

          .body {
            padding-bottom: 8rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
          }

          .top {
            margin-top: 3rem;
          }

          .bottom {
            position: relative;
            margin-top: 2rem;
            margin-bottom: -6px;
            padding-right: 11rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .bottom::before {
            position: absolute;
            top: 18px;
            left: 78%;
            height: 64px;
            width: 64px;
            opacity: 0.3;
            background-color: #ff0000;
            // content: '';
          }
        `}</style>
      </aside>
    )
  }
}

export default withRouter(SideBar)
