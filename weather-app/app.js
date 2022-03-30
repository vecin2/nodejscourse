import geocode from './utils/geocode.js'
import forecast from './utils/forecast.js'

function forecastByAddress(location) {
  geocode(location, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      console.log(location)
      console.log(forecastData)
    })
  })
}
if (process.argv.length > 2) {
  forecastByAddress(process.argv[2])
} else {
  console.log('Please provide an Address')
}
