import request from 'postman-request'

export default function (address, callback) {
  const geocodeURL =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoidmVjaW4yIiwiYSI6ImNsMWFrbWUwcTB4ejIzYnBzdXBpbjAzZDYifQ.0aYzveJ43ruwFzJdDwCYwg&limit=1'

  request_fake_geocode({ url: geocodeURL, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location Services', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else if (body.error) {
      callback('The following error occurred: ' + error, undefined)
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      })
    }
  })
}
function request_fake_geocode(input, callback) {
  const fake_response = {
    body: {
      features: [
        {
          center: [-75.1327, 40.0115],
          place_name: 'Philadelphia, Pennsylvania, United States',
        },
      ],
    },
  }
  callback(undefined, fake_response)
}
function request_geocode({ url, json }, callback) {
  request({ url: url, json: true }, callback)
}
