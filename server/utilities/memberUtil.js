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
			password
		} = memberInfo // object destructuring

		mongoose.connect(process.env.MONGO_DB, {
			dbName: 'EzDate',
			useNewUrlParser: true
		}) // make a connection to the database

		const db = mongoose.connection // defines the connection

		db.on('error', (err) => reject(err)) // on event emitter error, reject and send the error back
		db.once('open', async function () {
			let newMember = new Member({
				lastname: lastname,
				firstname: firstname,
				birthdate: birthdate,
				email: email,
				hash: await argon2.hash(password)
			}) // once database is open(open is event emitter) create a user with the values from the form
			newMember.save(function (err, member) { // save the user and use the callback if done
				if (err) reject(err) // if there is an error reject the promise and send the error back
				else resolve(member) // if there is not an error resolve the promise
			})
		})
	})
}
