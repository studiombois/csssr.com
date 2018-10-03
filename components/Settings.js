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
      console.log((event.ctrlKey || event.metaKey) && event.which === 71)

      if ((event.ctrlKey || event.metaKey) && event.which === 71) {
        event.preventDefault()
        document.getElementById('background-for-grid').classList.toggle('grid')
      } else if ((event.ctrlKey || event.metaKey) && event.which === 76) {
        event.preventDefault()
        document.getElementById('background-for-layout').classList.toggle('layout-columns-on')
      }
    })
  }

  // backgroundLayoutRef = React.createRef()

  handleBackgroundLayoutRef = ref => { this.backgroundLayoutRef = ref }

  render() {
    return <Fragment>
      <div id='background-for-layout' />
      <div id='background-for-grid' />

      <style jsx global>{`
      #background-for-layout,
      #background-for-grid {
        position: absolute;
        z-index: 99999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background-for-grid {
        right: 0;
        bottom: 0;
      }

      #background-for-layout {
        width: 1920px;
        left: 50%;
        transform: translateX(-50%);
      }

      #background-for-layout:before,
      #background-for-layout:after {
        content: '';
        position: absolute;
        height: 100%;
        width: 4rem;
        background-color: white;
      }

      #background-for-layout:after {
        top: 0;
        right: 0;
      }

      .grid {
        background-size: 0.5rem 0.5rem;
        background-image: linear-gradient(to right, lightgrey 1px, transparent 1px), linear-gradient(to bottom, lightgrey 1px, transparent 1px);
        opacity: 0.5;
      }

      .layout-columns-on {
        background-position: 4rem;
        background-size: 9.5rem;
        background-image: linear-gradient(90deg, #F6D3C3 7.5rem, transparent 7.5rem, transparent 2rem);
        opacity: 0.5;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        #background-for-layout {
          width: 1360px;
        }

        #background-for-layout:before,
        #background-for-layout:after {
          width: 0;
        }

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
        #background-for-layout {
          width: 1280px;
        }

        #background-for-layout:before,
        #background-for-layout:after {
          width: 1rem;
        }

        .layout-columns-on {
          background-position: 1.5rem;
          background-size: 6.5rem;
          background-image: linear-gradient(90deg, #F6D3C3 5.5rem, transparent 5.5rem, transparent 1rem);
        }
      }
    `}</style>
    </Fragment>
  }
}
