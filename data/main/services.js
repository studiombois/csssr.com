/* eslint-disable-next-line */
import React from 'react'
import Square from '../../static/icons/main/square.svg'
import Triangle from '../../static/icons/main/triangle.svg'
import Circle from '../../static/icons/main/circle.svg'
import Arc from '../../static/icons/main/arc.svg'

export default [
  {
    id: 'outsourcing',
    icon: Circle,
    iconName: 'circle',
    title: 'main:services.outsourcing.title',
    subtitle: 'main:services.outsourcing.subtitle',
    href: 'outsourcing-front-end',
  },
  {
    id: 'express',
    icon: Triangle,
    iconName: 'triangle',
    title: 'main:services.express.title',
    subtitle: 'main:services.express.subtitle',
    href: 'express-front-end',
  },
  {
    id: 'mvp',
    icon: Square,
    iconName: 'square',
    title: 'main:services.mvp.title',
    subtitle: 'main:services.mvp.subtitle',
    href: 'mvp-development ',
  },
  {
    id: 'backend',
    icon: Arc,
    iconName: 'arc',
    title: 'main:services.backend.title',
    subtitle: 'main:services.backend.subtitle',
    href: 'back-end-and-devops',
  },
]
