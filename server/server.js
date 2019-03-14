const express = require('express')
const app = express()
const port = 3300

app.set('view engine', 'pug')
app.use('/static', express.static('static'))
app.listen(port, () => console.log(`Running app at port ${port}!`))

// Routing
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/add', (req, res) => {
  res.render('add', { title: 'Add Info' })
})

app.use((req, res) => {
  res.render('404', { title: '404 Page not found' })
})
