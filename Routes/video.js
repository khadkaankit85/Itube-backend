const express = require("express")
const router = express.Router()
const axios = require("axios")
const { getEnv } = require("google-auth-library/build/src/auth/envDetect")
require('dotenv').config();
console.log("dotenv loaded")



//  mainurl = "https://www.googleapis.com/youtube/v3/search?key=apikey&type=video&part=snippet&q=foo"

let apiKey = process.env.ApiKey
console.log(apiKey)
// let clientId = process.env.ClientId

const ytUrl = `https://www.googleapis.com/youtube/v3`

router.get('/video/', async (req, res) => {
    let query = req.query.q
    console.log(query)
    try {
        async function fetchdata() {
            let response = await axios.get(`${ytUrl}/search?key=${apiKey}&type=video&part=snippet&q=${query}`)
            let videos = response.data.items
            res.send(videos)
        }
        fetchdata()


    }
    catch (err) {
        console.log(err)
    }

    // res.send(req.query.q)
})

// router.get('/video/watch/', (req, res) => {
//     let video = req.query.videoId
//     let response= axios.get(`${ytUrl}/`)

//     console.log(video)
//     res.send(video)
// })

module.exports = router