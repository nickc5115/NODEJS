const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bbe09a37e7d61e1c5b5d17e6265bc7bb&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined);
        } else if (body.error) {
            console.log(body.error)
            callback('Unable to find weather. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees outside. It feels like " + body.current.feelslike + " degrees outside.")
        }
    })
}

module.exports = forecast