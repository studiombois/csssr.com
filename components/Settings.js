import React, { Fragment, PureComponent } from 'react'

export default class Settings extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', function (event) {
      if ((event.ctrlKey || event.metaKey) && event.which === 71) {
        event.preventDefault()
        document.getElementById('background-for-grid').classList.toggle('grid')
      } else if ((event.ctrlKey || event.metaKey) && event.which === 76) {
        event.preventDefault()
        document.getElementById('background-for-layout').classList.toggle('layout-columns-on')
      }
    })
  }

  render() {
    return <Fragment>
      <div id='background-for-layout' />
      <div id='background-for-grid' />

      <style jsx global>{`
      #background-for-layout,
      #background-for-grid {
        display: none;
        position: absolute;
        z-index: 99999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      /* #background-for-grid {
        right: 0;
        bottom: 0;
      } */

      #background-for-layout,
      #background-for-grid {
        width: 120rem;
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

      #background-for-grid.grid {
        display: block;
        background-size: 0.5rem 0.5rem;
        background-image: linear-gradient(to right, lightgrey 0.0625rem, transparent 0.0625rem), linear-gradient(to bottom, lightgrey 0.0625rem, transparent 0.0625rem);
        opacity: 0.5;
      }

      #background-for-layout.layout-columns-on {
        display: block;
        background-position: 4rem;
        background-size: 9.5rem;
        background-image: linear-gradient(90deg, #F6D3C3 7.5rem, transparent 7.5rem, transparent 2rem);
        opacity: 0.5;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        #background-for-layout,
        #background-for-grid {
          width: 85rem;
        }

        #background-for-layout:before,
        #background-for-layout:after {
          width: 0;
        }

        #background-for-layout.layout-columns-on {
          background-position: 1rem;
          background-size: 7rem;
          background-image: linear-gradient(90deg, #F6D3C3 6rem, transparent 6rem, transparent 1rem);
          opacity: 0.5;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        #background-for-layout,
        #background-for-grid {
          width: 80rem;
        }

        #background-for-layout:before,
        #background-for-layout:after {
          width: 1rem;
        }

        #background-for-layout.layout-columns-on {
          background-position: 1.5rem;
          background-size: 6.5rem;
          background-image: linear-gradient(90deg, #F6D3C3 5.5rem, transparent 5.5rem, transparent 1rem);
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        #background-for-grid,
        #background-for-layout {
          width: 59rem;
        }

        /* #background-for-layout {
          width: 62rem;
        } */

        #background-for-layout:before,
        #background-for-layout:after {
          width: 0;
        }

        #background-for-layout.layout-columns-on {
          background-position: 0;
          background-size: 5rem;
          background-image: linear-gradient(90deg, #F6D3C3 4rem, transparent 4rem, transparent 1rem);
        }
      }
    `}</style>
    </Fragment>
  }
}
