This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

Find the most recent version of this guide at [here](https://github.com/segmentio/create-next-app/blob/master/lib/templates/default/README.md). And check out [Next.js repo](https://github.com/zeit/next.js) for the most up-to-date info.

## Запуск проекта

`yarn install`

`yarn dev`

## Картинки

Картинки см. images.md

## AmoCRM

Доступы к Amo можно посмотреть в deplomat'е.
У нас есть два amo аккаунта - один для продаж проектов, второй для школы.
В Amo все поля динамические, поэтому обращение к ним идёт по уникальным числовым id, захардкоженным в коде проекта.
Если эти поля поменяются, то их id надо перезапросить у AmoCRM и поменять хардкод в проекте.
Больше об этом в файлах server/get-amo-crm-custom-fields.js и server/amo-config.js

## Ссылки в футере

https://docs.google.com/spreadsheets/d/1LGK_3_Cwn6a5BnWPGu6KLYXnz0u7ZcF8UGBdIcLukZs/edit#gid=0

## Title/Description для meta тегов

https://docs.google.com/spreadsheets/d/1B19QbMMyC6qod17ysy3na14vNMCHMLQ4dgw4vEjRV8I/edit#gid=0

