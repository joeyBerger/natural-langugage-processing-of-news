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

//invokes post request to meaning cloud and sends meaningful data to client
app.post('/postTextToMeaningCloud', async function (req, res) {
    try {
        const mcResponse = await axios({
            method: 'post',
            url: 'https://api.meaningcloud.com/sentiment-2.1',
            data: {
                key : process.env.API_KEY,
                url : req.body.url,
                lang: 'en'
            },
            redirect: 'follow'
        })
        if (mcResponse.data.status.code === '0') res.send(buildCustomObject(mcResponse.data))
        else {
            res.status(409);
            res.send({error: mcResponse.data.status.msg})
        }
    } catch(e) {
        console.log(e)
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})