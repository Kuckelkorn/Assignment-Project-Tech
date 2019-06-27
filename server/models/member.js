const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
	lastname: String,
	firstname: String,
	birthdate: String,
	email: String,
	hash: String,
	language: String
})

const Member = mongoose.model('Member', memberSchema)
module.exports = Member
