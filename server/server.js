const express = require(`express`)
const app = express()
const port = 3300
const bodyParser = require(`body-parser`)
const bcrypt = require('bcryptjs')

// Connecting to the database
const mongoose = require('mongoose')
require(`dotenv`).config()
const uri = `${process.env.DB_URI}`
mongoose.connect(uri, {
  useNewUrlParser: true
})
let db = mongoose.connection

// Checking state of the Database
db.on(`error`, (err) => {
  console.log(err)
})
db.once('open', () => {
  console.log(`Connected to mongoDB`)
})

// Requiring models
const Profile = require('./models/profile')
const User = require('./models/user')

// Setting up the templating engine
app.set(`view engine`, `pug`)
app.use(`/static`, express.static(`static`))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.listen(port, () => console.log(`Running app at port ${port}!`))

// Routing
// ------------------------ Home page-------------------
app.get(`/`, (req, res) => {
  res.render(`index`, {
    title: `Home`
  })
})

//  ----------------------- About page --------------------------
app.get(`/about`, (req, res) => {
  res.render(`about`, {
    title: `About`
  })
})

//  -----------------Making your profile ------------------------
app.get(`/add`, (req, res) => {
  res.render(`add_profile`, {
    title: `Set up your profile`
  })
})

app.post(`/`, (req, res) => {
  Profile.create({
    firstname: req.body.fName,
    lastname: req.body.lName,
    email: req.body.email,
    language: req.body.language,
    show: req.body.show,
    activity: req.body.show
  }, res.redirect(`/list`))
})

// -----------------All Members-----------------------
app.get(`/list`, (req, res) => {
  Profile.find({}, (err, profiles) => {
    if (err) {
      throw err
    } else {
      res.render(`profiles`, {
        title: `All Members`,
        profileList: profiles
      })
    }
  })
})
// ------ Editing profile
app.get(`/edit/:id`, (req, res) => {
  const id = req.params.id
  Profile.findById(id, (err, profile) => {
    if (err) {
      throw err
    } else {
      res.render(`edit_profile`, {
        title: `Edit`,
        profile: profile
      })
    }
  })
})

app.post(`/edit/:id`, (req, res) => {
  Profile.updateOne({
    firstname: req.body.fName,
    lastname: req.body.lName,
    email: req.body.email,
    language: req.body.language,
    show: req.body.show,
    activity: req.body.activity
  }, (err) => {
    if (err) {
      throw err
    } else {
      res.redirect(`/list`)
    }
  })
})

//  ---------------- Single Member--------------
app.get(`/:id`, (req, res) => {
  const id = req.params.id
  Profile.findById(id, (err, profile) => {
    if (err) {
      throw err
    } else {
      res.render(`profile`, {
        profile: profile
      })
    }
  })
})
//  -----------------Registering---------------------
app.get(`/signup`, (req, res) => {
  res.render(`register`, {
    title: `Registration`
  })
})

app.post(`/signup`, (req, res) => {
  User.create({
    firstname: req.body.fName,
    lastname: req.body.lName,
    email: req.body.email,
    password: bcrypt.genSalt(10, (salt) => {
      bcrypt.hash(req.body.password, salt)
    })
  }, (err) => {
    if (err) {
      throw err
    } else {
      res.redirect(`/login`)
    }
  })
})

// ------------ Error 404 --------------------
app.use((req, res) => {
  res.status(404).render('404', {
    title: `404 Page not found`
  })
})
