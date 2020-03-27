// изображения для проектов должны нызываться согласно id проекта
// + нижнее подчеркивание с номером слайда, пример:
//
// acura_1.png
// acura_2.png

export default [
  {
    id: 'automotive',
    projects: [
      {
        id: 'acura',
        type: 'slider',
        slides: [1, 2],
      },
      {
        id: 'camry',
        type: 'slider',
        slides: [1, 2],
      },
    ],
  },
  {
    id: 'financeAndBanking',
    projects: [
      {
        id: 'investments101',
        type: 'slider',
        slides: [1, 2],
        href: 'https://investments101.ru/',
      },
      {
        id: 'phoenix',
        type: 'slider',
        slides: [1, 2],
        href: 'https://phoenix-ca.ru/',
      },
      {
        id: 'quickpay',
        type: 'slider',
        slides: [1, 2],
      },
      {
        id: 'remont',
        type: 'slider',
        slides: [1, 2],
        href: 'https://remont.tinkoff.ru/',
      },
    ],
  },
  {
    id: 'realEstate',
    projects: [
      {
        id: 'cian',
        type: 'slider',
        slides: [1],
        href: 'https://www.cian.ru/',
      },
      {
        id: 'ndv',
        type: 'slider',
        slides: [1, 2],
        href: 'http://www.ndv-global.com/ru/',
      },
    ],
  },
  {
    id: 'retail',
    projects: [
      {
        id: 'bork',
        type: 'slider',
        slides: [1, 2, 3, 4, 5],
      },
      {
        id: 'nutrilogic',
        type: 'slider',
        slides: [1, 2],
        href: 'http://nutrilogic.ru/',
      },
      {
        id: 'relef',
        type: 'slider',
        slides: [1, 2],
        href: 'https://www.relef.ru/',
      },
      {
        id: 'sellbeing',
        type: 'slider',
        slides: [1, 2],
        href: 'https://sellbeing.com/ru',
      },
      {
        id: 'shina',
        type: 'slider',
        slides: [1, 2],
        href: 'http://ru-shina.ru/',
      },
      {
        id: 'tsum',
        type: 'slider',
        slides: [1, 2],
      },
    ],
  },
  {
    id: 'telecom',
    projects: [
      {
        id: 'ruCenter',
        type: 'slider',
        slides: [1, 2],
        href: 'https://www.nic.ru/',
      },
    ],
  },
  {
    id: 'others',
    projects: [
      {
        id: 'auditorius',
        type: 'slider',
        slides: [1, 2],
      },
      {
        id: 'expressobet',
        type: 'slider',
        slides: [1, 2],
      },
    ],
  },
]
