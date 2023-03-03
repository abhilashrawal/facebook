const express = require('express')
const app= express()

const router = require('./routes/index')

const port = 300

const view = ("views" , './views')
app.use('/', router)


app.listen(port,()=> {
    console.log(`facebook port ${port}`)

})
