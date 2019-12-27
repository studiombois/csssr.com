import React, { Fragment, PureComponent } from 'react'
import Common from '../components/Common'
import Settings from '../components/Settings'
import Text from '../components/Text'

export default class Fonts extends PureComponent {
  componentDidMount() {
    document.getElementById('background-for-grid').classList.add('grid')
  }

  componentWillUnmount() {
    document.getElementById('background-for-grid').classList.remove('grid')
  }

  render() {
    return (
      <Fragment>
        <Common />
        <Settings />
        <Text />
        <section>
          <div className="font_h1-slab">H1 Slab</div>
          <div className="font_h1-regular">H1 Regular</div>
          <div className="font_h2-slab">H2 Slab</div>
          <div className="font_h2-regular">H2 Regular</div>
          <div className="font_h3-slab">H3 Slab</div>
          <div className="font_h3-regular">H3 Regular</div>
          <div className="font_subhead-slab">Subhead Slab</div>
          <div className="font_subhead-regular">Subhead Regular</div>
          <div className="font_link-list_16">16 Link List</div>
          <div className="font_link-list_24">24 Link List</div>
          <div className="font_link-list_28">28 Link List</div>
          <div className="font_burger-menu">Burger Menu</div>
          <div className="font_top-menu">Top Menu</div>
          <div className="font_p14-regular">p 14 Regular</div>
          <div className="font_p16-regular">p 16 Regular</div>
          <div className="font_p24-strong">p 24 Strong</div>
          <div className="font_perforator-16-black">Perforator 16 black</div>
          <div className="font_perforator-10-regular">Perforator 10 regular</div>
        </section>
        <style jsx>{`
        section {
          padding-top: 1rem;
          margin-rigth: auto;
          margin-left: auto;
          width: 1824px;
        }

        div {
          margin-bottom: 0.5rem;
        }

        @media (min-width: 1280px) and (max-width: 1359px) {
          section {
            width: 1232px;
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          section {
            width: 944px;
          }
        }

        @media (min-width: 368px) and (max-width: 1023px) {
          section {
            width: 59rem;
          }
      `}</style>
      </Fragment>
    )
  }
}
