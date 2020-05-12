/* eslint-disable-next-line */
import React from 'react'
import Square from '../static/icons/header/square.svg'
import Triangle from '../static/icons/header/triangle.svg'
import Circle from '../static/icons/header/circle.svg'
import PieChart from '../static/icons/header/pieChart.svg'
import Bag from '../static/icons/header/bag.svg'
import Computer from '../static/icons/header/computer.svg'
import Message from '../static/icons/header/message.svg'
import CPU from '../static/icons/header/cpu.svg'
import Repeat from '../static/icons/header/repeat.svg'
import LMS from '../static/icons/header/lms.svg'
import Tracker from '../static/icons/header/tracker.svg'

export default {
  menu: [
    {
      id: 'services',
      title: (t) => t.common.header.menu.services.title,
      links: [
        {
          id: 'outsourcing',
          icon: Circle,
          title: (t) => t.common.header.menu.services.outsourcing.title,
          description: (t) => t.common.header.menu.services.outsourcing.description,
          href: 'service/outsourcing-front-end',
        },
        {
          id: 'express',
          icon: Triangle,
          title: (t) => t.common.header.menu.services.express.title,
          description: (t) => t.common.header.menu.services.express.description,
          href: 'service/express-front-end',
        },
        {
          id: 'mvp',
          icon: Square,
          title: (t) => t.common.header.menu.services.mvp.title,
          description: (t) => t.common.header.menu.services.mvp.description,
          href: 'service/mvp-development',
        },
      ],
    },
    {
      id: 'industries',
      title: (t) => t.common.header.menu.industries.title,
      links: [
        {
          id: 'fintech',
          icon: PieChart,
          title: (t) => t.common.header.menu.industries.fintech.title,
          href: 'industry/fintech',
        },
        {
          id: 'eCommerce',
          icon: Bag,
          title: (t) => t.common.header.menu.industries.eCommerce.title,
          href: 'industry/ecommerce',
        },
        {
          id: 'information',
          icon: Computer,
          title: (t) => t.common.header.menu.industries.information.title,
          href: 'industry/information-technology',
        },
        {
          id: 'mediaAndMarketing',
          icon: Message,
          title: (t) => t.common.header.menu.industries.mediaAndMarketing.title,
          href: 'industry/media-and-marketing',
        },
      ],
    },
    {
      id: 'howWeWork',
      title: (t) => t.common.header.menu.howWeWork.title,
      links: [
        {
          id: 'technologies',
          icon: CPU,
          title: (t) => t.common.header.menu.howWeWork.technologies.title,
          description: (t) => t.common.header.menu.howWeWork.technologies.description,
          href: 'tech-stack',
        },
        {
          id: 'processes',
          icon: Repeat,
          title: (t) => t.common.header.menu.howWeWork.processes.title,
          description: (t) => t.common.header.menu.howWeWork.processes.description,
          href: 'way-of-work',
        },
      ],
    },
    {
      id: 'products',
      title: (t) => t.common.header.menu.products.title,
      links: [
        {
          id: 'lms',
          icon: LMS,
          title: (t) => t.common.header.menu.products.lms.title,
          description: (t) => t.common.header.menu.products.lms.description,
          href: 'products/lms',
        },
        {
          id: 'tracker',
          icon: Tracker,
          title: (t) => t.common.header.menu.products.tracker.title,
          description: (t) => t.common.header.menu.products.tracker.description,
          href: 'https://tracker.csssr.com',
        },
      ],
    },
  ],
  links: [
    {
      title: (t) => t.common.header.links.blog.title,
      href: 'https://blog.csssr.com',
    },
    // {
    //   title: t => t.common.header.links.aboutUs.title,
    //   href: 'about-us',
    // },
    {
      title: (t) => t.common.header.links.careers.title,
      href: 'jobs',
    },
  ],
}
