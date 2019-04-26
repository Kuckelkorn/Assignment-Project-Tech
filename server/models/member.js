const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const memberSchema = new Schema({
	lastname: String,
	firstname: String,
	birthdate: Date,
	email: String,
	hash: String
});

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;
