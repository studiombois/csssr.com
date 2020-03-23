import Facebook from '../static/icons/facebook.svg'
import Linkedin from '../static/icons/linkedin.svg'
import Instagram from '../static/icons/instagram.svg'
import Youtube from '../static/icons/youtube.svg'
import Soundcloud from '../static/icons/soundcloud.svg'
import Telegram from '../static/icons/telegram.svg'
import Twitter from '../static/icons/twitter.svg'
import Vk from '../static/icons/vk.svg'

export const socials = [
  {
    id: 'facebook',
    href: 'https://www.facebook.com/csssr',
    icon: Facebook,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/company/csssr',
    icon: Linkedin,
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/csssr.dev',
    icon: Instagram,
  },
  {
    id: 'youtube',
    href: 'https://www.youtube.com/channel/UCdkZ6ckHOJ3DjAYxoGeMG0w',
    icon: Youtube,
  },
  {
    id: 'soundcloud',
    href: 'https://soundcloud.com/csssr',
    icon: Soundcloud,
  },
  {
    id: 'telegram',
    href: 'https://t.me/csssr',
    icon: Telegram,
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/csssr_dev',
    icon: Twitter,
  },
  {
    id: 'vk',
    href: 'https://vk.com/csssr_dev',
    icon: Vk,
  },
]

export const nav = [
  {
    id: 'services',
    links: [
      {
        id: 'outsourcing',
        href: 'service/outsourcing-front-end',
      },
      {
        id: 'express',
        href: 'service/express-front-end',
      },
      {
        id: 'mvp',
        href: 'service/mvp-development',
      },
    ],
  },
  {
    id: 'industries',
    links: [
      {
        id: 'fintech',
        href: 'industry/fintech',
      },
      {
        id: 'eCommerce',
        href: 'industry/ecommerce',
      },
      {
        id: 'information',
        href: 'industry/information-technology',
      },
      {
        id: 'mediaAndMarketing',
        href: 'industry/media-and-marketing',
      },
    ],
  },
  {
    id: 'howWeWork',
    links: [
      {
        id: 'technologies',
        href: 'tech-stack',
      },
      {
        id: 'wayOfWork',
        href: 'way-of-work',
      },
      {
        id: 'coreValues',
        href: 'core-values',
      },
    ],
  },
  {
    id: 'company',
    links: [
      // {
      //   id: 'aboutUs',
      //   href: 'about-us',
      // },
      {
        id: 'careers',
        href: 'jobs',
      },
      // {
      //   id: 'blog',
      //   href: 'https://blog.csssr.com',
      // },
    ],
  },
]
