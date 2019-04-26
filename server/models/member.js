const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const memberSchema = new Schema({
	initials: String,
	insertions: String,
	lastname: String,
	firstname: String,
	birthdate: Date,
	year: Number,
	study: String,
	email: String,
	hash: String,
	phonenumber: Number,
	adressCurrent: String,
	postalCodeCurrent: String,
	cityCurrent: String,
	adressParents: String,
	postalCodeParents: String,
	cityParents: String,
	numberParents: Number,
	family: String,
	father: {type: Schema.Types.ObjectId, ref:'Member'},
	son: {type: Schema.Types.ObjectId, ref:'Member'},
	activeMember: Boolean
});

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;
