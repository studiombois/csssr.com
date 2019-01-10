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
      <div id='background-for-layout'
        className='layout-columns-on'
      />
      <div id='background-for-grid'
        className='grid'
      />

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

      #background-for-layout,
      #background-for-grid {
        width: 1792px;
        left: 50%;
        transform: translateX(-50%);
      }

      #background-for-layout:after {
        top: 0;
        right: 0;
      }

      #background-for-grid.grid {
        display: block;
        background-size: 8px 8px;
        background-image: linear-gradient(to right, lightgrey 1px, transparent 1px), linear-gradient(to bottom, lightgrey 1px, transparent 1px);
        opacity: 0.5;
      }

      #background-for-layout.layout-columns-on {
        display: block;
        background-size: 152px;
        background-image: linear-gradient(90deg, #F6D3C3 120px, transparent 120px, transparent 32px);
        opacity: 0.5;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        #background-for-layout,
        #background-for-grid {
          width: 1328px;
        }

        #background-for-layout.layout-columns-on {
          background-size: 112px;
          background-image: linear-gradient(90deg, #F6D3C3 96px, transparent 96px, transparent 16px);
          opacity: 0.5;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        #background-for-layout,
        #background-for-grid {
          width: 1232px;
        }

        #background-for-layout.layout-columns-on {
          background-size: 104px;
          background-image: linear-gradient(90deg, #F6D3C3 88px, transparent 88px, transparent 16px);
        }
      }

      @media (min-width: 1024px) and (max-width: 1279px) {
        #background-for-grid,
        #background-for-layout {
          width: 944px;
        }

        #background-for-layout.layout-columns-on {
          background-size: 80px;
          background-image: linear-gradient(90deg, #F6D3C3 64px, transparent 64px, transparent 16px);
        }
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        #background-for-grid,
        #background-for-layout {
          width: 59rem;
        }

        #background-for-layout.layout-columns-on {
          background-size: 5rem;
          background-image: linear-gradient(90deg, #F6D3C3 4rem, transparent 4rem, transparent 1rem);
        }
      }

      @media (max-width: 1023px) {
        #background-for-grid.grid {
          background-size: 0.5rem 0.5rem;
          background-image: linear-gradient(to right, lightgrey 0.0625rem, transparent 0.0625rem), linear-gradient(to bottom, lightgrey 0.0625rem, transparent 0.0625rem);
        }
      }

      @media (max-width: 767px) {
        #background-for-grid,
        #background-for-layout {
          width: 20.5rem;
        }

        #background-for-layout.layout-columns-on {
          background-size: 3.5rem;
          background-image: linear-gradient(90deg, #F6D3C3 3rem, transparent 3rem, transparent 0.5rem);
        }
      }
    `}</style>
    </Fragment>
  }
}
