// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var express = require('express');
var app = express();
var db = require('./models');

var newVideogames = [
{
	title: "Mass Effect 2",
	console: "Xbox One & Playstation Pro",
	year: "2017",
	multipler: true
},
{
	title: "Red Dead Redemption",
	console: "Xbox One & Playstation Pro",
	year: "2018",
	multipler: true
},
{
	title: "Far Cry 5",
	console: "Xbox One & Playstation Pro",
	year: "2018",
	multipler: true
},
{
	title: "Fallout 4",
	console: "Xbox One & Playstation Pro",
	year: "2015",
	multipler: false
},
{
	title: "Kingdom Hearts 3",
	console: "Playstation 4",
	year: "2017",
	multipler: false
}
];


//removing all videogames to replace games
db.Videogames.remove({}, function(err, videogames){
	if(err){
		console.log('Error:', err);}
	else{
		console.log("games seeded");
		db.Videogames.create(newVideogames, function(err, videogames){
			if(err){
				console.log('Error:', err);}
			process.exit();
		});
	}
});

