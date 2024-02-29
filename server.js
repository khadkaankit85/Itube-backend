const express = require("express");
const video = require('./Routes/video')
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors())

app.use("/video", video)

app.get("/", (req, res) => {
    res.send("Hello world")
    console.log(req)
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})


