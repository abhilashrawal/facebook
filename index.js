
const fs = require("fs")
const express = require('express')
const app = express()
const port = 3000
const mongodb = require('./config/mongoose')


const expressLayouts = require('express-ejs-layouts')
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.urlencoded())

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));

app.set('layout-extractStyles',true)

app.set('layout-extractScripts',true)





const router = require('./routes/index.js')
app.use(expressLayouts)
app.use('/', router)



app.listen(port, () => {
  console.log(`Facebook app listening on port ${port}`)
})