let express = require('express');
let router = express.Router();
router.use(express.json());

let MovieCollection = require('../models/MovieSchema');

router.get('/', (req, res) => {
    // res.send("GET REQ WORKS")
    MovieCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

router.post('/', (req, res) => {
    // res.send("POST REQ WORKS")
    MovieCollection.create(req.body, (errors, results)=> {
        errors ? res.send(errors) : res.send(results);
    })
});

module.exports = router;