## Используя пакет optimize-png-for-web

`yarn optimize-images ./my-images-path`

Выполнение этой команды приведёт к созданию папки optimized-images с оптимизированными кратинками из my-images-path


## Устаревшая инфа

Оригиналы изображений https://www.dropbox.com/sh/yh38qiijgvs4jxb/AABX-GoHfhLVVjw1lqiZ5YRua?dl=0

Скрипт для создания webp из png `cwebp dog1x1280.png -q 80 -o dog80.webp`
Для скрипта требуется установить webp в систему. -q 80 параметр отвечает за качество.

Хорошие онлайн компрессоры png:
https://www.giftofspeed.com/png-compressor/ - использовался для сжатия картинок для сайта
https://compressor.io/compress
https://tinypng.com/

Баш скрипт для создания webp файлов из png в директории:
`for file in *; do cwebp -q 80 "$file" -o "$(basename "$file" .png).webp"; done`

Баш скрипт для создания webp файлов из png c рекурсивным проходом по всей директории:
`for file in $(find . -name '*.png'); do cwebp -q 80 "$file" -o "$(basename "$file" .png).webp"; done`
