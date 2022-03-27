const fs = require('fs')
const book = {
  title: 'Pilars of Earth',
  author: 'Ken Follet',
}

const bookJSON = JSON.stringify(book)

fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const readBook = JSON.parse(dataBuffer.toString())
console.log(readBook.title)
