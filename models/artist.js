// Ennsue we have a connection to the db
const mongoose = require('./init')

// define our model
const Artist = mongoose.model('Artist', {
  name: String
})

module.exports = Artist