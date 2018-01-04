var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var VideogameSchema = new Schema({
	title: String,
	Console: String,
	multipler: Boolean,
	year: String
});

var Videogames = mongoose.model('Videogame', VideogameSchema);

module.exports = Videogames;
