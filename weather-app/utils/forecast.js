import request from 'postman-request'

export default function forecast(latitude, longitude, callback) {
  const url =
    'http://api.weatherstack.com/current?access_key=f11ca3ac639f52c5551f3200e81baa92&query=' +
    latitude +
    ',' +
    longitude +
    '&units=m'

  fake_request_forecast({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location: ' + body.error)
    } else {
      const description = body.current.weather_descriptions[0]
      const temperature = body.current.temperature
      const feelslike = body.current.feelslike
      callback(
        undefined,
        description +
          ': It is currently ' +
          temperature +
          '. It feels like ' +
          feelslike +
          ' out there.'
      )
    }
  })
}

function fake_request_forecast({ url, json }, callback) {
  const fake_response = {
    body: {
      current: {
        weather_descriptions: ['Partly cloudy'],
        temperature: 17,
        feelslike: 15,
      },
    },
  }
  callback(undefined, fake_response)
}
function request_forecast({ url, json }, callback) {
  request({ url: url, json: true }, callback)
}
