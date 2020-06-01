import React, { useEffect, useRef, useState } from 'react'
import { string } from 'prop-types'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Form.styles'

const formData = {
  en: {
    button: 'Contact Us',
    title: 'Let’s Talk',
    subtitle: 'with Singapore sales manager',
    manager: {
      name: 'Anastasia Ignatenko',
      text:
        'Want to <a href="https://calendly.com/andrey-yankovsky/30min?month=2020-06">book a call</a> instead of boring form?',
    },
    calandly: {
      title: 'Call booked!',
      text: 'We dropped all information into your mailbox',
    },
    footer: {
      title: 'Or write to us directly',
      links: [
        {
          title: 'Have a project?',
          href: 'newproject@csssr.com',
        },
        {
          title: 'Employment',
          href: 'letmework@csssr.com',
        },
        {
          title: 'General request',
          href: 'mailbox@csssr.com',
        },
      ],
    },
  },
  ru: {
    button: 'Отправить',
    title: 'Давайте пообщаемся',
    subtitle: 'С нашим менеджером',
    manager: {
      name: 'Анастасия Внученко',
      text:
        'Давайте <a href="https://calendly.com/andrey-yankovsky/30min?month=2020-06">забронируем звонок</a> вместо скучной формы?',
    },
    calandly: {
      title: 'Звонок забронирован!',
      text: 'Мы отправили всю информацию на ваш почтовый ящик',
    },
    footer: {
      title: 'или пишите нам напрямую',
      links: [
        {
          title: 'У вас есть проект?',
          href: 'newproject@csssr.com',
        },
        {
          title: 'Трудоустройство',
          href: 'letmework@csssr.com',
        },
        {
          title: 'Общий запрос',
          href: 'mailbox@csssr.com',
        },
      ],
    },
  },
}

const Form = ({ className, isVisible, showCalendlyCallback, calandlyTime, onCloseClick, lng }) => {
  const titleRef = useRef(null)
  useEffect(() => {
    const callback = ([entry]) =>
      entry.target.classList.toggle('stuck', entry.intersectionRatio < 1)
    const options = { threshold: [1] }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(callback, options)
      observer.observe(titleRef.current)

      return () => {
        observer.disconnect()
      }
    }
  })
  const [isCallBooked, setCallStatus] = useState(showCalendlyCallback)
  const [counter, setCounter] = useState(4)
  const [submitStatus, setSubmitStatus] = useState('pending')

  useEffect(() => {
    if (isCallBooked) {
      const interval = setInterval(() => {
        if (counter === 0) {
          clearInterval(interval)
          setCallStatus(false)
          return
        }

        setCounter(counter - 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  })

  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'fail') {
      const interval = setInterval(() => {
        if (counter === 0) {
          clearInterval(interval)
          setSubmitStatus('pending')
          return
        }

        setCounter(counter - 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  })

  return (
    <div data-scroll-lock-scrollable className={cn(className, { is_visible: isVisible })}>
      <button className="close_button" onClick={onCloseClick} />

      <div className="title" ref={titleRef}>
        {formData[lng].title}
        <div className="subtitle">{formData[lng].subtitle}</div>
      </div>

      <Global
        styles={css`
          .is_dropdown_opened .burger {
            z-index: ${isVisible ? 0 : 1};
          }
        `}
      />

      <div className="manager">
        <div className={cn('manager-avatar', { is_call_booked: isCallBooked })} />
        <div className="manager-info">
          {isCallBooked ? (
            <>
              <div className="manager-name">
                {formData[lng].calandly.title} <span className="seconds">{counter}s</span>
              </div>
              <div className="manager-text">
                <span>{calandlyTime}</span>
                <span>{formData[lng].calandly.text}</span>
              </div>
            </>
          ) : (
            <>
              <div className="manager-name">{formData[lng].manager.name}</div>
              <div
                className="manager-text"
                dangerouslySetInnerHTML={{ __html: formData[lng].manager.text }}
              />
            </>
          )}
        </div>
      </div>

      <div className={cn('form', { [`submit_status_${submitStatus}`]: submitStatus })}>
        {submitStatus === 'pending' && (
          <>
            <img src={require(`../../../static/new-header/images/form_${lng}.png`)} />
            <button
              onClick={() => {
                setSubmitStatus('success')
                setCounter(4)
              }}
            >
              {formData[lng].button}
            </button>
          </>
        )}

        {submitStatus === 'success' && (
          <>
            <img src={require(`../../../static/new-header/images/success.png`)} />
            <div className="status-text">Success!  We will back to you as soon as possible.</div>
            <div className="status-button">
              <img
                className="status-button-img"
                src={require(`../../../static/new-header/images/good.png`)}
              />{' '}
              <span className="seconds">{counter}s</span>
            </div>
          </>
        )}
      </div>

      <footer>
        <div className="footer-title">{formData[lng].footer.title}</div>
        <ul className="footer-links">
          {formData[lng].footer.links.map(({ title, href }) => (
            <li key={href}>
              <span>{title}</span>
              <a href={`mailto:${href}`}>{href}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}

Form.propTypes = {
  className: string,
}

export default styled(Form)`
  ${styles}
`
