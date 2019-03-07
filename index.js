const express = require('express')
const exhb = require('express-handlebars')
const app = express()

app.engine('handlebars', exhb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use('/static', express.static('static'))

// Routing
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/about', (req, res) => {
  res.render('404', { title: '404: Page not found' })
})

app.use((req, res) => {
  res.render('404')
})

app.listen(8080)
