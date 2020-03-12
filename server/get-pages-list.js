import path from 'path'
import fastGlob from 'fast-glob'

export const parsePagePath = pagePath => {
  const {
    groups: { locale, pathname },
  } = pagePath.match(/^(?<locale>.*?)\/(?<pathname>.*)\.js$/)

  return {
    language: locale.substring(0, 2),
    pathname,
  }
}

export default async () => {
  // Получаем все доступные страницы для умной смены языка страницы на клиенте
  const pagesPaths = await fastGlob('./*/**/*.js', { cwd: path.join(__dirname, '../pages') })

  return pagesPaths.map(parsePagePath)
}
