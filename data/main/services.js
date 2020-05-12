/* eslint-disable-next-line */
import React from 'react'
import Square from '../../static/icons/main/square.svg'
import Triangle from '../../static/icons/main/triangle.svg'
import Circle from '../../static/icons/main/circle.svg'

export default [
  {
    id: 'outsourcing',
    icon: Circle,
    iconName: 'circle',
    title: (t) => t.main.services.outsourcing.title,
    subtitle: (t) => t.main.services.outsourcing.subtitle,
    href: 'outsourcing-front-end',
  },
  {
    id: 'express',
    icon: Triangle,
    iconName: 'triangle',
    title: (t) => t.main.services.express.title,
    subtitle: (t) => t.main.services.express.subtitle,
    href: 'express-front-end',
  },
  {
    id: 'mvp',
    icon: Square,
    iconName: 'square',
    title: (t) => t.main.services.mvp.title,
    subtitle: (t) => t.main.services.mvp.subtitle,
    href: 'mvp-development',
  },
]
