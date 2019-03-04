export default array => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // Пока есть что мешать...
  while ( currentIndex !== 0 ) {

    // Берем рандомный индекс...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // И заменяем им текущий.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
