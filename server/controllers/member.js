const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Member = require('../models/member')

const memberUtil = require('../utilities/memberUtil.js')

router
	.get('/', membersPage)
	.get('/add', (req, res) => res.render('register'))
	.post('/add', addMember)

async function membersPage (req, res, next) {
	let members = await findMembers()
	res.render(('overview'), {
		members
	})
}

async function addMember (req, res, next) {
	const memberInfo = req.body
	try {
		await memberUtil.create(memberInfo)
		res.redirect('/member')
	} catch (err) {
		next(err)
	}
}

function findMembers () {
	return new Promise(function (resolve, reject) {
		mongoose.connect(process.env.MONGO_DB, {
			useNewUrlParser: true,
			dbName: 'EzDate'
		})
		const db = mongoose.connection
		db.on('error', (err, next) => next(err))
		db.once('open', async function () {
			try {
				let data = await Member.find()
				resolve(data)
			} catch (err) {
				reject(console.log(err))
			}
		})
	})
}

module.exports = router
