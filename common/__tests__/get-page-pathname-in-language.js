import getPagePathnameInLanguage from '../get-page-pathname-in-language'

test('test', () => {
  const pagesList = [
    { language: 'en', pathname: 'cookies-policy' },
    { language: 'en', pathname: 'core-values' },
    { language: 'en', pathname: 'index' },
    { language: 'en', pathname: 'privacy-policy' },
    { language: 'en', pathname: 'tech-stack' },
    { language: 'en', pathname: 'projects' },
    { language: 'ru', pathname: 'projects' },
    { language: 'en', pathname: 'way-of-work' },
    { language: 'ru', pathname: 'core-values' },
    { language: 'ru', pathname: 'index' },
    { language: 'ru', pathname: 'jobs-faq' },
    { language: 'ru', pathname: 'privacy-policy' },
    { language: 'ru', pathname: 'tech-stack' },
    { language: 'ru', pathname: 'way-of-work' },
    { language: 'ru', pathname: 'job' },
    { language: 'ru', pathname: 'jobs' },
    { language: 'ru', pathname: 'job' },
    { language: 'ru', pathname: 'jobs' },
    { language: 'en', pathname: 'job' },
    { language: 'en', pathname: 'jobs' },
    { language: 'en', pathname: 'job' },
    { language: 'en', pathname: 'jobs' },
    { language: 'en', pathname: 'job' },
    { language: 'en', pathname: 'jobs' },
    { language: 'en', pathname: 'service/mvp-development' },
    { language: 'en', pathname: 'service/outsourcing-front-end' },
    { language: 'en', pathname: 'service/back-end-and-devops' },
    { language: 'en', pathname: 'service/design' },
    { language: 'en', pathname: 'industry/ecommerce' },
    { language: 'en', pathname: 'industry/fintech' },
    { language: 'en', pathname: 'industry/information-technology' },
    { language: 'en', pathname: 'industry/media-and-marketing' },
    { language: 'ru', pathname: 'industry/ecommerce' },
    { language: 'ru', pathname: 'industry/fintech' },
    { language: 'ru', pathname: 'industry/information-technology' },
    { language: 'ru', pathname: 'industry/media-and-marketing' },
    { language: 'en', pathname: 'project/s7-personal-account' },
    { language: 'en', pathname: 'project/gazprom-neft-professionals-4-0' },
    { language: 'ru', pathname: 'project/s7-personal-account' },
    { language: 'ru', pathname: 'project/gazprom-neft-professionals-4-0' },
    { language: 'ru', pathname: 'service/mvp-development' },
    { language: 'ru', pathname: 'service/outsourcing-front-end' },
    { language: 'ru', pathname: 'service/back-end-and-devops' },
  ]

  expect(getPagePathnameInLanguage('/en/service/outsourcing-front-end', 'ru', pagesList)).toEqual(
    '/ru/service/outsourcing-front-end',
  )
  expect(getPagePathnameInLanguage('/en-sg/jobs', 'ru', pagesList)).toEqual('/ru/jobs')
  expect(getPagePathnameInLanguage('/en-sg/job', 'ru', pagesList)).toEqual('/ru/jobs')
  expect(getPagePathnameInLanguage('/ru', 'en', pagesList)).toEqual('/en')
  expect(getPagePathnameInLanguage('/ru/jobs-faq', 'en', pagesList)).toEqual('/en/jobs')
  expect(getPagePathnameInLanguage('/ru-ru/job', 'en', pagesList)).toEqual('/en/jobs')
  expect(getPagePathnameInLanguage('/en/cookies-policy', 'ru', pagesList)).toEqual('/ru')
  expect(getPagePathnameInLanguage('/en/privacy-policy', 'ru', pagesList)).toEqual(
    '/ru/privacy-policy',
  )
  expect(getPagePathnameInLanguage('/ru/privacy-policy', 'en', pagesList)).toEqual(
    '/en/privacy-policy',
  )
})
