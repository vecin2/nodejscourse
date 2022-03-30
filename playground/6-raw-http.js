const https = require('https')
const address = 'Madrid'
const url =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
  encodeURIComponent(address) +
  '.json?access_token=pk.eyJ1IjoidmVjaW4yIiwiYSI6ImNsMWFrbWUwcTB4ejIzYnBzdXBpbjAzZDYifQ.0aYzveJ43ruwFzJdDwCYwg&limit=1'

const request = https.request(url, (response) => {
  let data = ''
  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })
  response.on('end', () => {
    console.log(JSON.parse(data))
  })
})
request.on('error', (error) => {
  console.log(error)
})
request.end()
