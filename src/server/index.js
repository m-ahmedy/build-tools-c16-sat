const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const cors = require('cors')
const fetch = require('node-fetch')

dotenv.config()
const app = express()
let port = 8081

if (process.env.NODE_ENV === 'development') {
    app.use(cors())
    port = 8085
}

app.use(express.static(path.join(__dirname, '../../dist')))
app.use(express.json())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.post('/test', function (req, res) {
    const articleUrl = req.body.url
    const key = process.env.API_KEY
    const lang = 'en'

    const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1'
    const url = `${baseUrl}?key=${key}&lang=${lang}&url=${articleUrl}`

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
        .then(rawRepsonse => rawRepsonse.json())
        .then(result => res.json(result))
        .catch(err => res.status(500))
})
