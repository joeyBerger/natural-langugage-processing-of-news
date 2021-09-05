const path = require('path')
const express = require('express')
const axios = require('axios');
const bodyParser = require('body-parser')
const buildCustomObject = require(__dirname+'/helpers/parseMCdata.js').buildCustomObject

require('dotenv').config({path: __dirname.replace('src/server','') + '/.env'})

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/postTextToMeaningCloud', async function (req, res) {
    const mcResponse = await axios({
        method: 'post',
        url: 'https://api.meaningcloud.com/sentiment-2.1',
        data: {
            key : process.env.API_KEY,
            txt: req.body.text,
            lang: 'en'
        },
        redirect: 'follow'
    })
    console.log(mcResponse)
    res.send(buildCustomObject(mcResponse.data))
    // res.send({score: 'POSITIVE', agreement: 'DISAGREEMENT', subjectivity: 'SUBJECTIVE', confidence: '86', irony: 'NONIRONIC'})
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})