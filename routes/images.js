const router = require('express').Router();
var path = require('path');


router.route('/:id').get((req, res) => {
  /*Beer.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));*/
    res.sendFile( path.resolve( `./images/beers/${req.params.id}.jpg`));
    console.log("file : "+req.params.id+".jpg sent"+path.resolve( `./images/beers/${req.params.id}.jpg`));
});

module.exports = router;