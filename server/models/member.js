const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
	lastname: String,
	firstname: String,
	birthdate: Date,
	email: String,
	hash: String
})

const Member = mongoose.model('Member', memberSchema)
module.exports = Member
