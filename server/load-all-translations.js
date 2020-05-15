import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
import fastGlob from 'fast-glob'

const readFileAsync = promisify(fs.readFile)

const parseLocalePath = (localePath) => {
  const {
    groups: { locale, name },
  } = localePath.match(/^(?<locale>.*?)\/(?<name>.*)\.json$/)

  return {
    locale,
    name,
  }
}

export default async (loadPath) => {
  const stream = fastGlob.stream('./*/*.json', { cwd: loadPath })

  const translations = {}
  for await (const entry of stream) {
    const { locale, name } = parseLocalePath(entry)
    const localeFileContent = await readFileAsync(path.resolve(loadPath, entry), {
      encoding: 'utf8',
    })
    if (!translations[locale]) {
      translations[locale] = {}
    }
    translations[locale][name] = JSON.parse(localeFileContent)
  }

  return translations
}
