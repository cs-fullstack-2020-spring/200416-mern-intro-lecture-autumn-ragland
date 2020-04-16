let express = require('express');
let app = express();
let port = 5000;

let api = require('./routes/api');
app.use('/api', api);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});