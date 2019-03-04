export default () => (window.ga && window.ga.getAll) ? window.ga.getAll()[0].get('clientId') : undefined
