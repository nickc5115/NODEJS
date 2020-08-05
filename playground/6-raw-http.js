const http = require('http')
const https = require('https')
const url = 'http://api.weatherstack.com/current?access_key=bbe09a37e7d61e1c5b5d17e6265bc7bb&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()

    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error:', error)
})

request.end()