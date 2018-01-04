// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    welcome_to_aarons_api: true,
    message: "Welcome to Aaron's api! Here's what you need to know!",
    documentation_url: "https://github.com/middtown/express-personal-api/blob/master/README.md",
    base_url: "https://nameless-journey-48917.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "videogame Enthusiest"},
      {method: "GET", path: "/api/videogames", description: "videogame list"},  
      {method: "POST", path: "/api/videogames/add", description: "Add your favorite videogames"},
      {method: "DELETE", path: "/api/videogames/:id", description: "Delete your least favorite videogame by id"},
      {method: "PUT", path: "/api/videogames/:id", description: "Update a videogame"},

    ]
  });
});


app.get('/api/videogames', function(req, res){
  db.Videogames.find(function(err, Videogames){
    if(err){res.send("error.",err);}
    res.json(Videogames);
  });
});

app.get('/api/videogames/:id', function(req, res){
  db.Videogames.findById(req.params.id, function(err, Videogames){
    if(err){res.send("error.",err);}
    res.json(Videogames);
  });
});

app.post('/api/videogames', function(req, res){
  db.Videogames.create(req.body, function(err, Videogames){
    if(err){res.send("error.",err);}
    res.json(Videogames);
  });
});

app.delete('/api/videogames/:id', function(req, res){
  db.Videogames.remove({_id: req.params.id},function(err, Videogames){
    if(err){res.send("error.",err);}
    res.json(Videogames);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
