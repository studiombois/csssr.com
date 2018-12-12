export default fileExt => value => value.includes(`.${fileExt.toLowerCase()}`) ? undefined : 'Неверный формат файла'
