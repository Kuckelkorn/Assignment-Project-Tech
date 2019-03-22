const express = require('express')
const app = express()
const port = 3300
const slug = require('slug')
const bodyParser = require('body-parser')
const multer = require('multer')
const mongo = require('mongodb').MongoClient

require('dotenv').config()

// ------------------- Database Connection
const url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME
mongo.connect(url, { useNewUrlParser: true }, ()=>{
  console.log('Succesfully connected to database')
})


app.set('view engine', 'pug')
app.use('/static', express.static('static'))
app.use(bodyParser.urlencoded({extended: true}))
app.listen(port, () => console.log('Running app at port ' + port))

// Routing
// ------------------------ Home page-------------------
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  })
})

//----------------------- About page --------------------------
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  })
})

//-----------------Make a profile ------------------------
app.get('/add', (req, res) => {
  res.render('add', {
    title: 'Add Info'
  })
})

// -----------------All Members-----------------------
app.get('/members', (req, res, next) => {

})

// ------------ View other profiles--------------------
app.get('/:id', (req, res) =>{
  res.render('member', {info: info})
})

// ------------ Error 404 --------------------
app.use((req, res) => {
  res.render('404', {
    title: '404 Page not found'
  })
})
