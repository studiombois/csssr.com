import React, { PureComponent } from 'react'

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
      {
        className: 'pixel-perfect',
        keyCode: 80,
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
  }

  render() {
    return <style jsx>{`
      .pixel-perfect {
        background-position: 50% 0;
        background-size: 1920px;
        background-image: url('http://s.csssr.ru/U31J879TR/1920__....png');
        background-repeat: no-repeat;
      }

      .grid {
        background-size: 1rem 1rem;
        background-image: linear-gradient(to right, lightgrey 1px, transparent 1px), linear-gradient(to bottom, lightgrey 1px, transparent 1px);
      }

      .layout-columns-on {
        background-position: 8rem;
        background-size: 19rem;
        background-image: linear-gradient(90deg, #F6D3C3 15rem, #fff 15rem, #fff 4rem);
        opacity: 0.5;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        .pixel-perfect {
          background-size: 1360px;
          background-image: url('http://s.csssr.ru/U31J879TR/1360__1920.png');
        }

        .layout-columns-on {
          background-position: 2rem;
          background-size: 14rem;
          background-image: linear-gradient(90deg, #F6D3C3 12rem, #fff 12rem, #fff 2rem);
        }
      }

      @media (max-width: 1359px) {
        .pixel-perfect {
          background-size: 1280px;
          background-image: url('http://s.csssr.ru/U31J879TR/1280_1360.png');
        }

        .layout-columns-on {
          background-position: 3rem;
          background-size: 13rem;
          background-image: linear-gradient(90deg, #F6D3C3 11rem, #fff 11rem, #fff 2rem);
        }
      }
    `}</style>
  }
}
