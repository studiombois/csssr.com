import React, { Fragment, PureComponent } from 'react'

export default class Settings extends PureComponent {
  componentDidMount() {
    const keyCodes = [
      {
        className: 'grid',
        keyCode: 71,
      },
      {
        className: 'layout-columns-on',
        keyCode: 76,
      },
    ]

    window.addEventListener('keydown', function (event) {
      keyCodes.map(({ className, keyCode }) => {

        if ((event.ctrlKey || event.metaKey) && event.which === keyCode) {
          event.preventDefault()

          document.body.classList.toggle(className)
        }
      })
    })

    window.addEventListener('keydown', function (event) {
      if (event.which === 9) {
        document.body.classList.add('outline')
      }
    })

    window.addEventListener('click', function () {
      document.body.classList.remove('outline')
    })
  }

  render() {
    return <Fragment><style jsx global>{`
      .grid {
        background-size: 0.5rem 0.5rem;
        background-image: linear-gradient(to right, lightgrey 1px, transparent 1px), linear-gradient(to bottom, lightgrey 1px, transparent 1px);
      }

      .layout-columns-on {
        background-position: 4rem;
        background-size: 9.5rem;
        background-image: linear-gradient(90deg, #F6D3C3 7.5rem, transparent 7.5rem, transparent 2rem);
        opacity: 0.5;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        .grid {
          background-size: 0.5rem 0.5rem;
          background-image: linear-gradient(to right, lightgrey 1px, transparent 1px), linear-gradient(to bottom, lightgrey 1px, transparent 1px);
        }

        .layout-columns-on {
          background-position: 1rem;
          background-size: 7rem;
          background-image: linear-gradient(90deg, #F6D3C3 6rem, transparent 6rem, transparent 1rem);
          opacity: 0.5;
        }
      }

      @media (max-width: 1359px) {
        .layout-columns-on {
          background-position: 1.5rem;
          background-size: 6.5rem;
          background-image: linear-gradient(90deg, #F6D3C3 5.5rem, transparent 5.5rem, transparent 1rem);
        }
      }
    `}</style></Fragment>
  }
}
