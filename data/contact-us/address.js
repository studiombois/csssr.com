export default {
  ru: {
    id: 'ru',
    items: [
      { id: 'moscow', value: (t) => t.contactUs.map.addresses.ru[0] },
      { id: 'dzerzhinsky', value: (t) => t.contactUs.map.addresses.ru[1] },
    ],
  },
  ee: {
    id: 'ee',
    items: [{ id: 'estonia', value: (t) => t.contactUs.map.addresses.ee }],
  },
  sg: {
    id: 'sg',
    items: [{ id: 'singapore', value: (t) => t.contactUs.map.addresses.sg }],
  },
}
