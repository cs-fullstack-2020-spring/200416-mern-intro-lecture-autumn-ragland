let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send("GET REQ WORKS")
});

router.post('/', (req, res) => {
    res.send("POST REQ WORKS")
});

module.exports = router;