require('dotenv').config()
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const add = require('./controllers/member.js');

const app = express()

app
	.use('/static', express.static('./static'))
	.use(bodyParser.urlencoded({
		extended: true
	}))
	.use(session({
		resave: false,
		saveUninitialized: true,
		secret: process.env.SESSION_SECRET
	}))
	.set('view engine', 'pug')
	.set('views', './server/views')
	.get('/', ageCheck)
	.use('/member', add)
	.listen(process.env.PORT || 5000)

function ageCheck(req, res){
	if (!req.session.check){
		req.session.check = true
		res.render('first')
	} else {
		res.render('index')
	}
}
