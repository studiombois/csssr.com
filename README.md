## Next.js README

This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

Find the most recent version of this guide at [here](https://github.com/segmentio/create-next-app/blob/master/lib/templates/default/README.md). And check out [Next.js repo](https://github.com/zeit/next.js) for the most up-to-date info.


## Запуск проекта

`yarn install`

`yarn dev`


## Гриды-колонки и сетка
В компоненте DevTools есть два div элемента, у которых закоменченны классы,
их можно раскоментить и увидеть грид-колонки и сетку. Этим удобно пользоваться во время разработки, что бы сверять расстановку блоков по гридам, а текста по бейзлайну.
![](https://s.csssr.ru/U31J879TR/20200110163125.jpg)

В Figma увидеть грид-колонки можно включив «Layout Grids»
![](https://s.csssr.ru/U31J879TR/20200110162841.jpg)


## Размеры

На проекте все размеры пишутся в rem, это особенно важно для разрешений меньше 1024px. 1rem = 16px. Полученные размеры в rem при умножении на 16 всегда должны возвращать целое число.

## Работа с изображениями

Для обработки изображений используется webpack loader [image-resolution-loader](https://github.com/ArtyomResh/image-resolution-loader). Разработчику достаточно иметь только исходное 3x изображение. Дальше он помещает его в нужный фолдер статики и импортируем его там где он требуется не забывая указать в конце пути до файла квери `?responsive` или `?responsive_and_webp`, — первое возвращает набор обработанных изображений в исходном формате, второе делает тоже самое, но преобразует формат изображения в `webp`.

Для вставки изображений на страницу следует использовать новые компоненты `<Picture />` и `<PictureForAllResolutions />` из `components/ui-kit`

Для `<PictureForAllResolutions />` в пропс `images` передаётся объект, содержащий ключи с названиями брейкпоинтов текущей темы. В каждом брейкпоинте содержится ещё один объект, ключи которого являются названиями расширений изображений. В них нужно передать полученные из импорта изображений объекты с аналогичными расширениями.

```jsx
import ultramarine_desktop_all from '../../static/images/main/desktop.all/ultramarine.png?responsive'
import ultramarine_desktop_m from '../../static/images/main/desktop.m/ultramarine.png?responsive'
import ultramarine_desktop_s from '../../static/images/main/desktop.s/ultramarine.png?responsive'
import ultramarine_tablet_all from '../../static/images/main/tablet.all/ultramarine.png?responsive'
import ultramarine_mobile_all from '../../static/images/main/mobile.all/ultramarine.png?responsive'

import ultramarine_desktop_all_webp from '../../static/images/main/desktop.all/ultramarine.png?responsive_and_webp'
import ultramarine_desktop_m_webp from '../../static/images/main/desktop.m/ultramarine.png?responsive_and_webp'
import ultramarine_desktop_s_webp from '../../static/images/main/desktop.s/ultramarine.png?responsive_and_webp'
import ultramarine_tablet_all_webp from '../../static/images/main/tablet.all/ultramarine.png?responsive_and_webp'
import ultramarine_mobile_all_webp from '../../static/images/main/mobile.all/ultramarine.png?responsive_and_webp'

<PictureForAllResolutions
    images={{
        'desktop.all': { png: ultramarine_desktop_all, webp: ultramarine_desktop_all_webp },
        'desktop.m': { png: ultramarine_desktop_m, webp: ultramarine_desktop_m_webp },
        'desktop.s': { png: ultramarine_desktop_s, webp: ultramarine_desktop_s_webp },
        'tablet.all': { png: ultramarine_tablet_all, webp: ultramarine_tablet_all_webp },
        'mobile.all': { png: ultramarine_mobile_all, webp: ultramarine_mobile_all_webp },
    }}
    fallback={ultramarine_desktop_all}
    alt="Сержант Ультрамаринов"
/>
```

В пропс `fallback` передаётся результат импорта изображения, который должен будет выставляться по дефолту, если, например, не для всех брейкпоинтов требуется указывать разные изображения, или если браузер не поддерживает какой-то формат изображения, или если браузер не поддерживает тег `<picture>`

```jsx
<PictureForAllResolutions
    images={{
        'desktop.m': { png: ultramarine_desktop_s, webp: ultramarine_desktop_s_webp },
        'mobile.all': { png: ultramarine_mobile_all, webp: ultramarine_mobile_all_webp },
    }}
    fallback={ultramarine_desktop_all}
    alt="Сержант Ультрамаринов"
/>
```

Компонент `<Picture />` является частным случаем компонента `<PictureForAllResolutions />` и используется тогда, когда для всех брейкпоинтов требуется использовать одно и тоже изображение. Он имеет схожее с `<PictureForAllResolutions />` API, но для пропса `images` не требуется указывать разные изображения для разных брейкпоинтов, достаточно указать одно:

```jsx
<Picture
    images={{ png: ultramarine, webp: ultramarine_webp }}
    fallback={ultramarine_desktop_all}
    alt="Сержант Ультрамаринов"
/>
```

> ℹ️На 10.01.20 в проекте ещё используются старые компоненты `<Picture />` и `<PictureForAllResolutions />` из `components`. На их замену на новые заведена задача, пока они остаются, так как на них нет время.


## Работа с текстами

Все текста типографируются [типографом Лебедева](https://www.artlebedev.ru/typograf/). Вставляются через `dangerouslySetInnerHTML`, кроме тех случаев, когда в блоке несколько элементов. Если элементов несколько то в настройках типографа надо выбрать подстановку «готовыми символами», а не цифровым или буквенным кодом.
![](https://s.csssr.ru/U31J879TR/20190409044640.jpg)

Или обернуть текст в `span` c `dangerouslySetInnerHTML`
```jsx
<h1 className='font_h1-regular'>
    <div dangerouslySetInnerHTML={{ __html: t('jobs:title') }} />
    <span className='font_subhead-regular' dangerouslySetInnerHTML={{ __html: t('jobs:subTitle') }} />
</h1>
```

Все динамические тексты на страницах вставляются с помощью функции t и лежат в файлах локалей, которые расположены в `./locales`

## Работа с вакансиями

По дефолту вакансии подтягиваются с https://csssr.space. Что бы это изменить нужно поменять переменную окружения CSSSR_SPACE_ORIGIN в файле nodemon.json и перезапустить проект

## AmoCRM

Доступы к Amo можно посмотреть в deplomat'е.
В Amo все поля динамические, поэтому обращение к ним идёт по уникальным числовым id, захардкоженным в коде проекта.
Если эти поля поменяются, то их id надо перезапросить у AmoCRM и поменять хардкод в проекте.
Больше об этом в файлах server/get-amo-crm-custom-fields.js и server/amo-config.js

## Title/Description для meta тегов

https://docs.google.com/spreadsheets/d/1B19QbMMyC6qod17ysy3na14vNMCHMLQ4dgw4vEjRV8I/edit#gid=0

