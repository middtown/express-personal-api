// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var express = require('express');
var app = express();
var db = require('./models');

var someVideogame = [
{
	title: "Mass Effect 2",
	Console: "Xbox One & Playstation Pro",
	year: "2017",
	multipler: true
},
{
	title: "Red Dead Redemption",
	Console: "Xbox One & Playstation Pro",
	year: "2018",
	multipler: true
},
{
	title: "Far Cry 5",
	Console: "Xbox One & Playstation Pro",
	year: "2018",
	multipler: true
},
{
	title: "Fallout 4",
	Console: "Xbox One & Playstation Pro",
	year: "2015",
	multipler: false
},
{
	title: "Kingdom Hearts 3",
	Console: "Playstation 4",
	year: "2017",
	multipler: false
}
];

app.get('/api/profile', function(req, res){
  res.json({
    name: "Aaron Middleton",
    github_link: "https://github.com/middtown",
    github_profile_image: "https://avatars0.githubusercontent.com/u/33731020?s=460&v=4",
    current_city: "Denver",
    pets:[{
      name: "Redmond",
      type: "humanoid mammal",
      breed: "Ewok"
    }]
  });
});
//removing all videogames to replace games
db.Videogames.remove({}, function(err, videogames){
	if(err){
		console.log('Error:', err);}
	else{
		db.Videogames.create(videogames, function(err, videogames){
			if(err){
				console.log('Error:', err);}
			process.exit();
		});
	}
});

