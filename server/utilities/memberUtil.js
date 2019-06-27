const mongoose = require('mongoose')
const Member = require('../models/member.js')
const argon2 = require('argon2')

exports.create = function (memberInfo) {
	return new Promise(function (resolve, reject) {
		let {
			lastname,
			firstname,
			birthdate,
			email,
			password,
			language
		} = memberInfo

		mongoose.connect(process.env.MONGO_DB, {
			dbName: 'EzDate',
			useNewUrlParser: true
		})

		const db = mongoose.connection

		db.on('error', (err) => reject(err))
		db.once('open', async function () {
			let newMember = new Member({
				lastname: lastname,
				firstname: firstname,
				birthdate: birthdate,
				email: email,
				hash: await argon2.hash(password),
				language: language
			})
			newMember.save(function (err, member) {
				if (err) reject(err)
				else resolve(member)
			})
		})
	})
}
