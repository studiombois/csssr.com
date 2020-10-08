import path from 'path'
import fs from 'fs'
import util from 'util'
import { ONE_YEAR } from '../../utils/timePeriods'
import { isEmpty, isNil } from 'ramda'

const readFile = util.promisify(fs.readFile)

const loadAllAbExperiments = async () => {
  const experimentsDirPath = path.resolve(__dirname, 'experiments')
  if (fs.existsSync(experimentsDirPath)) {
    const experimentsFileNames = fs.readdirSync(experimentsDirPath)
    const experiments = await Promise.all(
      experimentsFileNames.map(async (fileName) => {
        const fileContent = await readFile(path.join(experimentsDirPath, fileName))
        return JSON.parse(fileContent)
      }),
    )
    return experimentsFileNames.reduce((memo, fileName, i) => {
      const experimentName = path.parse(fileName).name
      const weightsSum = experiments[i].variants.reduce((memo2, { weight }) => memo2 + weight, 0)

      return {
        ...memo,
        [experimentName]: {
          ...experiments[i],
          weightsSum,
        },
      }
    }, {})
  }
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min
const isObject = (value) => typeof value === 'object' && value !== null

export const getVariantForNumber = (variants, number) => {
  let result
  for (let i = 0; i < variants.length; i++) {
    const variant = variants[i]
    number -= variant.weight
    if (number < 0) {
      result = {
        name: variant.name,
        index: i,
      }
      break
    }
  }
  return result
}

export const getUserAb = (abExperiments, userAb) => {
  return Object.keys(abExperiments).reduce((memo, experimentName) => {
    const variantFromCookie = userAb[experimentName]
    const experimentData = abExperiments[experimentName]
    const variants = experimentData.variants
    if (variantFromCookie) {
      // Проверяем, что вариант из куки действительно существует в эксперименте
      const index = variants.findIndex(({ name }) => name === variantFromCookie)
      if (index !== -1) {
        return {
          ...memo,
          [experimentName]: {
            optimizeExperimentId: experimentData.optimizeExperimentId,
            name: variantFromCookie,
            index,
          },
        }
      }
    }

    const random = randomInt(0, experimentData.weightsSum)
    const variant = getVariantForNumber(experimentData.variants, random)

    return {
      ...memo,
      [experimentName]: {
        optimizeExperimentId: experimentData.optimizeExperimentId,
        name: variant.name,
        index: variant.index,
      },
    }
  }, {})
}

const COOKIE_NAME = 'ab'

export default ({ ignorePaths }) => {
  const allAbExperimentsPromise = loadAllAbExperiments()

  return async (req, res, next) => {
    const reqPath = req.path

    const shouldIgnorePath = ignorePaths.reduce(
      (acc, pattern) => acc || pattern.test(reqPath),
      false,
    )
    if (shouldIgnorePath) {
      return next()
    }

    const allAbExperiments = await allAbExperimentsPromise

    if (isEmpty(allAbExperiments) || isNil(allAbExperiments)) {
      return next()
    }

    // Кука может быть битой или отсутствовать
    let userAb
    try {
      const abCookieValue = JSON.parse(req.cookies[COOKIE_NAME])
      userAb = isObject(abCookieValue) ? abCookieValue : {}
    } catch {
      userAb = {}
    }

    // Для тестирования даём возможность переопределить группу ab используя параметры url
    // начинающиеся с префикса ab-, например ?ab-en-main-page=v3
    const query = req.query
    Object.keys(query)
      .filter((paramKey) => paramKey.startsWith('ab-'))
      .forEach((paramKey) => {
        userAb[paramKey.replace('ab-', '')] = query[paramKey]
      })

    // TODO здесь можно хранить только имя эксперимента и id варианта
    const newUserAb = getUserAb(allAbExperiments, userAb)

    // Сохраняем в куку объект вида {'other-ab': 'current', 'en-main-page': 'v4'}
    res.cookie(COOKIE_NAME, JSON.stringify(newUserAb), { maxAge: ONE_YEAR, httpOnly: true })

    res.locals.ab = newUserAb

    next()
  }
}
