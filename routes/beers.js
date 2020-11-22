const router = require('express').Router();
const Beer = require('../models/beer.model');

router.route('/').get((req, res) => {
  Beer.find()
    .then(beers => res.json(beers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const rating = Number(req.body.rating);
    const type = req.body.type;
    const brewery =req.body.brewery;
    const abv =req.body.abv;


    const newBeer = new Beer({
      name,
      type,
      brewery,
      abv,
      description,
      rating
    });
  
    newBeer.save()
    .then(() => res.json('Beer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
/*
    //console.log(id);
    var fs = require('fs');

    fs.writeFile(`./images/beers/${newBeer._id}.jpg`, image.replace(/^data:image\/png;base64,/, "") ,'base64', (err) => {
      if (err) throw err;
      //console.log(image);
    });*/

  });
module.exports = router;