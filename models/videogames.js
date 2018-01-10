var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var VideogameSchema = new Schema({
	title: String,
	console: String,
	year: String,
	multipler: Boolean

});

var Videogames = mongoose.model('Videogame', VideogameSchema);

module.exports = Videogames;
