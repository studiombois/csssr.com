import { ReactComponent as GooglePodcastIcon } from '../static/icons/podcast_google.svg'
import { ReactComponent as ApplePodcastIcon } from '../static/icons/podcast_apple.svg'
import { ReactComponent as SoundcloudPodcastIcon } from '../static/icons/podcast_soundcloud.svg'

import { ReactComponent as Facebook } from '../static/icons/facebook.svg'
import { ReactComponent as Linkedin } from '../static/icons/linkedin.svg'
import { ReactComponent as Instagram } from '../static/icons/instagram.svg'
import { ReactComponent as Youtube } from '../static/icons/youtube.svg'
import { ReactComponent as Soundcloud } from '../static/icons/soundcloud.svg'
import { ReactComponent as Telegram } from '../static/icons/telegram.svg'
import { ReactComponent as Twitter } from '../static/icons/twitter.svg'
import { ReactComponent as Vk } from '../static/icons/vk.svg'

export const mainNav = ['dev', 'store', 'blog', 'school', 'career', 'podcasts']

export const devNav = {
  id: 'dev',
  href: '/',
  sections: [
    {
      id: 'services',
      title: 'common:header.menu.services.title',
      links: [
        {
          id: 'outsourcing',
          title: 'common:header.menu.services.outsourcing.title',
          href: 'service/outsourcing-front-end',
        },
        {
          id: 'express',
          title: 'common:header.menu.services.express.title',
          href: 'service/express-front-end',
        },
        {
          id: 'mvp',
          title: 'common:header.menu.services.mvp.title',
          href: 'service/mvp-development',
        },
        {
          id: 'backend',
          title: 'common:header.menu.services.backend.title',
          href: 'service/back-end-and-devops',
        },
      ],
    },
    {
      id: 'industries',
      title: 'common:header.menu.industries.title',
      links: [
        {
          id: 'fintech',
          title: 'common:header.menu.industries.fintech.title',
          href: 'industry/fintech',
        },
        {
          id: 'eCommerce',
          title: 'common:header.menu.industries.eCommerce.title',
          href: 'industry/ecommerce',
        },
        {
          id: 'information',
          title: 'common:header.menu.industries.information.title',
          href: 'industry/information-technology',
        },
        {
          id: 'mediaAndMarketing',
          title: 'common:header.menu.industries.mediaAndMarketing.title',
          href: 'industry/media-and-marketing',
        },
      ],
    },
    {
      id: 'howWeWork',
      title: 'common:header.menu.howWeWork.title',
      links: [
        {
          id: 'technologies',
          title: 'common:header.menu.howWeWork.technologies.title',
          href: 'tech-stack',
        },
        {
          id: 'processes',
          title: 'common:header.menu.howWeWork.processes.title',
          href: 'way-of-work',
        },
      ],
    },
    {
      id: 'products',
      title: 'common:header.menu.products.title',
      links: [
        {
          id: 'lms',
          title: 'common:header.menu.products.lms.title',
          href: 'products/lms',
        },
        {
          id: 'tracker',
          title: 'common:header.menu.products.tracker.title',
          href: 'https://tracker.csssr.com',
        },
      ],
    },
  ],
}

export const storeNav = {
  id: 'store',
  href: 'https://store.csssr.com/',
  sections: [
    {
      links: ['Woman', 'Man', 'All'],
    },
    {
      links: ['All T-shirts', 'White', 'Black', 'Olive'],
    },
  ],
}

export const blogNav = {
  id: 'blog',
  href: 'https://blog.csssr.com',
  sections: [
    {
      id: 'sections',
      title: 'common:header.menu.blog.sections.title',
      links: [
        'Web development',
        'Business',
        'Design',
        'Black work',
        'Dotted section',
        'Frames',
        'React.js',
        'Pepsi',
        'Spotify',
        'Rational war',
      ],
    },
    {
      id: 'podcasts',
      links: [
        {
          id: 'google',
          title: 'Google Podcasts',
          icon: GooglePodcastIcon,
          href:
            'https://podcasts.google.com/?feed=aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6NDIwNDQ2MDgyL3NvdW5kcy5yc3M&ved=2ahUKEwix_PWd-dbpAhWBSpoKHSmBAT4Q4aUDegQIARAC&hl=ru',
        },
        {
          id: 'apple',
          title: 'Apple Podcasts',
          icon: ApplePodcastIcon,
          href:
            'https://podcasts.apple.com/ru/podcast/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-512/id1370045815',
        },
        {
          id: 'soundcloud',
          title: 'Soundcloud',
          icon: SoundcloudPodcastIcon,
          href: 'https://soundcloud.com/csssr',
        },
      ],
    },
    {
      id: 'socials',
      links: [
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
      ],
    },
  ],
}

export const schoolNav = {
  id: 'school',
  href: 'https://school.csssr.com/ru',
  sections: [
    {
      id: 'junior',
      href: 'https://school.csssr.com/ru/course/react/junior',
    },
    {
      id: 'react',
      href: 'https://school.csssr.com/ru/course/react/react-under-the-hood',
    },
  ],
}

export const subNav = [devNav, storeNav, blogNav, schoolNav]
