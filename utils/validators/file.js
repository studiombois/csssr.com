export default fileExt => value => value.includes(`.${fileExt.toLowerCase()}`) ? undefined : 'Invalid file format'
