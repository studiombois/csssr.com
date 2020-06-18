/* eslint-disable-next-line */
import React from 'react'
import { ReactComponent as Square } from '../../static/icons/main/square.svg'
import { ReactComponent as Triangle } from '../../static/icons/main/triangle.svg'
import { ReactComponent as Circle } from '../../static/icons/main/circle.svg'
import { ReactComponent as Arc } from '../../static/icons/main/arc.svg'

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
  {
    id: 'backend',
    icon: Arc,
    iconName: 'arc',
    title: (t) => t.main.services.backend.title,
    subtitle: (t) => t.main.services.backend.subtitle,
    href: 'back-end-and-devops',
  },
]
