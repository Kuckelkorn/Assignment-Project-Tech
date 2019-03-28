const mongoose = require(`mongoose`)
const id = mongoose.ObjectId

let profileSchema = mongoose.Schema({
  _id: id,
  firstname: String,
  lastname: String,
  email: String,
  language: String,
  show: String,
  activity: String
})

module.exports = mongoose.model('Profile', profileSchema)
