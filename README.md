## Next.js README

This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

Find the most recent version of this guide at [here](https://github.com/segmentio/create-next-app/blob/master/lib/templates/default/README.md). And check out [Next.js repo](https://github.com/zeit/next.js) for the most up-to-date info.


## Запуск проекта

Среди зависимостей проекта есть наши приватные npm пакеты, чтобы их установить, надо выполнить инструкцию из статьи https://confluence.csssr.io/display/DT/Nexus

`yarn install`

`yarn dev`


## Гриды-колонки и сетка

Мы применяем квадратную сетку размером 8 х 8px и лэйаут с 12 колонками (6 на мобилках). Расстояния и размеры всех блоков кратны 8px, это означает что все они должны быть выровнены по сетке.
![](http://s.csssr.ru/U31J879TR/201904090131231312312315151.jpg)

В компоненте Settings есть два div элемента, у которых закоменченны классы,
их можно раскоментить и увидеть грид-колонки и сетку. Этим удобно пользоваться во время разработки, что бы сверять расстановку блоков по гридам, а текста по бейзлайну. 
![](http://s.csssr.ru/U31J879TR/20190409041859.jpg)

В зеплине увидеть грид-колонки можно в включив флаг _Grid_, для этого нужно тыкнуть в пустое пространство макета и в появившемся сайдбаре найти нужны чекбокс
![](http://s.csssr.ru/U31J879TR/20190409043204.jpg)


## Размеры

На проекте все размеры пишутся в rem, это особенно важно для разрешений меньше 1024px. 1rem = 16px. Полученные размеры в rem при умножении на 16 всегда должны возвращать целое число. 


## Вертикальный ритм и baseline

В типографике термин _базовая линия шрифта_ или _baseline_ служит для обозначения воображаемой прямой линии, проходящей по нижнему краю прямых букв

![](https://upload.wikimedia.org/wikipedia/commons/3/39/Typography_Line_Terms.svg)

В макетах все вертикальные расстояния до текстовых блоков отсчитываются от baseline (bl), это означает, что все текстовые блоки должны быть выровнены в сетке по bl.
![](http://s.csssr.ru/U31J879TR/2019040903575911.jpg)


## Работа с изображениями

В проекте есть скрипт для png изображений, который их оптимизирует, создает три картинки с разной плотностью пикселей, а так же создаёт копию изображения в webp формате. Скрипт запускается командой `yarn optimize-images __ПУТЬ_ДО_ИСХОДНЫХ ИЗОБРАЖЕНИЙ__`. Выполнение этой команды приведёт к созданию папки optimized-images с оптимизированными кратинками из my-images-path.

С jpg изображениями приходится работать вручную.  

Для вставки изображений на страницу следует использовать компоненты `Picture` и `PictureForAllResolutions`


## Работа с текстами

Все текста типографируются [типографом Лебедева](https://www.artlebedev.ru/typograf/). Вставляются через `dangerouslySetInnerHTML`, кроме тех случаев, когда в блоке несколько элементов. Если элементов несколько то в настройках типографа надо выбрать подстановку «готовыми символами», а не цифровым или буквенным кодом.
![](http://s.csssr.ru/U31J879TR/20190409044640.jpg)

Или обернуть текст в `span` c `dangerouslySetInnerHTML`
```
<h1 className='font_h1-regular'>
    <div dangerouslySetInnerHTML={{ __html: t('jobs:title') }} />
    <span className='font_subhead-regular' dangerouslySetInnerHTML={{ __html: t('jobs:subTitle') }} />
</h1>
```

Все динамические тексты на страницах вставляются с помощью функции t и лежат в файлах локалей, которые расположены в `./locales`


## AmoCRM

Логика работы с amo-crm вынесена в библиотеку [csssr-amo](https://github.com/csssr-dreamteam/csssr-amo)


## Ссылки в футере

https://docs.google.com/spreadsheets/d/1LGK_3_Cwn6a5BnWPGu6KLYXnz0u7ZcF8UGBdIcLukZs/edit#gid=0


## Title/Description для meta тегов

https://docs.google.com/spreadsheets/d/1B19QbMMyC6qod17ysy3na14vNMCHMLQ4dgw4vEjRV8I/edit#gid=0

